import React from "react";
import BookContextProvider from "./Contexts/BookContext";
import NavBar from "./Components/NavBar";
import BookDetail from "./Components/BookDetail";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookDetail />
      </BookContextProvider>
    </div>
  );
}

export default App;
