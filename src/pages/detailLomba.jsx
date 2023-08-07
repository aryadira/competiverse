import { useParams } from "react-router-dom";
import { categories } from "../constants";
import { useState } from "react";

const DetailLomba = () => {
  const { kategori } = useParams();

  return <div>DetailLomba {kategori}</div>;
};

export default DetailLomba;
