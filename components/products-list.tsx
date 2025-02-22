import { Product } from "@/types";
import NoResult from "./ui/no-result";
import ProductCard from "./ui/product-card";

interface ProductsListProps {
  title: string;
  data: Product[];
}

const ProductsList = ({ title, data }: ProductsListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-2xl sm:text-3xl">{title}</h3>
      {data.length === 0 && <NoResult message="No results found." />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
