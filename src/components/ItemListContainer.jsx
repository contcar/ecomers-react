import React from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import useFireStore from "../hooks/useFireStore";

export default function ItemListContainer({ categoryFilterBy }) {
  const [items, setItems] = useState([]);
  const { GetItems } = useFireStore();
  useEffect(() => {
    GetItems(categoryFilterBy).then((response) => {
      setItems(response);
    });
  }, [categoryFilterBy]);

  return <ItemList items={items}></ItemList>;
}
