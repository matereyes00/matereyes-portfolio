// FIX: Import only the core 'firebase-admin' module
const admin = require("firebase-admin");

const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// FIX: Corrected path for service account key (assumes file is in project root)
const serviceAccount = require("../serviceKey.json");

// REMOVED: firebaseConfig (client-side keys)

// FIX: Initialize the app with the Admin SDK credentials (cert)
const app = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
});

// FIX: Get the Firestore instance using the legacy Admin SDK access method
const db = admin.firestore();

// Function to delete all documents in a collection
const deleteCollection = async (collectionName) => {
	// FIX: Access collection using the method chaining style: db.collection()
	const collectionRef = db.collection(collectionName);

	// FIX: For simple 'get all', the collection reference is the query object. Use .get() method.
	const querySnapshot = await collectionRef.get();

	if (querySnapshot.empty) {
		console.log(`Collection '${collectionName}' is already empty.`);
		return;
	}

	const deletePromises = [];
	querySnapshot.forEach((doc) => {
		// FIX: Delete the document using the .delete() method on the doc reference
		deletePromises.push(doc.ref.delete());
	});

	await Promise.all(deletePromises);
	console.log(`Successfully deleted all documents from '${collectionName}'.`);
};

const uploadJsonToFirestore = async (filePath, collectionName) => {
	try {
		// First, delete all existing documents to prevent duplicates
		await deleteCollection(collectionName);

		const absolutePath = path.resolve(__dirname, filePath);
		const fileContent = fs.readFileSync(absolutePath, "utf8");
		const data = JSON.parse(fileContent);

		// FIX: Access collection using the method chaining style: db.collection()
		const collectionRef = db.collection(collectionName);

		for (const item of data) {
			// FIX: Add document using the .add() method on the collection reference
			await collectionRef.add(item);
			console.log(`Added document to ${collectionName}: ${item.title}`);
		}
		console.log(
			`\nSuccessfully uploaded all data from ${filePath} to the '${collectionName}' collection!\n`
		);
	} catch (error) {
		console.error(`Error uploading ${filePath}:`, error);
	}
};

const runUploads = async () => {
	// Upload both collections
	// await uploadJsonToFirestore('projects.json', 'projects');
	await uploadJsonToFirestore("miniProjects.json", "miniProjects");
	// await uploadJsonToFirestore("about.json", "about");
	process.exit(0); // Exit the script when done
};

runUploads();
