import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
   { id: '0001', price: 700, title: 'Smartwatch', description: 'The strongest smartwatch' },
   { id: '0002', price: 900, title: 'Smartband', description: 'The compact smartband' },
   { id: '0003', price: 1100, title: 'Smartshoes', description: 'The comfortable smartshoes' },
   { id: '0004', price: 1300, title: 'Smart-toothbrush', description: 'The cleanest smart tooth brush' },
];
export default function Product() {
   return (
      <section>
         <h2 className="text-white my-8 mx-auto text-center uppercase">Buy your favorite products.</h2>
         <ul className="list-none m-0 p-0">
            {DUMMY_PRODUCTS.map((product) => (
               <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
               />
            ))}
         </ul>
      </section>
   )
}