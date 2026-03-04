const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <img src="/icons/logo.svg" alt="" />
          </div>
          <div className="nav__list">
            <ul>
              <li>
                Home
                <img src="/icons/vector.svg" alt="" />
              </li>
              <li>
                About
                <img src="/icons/vector.svg" alt="" />
              </li>
              <li>
                Product <img src="/icons/vector.svg" alt="" />
              </li>
              <li>
                blog <img src="/icons/vector.svg" alt="" />
              </li>
              <li>
                shop <img src="/icons/vector.svg" alt="" />
              </li>
              <li>
                {" "}
                <a href="Tel:+998977555080">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="nav__items">
            <div className="nav__items-img">
              <img src="/icons/search.svg" alt="" />
            </div>
            <div className="nav__items-img">
              <img src="/icons/karzinka.svg" alt="" />
            </div>
            <div className="nav__items-img">
              <img src="/icons/user.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
