import React, { useRef } from "react";
import styles from "./Sidebar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidCheese, BiSolidDrink } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { LuCandy, LuDessert } from "react-icons/lu";
import { GiFruitBowl, GiMeat } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
  // Active Class On Links
  const navLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#e4e4d0" : "#aec3ae",
    };
  };

  const sidebar = useRef();

  function show_hide() {
    sidebar.current.classList.toggle(styles.show_hide);
  }

  return (
    <div ref={sidebar} className={styles.sidebar}>
      <div onClick={show_hide} className={styles.icon_open_close}>
        <AiOutlineMenu />
      </div>

      <h3>market categories</h3>

      <div className="sidebar_categories">
        <ul>
          <li>
            <NavLink style={navLinkStyle} to="/shop/vegetables">
              <FaBowlFood />
              <span> vegetables </span>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop/fruits">
              <GiFruitBowl />
              <span> fruits </span>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop/beverages">
              <MdEmojiFoodBeverage />
              <span> beverages </span>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop/dairy">
              <BiSolidDrink />
              <span> dairy </span>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop/desserts">
              <LuDessert /> <span>desserts </span>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop/meat">
              <GiMeat />
              <span> meat </span>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop/snacks">
              <LuCandy />
              <span> snacks </span>
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop/cheese">
              <BiSolidCheese />
              <span> cheese </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
