import Header from "./components/Header";
import Cards from "./components/Card";  // Corrected import for Cards
import Todocointainer from "./components/Todocontainer";
function App(props) {
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-2xl">
        <Header  />
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Cards
            bgcolor="#8272DA"
            ttitle="24°"
            sub="Rainy"
          />
          <Cards
            bgcolor="#FD6663"
            ttitle="Coimbatore"
            sub="11:38:08"
          />
          <Cards
            bgcolor="#FCA201"
            ttitle="Built Using"
            sub="React"
          />
        </div>

       <Todocointainer/>

     
      </div>
    </div>
  );
}

export default App;
