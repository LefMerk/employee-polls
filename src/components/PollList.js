import React from "react";
import { Link } from "react-router-dom";

export default function PollList({questions}) {
    return (
        <div className="flex flex-wrap gap-4 p-3">
            {questions.map(item => 
                <div key={item.id} className="rounded-md border border-zinc-300 w-60 h-32 flex flex-col justify-between items-center p-2">
                    <div className="flex flex-col items-center">
                        <span className="text-base font-semibold">{item.author}</span>
                        <span className="text-zinc-400">{new Date(item.timestamp).toLocaleString('el-GR', { timeZone: 'UTC' })}</span>
                    </div>
                    <Link to={'/questions/' + item.id} className="text-center text-emerald-600 w-full p-2 border border-emerald-600 rounded-md text-sm hover:bg-emerald-600 hover:text-white">Show</Link>
                </div>
            )}
        </div>
    );
}