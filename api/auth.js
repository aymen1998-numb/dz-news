module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD || 'dzanalytica2026';
  
  if (password === adminPassword) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, error: 'Incorrect password' });
  }
};
