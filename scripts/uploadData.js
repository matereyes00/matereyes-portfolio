const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, addDoc, deleteDoc, query } = require("firebase/firestore");
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to delete all documents in a collection
const deleteCollection = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log(`Collection '${collectionName}' is already empty.`);
    return;
  }

  const deletePromises = [];
  querySnapshot.forEach((doc) => {
    deletePromises.push(deleteDoc(doc.ref));
  });

  await Promise.all(deletePromises);
  console.log(`Successfully deleted all documents from '${collectionName}'.`);
};

const uploadJsonToFirestore = async (filePath, collectionName) => {
  try {
    // First, delete all existing documents to prevent duplicates
    await deleteCollection(collectionName);

    const absolutePath = path.resolve(__dirname, filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    const data = JSON.parse(fileContent);

    const collectionRef = collection(db, collectionName);

    for (const item of data) {
      await addDoc(collectionRef, item);
      console.log(`Added document to ${collectionName}: ${item.title}`);
    }
    console.log(`\nSuccessfully uploaded all data from ${filePath} to the '${collectionName}' collection!\n`);
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
  }
};

const runUploads = async () => {
  // Upload both collections
  // await uploadJsonToFirestore('projects.json', 'projects');
  await uploadJsonToFirestore('miniProjects.json', 'miniProjects');
  process.exit(0); // Exit the script when done
};

runUploads();