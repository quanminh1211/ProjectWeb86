import "./header.css";
import "boxicons";
const Header = () => {

  return (
    <div className="header">
      <div className="header-notification">
        <div className="header-notification__title">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="">Shop Now</a>
        </div>
        <select name="" id="">
          <option value="">English</option>
          <option value="">Vietnamese</option>
        </select>
      </div>
      <div className="header-body">
        <h1>Exclusive</h1>
        <div className="header-body__menu">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign up</li>
          </ul>
        </div>
        <div className="header-body__groupIcon">
        <div className="header-body__search">
          <input type="text" name="" id="" className="search-box__input" placeholder="What are you looking for ?" />
          <button className="search-box__button">
            <box-icon className="header-icon" name="search"></box-icon>
          </button>
        </div>
        <box-icon className="header-icon" name='heart' ></box-icon>
        <box-icon className="header-icon" name='cart-alt' ></box-icon>
        <box-icon name='user-circle' type='solid' ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default Header;
