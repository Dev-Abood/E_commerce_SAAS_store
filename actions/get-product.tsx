import { Product } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product[]> => {
  const url = `${URL}/${id}`;

  const res = await axios.get(url);

  return res.data;
};

export default getProduct;
