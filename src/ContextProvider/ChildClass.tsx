import { useContext } from "react";
import { ThemeContext } from "./ParentClass";

const ChildClass = () => {
  // Provider tarafından paylaşılan değerlere erişmek için useContext hook'u kullanılır.
  const theme = useContext(ThemeContext);

  return (
    <div>
      <span>{theme}</span>
    </div>
  );
};

export default ChildClass;
