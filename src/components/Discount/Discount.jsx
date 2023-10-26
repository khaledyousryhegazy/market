import React, { useContext } from "react";
import styles from "./Discount.module.css";
import { AiFillHeart } from "react-icons/ai";
import { productsContext } from "../../context/ProductsContext";
import { useDispatch } from "react-redux";
import { add } from "../../redux-toolkit/slices/cartSlice";
import { addToWishList } from "../../redux-toolkit/slices/wishListSlice";

function Discount() {
  const data = useContext(productsContext);

  const dispatch = useDispatch();

  return (
    <div className={styles.discount}>
      <div className="container position-relative">
        <div className={styles.cards}>
          {!data.isLoading ? (
            data.products.discount.map((product) => {
              return (
                <div
                  key={product.id}
                  className="card w-100 h-100 position-relative border-0"
                >
                  <AiFillHeart
                    onClick={() => {
                      dispatch(addToWishList(product));
                    }}
                    className={styles.wish_list_heart}
                  />
                  <span className={styles.product_discount}>
                    {product.discount}
                  </span>
                  <img
                    className="card-img-top"
                    src={product.image_url}
                    alt="product/png"
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title fs-5">{product.name}</h5>
                    <p className="card-text d-flex justify-content-between align-items-center">
                      Price : <span>{product.price} EGP</span>
                    </p>
                    <button
                      onClick={() => {
                        dispatch(add(product));
                      }}
                      className=" btn btn-success"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              className="spinner-border text-success position-absolute"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discount;
