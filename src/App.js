import React from "react";
import NavBar from "./Components/NavBar";
import BookList from "./Components/BookList";
import ThemeContextProvider from "./Contexts/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <NavBar />
      <BookList />
      <ThemeToggle />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
