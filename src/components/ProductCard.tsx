import Image from "next/image";

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard = ({id, title, image, price}: IProduct) => {
  return (
    <div className="w-64 border border-black/10 dark:border-white/10 rounded-xl p-4 hover:shadow transition">
      <Image
        className="object-contain mb-3 rounded"
        width={100}
        height={40}
        src={image}
        alt={title}
        />
      <h2 className="text-sm text-black dark:text-white font-medium line-clamp-2 mb-1">
        {title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        ${price}
      </p>
    </div>
  );
};

export default ProductCard;