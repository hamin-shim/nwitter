import React, { useState } from "react";
import { authService, firebaseInstance } from "../nwitterFirebase";

export default ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false)
    const onChange = (event)=>{
        const {target: {name, value}} = event;
        if(name==="email"){
            setEmail(value)
        }else if(name==="password"){
            setPassword(value)
        }
    }
    const onSubmit = async(event)=>{
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                data = await authService.createUserWithEmailAndPassword(email, password)
            }
            else{
                data = await authService.signInWithEmailAndPassword(email, password)
            }
        }catch(error){
            console.log(error)
        }
        
    }
    const toggleAccount = ()=>{
        setNewAccount((prev)=>!prev)
    }
    const onGoogleClick = async()=>{
        let provider = new firebaseInstance.auth.GoogleAuthProvider();
        const data =  await authService.signInWithPopup(provider);
        console.log(data)
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name = "email" onChange={onChange} type="text" placeholder="Email" required value={email} />
                <input  name = "password" onChange={onChange} type="password" placeholder="Password" required value={password}/>
                <input type="submit" value={newAccount ? "sign in" : "Log In"}/>
            </form>
            <span onClick={toggleAccount}>{newAccount? "Log in" : "create accout"}</span>
            <div>
                <button onClick={onGoogleClick}>Continue with Google</button>
            </div>
        </div>
)};