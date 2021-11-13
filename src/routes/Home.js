import React, { useEffect, useState } from "react";
import { dbService } from "../nwitterFirebase";
import Nweet from "../components/Nweet"

export default ({userObj})=>{
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const onSubmit = async(event)=>{
        event.preventDefault();
        const data = await dbService.collection("nweets").add({
            text: nweet,
            createdAt : Date.now(),
            creatorId : userObj.uid,
        })
        setNweet("");
    };
    const onChange = (event)=>{
        const {target: {value}} = event;
        setNweet(value)
    }
    useEffect(()=>{
        dbService.collection("nweets").onSnapshot((snapshot)=>{
            const nweetArray = snapshot.docs.map(doc=>({
                id: doc.id,
                ...doc.data()
            }))
            setNweets(nweetArray);
        })
    },[])
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange = {onChange} type="text" placeholder="what's in your mind?" value={nweet}/>
                <input type="submit" value="nweet"/>
            </form>
            <div>
                {nweets.map(nweet=>(<Nweet nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>))}
            </div>
        </div>
)};


    //const getNweets = async()=>{
    //     const data = await dbService.collection("nweets").get();
    //     data.forEach((document)=>{
    //         const dbObject = {
    //             ...document.data(),
    //             id: document.id
    //         }
    //         setNweets(prev=>[dbObject, ...prev])
    //     })
    // }