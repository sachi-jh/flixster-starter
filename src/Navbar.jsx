import { Outlet, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from "react";

const Navbar = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleSideBar = () => {
      setShowSideBar(!showSideBar)
    }

    return (
      <i class="fa-solid fa-bars " onClick={toggleSideBar}>
      {showSideBar && 
      <Sidebar className="hamburger-content">
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}> Home</MenuItem>
          <MenuItem component={<Link to="/watched" />}> Watched</MenuItem>
          <MenuItem component={<Link to="/liked" />}> Liked</MenuItem>
        </Menu>
      </Sidebar>}
      </i>
  )

}

export default Navbar