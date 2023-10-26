import React, { useState } from 'react'
import './App.css'
import AuthPage from "./components/authpage/AuthPage";
import ChatsPage from "./components/chatspage/ChatsPage";
const App = () => {
  const [user, setUser] = useState(undefined)
  return (
    <div>
      {!user? <AuthPage onAuth={(user)=>setUser(user)}/> : <ChatsPage user={user}/>}
    </div>
  )
}

export default App