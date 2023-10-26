import React from "react";
import styles from "./WishList.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux-toolkit/slices/cartSlice";
import { removeFromWishList } from "../../redux-toolkit/slices/wishListSlice";

function WishList() {
  const wishlist = useSelector((state) => state.wishList);

  const dispatch = useDispatch();

  return (
    <div className={styles.wishList}>
      <div className="container">
        {wishlist.map((product) => {
          return (
            <div key={product.id} className={styles.wish_line}>
              <img src={product.image_url} alt="" />
              <h5>{product.name}</h5>
              <div className={styles.total_price}>
                <span>Price: {product.price} EGP</span>
              </div>
              <div className={styles.buttons}>
                <div
                  onClick={() => {
                    dispatch(add(product));
                  }}
                  className={styles.add_to_cart}
                >
                  <FaCartPlus />
                </div>
                <div
                  onClick={() => {
                    dispatch(removeFromWishList(product));
                  }}
                  className={styles.delete}
                >
                  <RiDeleteBin6Fill />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
