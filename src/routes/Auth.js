import React, { useState } from "react";
import { authService } from "../nwitterFirebase";

export default ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true)
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
            console.log(data)
        }catch(error){
            console.log(error)
        }
        
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name = "email" onChange={onChange} type="text" placeholder="Email" required value={email} />
                <input  name = "password" onChange={onChange} type="password" placeholder="Password" required value={password}/>
                <input type="submit" value={newAccount ? "sign in" : "Log In"}/>
            </form>
            <div>
                <button>Continue with Google</button>
            </div>
        </div>
)};