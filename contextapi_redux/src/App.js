import { createContext } from "react";
import "./App.css";
// import ComB from "./ContextAPI/ComB";
// import ComA from "./ContextAPI/ComA";
import ComC from "./ContextAPI/ComC";
import ComB from "./ContextAPI/ComB";

const FirstName = createContext();
const LastName = createContext();
const Address = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"NIKITA"}>
        <LastName.Provider value={"PATEL"}>
          <ComC />
        </LastName.Provider>

        {/* <ComA/> */}
        {/* <ComB /> */}
      </FirstName.Provider>
      <Address.Provider value="Bangalore">
        <ComB />
      </Address.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName, Address };
