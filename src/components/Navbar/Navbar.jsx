import styles from "./Navbar.module.css";

import logo from "../../logo.png";

import { useRef } from "react";

import { BsCart2 } from "react-icons/bs";
import {
  AiOutlineAlignRight,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  const ref = useRef();

  const show = () => {
    ref.current.classList.add(styles.show);
  };
  const hide = () => {
    ref.current.classList.remove(styles.show);
  };

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src={logo} alt="logo/png" />
            </div>
          </div>
          <div className={styles.middle}>
            <AiOutlineAlignRight onClick={show} className={styles.open} />
            <ul ref={ref}>
              <li className={styles.close}>
                <AiOutlineClose onClick={hide} />
              </li>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <a href="/login">
                  <AiOutlineUser />
                </a>
              </li>
              <li>
                <a href="/wishlist">
                  <AiOutlineHeart />
                </a>
              </li>
              <li className="position-relative">
                <span className={styles.cart_length}>{cart.length}</span>
                <a href="/cart">
                  <BsCart2 />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
