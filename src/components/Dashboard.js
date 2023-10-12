import { useSelector } from "react-redux";
import PollList from "./PollList";

export default function Dashboard() {
    const userLoggedIn = useSelector(state => state.authedUser.id);
    const questions = useSelector(state => state.questions);
    //const users = useSelector(state => state.users);
    //console.log(questions, users);
    //console.log(userLoggedIn, questions, Object.values(questions).filter(q => q.optionOne.votes.includes(userLoggedIn) && q.optionTwo.votes.includes(userLoggedIn)));

    const newQ = Object.values(questions).sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)).filter(q => !q.optionOne.votes.includes(userLoggedIn) && !q.optionTwo.votes.includes(userLoggedIn));

    const doneQ = Object.values(questions).sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)).filter(q => q.optionOne.votes.includes(userLoggedIn) || q.optionTwo.votes.includes(userLoggedIn));

    return(
        <div className="flex flex-col gap-y-5 justify-center items-center max-w-4xl m-auto mt-4">
            <div className="flex flex-col rounded-md border border-zinc-300 w-full">
                <h2 className="flex justify-center text-2xl font-semibold border-b border-zinc-300 py-2">New Questions</h2>
                <PollList questions={newQ} />
            </div>
            <div className="flex flex-col rounded-md border border-zinc-300 w-full">
                <h2 className="flex justify-center text-2xl font-semibold border-b border-zinc-300 py-2">Done</h2>
                <PollList questions={doneQ} />
            </div>
        </div>
    )
}