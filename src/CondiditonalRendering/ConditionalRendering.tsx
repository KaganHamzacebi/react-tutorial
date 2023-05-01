// https://react.dev/learn#conditional-rendering
import { useState } from "react";

/*
    React Componentleri içerisinde yer alan return kısmında ekrana render edilecek olan JSX kodları yer alır.
    Eğer biz ekrana gösterilecek olan kodların duruma göre değişmesini istiyorsak bir koşul ifadesi kullanarak bu işlemi gerçekleştirebiliriz.
*/
const ConditionalRendering = () => {
  const [isLogged, setIsLogged] = useState(false);

  /*
    Bu örnek senaryoda eğer kullanıcı giriş yapmamış ise ekrana hiçbir şey render edilmeyecektir.
    Çünkü aşağıdaki if bloğuna girdiğinde null ifadesi döndürülmesi istenmiştir.
  */
  if (!isLogged) return null;

  // Yukarıdaki if bloğuna girilmediği durumda bu kısım çalışacaktır ve ekrana aşağıda belirtilen kodlar render edilecektir.
  return (
    <div>
      <h1>Conditional Rendering</h1>
    </div>
  );
};
