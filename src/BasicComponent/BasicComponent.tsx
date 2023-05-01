// https://legacy.reactjs.org/docs/hooks-intro.html
// Component'in en üst kısmında importlar yer almalıdır.
import { useState } from "react";
import styles from "./BasicComponent.css";

/* 
    Component ile bağlantılı olmayan (static) fonksiyon ve değerler bu kısımda tanımlanmalıdır.
    Eğer oluşturulacak fonksiyon ya da variable çok yerde kullanılacaksa /common/utils içerisine tanımlanıp export edilmesi doğrudur.
*/
const externalVariable = "externalVariable";
function externalFunction() {
  // do something
}

/*
    Component tanımı arrow function yapısı ile veya function olarak yapılabilir.
    örn: function BasicComponent() { return <div>Basic Component</div> }

*/
const BasicComponent = () => {
  /* 
        Component içerisinde kullanılacak olan state'ler burada tanımlanmalıdır. 
        useState isimli hook'u bize React sağlar ve bu hook'un amacı component tekrar render edildiğinde state'in değerini korumaktır.
        useState içerisine verilen değer state'in default değeridir.
        state'in değerine stateValue ile erişilebilir ve setStateValue ile state'in değeri değiştirilebilir.
        örn: console.log(stateValue)
        örn: setStateValue("newValue")
    */
  const [stateValue, setStateValue] = useState("defaultValue");

  // Component için gerekli olan fonksiyonlar burada tanımlanabilir.
  function internalFunction() {
    // do something
  }

  // Component içerisinde return edilmelidir. Return kısmı içerisinde JSX formatında html kodları yazılabilir.
  return (
    <>
      {/* Oluşturmuş olduğumuz html taglerine className aracılığıyla css özellikleri ekleyebiliriz. */}
      <div className={styles.main}>
        <h1>Basic Component</h1>
        {/* Bu kısımda {expression} yapısı kullanılarak state değeri gösterilebilir */}
        <span>State Value: {stateValue}</span>
      </div>
    </>
  );
};

// Component'in diğer dosyalardan erişilebilmesi için export edilmesi gerekir.
export default BasicComponent;
