import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    return <div>
      {props.item.map((x,index) => {
        return <div className="note">
        
        <h1>{x.Title}</h1>
        <p>{x.Content}</p>
        <button onClick={() => {
           props.onDelete(index);
        }}><DeleteIcon /></button>
        </div>
    }
    )}

    </div>
    
        

    
}


export default Note;