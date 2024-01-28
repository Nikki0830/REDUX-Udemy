import { createContext } from "react";
import "./App.css";
// import ComB from "./ContextAPI/ComB";
// import ComA from "./ContextAPI/ComA";
// import ComC from "./ContextAPI/ComC";
// import ComB from "./ContextAPI/ComB";
import Reduce from "./useReducer/Reduce";

const FirstName = createContext();
const LastName = createContext();
const Address = createContext();

function App() {
  return (
    <>
      {/* <FirstName.Provider value={"NIKITA"}>
        <LastName.Provider value={"PATEL"}>
          <ComC />
        </LastName.Provider>

  
      </FirstName.Provider>
      <Address.Provider value="Bangalore">
        <ComB />
      </Address.Provider> */}
            {/* <ComA/> */}
        {/* <ComB /> */}
        <Reduce/>
    </>
  );
}

export default App;
export { FirstName, LastName, Address };
