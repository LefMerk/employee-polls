import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const userLoggedIn = useSelector(state => state.authedUser.id);
    const questions = useSelector(state => state.questions);
    //const users = useSelector(state => state.users);
    //console.log(questions);
    //console.log(userLoggedIn, questions, Object.values(questions).filter(q => q.optionOne.votes.includes(userLoggedIn) && q.optionTwo.votes.includes(userLoggedIn)));

    const newQ = Object.values(questions).sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)).filter(q => !q.optionOne.votes.includes(userLoggedIn) && !q.optionTwo.votes.includes(userLoggedIn));

    const doneQ = Object.values(questions).sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)).filter(q => q.optionOne.votes.includes(userLoggedIn) || q.optionTwo.votes.includes(userLoggedIn));

    return(
        <div className="flex flex-col gap-y-5 justify-center items-center max-w-4xl m-auto mt-4">
            <div className="flex flex-col rounded-md border border-zinc-300 w-full">
                <h2 className="flex justify-center text-2xl font-semibold border-b border-zinc-300 py-2">New Questions</h2>
                <div className="flex flex-wrap gap-4 p-3">
                    {newQ.map(item => 
                        <div key={item.id} className="rounded-md border border-zinc-300 w-60 h-32 flex flex-col justify-between items-center p-2">
                            <div className="flex flex-col items-center">
                                <span className="text-base font-semibold">{item.author}</span>
                                <span className="text-zinc-400">{new Date(item.timestamp).toLocaleString('el-GR', { timeZone: 'UTC' })}</span>
                            </div>
                            <Link to={'/question/' + item.id} className="text-center text-emerald-600 w-full p-2 border border-emerald-600 rounded-md text-sm hover:bg-emerald-600 hover:text-white">Show</Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col rounded-md border border-zinc-300 w-full">
                <h2 className="flex justify-center text-2xl font-semibold border-b border-zinc-300 py-2">Done</h2>
                <div className="flex flex-wrap gap-4 p-3">
                    {doneQ.map(item => 
                        <div key={item.id} className="rounded-md border border-zinc-300 w-60 h-32 flex flex-col justify-between items-center p-2">
                            <div className="flex flex-col items-center">
                                <span className="text-base font-semibold">{item.author}</span>
                                <span className="text-zinc-400">{new Date(item.timestamp).toLocaleString('el-GR', { timeZone: 'UTC' })}</span>
                            </div>
                            <Link to={'/question/' + item.id} className="text-center text-emerald-600 w-full p-2 border border-emerald-600 rounded-md text-sm hover:bg-emerald-600 hover:text-white">Show</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}