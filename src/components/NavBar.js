import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../actions/authedUser";
import userIcon from "../assets/user-icon.svg";

const menu = [
    {name: "Home", url: "/"},
    {name: "Leaderboard", url: "/leaderboard"},
    {name: "New", url: "/new-poll"}
];

export default function NavBar() {
    const user = useSelector(state => state.authedUser.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let currentUrl = "/" + window.location.href.split('/')[3];
    console.log(currentUrl);

    const logOut = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
        navigate("/");
    };

    return (
        <nav className="flex items-center justify-between py-3 px-4 font-semibold leading-6 text-gray-900">       
            <div className="flex items-center gap-x-4">
                {menu.map(item => 
                    <Link key={item.name} to={item.url} className={"rounded-md py-1 px-2 hover:bg-emerald-200 " + currentUrl == item.url ? "border-b-2 border-emerald-600" : ""}>{item.name}</Link>
                )}
            </div>
            <div className="flex items-center gap-x-6">
                <div className="flex gap-x-1 items-center">
                    <img src={userIcon} className="w-8" />
                    <span>{user}</span>
                </div>
                <button
                    className="rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700" 
                    onClick={logOut}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}