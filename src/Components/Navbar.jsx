import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  var [cartItems, setCartItems] = useContext(CartContext);
  return (
    <>
      <div className={styles.navBarContainer}>
        <div className={styles.navbar}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/products" className={styles.link}>
            Products
          </Link>
          <Link to="/about" className={styles.link}>
            About
          </Link>
          <Link to="/admin" className={styles.link}>
            Admin
          </Link>
        </div>
        <div className={styles.navbarTwo}>
          <Link to="account" className={styles.link}>
            Account
          </Link>
          <Link to="search" className={styles.link}>
            Search
          </Link>
          <Link to="cart" className={styles.link}>
            <ShoppingCartIcon />
          </Link>
          <span
            style={{
              border: "3px solid grey",
              borderRadius: "50%",
              height: "20px",
              width: "20px",
              padding: "5px",
              marginLeft: "-30px",
              marginTop: "-10px"
            }}
          >
            <h3> {cartItems.length} </h3>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
