import { getAuth } from "firebase/auth";

const DebugToken = () => {
  const handleGetToken = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("Not signed in");
      return;
    }

    const token = await user.getIdToken();
    console.log("🔥 Firebase ID Token:", token);
    alert("Token copied to console. Copy it for Postman.");
  };

  return (
    <button onClick={handleGetToken} className="p-2 bg-blue-500 text-white rounded">
      Get Firebase Token
    </button>
  );
};

export default DebugToken;
