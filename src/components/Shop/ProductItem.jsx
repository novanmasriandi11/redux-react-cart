import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartActions } from "../../store/cartSlice";

export default function ProductItem({ title, price, description, id }) {
   const dispatch = useDispatch();

   const addItemToCartHandler = () => {
      dispatch(cartActions.addItemToCart({
         id,
         title,
         price,
      }))
   }

   return (
      <li>
         <Card className="bg-red-500 text-white">
            <header className="flex justify-between items-baseline">
               <h3 className="my-2 text-xl font-bold text-black">{title}</h3>
               <div className="rounded-[30px] px-6 py-1 text-white text-xl bg-[#3A3A3A]">Rp. {price.toFixed(2)}</div>
            </header>
            <p className="text-white">{description}</p>
            <div className="flex justify-end">
               <button onClick={addItemToCartHandler} className="bg-transparent rounded-md px-4 py-1 border border-white text-white hover:text-white active:text-white transition-colors duration-300 ease-in-out hover:bg-gray-700 hover:border-black active:bg-red-800 active:border-red-800">Add to cart</button>
            </div>
         </Card>
      </li>
   )
}