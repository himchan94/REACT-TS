import { FC, ChangeEvent, useState } from "react";

// enum defines options
export enum HairColor {
  Blonde = "Your hair is blond, good for you",
  Brown = "Coll hair color",
  Pink = "Wow that is so cool",
}

// interface is for object type
export interface Props {
  name?: string;
  age?: number;
  email?: string;
  hairColor: HairColor;
  getname?: (name: string) => string;
}

export const Person: FC<Props> = ({ name, email, age, hairColor }) => {
  const [country, setCountry] = useState<string | null>(null);

  type NameType = "Himchan" | "Jason";

  const nameForType: NameType = "Himchan";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder='write down your country..' onChange={handleChange} />
      <br />
      {country}
      <br />
      {hairColor}
    </div>
  );
};
