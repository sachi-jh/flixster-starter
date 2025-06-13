import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/watched">Watched</Link>
          </li>
          <li>
            <Link to="/liked">Liked</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )

}

export default Navbar