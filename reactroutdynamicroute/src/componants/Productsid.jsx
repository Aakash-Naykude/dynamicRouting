import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import "./Products.css";
export const ProductsDet = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setList(json));
  };
  console.log(list);
  return (
    <div>
      <img className="image" src={list.image} alt="imag" />
      <h1>{list.title}<br/>{list.price}</h1>
      <h3 style={{width:"70%", marginLeft:"15%"}}>{list.description}</h3>
      <button><Link to={`/products`}>Back to shopping</Link></button>
    </div>
  );
};
