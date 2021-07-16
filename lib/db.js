const admin = require('firebase-admin')
import { fromBase64 } from "./base64"
const { GeoFirestore } = require('geofirestore')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: fromBase64(process.env.FIREBASE_PRIVATE_KEY)
    }),
  })
}

const firestore = admin.firestore()
const db = new GeoFirestore(firestore)

module.exports = {
  db
}