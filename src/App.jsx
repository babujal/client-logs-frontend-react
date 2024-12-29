import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ClientsIndex from './pages/ClientsIndex';
import CreateClient from './pages/CreateClient';
import ShowClient from './pages/ShowClient';
import EditClient from './pages/EditClient';
import { getUser } from './services/authServices';
import NavBar from './components/Navbar';

function App() {
  const [token, setToken] = useState(getUser())
  const [clientUrl, setClientUrl] = useState()

  useEffect(() => {
    console.log('Client url for show:', clientUrl)
  }, [clientUrl]);

  useEffect(() => {
    console.log('Token found:', token)
  }, [token]);

  return (
    <>
      <NavBar token={token} setToken={setToken}  />
      <Routes>
        <Route
          path='/'
          element={token ?  <ClientsIndex setClientUrl={setClientUrl}/>: <h1>Sign in or Sign up</h1>}
        />
        <Route path='show' element={< ShowClient clientUrl={clientUrl}/>} />
        <Route path='edit' element={< EditClient clientUrl={clientUrl}/>} />
        <Route path='create' element={< CreateClient />} />
        <Route path='signup' element={<SignUp setToken={setToken} />} />
        <Route path='signin' element={<SignIn setToken={setToken} />} />
      </Routes>
    </>
  )
}

export default App
