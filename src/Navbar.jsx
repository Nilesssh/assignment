import { NavLink } from "react-router-dom";
import Logout from "./Logout.jsx"
import SignInButton from './SignInButton.jsx';

export default function Navbar(props) {
  const onClickLoginBtn = props.onClickLoginBtn;
 

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',   
    gap: '10px'
  };

  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-brand">
        Assesment
      </NavLink>
      <ul style={containerStyle}>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/userlist"
          >
            Users List
          </NavLink>
        </li>
        <li>
         {sessionStorage.getItem("loggedIn") ? <Logout /> : <SignInButton onClickLoginBtn={onClickLoginBtn}/>}
        </li>
      </ul>
    </nav>
  );
}
