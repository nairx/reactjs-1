import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <h1>My Store</h1>
      <ul>
        <li>
          <Link to="/">App1</Link>
        </li>
        <li>
          <Link to="/app2">App2</Link>
        </li>
        <li>
          <Link to="/app3">App3</Link>
        </li>
        <li>
          <Link to="/app4">App4</Link>
        </li>
        <li>
          <Link to="/app5">App5</Link>
        </li>
        <li>
          <Link to="/app6">App6</Link>
        </li>
        <li>
          <Link to="/app7">App7</Link>
        </li>
        <li>
          <Link to="/app8">App8</Link>
        </li>
        <li>
          <Link to="/app9">App9</Link>
        </li>
        <li>
          <Link to="/app10">App10</Link>
        </li>
        <li>
          <Link to="/app11">App11</Link>
        </li>
        <li>
          <Link to="/app12">App12</Link>
        </li>
        <li>
          <Link to="/app13">App13</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
