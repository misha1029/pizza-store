import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get(
          "https://629e5534c6ef9335c0b320e7.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch {
        alert("Error");
        navigate("/");
      }
    }
    fetchPizzas();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} grn</h4>
    </div>
  );
};
