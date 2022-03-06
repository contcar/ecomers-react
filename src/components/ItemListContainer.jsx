import React from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { GetItems } from "../services/ItemsService";
import { useState } from "react";

export default function ItemListContainer({ categoryFilterBy }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    GetItems(categoryFilterBy).then((response) => {
      setItems(response);
    });
  }, [categoryFilterBy]);

  return <ItemList items={items}></ItemList>;
}
