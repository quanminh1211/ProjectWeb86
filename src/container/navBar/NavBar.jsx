import './NavBar.css'
import 'boxicons'

const NavBar = () => {
    return(
        <div className='navBar'>
            <ul>
                <li>Woman’s Fashion <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
                <li>Men’s Fashion <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
                <li>Electronics <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
                <li>Home & Lifestyle <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
                <li>Medicine <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
                <li>Sports & Outdoor <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
                <li>Baby’s & Toys <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
                <li>Groceries & Pets <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li> 
                <li>Health & Beauty <box-icon className="navBar-icon" name='chevron-right' ></box-icon></li>
            </ul>
        </div>
    )
}

export default NavBar