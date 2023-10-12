import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col place-items-center gap-7 mt-4">
            <div className="text-3xl font-bold">Page not found!</div>
            <Link to="/" className="rounded-md bg-teal-800 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">Go to home</Link>
        </div>
    );
}