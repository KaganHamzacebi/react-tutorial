// https://legacy.reactjs.org/docs/context.html
/*
  Bu başlık Context API olarak da geçmektedir. 
  Bu yapı sayesinde verilerimizi props kullanmadan componentler arasında paylaşabiliriz.
  Provider altında yer alan componentler Context içerisindeki verilere erişebilir.
*/
import { createContext } from "react";
import ChildClass from "./ChildClass";

// Bu kısımda tutulması istenilen veri context içerisinde tanımlanır.
// Default olarak tanımlanan veri burada belirtilebilir.
export const ThemeContext = createContext("light");

const ParentClass = () => {
  return (
    <div>
      {/* Provider bu şekilde tanımlanır ve içerisinde yer alan tüm componentler paylaşılan değerlere erişebilir */}
      <ThemeContext.Provider value="dark">
        <ChildClass />
      </ThemeContext.Provider>
    </div>
  );
};
