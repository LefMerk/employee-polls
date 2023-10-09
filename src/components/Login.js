import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import loginImg from "../assets/login_poll.png";
import { handleLogin } from "../actions/authedUser";

export default function Login() {
    const userLoggedIn = useSelector((state) => state.authedUser);
    const dispatch = useDispatch();

    const [user, setUser] = useState('tylermcginnis');
    const [password, setPassword] = useState('abc321');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(user, password));
    }

    return (
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-3xl mt-8 font-semibold">Employee Polls</h1>
            <img 
                src={loginImg} 
                className="max-w-sm" 
                alt="login_image"
            />
            <h2 className="text-2xl font-semibold">Log In</h2>
            <form className="flex flex-col items-center w-60">
                <label htmlFor="user" className="font-semibold mb-1">User</label>
                <input 
                    id="user" 
                    name="user" 
                    type="text" 
                    required 
                    className="mb-4 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <label htmlFor="password" className="font-semibold mb-1">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    className="mb-4 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit" 
                    className="rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}