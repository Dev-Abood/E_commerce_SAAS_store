import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductsList from "@/components/products-list";
import Filter from "./_components/filter";
import MobileFilter from "./_components/mobile-filter";
import PreviewModal from "@/components/ui/preview-modal";

interface CategoryPageProps {
  params: { categoryId: string };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  return (
    <div>
      <Container>
        <PreviewModal />
        <Billboard data={category.billboard} />
        <div className="p-8 grid lg:grid-cols-5 gap-x-8">
          <div className="lg:hidden">
            <MobileFilter sizes={sizes} colors={colors} />
          </div>
          <div className="hidden lg:block col-span-1">
            <Filter data={sizes} title="Sizes" valueKey="sizeId" />
            <Filter data={colors} title="Colors" valueKey="colorId" />
          </div>
          <div className="col-span-4">
            <ProductsList data={products} title="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
