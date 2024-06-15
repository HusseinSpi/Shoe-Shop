import "./Bill.css";

export const Bill = ({ shoes }) => {
  const estimatedDelivery = 50;
  const shoesPrice = () => {
    let shoesTotal = 0;
    shoes.forEach((shoe) => {
      shoesTotal += shoe.price;
    });
    return shoesTotal;
  };
  const subtotal = shoesPrice();
  const total = subtotal + estimatedDelivery;

  return (
    <div className="bill-container">
      <h2>Summary</h2>
      <div className="bill-item">
        <span>Subtotal</span>
        <span>₪{subtotal.toFixed(2)}</span>
      </div>
      <div className="bill-item">
        <span>Estimated Delivery & Handling</span>
        <span>
          {estimatedDelivery === 0
            ? "Free"
            : `₪${estimatedDelivery.toFixed(2)}`}
        </span>
      </div>
      <div className="bill-total">
        <span>Total</span>
        <span>₪{total.toFixed(2)}</span>
      </div>
      <button className="checkout-button guest">Guest Checkout</button>
      <button className="checkout-button member">Member Checkout</button>
      <button className="checkout-button paypal">
        <span className="PayDark">Pay</span>Pal
      </button>
    </div>
  );
};
