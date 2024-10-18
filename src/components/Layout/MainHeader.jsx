import CartButton from "../Cart/CartButton";

export default function MainHeader() {
   return (
      <header className="w-full h-20 px-[10%] flex items-center justify-between bg-red-500">
         <h1 className="font-sans font-bold text-white text-2xl">Redux Cart</h1>
         <nav>
            <ul className="list-none m-0 p-0">
               <li>
                  <CartButton />
               </li>
            </ul>
         </nav>
      </header>
   )
}