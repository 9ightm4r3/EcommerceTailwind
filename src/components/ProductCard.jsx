import { useEffect, useState } from "react";

function ProductCard({ image, title, description, price }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.disconnect();
        }
      },
      { threshold: 0.2 } 
    );

    const element = document.getElementById(title);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [title]);

  return (
    <div
      id={title}
      className={`max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img className="rounded-t-lg" src={image} alt={title} />
      <div className="p-5 grid grid-cols-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between">
          <span className="text-gray-900 dark:text-white">R$ {price}</span>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
   
   export default ProductCard;
   