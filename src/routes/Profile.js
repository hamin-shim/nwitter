import React from "react";
import { useHistory } from "react-router";
import { authService } from "../nwitterFirebase";

export default ()=>{
    const history = useHistory();
    const onLogoutClick = ()=>{
        authService.signOut();
        history.push("/");
    }

    return(
        <div>
            <button onClick={onLogoutClick}>Log out</button>
        </div>)
};