import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice";

export default function CartItem({ title, quantity, total, price, id }) {
   const dispatch = useDispatch();

   const addItemHandler = () => {
      dispatch(cartActions.addItemToCart({
         id,
         title,
         price,
         quantity,
         total,
      }));
   }

   const removeItemHandler = () => {
      dispatch(cartActions.removeItemFromCart(id));
   }

   return (
      <li className="my-4 mx-0 px-4 py-4 bg-red-400">
         <header className="flex justify-between items-baseline">
            <h3 className="mb-2 text-2xl font-bold">{title}</h3>
            <div className="text-2xl font-bold">
               Rp. {total.toFixed(2)}{' '}
               <span className="font-normal text-base italic ">(Rp. {price.toFixed(2)}/item)</span>
            </div>
         </header>
         <div className="flex  justify-between items-center">
            <div>
               x <span className="text-2xl font-bold">{quantity}</span>
            </div>
            <div className="flex justify-end my-2">
               <button onClick={removeItemHandler} className="border border-white ml-2 px-4 py-1 text-white transition-colors duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700 active:bg-gray-800 active:border-gray-800">-</button>
               <button onClick={addItemHandler} className="border border-white ml-2 px-4 py-1 text-white transition-colors duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700 active:bg-gray-800 active:border-gray-800">+</button>
            </div>
         </div>
      </li>
   )
}