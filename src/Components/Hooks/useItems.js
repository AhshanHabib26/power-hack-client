import { useEffect, useState } from "react";

const useItems = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://power-hack-26.herokuapp.com/data-list")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  return [product, setProduct];
};

export default useItems;
