import db from "../configuration/FireStore";
import {collection, getDocs, query, where, getDoc, doc} from 'firebase/firestore'

export const GetItems = async (categoryId) =>{
  const itemsCollection = collection(db, 'items');
  let documents = null;
  if(!categoryId)
    documents = await getDocs(itemsCollection);
  else{
    const q = query(itemsCollection, where("categories", "array-contains", categoryId));
    documents = await getDocs(q);
  }

  if(documents.size === 0){
    console.log("No results!")
  }

  const response = documents.docs.map((doc)=> {return {id: doc.id, ...doc.data()}});
  return response;
}

export const GetItemById = async (itemId) =>{
  const document = doc(db, "items", itemId);
  const documentResponse = await getDoc(document);
  if(documentResponse.size === 0){
    console.log("No existe dicho documento!")
  }
  return {id: documentResponse.id, ... documentResponse.data()};
}
  
