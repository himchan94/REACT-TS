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
