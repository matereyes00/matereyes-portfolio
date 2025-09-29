import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'; // Make sure this path to your firebase config is correct

/**
 * A custom hook to fetch a collection from Firestore.
 * @param {string} collectionName The name of the collection to fetch.
 * @returns {{data: Array, loading: boolean}} The collection data and loading state.
 */
export const useFirestoreCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const docsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(docsData);
      } catch (error) {
        console.error(`Error fetching ${collectionName}: `, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]); // Re-run the effect if the collectionName changes

  return { data, loading };
};
