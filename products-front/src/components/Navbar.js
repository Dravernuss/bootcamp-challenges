import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="products">Products</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
