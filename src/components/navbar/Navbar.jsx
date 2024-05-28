import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.CARTS.cartList);
  const [cartDatas, setCartDatas] = useState([]);
  useEffect(() => {
    setCartDatas(cartList);
  }, [cartList]);

  const toggleMenu = () => {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".navigation-menu");

    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  };

  const navigateToSignIn = () => {
    navigate("/signIn");
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0">
      <div className="container mx-auto px-4 md:flex items-center justify-between gap-6">
        <div className="flex items-center justify-between md:w-auto w-full">
          <a href="#" className="flex items-center py-5 px-2 text-white flex-1">
            <span className="font-bold text-2xl shadow-sm">My logo here</span>
          </a>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <IoMenu className="text-2xl" />
            </button>
          </div>
        </div>
        {/* Primary Navigation */}
        <div className="hidden md:flex md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0 navigation-menu">
          <Link
            to="/"
            className="py-2 px-3 block hover:text-slate-300 transition hover:duration-150 hover:ease-in-out"
          >
            Home
          </Link>
          <a href="#" className="py-2 px-3 block hover:text-slate-300">
            Order
          </a>
          {/*  Dropdown Menu */}

          <Link
            to="/cart"
            className="relative py-2 px-3 block hover:text-slate-300"
          >
            <FaShoppingCart className="text-xl" />
            {cartDatas.length > 0 && (
              <span
                className="bg-red-700 -top-2 left-5 text-white 
              text-sm font-medium me-2 px-2.5 py-0.5 rounded-full
              absolute"
              >
                {cartDatas.length > 9 ? "9+" : cartDatas.length}
              </span>
            )}
          </Link>
          <div>
            <button
              onClick={navigateToSignIn}
              className="bg-transparent hover:bg-green-900
              text-slate-300 font-semibold
              hover:text-white py-2
              px-4 border border-green-900
              hover:border-transparent rounded"
            >
              Sign in{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
