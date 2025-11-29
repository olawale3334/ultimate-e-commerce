import { Package, Heart, ShoppingCart, User } from "lucide-react";

function Navbar() {
  return (
    <div>
        <div className="flex justify-between items-center  bg-white p-5 shadow-md">
            <div>
                <span>Ultimate</span>
            </div>
            <div className=" flex items-center gap-3">
                  <p className="flex gap-2 items-center">
                     <Package/>
                     Orders
                  </p>
                <p className="flex gap-2 items-center"> <Heart/>  Favourites</p>
                <p className="flex gap-2 items-center"> <ShoppingCart/> Cart</p>
                <p className="flex gap-2 items-center"> <User/> profile</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar