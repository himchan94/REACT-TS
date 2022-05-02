import * as React from "react";

// interface is for object type
export interface Props {
  name?: string;
  age?: number;
  email?: string;
  getname?: (name: string) => string;
}

export const Person = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};
