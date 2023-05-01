/*
    Routing burda react-router-dom kütüphanesi ile yapılacak.
*/

import { RouterProvider, createBrowserRouter } from "react-router-dom";

/*
    Bu kısımda hangi path gösterilmesi isteniyorsa JSON formatında tanımlanır.
    Oluşturmuş olduğumuz component içerisinde RouterProvider döndürülür ve RouterProvider bize path ile eşleşen elementi verir.
    Bu sayede uygulamamız birden fazla sayfa içeriyormuş gibi davranır.
*/
const router = createBrowserRouter([
  { path: "/", element: <span>Component Home</span> },
  { path: "/about", element: <span>Component About</span> },
  { path: "/contact", element: <span>Component Contact</span> },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
