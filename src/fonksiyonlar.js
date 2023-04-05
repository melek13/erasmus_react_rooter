import ReactDOM from 'react-dom/client';
import {Link, useNavigate} from 'react-router-dom';
// import Sayfa from './sayfa';

// import Giris from '../sayfalar/Giris';
import Ana_sayfa from './Ana_sayfa';
import Kayit from './sayfalar/Kayit';
import Basvuru_formu from './komponentler/Basvuru_formu';
import Basvuru_goruntule from './komponentler/Basvuru_goruntule';
import SSS from './komponentler/SSS';
import İletisim from './komponentler/Iletisim';
import {nav_eleman, basliklar} from './komponentler/icerikler';



//KAYIT KONTROL

export const Sifre_kontrol = () => {

  var kullanici =[(document.getElementById("mail").value), (document.getElementById("sifre1").value)];
  var sifre2 = document.getElementById("sifre2").value;
  var yazi = document.getElementById("sonuc");
  var yazi2 = document.getElementById("sonuc2");

  // const navigate = useNavigate();
  
  if (kullanici[1] == sifre2) {
  
      yazi.innerHTML = "Hesap Oluşturuldu!";
      yazi2.innerHTML = "Giriş sayfasına yönlendiriliyorsunuz.";
      yazi.style.color = "green";
      yazi2.style.color = "green";
  
      sessionStorage.setItem("user", kullanici);
      // setTimeout(() => {
      //     navigate('/');
      // }, 2000);
  }

  else {
      yazi.innerHTML = "Şifreler Eşleşmiyor.";
      yazi.style.color = "red";
  }
}
    





 //GİRİŞ KONTROL
 export const Giris_kontrol = () => { 
  
  // const sayfa = ReactDOM.createRoot(document.getElementById("sayfa"));
  

  var kullanici = sessionStorage.getItem("user");
  var isLogin = "false";
  kullanici = kullanici.split(",");


  var mail = document.getElementById("mail").value;
  var sifre = document.getElementById("sifre").value;
  var yazi = document.getElementById("yazi1");
  var yazi2 = document.getElementById("yazi2");

  
  if (mail == kullanici[0] && sifre == kullanici[1]) {
    

        isLogin = true;
       

        yazi.innerHTML = "Giriş bilgileri doğru!"; 
        yazi2.innerHTML = "Ana sayfaya yönlendiriliyorsunuz.";
        yazi.style.color = "green";                
        yazi2.style.color = "green";

        // document.getElementById("sidebar").style.display = "block";

            
        sessionStorage.setItem("isLogin", isLogin);
        sessionStorage.setItem("user", kullanici);



        // setTimeout(function () {
        //     window.location.href = "Basvuru_formu.js";
        // }, 2000);



        // setTimeout(function() {
        //           sayfa.render(
        //             <Basvuru_formu />
        //           )
        //         },5000)



        // setTimeout(function() {                  
        //             <Basvuru_formu />                  
        //         },5000)



  }

  else {
       
        isLogin = false;

        // document.getElementById("sidebar").style.display = "none";

        yazi.innerHTML = "Girilen bilgiler hatalı.";
        yazi.style.color = "red";
        isLogin = "false";
       
  }
}









//ÇIKIŞ KONTROL
export const Cikis = () => {

    var isLogin = sessionStorage.getItem("isLogin");

    isLogin = false;
    sessionStorage.setItem("isLogin", isLogin);      
     
}







  //GOSTER - RENDER
