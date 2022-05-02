import React, { FC, createContext } from "react";
import "./App.css";
import { Person, HairColor } from "./components/Person";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Himchan",
    age: 20,
    country: "Korea",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Person
        name='himchan'
        age={20}
        email='ggrego@naver.com'
        hairColor={HairColor.Blonde}
      />
    </AppContext.Provider>
  );
};

export default App;
