import React, { useState } from "react";
import { dbService } from "../nwitterFirebase";

export default ({nweetObj, isOwner})=>{
    const [edit, setEdit] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async()=>{
        const ok = window.confirm("Are you sure to delete?");
        if(ok){
            console.log("ok!")
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }else{
            console.log("not okay")
        }
    }
    const toggleEditing = ()=>setEdit(prev=>!prev)
    const onChange = (e)=>setNewNweet(e.target.value)
    const onSubmit = (e)=>{e.preventDefault();console.log(newNweet)}
    return(
        <div>
            {
                edit ? <>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} type="text" placeholder="Edit your nweet" value={newNweet} required/>
                </form>
                <button onClick={toggleEditing}>Cancel</button>
                </> : <>
                <h4>{nweetObj.text}</h4>
                {isOwner && <div><button onClick={onDeleteClick}>Delete</button>
                <button onClick={toggleEditing}>Edit</button></div>}
                </>
            }
        </div>
    )
}