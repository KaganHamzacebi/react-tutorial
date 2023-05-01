/// <reference types="react-scripts" />
/* 
    Bu dosyada react içerisinde default olarak tanımlanmamış olan veri tiplerini biz tanımlayarak react'ın tanımasını sağlayabiliriz
    Aşağıda örnek olarak css dosyalarını tanımladım. Bu sayede css dosyalarını import ederken hata almıyoruz.
*/
declare module "*.css";
