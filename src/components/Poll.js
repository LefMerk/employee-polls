import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router";
import { handleAddQuestionAnswer } from "../actions/questions";

export default function Poll() {
    const questionId = useParams().id;
    
    const question = useSelector(state => Object.values(state.questions).find(question => question.id === questionId));
    const author = useSelector(state => Object.values(state.users).find(user => user.id === question.author));
    const userLoggedIn = useSelector(state => state.authedUser.id);
    const dispatch = useDispatch();
    //console.log(author);

    const navigate = useNavigate();

    if (!userLoggedIn || !question || !author) {
        return <Navigate to="/NotFound"/>;
    }

    const votedOptionOne = question.optionOne.votes.includes(userLoggedIn);
    const votedOptionTwo = question.optionTwo.votes.includes(userLoggedIn);

    const totalOptionOne = question.optionOne.votes.length;
    const totalOptionTwo = question.optionTwo.votes.length;
    const totalVotes = totalOptionOne + totalOptionTwo;

    const percentageOptionOne = (totalOptionOne / totalVotes * 100).toFixed(2);
    const percentageOptionTwo = (totalOptionTwo / totalVotes * 100).toFixed(2);

    const handleOption = (option) => {
        //console.log(option);
        dispatch(handleAddQuestionAnswer(question.id, option));
        navigate("/");
    }

    return(
        <div className="flex flex-col gap-y-6 justify-center items-center max-w-4xl m-auto mt-4">
            <h2 className="flex justify-center text-2xl font-semibold">Poll by {author.id}</h2>
            <img src={author.avatarURL} alt="author" className="w-48 border-2 border-stone-700 rounded-full" />
            <h3 className="text-xl font-semibold">Would You Rather</h3>
            <div className="flex gap-x-5 w-full">
                <div className="flex flex-col items-cente border border-zinc-300 rounded-md w-full">
                    <div className={votedOptionOne ? "bg-emerald-300 text-center py-3 font-medium text-sm" : "text-center py-3 font-medium text-sm"}>{question.optionOne.text}</div>
                    {votedOptionOne || votedOptionTwo
                        ? <div className="text-center border-t py-2 text-sm rounded-b-md">
                                {`${totalOptionOne} vote(s) - ${percentageOptionOne}%`}
                            </div>
                        : <button 
                            className="bg-emerald-600 text-white hover:bg-emerald-700 py-2 text-sm rounded-b-md"
                            onClick={() => handleOption("optionOne")}
                            >
                                Click
                            </button>
                    }
                </div>
                <div className="flex flex-col items-cente border border-zinc-300 rounded-md w-full">
                    <div className={votedOptionTwo ? "bg-emerald-300 text-center py-3 font-medium text-sm" : "text-center py-3 font-medium text-sm"}>{question.optionTwo.text}</div>
                    {votedOptionOne || votedOptionTwo
                        ? <div className="text-center border-t py-2 text-sm rounded-b-md">
                                {`${totalOptionTwo} vote(s) - ${percentageOptionTwo}%`}
                            </div>
                        : <button 
                            className="bg-emerald-600 text-white hover:bg-emerald-700 py-2 text-sm rounded-b-md"
                            onClick={() => handleOption("optionTwo")}
                            >
                                Click
                            </button>
                    }
                </div>
            </div>
        </div>
    );
}