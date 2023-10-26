import { useDispatch } from "react-redux";
import styles from "./Card.module.css";
import { AiFillHeart } from "react-icons/ai";
import { add } from "../../redux-toolkit/slices/cartSlice";
import { addToWishList } from "../../redux-toolkit/slices/wishListSlice";

function Card(props) {
  const dispatch = useDispatch();

  const data = props.data;
  const product = props.product;
  return (
    <div className="container">
      <div className={styles.cards}>
        {!data.isLoading ? (
          product.map((product) => {
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
                    onClick={() => dispatch(add(product))}
                    className="btn"
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
  );
}

export default Card;
