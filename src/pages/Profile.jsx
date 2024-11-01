import { Link, Outlet } from "react-router-dom";

function Profile() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                User Profile
            </h1>
            <nav className="flex justify-between">
                <ul className="flex space-x-4 p-2">
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 hover:text-gray-700">
                        <Link to="info">Profile Info</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 hover:text-gray-700">
                        <Link to="orders">Orders</Link>
                    </li>
                    <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 hover:text-gray-700">
                        <Link to="settings">Setting</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Profile;