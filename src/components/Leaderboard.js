import { useSelector } from "react-redux";

export default function Leaderboard() {
    const users = useSelector(state => state.users);

    return(
        <div className="flex flex-col justify-center items-between max-w-4xl m-auto mt-5 border border-zinc-300 rounded-md">
            <div className="flex flex-row font-semibold justify-between border-b border-zinc-300">
                <div className="basis-1/2 w-full border-r border-zinc-300 p-2">Users</div>
                <div className="basis-1/4 w-full border-r border-zinc-300 p-2">Answered</div>
                <div className="basis-1/4 w-full p-2">Created</div>
            </div>
            {Object.values(users).map(user =>
                <div className="flex flex-row justify-between">
                    <div className="basis-1/2 w-full flex gap-3 items-center p-2 border-b border-zinc-300">
                        <img src={user.avatarURL} className="h-fit w-10 rounded-full border border-stone-700" alt="user" />
                        <div className="flex flex-col">
                            <span className="text-lg font-bold">{user.name}</span>
                            <span className="text-zinc-400 font-semibold">{user.id}</span>
                        </div>
                    </div>
                    <div className="basis-1/4 w-full p-2">{Object.values(user.answers).length}</div>
                    <div className="basis-1/4 w-full p-2">{user.questions.length}</div>
                </div>
            )}
        </div>
    );
}