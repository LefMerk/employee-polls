import React, { useEffect } from 'react';
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

export default function App() {
  const userLoggedIn = useSelector(state => state.authedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="App">
      {userLoggedIn && userLoggedIn !== 'Not authorised'
        ? <>
            <NavBar />
            <Routes>
              <Route path="*" element={<NotFound />}></Route>
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
                path="/add" 
                element={
                  <ProtectedRoute>
                    <NewPoll />
                  </ProtectedRoute>
                } 
              />
              <Route 
                exact 
                path="/question/:id" 
                element={
                  <ProtectedRoute>
                    <Poll />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </>
        : <Login />
      }
    </div>
  );
}