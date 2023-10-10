import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Poll() {
    const questionId = useParams().id;
    const question = useSelector(state => Object.values(state.questions).find(question => question.id === questionId));
    const author = useSelector(state => Object.values(state.users).find(user => user.id === question.author));
    const userLoggedIn = useSelector(state => state.authedUser.id);
    //console.log(author);

    return(
        <div className="flex flex-col gap-y-6 justify-center items-center max-w-4xl m-auto mt-4">
            <h2 className="flex justify-center text-2xl font-semibold">Poll by {author.id}</h2>
            <img src={author.avatarURL} alt="author" className="w-48 border-2 border-stone-700 rounded-full" />
            <h3 className="text-xl font-semibold">Would You Rather</h3>
            <div className="flex gap-x-5 w-full">
                <div className="flex flex-col items-cente border border-zinc-300 rounded-md w-full">
                    <div className="text-center py-3 font-medium text-sm">{question.optionOne.text}</div>
                    <button className="bg-emerald-600 text-white hover:bg-emerald-700 py-2 text-sm">Click</button>
                </div>
                <div className="flex flex-col items-cente border border-zinc-300 rounded-md w-full">
                    <div className="text-center py-3 font-medium text-sm">{question.optionTwo.text}</div>
                    <button className="bg-emerald-600 text-white hover:bg-emerald-700 py-2 text-sm">Click</button>
                </div>
            </div>
        </div>
    );
}