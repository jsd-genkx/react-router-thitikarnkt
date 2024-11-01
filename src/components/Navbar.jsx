import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-gray-800 rounded-md">
            <nav>
                <ul className="flex space-x-4 p-2">
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </div> 
    )
  }