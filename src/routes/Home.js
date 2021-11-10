import React, { useState } from "react";
import { dbService } from "../nwitterFirebase";

export default ()=>{
    const [nweet, setNweet] = useState("");
    const onSubmit = async(event)=>{
        event.preventDefault();
        const data = await dbService.collection("nweets").add({
            nweet,
            createdAt : Date.now(),
        })
        setNweet("");
        console.log(data)
    };
    const onChange = (event)=>{
        const {target: {value}} = event;
        setNweet(value)
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange = {onChange} type="text" placeholder="what's in your mind?" value={nweet}/>
                <input type="submit" value="nweet"/>
            </form>
        </div>
)};