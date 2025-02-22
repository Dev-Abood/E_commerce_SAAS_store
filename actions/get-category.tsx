import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const url = `${URL}/${id}`;

  const res = await axios.get(url);

  return res.data[0];
};

export default getCategory;
