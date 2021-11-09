import { useEffect, useState } from "react";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Approuter from "./Router";
import {authService} from "../nwitterFirebase"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [init, setInit] = useState(false)
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  },[])
  return (
    <div className="App">
      {init ? <Approuter isLoggedIn={isLoggedIn}/> : "loading..."}
    </div>
  );
}

export default App;
