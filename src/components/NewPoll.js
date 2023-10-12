import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handleAddQuestion } from "../actions/questions";

export default function NewPoll() {
    const [firstOption, setFirstOption] = useState('');
    const [secondOption, setSecondOption] = useState('');
    const [disabledBtn, setDisabledBtn] = useState(true);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmitPoll = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/");
    }

    useEffect(() => {
        if (firstOption !== '' && secondOption !== '') {
            setDisabledBtn(false);
        }
    }, [firstOption, secondOption]);

    return(
        <div className="flex flex-col gap-y-1 justify-center items-center max-w-4xl m-auto mt-4">
            <h1 className="text-3xl font-semibold">Would You Rather</h1>
            <h2 className="text-xl font-semibold text-zinc-400 mb-3">Create Your Own Poll</h2>
            <form className="flex flex-col items-center w-3/5">
                <label htmlFor="user" className="font-semibold mb-1">First Option</label>
                <input 
                    type="text"
                    placeholder="Option One"
                    required 
                    className="mb-4 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-700 sm:text-sm sm:leading-6" 
                    value={firstOption}
                    onChange={(e) => setFirstOption(e.target.value)}
                />
                <label htmlFor="password" className="font-semibold mb-1">Second Option</label>
                <input 
                    type="text"
                    placeholder="Option Two"
                    required 
                    className="mb-4 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-700 sm:text-sm sm:leading-6" 
                    value={secondOption}
                    onChange={(e) => setSecondOption(e.target.value)}
                />
                <button
                    type="submit" 
                    className={disabledBtn ? "cursor-not-allowed rounded-md bg-neutral-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm" : "rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"}
                    onClick={handleSubmitPoll}
                    disabled={disabledBtn}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}