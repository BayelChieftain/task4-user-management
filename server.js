const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./user-management-f931a-594254e73733.json');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_ID_PROJECT,
});

app.use(cors());


app.get('/api/users', async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map((userRecord) => ({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      lastSignInTime: userRecord.metadata.lastSignInTime,
    }));

    console.log('List of users:', users);
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default app;
