// https://legacy.reactjs.org/docs/hooks-reference.html#useeffect
import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [state, setState] = useState();
  const [state2, setState2] = useState();

  /* 
    React LifeCycle yapısı 3 ana başlıktan oluşmaktadır. Bunlar:
    1. Mounting
    2. Updating
    3. Unmounting
    Bu başlıkların her biri için useEffect hook'u kullanılabilir.
    useEffect hook'u component render edildiğinde ve dependency array içerisindeki değerler değiştiğinde çalışır.
  */
  useEffect(() => {
    // Bu kısım component mount edildiğinde çalışır.
    console.log("Component render edildi.");
    // Bu kısım component unmount edildiğinde çalışır.
    return () => {
      console.log("Component unmount edildi.");
    };

    /* 
    Bu kısımda array içerisinde verilen değerler useEffect'in bağımlılıklarıdır. 
    Ve bu değerlerden herhangi biri değiştirildiğinde useEffect tekrar çalışır.
    */
  }, [state, state2]);

  return <div>Life Cycle</div>;
};

export default LifeCycle;
