// scripts/uploadData.js
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
const fs = require('fs');
const path = require('path');

// IMPORTANT: You must configure dotenv to find your .env file
// in the root directory.
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to upload a JSON file to a specific collection
const uploadJsonToFirestore = async (filePath, collectionName) => {
  try {
    const absolutePath = path.resolve(__dirname, filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    const data = JSON.parse(fileContent);

    const collectionRef = collection(db, collectionName);

    for (const item of data) {
      await addDoc(collectionRef, item);
      console.log(`Added document to ${collectionName}: ${item.title}`);
    }
    console.log(`\nSuccessfully uploaded all data from ${filePath} to ${collectionName} collection!\n`);
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
  }
};

// Main function to run the uploads
const runUploads = async () => {
  await uploadJsonToFirestore('projects.json', 'projects');
  await uploadJsonToFirestore('miniProjects.json', 'miniProjects');
  process.exit(0); // Exit the script when done
};

runUploads();