import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginImg from "../assets/login_poll.png";
import { handleLogin } from "../actions/authedUser";

export default function Login() {
    const error = useSelector(state => state.authedUser);
    
    const dispatch = useDispatch();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

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
                    data-testid="user"
                    id="user" 
                    name="user" 
                    type="text" 
                    autoComplete="username"
                    required 
                    className="mb-4 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <label htmlFor="password" className="font-semibold mb-1">Password</label>
                <input 
                    data-testid="password"
                    id="password" 
                    name="password" 
                    type="password"
                    autoComplete="current-password"
                    required 
                    className="mb-4 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    data-testid="login-btn"
                    type="submit" 
                    className="rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
            {error && <div data-testid="error-msg" className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-base font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Incorrect credentials</div>}
        </div>
    );
}