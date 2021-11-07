import { useState } from "react";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Approuter from "./Router";
import {authService} from "../nwitterFirebase"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  return (
    <div className="App">
      <Approuter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
