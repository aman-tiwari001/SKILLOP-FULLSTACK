import React from "react";
import "./TopBar.css";
import { useNavigate } from "react-router-dom";

const TopBar = ({ setShowPostPopUp }) => {
  const navigate = useNavigate();
  const createPost = () => {
    setShowPostPopUp(true);
  };

  const loginClicked = () => {
    navigate("/login");
  };
  const signupClicked = () => {
    navigate("/signup");
  };

  return (
    <div className="tb-container ">
      <div>
        <img src="/skillop-logo.png" alt="logo" className="w-10" />
        <h2>SKILLOP</h2>
      </div>
      {window.location.pathname === "/homepage" && (
        <button id="create-post" onClick={createPost}>
          + Create Post
        </button>
      )}
      {window.location.pathname === "/" && (
        <div className="flex gap-5">
          <button
            className="py-2 px-9 rounded-xl text-sm font-bold shadow-md bg-[#FFB800] md:px-3"
            onClick={signupClicked}
          >
            Sign up
          </button>
          <button
            className="border-2 border-black py-2 px-9 rounded-xl text-sm font-bold md:px-3"
            onClick={loginClicked}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default TopBar;
