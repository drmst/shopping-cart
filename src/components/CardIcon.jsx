import { MdOutlineShoppingCart } from "react-icons/md";

const CardIcon = ({cart}) => {
  return (
    <div className="relative">
      <MdOutlineShoppingCart className="text-2xl" />
      {cart.length>0 &&(
        <span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs">{cart.length}</span>
      )}
      
    </div>
  )
}

export default CardIcon