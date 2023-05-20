import { useReducer } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import { cartReducer, cartContext } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {});
  return (
    <div className="App">
      <cartContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Header />
        <Products />
      </cartContext.Provider>
    </div>
  );
}

export default App;
