function Actdisp(props) {
    const activity = props.uactivity
    const setactivity = props.usetactivity

function handledelete(delid){
    var tempact= activity.filter(function(item){
        if(item.id==delid){
            return false
        }
        else {
            return true
        }
        
    })
    setactivity(tempact)
}

  
  return (
        <div className="flex justify-between items-center m-1 " style={{ borderBottom: "2px solid #D4C8F2" }}>
            <p>{props.index+1}.{props.item.act}</p>
                <button className="bg-red-500 rounded m-1 px-1" onClick={()=>{handledelete(props.item.id)}}>Delete</button>
        </div>
    )
    
}

export default Actdisp;