const express = require('express');
const router = express.Router();
const { db } = require('../firebaseAdmin');

// POST /portfolio/addStockToPortfolio
router.post('/addStockToPortfolio', async (req, res) => {
  const userId = req.user.uid;
  const { stockSymbol } = req.body;

  if (!stockSymbol) return res.status(400).send('Missing stockSymbol');

  try {
    await db
      .collection('users')
      .doc(userId)
      .collection('portfolio')
      .doc(stockSymbol)
      .set({
        addedAt: new Date(),
      });

    res.status(200).json({ success: true, message: 'Stock added to portfolio' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to add stock');
  }
});

// DELETE /portfolio/deleteStockFromPortfolio
router.delete('/deleteStockFromPortfolio', async (req, res) => {
  const userId = req.user.uid;
  const { stockSymbol } = req.body;

  if (!stockSymbol) return res.status(400).send('Missing stockSymbol');

  try {
    await db
      .collection('users')
      .doc(userId)
      .collection('portfolio')
      .doc(stockSymbol)
      .delete();

    res.status(200).json({ success: true, message: 'Stock removed from portfolio' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to delete stock');
  }
});

module.exports = router;
