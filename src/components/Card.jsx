function Cards(props) {
    return (
     
        <div 
          className="px-10 py-5 border rounded-2xl text-center flex-grow min-w-[200px]" 
          style={{ backgroundColor: props.bgcolor }}
        >
          <h1 className="font-medium text-2xl">{props.ttitle}</h1>
          <p>{props.sub}</p>
        </div>
     
    );
  }
  
  export default Cards;
  