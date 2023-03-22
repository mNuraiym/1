import {Link,NavLink} from "react-router-dom";




export default function NavBar () {
    return (
        <ul style={{display: 'flex',listStyleType: 'none'}}>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/" className="link">Main page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/about"  className="link">About page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/blogs"  className="link">Blogs page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/info"  className="link">Info page</NavLink>
            </li>
            <li>
                <NavLink to="/login"  className="link">Sign in</NavLink>
            </li>
        </ul>
    )        
}