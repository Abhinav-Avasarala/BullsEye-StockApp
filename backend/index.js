const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { admin } = require('./firebaseAdmin');
const portfolioRoutes = require('./routes/portfolio');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 🔐 Firebase Auth middleware
const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Missing or invalid authorization header');
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).send('Invalid or expired token');
  }
};

// ✅ Mount routes with auth
app.use('/portfolio', verifyFirebaseToken, portfolioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
