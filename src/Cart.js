import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  //we are getting props from react and it has products.
  const { products } = props;
  //return some jsx
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}

            //    func={()=> console.log('sdsd')}
            //    islogged={false}
            //    jsx={<h1>Test</h1>}
          />
        );
      })}
    </div>
  );
};

export default Cart;
