import { useState } from "react";
import Actdisp from "./Actdisp";
function TodoActivities(props) {
    const activity = props.activity
    const setactivity = props.setactivity
    
    return (
        <div>
        <h1 className="text-2xl font-medium">Today's Activities</h1>
        {activity.length==0?<p>You haven't added any activity yet</p>:""}

        {
            activity.map(function(item,index){
               
               return<Actdisp item={item} index={index} uactivity={activity} usetactivity={setactivity}/>

             })
        }
        
      </div>
    );}
  
  
  export default TodoActivities;
  