import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((i) => [...i, item]); // gọi callback i
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); //nếu trả về true thì giữ lại fasle bỏ đi
  }

  function handlToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confimed = window.confirm(
      "Are you sure you want to delete all item?"
    );
    if (confimed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        item={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handlToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
