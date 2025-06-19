import { Search } from "lucide-react"
import logo from "../assets/logo2.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className = "flex justify-between items-center px-6 py-4 shadow">
        <div className="flex items-center gap-4">
            <a href="/">
                <img src={logo} alt="Logo"  className="h-15"/>
            </a>
            <div className="flex items-center bg-stone-200    rounded-full px-4 py-2">
                <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm w-102" />

                <div className="bg-pink-500 text-white p-2 rounded-full cursor-pointer">
                    <Search size={16} />
                </div>

            </div>

            
        </div>

        <div className="flex justify-between items-center font-bold">
                <ul className="flex gap-6">
                    <Link to="/Movies">
                        <li className="px-4 py-2 hover:text-blue-900">Movies</li>
                    </Link>
                    <Link to="/Events">
                        <li className="px-4 py-2 hover:text-blue-900">Events</li>   
                    </Link>    
                    <Link to="/Trains">
                        <li className="px-4 py-2 hover:text-blue-900">Trains</li>
                    </Link>
                    <Link to ="/ListYourEvent">
                        <li className="px-4 py-2 hover:text-blue-900">ListYourEvent</li>
                    </Link>
                    <Link to="/login">
                        <div className="text-white bg-blue-950 hover:bg-blue-950/95 rounded-xl px-4 py-2">
                            <button >Login</button>
                        </div>
                    </Link>
                </ul>
            </div>

    </nav>
  )
}

export default Navbar
