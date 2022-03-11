import './App.css';
import React, { createContext } from "react";
import ComponentC from './components/ComponentC';

export const NameContext = createContext("");
export const AnotherContext = createContext({});


function App() {
  return (
    <div className="App">
        <NameContext.Provider value="AshokIT">
            <AnotherContext.Provider value={{nameX:"Another",nameY:"Another1"}}>
              <ComponentC></ComponentC>
            </AnotherContext.Provider>  
        </NameContext.Provider>
    </div>
  );
}

export default App;
