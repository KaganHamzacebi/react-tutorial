import { useState } from "react";
import ChildClass from "./ChildClass";

const ParentClass = () => {
  const [name, setName] = useState("TestName");
  const [surname, setSurname] = useState("TestSurname");

  return (
    <div>
      <ChildClass name={name} surname={surname} />
    </div>
  );
};
