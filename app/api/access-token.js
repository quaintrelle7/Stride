// pages/api/exchange-id-token.js
import { getAccessTokenFromIdToken } from '../../utils/googleAuth'; // The function we defined earlier

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id_token } = req.body;

    try {
      const accessToken = await getAccessTokenFromIdToken(id_token);
      res.status(200).json({ accessToken });
    } catch (error) {
      res.status(500).json({ error: 'Failed to exchange ID token for access token' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
