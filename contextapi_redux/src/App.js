// import { createContext } from "react";
import "./App.css";
import Navbar from "./ReduxTkThapa/Navbar";
import Userdetails from "./ReduxTkThapa/Userdetails";
// import RindexU from "./Component/RindexU";

// import ComB from "./ContextAPI/ComB";
// import ComA from "./ContextAPI/ComA";
// import ComC from "./ContextAPI/ComC";
// import ComB from "./ContextAPI/ComB";
// import Reduce from "./useReducer/Reduce";
// import Reduxui from "./REDUX/Reduxui";
// import ReduxTollUi from "./Component/Redux-toolkit/ReduxTollUi";
// import Tkpracticeui from "./REDUXTKpractice/Tkpracticeui";
// import Reducer from "./UseReducer/Reducer";

// const FirstName = createContext();
// const LastName = createContext();
// const Address = createContext();

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
      {/* <Reduce/> */}
      {/* <Reduxui/> */}

      {/* //useReducer */}
      {/* <Reducer/> */}

      {/* Redux toolki(admin tableby thapa) */}
      <>
        <Navbar />
        <Userdetails/>
      </>

      {/* REDUX UDEMY */}
      {/* <RindexU /> */}
      {/* <ReduxTollUi /> */}
      {/* <Tkpracticeui/> */}
    </>
  );
}

export default App;
// export { FirstName, LastName, Address };
