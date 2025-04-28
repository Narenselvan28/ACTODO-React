import { useState } from "react"
function AddTodoForm(props) {
    const activity = props.activity
    const setactivity = props.setactivity

    const [newact, setnewact] = useState("")
  
    function handlechange(event) {
        setnewact(event.target.value)
    }

    function addactivity() {
        setactivity([...activity, { id: activity.length + 1, act: newact }])
        setnewact("")
    }
    return (
        <div>
            <input
                type="text"
                className="border-black border bg-transparent p-2 rounded-l w-full sm:w-auto"
                placeholder="Next Activity" value={newact}
                onChange={handlechange}
            />
            <button className="bg-black p-2 rounded-r px-4 border border-black text-white w-full sm:w-auto" onClick={addactivity}>
                Add
            </button>
        </div>
    );
}

export default AddTodoForm;
