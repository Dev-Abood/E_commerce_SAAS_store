import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductsList from "@/components/products-list";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const products = await getProducts({
    categoryId: product[0].category.id,
  });
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-7 px-6 py-4">
        <Gallery product={product[0]} />
        <Info product={product[0]} />
      </div>
      <Separator className="my-5" />
      <div className="px-6 py-4">
        <ProductsList title="Related items" data={products} />
      </div>
    </Container>
  );
};

export default ProductPage;
