import { useState } from "react";

const DataRendering = () => {
  // Beş elemanlı bir array oluşturdum ve bunu aşağıda render edeceğim.
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      {
        /* 
            Elimizdeki veriyi gösterebilmemiz için JavaScript'in bize sağlamış olduğu .map isimli array fonksiyonunu kullanmamız gerekiyor.

            Bu fonksiyonu return içerisinde kullanabilmemiz için ilk olarak { } yapısı kullanmamız gerekiyor.
            data.map fonksiyonu içerisinde yer alan item parametresi ile array içerisindeki her bir elemana erişebiliriz.
            {item} yapısı ile de bu elemanları ekrana yazdırabiliriz. 
            Eğer veri tipimiz bir Object olsaydı örnek olarak {item.name} şeklinde kullanabilirdik.
            Map fonksiyonu içerisinde oluşturmuş olduğumuz Component'lere key değeri atamamız gerekmektedir. 
            Bunun sebebi React'ın keylerin yeri değiştiğinde bunu fark edebilmesi içindir.
        */
        data.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      }
    </div>
  );

  /*
  return (
    <div>
        {
            Farklı olarak .map içerisinde yer alan kısma bir Component de yazabiliriz.
            Bu component'e gerekli değeri prop yapısı ile verip component içerisinde bu değeri kullanabiliriz.
            Bu şekilde daha karmaşık kodlarda daha okunabilir bir yapı elde edebiliriz.
            
            data.map((item, index) => {
                return <Component item={item} />;
            })
        }
    </div>
  )
  */
};

export default DataRendering;
