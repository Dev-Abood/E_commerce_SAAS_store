import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductsList from "@/components/products-list";
import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });

  const billboardData = await getBillboard(
    "443758d5-023e-4048-b740-795f9ee63302"
  );
  const billboard = billboardData[0];
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-6 lg:px-8">
          <ProductsList data={products} title="Featured products" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
