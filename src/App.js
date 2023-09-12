import React from "react";
import BookContextProvider from "./Contexts/BookContext";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <BookContextProvider>
      <NavBar />
    </BookContextProvider>
  );
}

export default App;
