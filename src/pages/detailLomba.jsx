import { useParams } from "react-router-dom";
import { categories } from "../constants";
import { useState } from "react";

const DetailLomba = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  console.log(id);

  categories.map((category) => {
    setDetail(category);
  });

  return <div>{detail}</div>;
};

export default DetailLomba;
