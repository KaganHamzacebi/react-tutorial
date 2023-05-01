/* 
    Bu kısım TypeScript ile bize sağlanmaktadır JavaScript ile daha farklı bir yapı izlemeniz gerek. 
    Aşağıdaki şekilde Component'imizin sahip olduğu Proplar tanımlanır 
*/
interface ChildClassProps {
  name: string;
  surname: string;
}

/* 
    Bu kısımda Component'imizin veri tipi belirtilir ve bu propların zorunlu olup olmadığı belirtilir.
    Daha farklı şekillerde de kullanılabilir ancak bu şekilde kullanımı daha sade ve anlaşılırdır.
    Proplara deconstruction işlemi uygulanır ve Component içerisinde kullanılır.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
const ChildClass: React.FC<ChildClassProps> = ({ name, surname }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{surname}</span>
    </div>
  );
};

// JavaScript Örneği
/*
const ChildClassJS = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.surname}</span>
        </div>
    );
};
*/

export default ChildClass;
