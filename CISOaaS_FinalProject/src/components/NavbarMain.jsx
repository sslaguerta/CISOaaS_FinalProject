import React from "react";

const NavbarMain = () => {
  return (
    <>
      <nav className="header w-100 d-flex justify-content-end align-items-center px-4 py-2 gap-3">
        <div className="me-auto">
          <img src="logo-ciso.png" alt="" />
        </div>
        <div>
          <input
            className="rounded-pill p-2"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Search"
          />
        </div>
        <div className="user-img-div">
          <img
            className="image-fluid rounded-circle"
            src="user-img.jpg"
            alt="user image"
          />
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
