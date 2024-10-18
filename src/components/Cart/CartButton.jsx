import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/uiSlice";

export default function CartButton() {
   const dispatch = useDispatch();
   const cartQuantity = useSelector(state => state.cart.totalQuantity)

   const toggleCartHandler = () => {
      dispatch(uiActions.toggleCart())
   }

   return (
      <button onClick={toggleCartHandler} className="bg-transparent rounded-md px-6 py-2 border border-white text-white hover:text-[#1ad1b9] active:text-[#1ad1b9] transition-colors duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700 active:bg-gray-800 active:border-gray-800">
         <span className="my-0 mx-2">My Cart</span>
         <span className="my-0 mx-2 bg-slate-100 rounded-[30px] py-[0.15rem] px-5 text-black" >{cartQuantity}</span>
      </button>
   )
}