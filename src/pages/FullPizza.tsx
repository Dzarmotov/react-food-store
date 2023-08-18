import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components";

type FullPizza = {
  imageUrl: string,
  title: string,
  price: string
}

const FullPizza: React.FC = () => {
  const [fullPizza, setFullPizza] = React.useState<FullPizza>();
  const [isLoading, setIsLoading] = React.useState(false);
  const { id } = useParams();

  const fetchFullPizza = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://10ecbbd119910171.mokky.dev/items/${id}`
      );
      setFullPizza(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchFullPizza();
  }, []);

  return (
    <div className="container">
      {isLoading
        ? [...Array(1)].map((_, index) => <Skeleton key={index} />)
        : fullPizza && (
            <div style={{textAlign: "center"}} >
              <img src={fullPizza.imageUrl} className="pizza-block__image" />
              <h1 className="pizza-block__title">{fullPizza.title}</h1>
              <h4 className="pizza-block__price">{ fullPizza.price } ₽</h4>
            </div>
          )}
    </div>
  );
};

export default FullPizza;
