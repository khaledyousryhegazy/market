import styles from "./Cart.module.css";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux-toolkit/slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const total = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className={styles.cart}>
      <div className="container">
        <div className={styles.box}>
          <span>
            Total : <span>{total} EGP</span>
          </span>
          <button className="btn btn-success">Buy</button>
        </div>

        {cart.map((product) => {
          return (
            <div key={product.id} className={styles.cart_line}>
              <img src={product.image_url} alt="" />
              <h5>{product.name}</h5>
              <div className={styles.total_price}>
                <span>Quantity : {product.quantity} </span>
                <span>Price: {product.price} EGP</span>
              </div>
              <div
                onClick={() => dispatch(remove(product))}
                className={styles.delete}
              >
                <RiDeleteBin6Fill />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
