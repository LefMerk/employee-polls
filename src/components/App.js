import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import { handleInitialData } from '../actions/shared';

function App() {
  const userLoggedIn = useSelector(state => state.authedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="App">
      {userLoggedIn 
        ? <>
            <NavBar />
            <Routes>
              {/* <Route path="*" element={<NotFound />}></Route> */}
              {/* <Route exact path="/login" element={<Login />}></Route> */}
              <Route
                exact 
                path="/" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                exact 
                path="/leaderboard" 
                element={
                  <ProtectedRoute>
                    <Leaderboard />
                  </ProtectedRoute>
                }
              />
              <Route 
                exact 
                path="/new-poll" 
                element={
                  <ProtectedRoute>
                    <NewPoll />
                  </ProtectedRoute>
                } 
              />
              {/*<Route exact path="/poll/{id}" element={<Poll />} /> */}
            </Routes>
          </>
        : <Login />
      }
      {/* <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route
          exact 
          path="/" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/new-poll" element={<NewPoll />} />
        <Route exact path="/poll/{id}" element={<Poll />} />
      </Routes> */}
    </div>
  );
}

export default App;