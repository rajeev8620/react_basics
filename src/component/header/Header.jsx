import './header.css';
import {Router,Route,Link} from "react-router-dom";
import PropTypes from 'prop-types';
export default function Header({showLinks}) {
    console.log('inside header',showLinks);
    return (
        <div className="header">
            {showLinks && (<Links/>)}
        </div>
    )
}
const Links =() =>{
    return (
        <ul class="navigation">
        <li><Link to="/" activeClassName="active">Login</Link></li>
        <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
        </ul>
    );
}
Header.defaultProps={
    showLinks: false
}
Header.propTypes = {
    showLinks: PropTypes.bool
};
