function Item({
  name,
  brand,
  quantity,
  subtotal,
  tax,
  availability,
  total,
  onDelete,
}) {
  return (
    <div className="shopping-cart-item">
      <p>Name: {name}</p>
      <p>Brand: {brand}</p>
      <p>Quantity: {quantity}</p>
      <p>Subtotal: €{subtotal}</p>
      <p>Tax: {tax}%</p>
      <p>Availability: {availability}</p>
      <p>Total: €{Number(total).toFixed(2)}</p>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Item;
