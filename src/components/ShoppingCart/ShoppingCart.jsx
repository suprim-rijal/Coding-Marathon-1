import { useState } from "react";
import Item from "./Item";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [tax, setTax] = useState("");
  const [availability, setAvailability] = useState("");
  const total =
    Number(subtotal) * Number(quantity) +
    (Number(subtotal) * Number(quantity) * Number(tax)) / 100;

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      name,
      brand,
      quantity,
      subtotal,
      tax,
      availability,
      total,
    };
    setItems([...items, newItem]);
    setName("");
    setBrand("");
    setQuantity("");
    setSubtotal("");
    setTax("");
    setAvailability("In stock");
  }

  function deleteItem(indexToDelete) {
    setItems(items.filter((item, index) => index !== indexToDelete));
  }

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <form className="shopping-cart-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Subtotal"
          value={subtotal}
          onChange={(e) => setSubtotal(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Tax %"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
          required
        />
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="In stock">In stock</option>
          <option value="Out of stock">Out of stock</option>
        </select>

        <p>Total: €{total.toFixed(2)}</p>
        <button type="submit">Add to Cart</button>
      </form>
      <div>
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            brand={item.brand}
            quantity={item.quantity}
            subtotal={item.subtotal}
            tax={item.tax}
            availability={item.availability}
            total={item.total}
            onDelete={() => deleteItem(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
