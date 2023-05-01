# package.json

Bu dosya kısaca projemize ait genel bilgileri içermektedir.
Bu bilgiler;
- Proje ismi, açıklaması, versiyonu gibi genel bilgiler
- Terminal scriptleri
- Proje bağımlılıkları

# package-lock.json

Bu dosya npm isimli paket yöneticine aittir ve diğer paket yöneticileri eğer projede tercih edilmiş ise bu dosyayı başka bir isimle görebilirsiniz. (örn: yarn.lock)

Bu dosyanın amacı paket yöneticisinin indirilmiş olan kütüphaneler ve o kütüphanelere ait bağımlılıklarını ve versiyonları gibi diğer önemli bilgileri tutmaktır. Bu sayede birbiri ile uyumsuz olan kütüphaneleri tespit edebilmektedir.

# node_modules

Bu dizin projemize ait bütün bağımlılıkların (kütüphanelerin) bulunduğu dosyadır. Paket yöneticileri package.json içerisindeki dependencies kısmını okuyarak istenilen kütüphaneleri node_modules isimli dizin içerisine indirir.

Bu dizin projemizin boyut bakımından çoğunluğunu oluşturduğundan dolayı proje farklı bir ortama aktarılırken bu dizinin silinmesi tercih edilir.

# Paket Yönetimi Ek Bilgiler

## Paket Yöneticileri
- npm
- yarn
- pnpm

Paket Yöneticileri projenize kütüphane ekleme, kaldırma ve proje scriptlerini çalıştırmak amacıyla önemlidir. Bu projede npm tercih edildiğinden dolayı projeye bir kütüphane eklenmek istendiğinde `npm i [kütüphane_ismi]` komutu kullanılabilir.
Silmek istenildiğinde ise `npm uninstall [kütüphane_ismi]` kullanılabilir.

Not: Bazı komutlar npm [komut] yerine npm run [komut] olarak çalıştırılması gerekiyor.

Yarn paket yöneticisi için bu komutlar `yarn add [kütüphane_ismi]` ve `yarn remove[kütüphane_ismi]` şeklindedir.

Kütüphanelerin dökümantasyonlarına;
- [npm](https://www.npmjs.com/)
- [yarn](https://yarnpkg.com/) 
sayfalarından erişebilirsiniz.

Eğer projenize çok fazla kütüphane indirip daha sonrasında sildiyseniz node_modules ve package-lock.json dosyalarını silip tekrardan oluşturtmanız ileride bir sorun yaşamamanız açısından önemlidir.

### Proje Scriptleri

Projenizi oluşturduğunuzda varsayılan olarak dört adet script ile oluşturulmaktadır.
Bunlar start, build, test ve eject komutlarıdır. Bu komutları çalıştırmak için terminalinize `[paket_yöneticisi_ismi] [komut_ismi]` şeklinde yazmak yeterlidir.
*Örn: npm start*

#### Script Amaçları

- **start**: Projemizi geliştirme modunda başlatır
- **build**: Projemizi production modu için /dist olarak derler
- **test**: Projemiz için yazılmış olan testleri çalıştırır
- **eject**: Eject komutu tek yönlü bir komut olup kullanılması tehlikelidir. Amacı projemizdeki tüm ayarları package.json içerisine taşımak ve daha fazla özelleştirmeye açık hale getirmektedir.

Bu scriptlere ek olarak dilediğiniz komut eklenebilir. Örnek olarak eslint gibi bir kütüphane kullandığınızda `"lint:fix": eslint --fix .` gibi bir komut eklemek bu komutu her çalıştırmak istediğinizde sizi tekrar yazmaktan kurtaracaktır.

# Proje Dosya Yapısı
Projenizi oluşturduğunuzda sizi bu dosyalar karşılayacaktır.

- /node_modules projemize ait kütüphanelerin tutulduğu dosyadır.
- /public projemizin dışarıya açık yüzüdür. Dışarıdan erişilmesini istediğimiz dosyaları bu dizin altına yerleştirebiliriz
- /src projemizin tüm kaynak dosyalarının yer aldığı dizindir.

## Önerilen Proje Dizin Yapısı
    node_modules/
    public/    
    src/
        pages/  
        common/
            components/
            styles/
            assets/
            app/
            utils/
            types/
            service/

    Not: Bu yapı benim tercihimdir ve kişiye göre farklılık gösterebilir. Siz kendi mutlu olduğunuz yapıda ilerleyebilirsiniz. Projenizi modülarize etmeye çalışırken fazla karışık bir yapı oluşturmaktan kaçınmanızı tavsiye ederim.

### Alt Dizin Açıklamaları
- pages: Projenize ait ekranların tutulduğu dosyadır (views olarak da görebilirsiniz)
- styles: Bu klasör zorunlu değildir ancak css, scss, less gibi araçlar kullandığınız durumda yazmanız gereken styling dosyalarını bu klasör içerisine koymanız projenizi daha sade bir yapıda tutacaktır.
- assets: Projenizde kullanılan ve dışarıya açık tutmak istemediğiniz tüm görsel ve videolar ya da icon'lar bu dosya içerisinde yer alır.
- app: Projenizde artık çok yaygın olarak kullanılan state management kütüphaneleri için gerekli dosyaların tutulacağı dizindir. (örn kütüphaneler: redux, zustand)
- utils: Bu dizinde hesaplamalar v.b. işlemlerin yapılacağı fonksiyonelite sağlayan işlemler yer almalıdır. Örnek olarak kendi oluşturacağınız custom hook'lar bu dizinde yer almalıdır. Ya da bir modül ile bağlantısı olmayan herhangi bir fonksiyon da bu dosyada yer alabilir.
- types: Bu dizin typescript projeleri için kullanılır. Eğer javascript ile kodluyorsanız oluşturmanıza gerek yok. Bu dizinde kendi oluşturmuş olduğunuz veri tipleri yer alır.
- service: Bu dizin içerisinde proje dışarısına (backend v.b.) istek atacak olan fonksiyonlar yer almalıdır.