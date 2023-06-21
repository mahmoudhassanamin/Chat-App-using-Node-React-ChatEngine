import { useState } from 'react'
import './App.css'
import {AuthPage,ChatsPage} from "./components"
function App() {
  const [user, setUser] = useState(undefined);
  if(!user){
    return <AuthPage onAuth={(user)=> setUser(user)}/>
  }else {
    return <ChatsPage user={user}/>
  }
}

export default App
