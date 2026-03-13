import ProductCard, {type IProduct} from "@/components/ProductCard";
import {API_URL} from "@/constants/constants";

const SsgPage = async () => {
  const response = await fetch(API_URL)
  const products = await response.json() as IProduct[]

  return (
    <div>
      {products.map(product =>
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />)}
    </div>
  );
};

export default SsgPage;