import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
export const Products = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setList(json));
  };
  console.log(list);
  return <div className="prodList">{list.map((e, i) => <div key={i}>
      <img src={e.image} alt="product" className="img" />
      <h4>{e.title}<br/> Price : {e.price}</h4>
      <button><Link to={`/products/${e.id}`}>More Info</Link></button>
  </div>)}</div>;
};
