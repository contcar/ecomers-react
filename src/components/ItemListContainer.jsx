import React from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import ItemsService from "../js/ItemsService";
import { useState } from "react";

export default function ItemListContainer({ categoryFilterBy }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    ItemsService.GetItems(categoryFilterBy).then((response) => {
      setItems(response);
    });
  }, [categoryFilterBy]);

  return <ItemList items={items}></ItemList>;
}
