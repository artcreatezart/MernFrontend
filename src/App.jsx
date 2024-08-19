import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import './App.css'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleWorkout from './pages/SingleWorkout';

const App = () => {

  const {user} = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            {/* If we have a user show the home page, else go to log in */}
            <Route path="/" element={user ? <Home/> : <Navigate to='/login'/>}/>

            {/* If we dont have a user show the login page, if we do go to home */}
            <Route path="/login" element={!user ? <Login/> : <Navigate to='/'/>}/>

            {/* If we dont have a user show the signup page, if we do go to home */}
            <Route path="/signup" element={!user ? <Signup/> : <Navigate to='/'/>}/>

            {/* If we have user go to single workout, else go to login*/}
            <Route path="/:id" element={user ? <SingleWorkout/> : <Navigate to='/login'/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
