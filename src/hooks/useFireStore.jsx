import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import db from "../configuration/FireStore";

const useFireStore = () => {
  const GetItems = async (categoryId) => {
    try {
      const itemsCollection = collection(db, "items");
      let documents = null;
      if (!categoryId) documents = await getDocs(itemsCollection);
      else {
        const q = query(
          itemsCollection,
          where("categories", "array-contains", categoryId)
        );
        documents = await getDocs(q);
      }

      if (documents.size === 0) {
        console.log("No results!");
      }

      const response = documents.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const GetItemById = async (itemId) => {
    try {
      const document = doc(db, "items", itemId);
      const documentResponse = await getDoc(document);
      if (documentResponse.size === 0) {
        console.log("No existe dicho documento!");
      }
      return { id: documentResponse.id, ...documentResponse.data() };
    } catch (error) {
      console.log(error);
    }
  };

  const GenerateOrder = async ({ order }) => {
    try {
      const col = collection(db, "orders");
      const todayDate = new Date();
      const orderToPersist = {
        ...order,
        date: `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`,
      };
      const response = await addDoc(col, orderToPersist);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { GetItems, GetItemById, GenerateOrder };
};

export default useFireStore;
