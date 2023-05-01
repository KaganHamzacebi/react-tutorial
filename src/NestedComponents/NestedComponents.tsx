// Kullanmak istediğimiz componentleri import etmemiz gerekiyor.
import Button from "./Button";

const NestedComponents = () => {
  return (
    <div>
      <h1>Nested Components</h1>
      {/* 
        Oluşturmuş olduğumuz Button Component'ini burda çağırarak başka bir component içerisinde gösterilmesini sağlayabiliriz. 
        Bu bize iç içe bir yapı sağlar.
      */}
      <Button />
    </div>
  );
};
