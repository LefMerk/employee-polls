import { Routes, Route } from 'react-router';
import NotFound from "./NotFound";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="*" element={<NotFound />}></Route> */}
        <Route exact path="/login" element={<Login />}></Route>
        {/* <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/leaderboard" element={<Leaderboard />}></Route>
        <Route exact path="/new-poll" element={<NewPoll />}></Route>
        <Route exact path="/poll/{id}" element={<Poll />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;