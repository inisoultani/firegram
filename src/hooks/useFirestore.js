import { useState, useEffect } from 'react';
import { projectFireStore } from '../firebase/config';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collectionName)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        // console.log(snap);
        snap.forEach((doc) => {
          // console.log(doc.data());
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    // clean up
    return () => unsub();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
