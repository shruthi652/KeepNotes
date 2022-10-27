import React, { useState } from "react";
import Note from "./Note";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function Createarea(){

    const [inputtext,setInputtext] = useState({
        Title:"",
        Content:""
    });
    const [arr,setArr] = useState([])
    const [notempty,setEmpty] = useState(false)
    const [init,setInit] = useState(false)

    function handleChange(event){
        const {value,name} = event.target;
        setInputtext(prevValue => {
            return {
                ...prevValue,
                [name]:value
            };
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        setArr((prevItems) => {
            return [...prevItems, inputtext];
          });
        setEmpty(true)
        setInputtext({
            Title:"",
            Content:""
        });
        event.preventDefault();
    }

    function handleDelete(id){
        return setArr(prevItems => {
            return prevItems.filter((y,index) => {
                return index !== id;
            })
        })
    }

    function handleThis(){
        setInit(true)
    }


    return <div>
    
        <form  className="create-note">
            {init && <input type="text" value={inputtext.Title} name="Title" placeholder="Title" onChange={handleChange} />}
            <textarea  value={inputtext.Content} name="Content" placeholder="Take a note.." rows={init?"3":"1"} onClick={handleThis} onChange={handleChange} />
            <Zoom in={init}>
            <Fab onClick={handleSubmit}><AddIcon/></Fab>
            </Zoom>
            
        </form>
        {notempty && <Note item={arr} onDelete={handleDelete}/>}
    </div>
}


export default Createarea;