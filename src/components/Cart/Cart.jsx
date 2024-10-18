import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";

export default function Cart() {
   const cartItems = useSelector(state => state.cart.items)

   return (
      <Card className="bg-red-500 text-white">
         <h2 className="text-2xl my-2 font-bold">Your Shopping Cart</h2>
         <ul className="list-none p-0 m-0">
            {cartItems.map(item => (
               <CartItem key={item.id} id={item.id} title={item.name} quantity={item.quantity} total={item.totalPrice} price={item.price} />
            ))}
         </ul>
      </Card>
   )
}