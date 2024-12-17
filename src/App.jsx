import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import TenisNike from "./assets/tenisnike.jpg";
import Nikefit from "./assets/nikefit.jpg";
import Casio from "./assets/casio.jpg";
import SamsungS23 from "./assets/s23.jpg";
import Bluetooth from "./assets/fonebluetooth.jpg";
import Cafeteira from "./assets/Cafeteira.jpg";


function App() {

  const products = [
    {
     id: 1,
     image: TenisNike,
     title: 'Tênis Nike Air Max',
     description: 'Tênis esportivo com amortecimento máximo.',
     price: '399.99',
    },
    {
     id: 2,
     image: Nikefit,
     title: 'Camiseta Nike Dri-FIT',
     description: 'Camiseta esportiva para alta performance.',
     price: '199.99',
    },
    {
     id: 3,
     image: Casio,
     title: 'Relógio Casio Edifice',
     description: 'Relógio digital com cronômetro e alarme.',
     price: '299.99',
    },
    {
     id: 4,
     image: SamsungS23,
     title: 'Smartphone Samsung Galaxy S23',
     description: 'Smartphone com tela AMOLED e câmera de alta resolução.',
     price: '5999.99',
    },
    {
     id: 5,
     image: Bluetooth,
     title: 'Fone de Ouvido Bluetooth',
     description: 'Fone de ouvido sem fio com cancelamento de ruído.',
     price: '499.99',
    },
    {
     id: 6,
     image: Cafeteira,
     title: 'Cafeteira Nespresso Inissia',
     description: 'Cafeteira compacta e prática para preparar cápsulas.',
     price: '899.99',
    },
   ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((product) => (
     <ProductCard key={product.id} {...product} />
    ))}
   </div>
  </div>
  </div>
  );
}

export default App;