export const Goster = (eleman, eleman_index) => {

    const sayfa = ReactDOM.createRoot(document.getElementById("sayfa"));
    // const giris_btn = document.getElementById("giris_btn");
    // const kayit_btn = document.getElementById("kayit_btn");

    
  
    if(eleman == "Başvuru Formu"){
      sayfa.render(
        <Basvuru_formu
          baslik = {basliklar[eleman_index]}  
        />)}


    else if(eleman == "Başvuru Görüntüle"){
      sayfa.render(
        <Basvuru_goruntule
          baslik = {basliklar[eleman_index]}   
        />)}


    else if(eleman == "Sık Sorulan Sorular"){      
        sayfa.render(
          <SSS
            baslik = {basliklar[eleman_index]}  
          />)}

    else if(eleman == "İletişim"){      
        sayfa.render(
          <İletisim
            baslik = {basliklar[eleman_index]}  
          />)}     
    
 }








  //FORM GÖNDER
  export const Gonder = () => {

    var isim = document.getElementById("isim").value;
    var cinsiyet = document.getElementById("secim").value;    
    var dogum = document.getElementById("dogum").value;
    var milliyet1 = document.getElementById("milliyet1").value;
    var milliyet2 = document.getElementById("milliyet2").value;
    var kimlik = document.getElementById("kimlik").value;
    var engel = document.getElementById("engel").value;

    var ogrenci_bilgileri = [isim,cinsiyet,dogum,milliyet1,milliyet2,kimlik,engel]


    // var ogrenci_bilgileri = {isim_input : isim, cinsiyet_input : cinsiyet, dogum_input :dogum, milliyet1_input : milliyet1, milliyet2_input : milliyet2, kimlik_input : kimlik, engel_input : engel};


    if (ogrenci_bilgileri == null){
      alert("veri yok");
    }else{
      sessionStorage.setItem("ogrenci_bilgileri", ogrenci_bilgileri);
      console.log(ogrenci_bilgileri[3]);
      // alert("Bilgileriniz gönderilmiştir.");
    }




    var mezun_okul = document.getElementById("mezun_okul").value;
    var mezun_bolum = document.getElementById("mezun_bolum").value;
    var mezun_tarih = document.getElementById("mezun_tarih").value;
    var diploma = document.getElementById("diploma").value;

    var devam_okul = document.getElementById("devam_okul").value;
    var devam_bolum = document.getElementById("devam_bolum").value;

    var egitim_bilgileri =[mezun_okul, mezun_bolum, mezun_tarih, diploma, devam_okul,devam_bolum]

    if (egitim_bilgileri == null){
      alert("veri yok");
    }else{
      sessionStorage.setItem("egitim_bilgileri", egitim_bilgileri);
      console.log(egitim_bilgileri[0]);      
    }




    

    var ozgecmis = document.getElementById("ozgecmis").value;
    var diploma_belge = document.getElementById("diploma_belge").value;
    var iyb = document.getElementById("iyb").value;
    var ikametgah = document.getElementById("ikametgah").value;
    var pasaport = document.getElementById("pasaport").value;
    var niyet = document.getElementById("niyet").value;

    var dokuman =[ozgecmis, diploma_belge, iyb, ikametgah, pasaport, niyet]

    if (dokuman == null){
      alert("veri yok");
    }else{
      sessionStorage.setItem("dokuman", dokuman);
      console.log(dokuman[0]);
    }






    var telefon = document.getElementById("telefon").value;
    var email = document.getElementById("email").value;
    var adres = document.getElementById("adres").value;
    
    var iletisim =[telefon, email, adres]

    if (iletisim == null){
      alert("veri yok");
    }else{
      sessionStorage.setItem("iletisim", iletisim);
      console.log(iletisim[0]);
    } 

  }





  
  //FORMA GÖNDERİLEN BİLGİLERİ GÖRÜNTÜLEME
  export const Basvuru_gor = () =>{

    const sayfa = ReactDOM.createRoot(document.getElementById("sayfa"));
    const bilgi_baslik = ["İsim-Soyisim:", "Cinsiyet:","Doğum tarihi:", "1. Milliyet:", "2. Milliyet:"]
    var ogrenci_bilgileri = sessionStorage.getItem("ogrenci_bilgileri");
    console.log(ogr_bilgi_array)


    if(ogrenci_bilgileri == null){ 
      alert("Başvuru yapmadığınızdan dolayı başvuru bilgileri görüntülenemiyor. Başvuru formuna yönlendiriliyorsunuz.");
      
    }
    else{

      var ogr_bilgi_array = ogrenci_bilgileri.split(",");

      sayfa.render(
        <>
       <div className="bg-light p-5 rounded">
        <h1>Başvuru Bilgileri</h1>
              {ogr_bilgi_array.map((bilgi, bilgi_index) =>
                  (
                  <Basvuru_goruntule
                    bilgi_ismi = {bilgi_baslik[bilgi_index]}
                    deger = {bilgi}
                  />
                  )                
                  )
                }
       </div>
        
        </>
      )
    } 
    
  }







// MEZUN OLMA DURUMUNUN İŞARETLENMESİ


// export function Mezun() {
//   var secim_mezun = document.getElementById("secim_mezun");
//   var secim_okul_devam = document.getElementById("secim_okul_devam");

//   var mezun_div = document.getElementById("mezun_div");
//   var okul_devam_div = document.getElementById("okul_devam_div");

//   if (secim_mezun.checked == true){
//     mezun_div.style.display = "block";
//     okul_devam_div.style.display = "none";
//     secim_okul_devam.checked = false;
//   }

//   else if (secim_okul_devam.checked == true){
//     mezun_div.style.display = "none";
//     okul_devam_div.style.display = "block";
//     secim_mezun.checked = false;
//   }
  
// }