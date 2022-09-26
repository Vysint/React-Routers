import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h2>The Products Page</h2>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Plane</Link>
        </li>
        <li>
          <Link to="/products/p3">Table</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
