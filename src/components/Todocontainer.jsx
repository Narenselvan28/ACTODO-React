import AddTodoForm from "./Addtodoform";
import TodoActivities from "./Todoactivites";
import { useState } from "react";
function Todocointainer() {

  var [activity,setactivity]=useState([{
    id:1,
    act:"Go For a Walk"
},
{
    id:2,
    act:"Complete Your Homeworks"
},
{
    id:3,
    act:"Clean The Room"
}
]
)

  return (
    <div className="p-5">
    <div className="flex flex-wrap gap-5 justify-center">
      {/* Manage Activities Section */}
      <div className="flex flex-col gap-3 flex-1 max-w-xs">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div className="flex flex-wrap gap-2">
          <AddTodoForm activity={activity} setactivity={setactivity} />
        </div>
      </div>
  
      {/* Today's Activities Section */}
      <div className="bg-[#BDB4EA] p-4 rounded-md border  flex-grow sm:max-w-xs sm:flex-1">
      <TodoActivities activity={activity} setactivity={setactivity}/>
      </div>
    </div>
  </div>
  
  );
}

export default Todocointainer;
