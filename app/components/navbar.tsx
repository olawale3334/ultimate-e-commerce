import { Package, Heart, ShoppingCart, User,Menu, Search,ChevronDown} from "lucide-react";
import { FaQuestionCircle } from "react-icons/fa";


function Navbar() {
  return (
    <div className="bg-white position-fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className=" flex justify-between   p-3  items-center gap-1.5 shadow-md ">
            <div>
                <span className="flex gap-1">Ultimate</span>
            </div>
            <div className="hidden md:block relative">
              <details className="group">
                {/* Button */}
                <summary className="flex items-center gap-1 cursor-pointer font-medium list-none">
                  Categories
                     <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />

                </summary>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-52 bg-white border rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Electronics
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Clothing
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Shoes
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Accessories
                    </li>
                  </ul>
                </div>
              </details>
            </div>

            <div>
              <div className="md:w-full md:max-w-md">
                <div className="relative">
                <input
                type="text"
                placeholder="Search"
                className="md:w-full w-40 py-2 rounded-lg border border-gray-300 bg-white md:px-4 md:py-2.5 md:pr-10 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                />
                <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                aria-label="Search"
                >
                <Search size={16} />
                </button>
                </div>
                </div>
            </div>
            <div className=" md:flex items-center gap-2 hidden ">
                  <p className="flex gap-2 items-center">
                     <Package/>
                     Orders
                  </p>
                <p className="flex gap-2 items-center"> <Heart/>  Favourites</p>
                <p className="flex gap-2 items-center"> <ShoppingCart/> Cart</p>
                <p className="flex gap-2 items-center"> <User/> profile</p>
                <p className="flex gap-2 items-center"> <FaQuestionCircle/> Help Center</p>
            </div>
             <div className="md:hidden flex items-center gap-2">
               <p className="flex gap-2 items-center"> <ShoppingCart/></p>
                <p className="flex gap-2 items-center"> <User/> </p>
              <Menu/>
             </div>
        </div>
    </div>
  )
}

export default Navbar