import React from "react";
import AppRouter from "./src/Router";
import {Provider} from 'react-native-paper';



const App = () => {

  return (
    <Provider>
      <AppRouter />
    </Provider>
    )
  }
export default App;