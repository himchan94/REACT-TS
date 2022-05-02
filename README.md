## FC

\- FC(Functional Component) 타입의 약어  
\- FC\<Props> 형식으로 props 타입 전달

```ts
import { FC, ChangeEvent, useState } from "react";

// interface is for object type
export interface Props {
  name?: string;
  age?: number;
  email?: string;
  getname?: (name: string) => string;
}

export const Person: FC<Props> = ({ name, email, age }) => {
  const [country, setCountry] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder='write down your country..' onChange={handleChange} />
      {country}
    </div>
  );
};
```

## Enum

```ts
enum HairColor {
  Blonde = "Your hair is blond, good for you",
  Brown = "Coll hair color",
  Pink = "Wow that is so cool",
}
```

## Type

```ts
type NameType = "Himchan" | "Jason";
```

## Typesciprt with contextAPI

```ts
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
```
