import React from "react";
import {NavLink, Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { checkIsAuth, logout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";


const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
const activeStyle = {
  color: "white",
}
const dispatch = useDispatch()

const logoutHandler = () => {
  dispatch(logout())
  window.localStorage.removeItem("token")
  toast("Ви вийшли з системи!")
}




  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm ">
        e
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-xs text-gray-400 hover:text-white"
              to="/"
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-xs text-gray-400 hover:text-white"
              to="posts"
            >
              Мої пости
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="text-xs text-gray-400 hover:text-white"
              to="new"
            >
              Додати пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-1">
        {isAuth ? <button onClick={logoutHandler}>Вийти</button> : <Link to={"/login"}>Ввійти </Link>}
      </div>
    </div>
  );
};

export default Navbar;
