import {Gonder} from '../fonksiyonlar';
import { useState } from 'react';


function Basvuru_formu() {
  const [isim, setİsim] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");

  const handleSubmit = (e) => {

    const input_isim = e.target.name;
    const isim_value = e.target.value;

    setİsim(values => ({...values, [input_isim]:isim_value}))

  }

  const submitFonk = function (e) {
    e.preventDefault();

    console.log(isim);

  }




    return(
        <>
         <div class="container" style={{borderStyle: 'double', color : '#263238', marginTop: '49px',  backgroundColor : 'rgba(207, 216, 220,0.7)', borderRadius: '3%'}}>
      <form onSubmit={submitFonk}>
        <h1>Başvuru Formu</h1>
        <div class="row justify-content-center py-3">
          <div class="col-8 ">  
            <div class="row py-3" id="basvuru_form">
            <h3>Öğrenci Bilgileri</h3>
            <label type="text">Ad - Soyad
            </label>
            <input 
                type="text"
                id="isim" 
                name="isim"
                value ={isim.isim || ""}
                onChange={handleSubmit}
                class="form-control form-control-dark " 
                placeholder="Adınızı ve soyadınızı giriniz"/>
            <br/>
            <label type="text">Cinsiyet</label> 
            <div class="row">
              <div class="col-5" ><input id="secim" type="radio" name="cinsiyet"/> Erkek</div>
              <div class="col-5" ><input id="secim" type="radio" name="cinsiyet"/> Kadın</div>
            </div>
            <label type="date">Doğum Tarihi</label>
            <input type="date" placeholder="Doğum tarihinizi giriniz" aria-label="mail"/>
            <div class="row">
              <div class="col-6">
                <label type="text" >1. Milliyet  </label>
                <input type="text"/>
              </div>
              <div class="col-6">
                <label type="text">2. Milliyet  </label>
                <input type="text"/>
              </div>
              </div>
            <label type="text">Kimlik no</label>
            <input type="text" class="form-control form-control-dark " placeholder="Kimlik numaranızı giriniz"/>
            <label type="text">Engellilik durumu</label> 
            <textarea rows="10" cols="32" placeholder="Bir engel durumunuz varsa belirtiniz"></textarea>
            

            <div ><hr/></div>

            <h3>Eğitim Bilgileri</h3>
            <label for="mezun_durum">Mezuniyet Durumu</label>
            <div class="row">
              <div class="col-5" ><input type="checkbox" id="secim_mezun" name="mezuniyet" onclick="mezun()"/> Mezun</div>
              <div class="col-5" ><input type="checkbox" id="secim_okul_devam" name="mezuniyet" onclick="mezun()"/> Devam ediyor</div>
            </div>

            <div class="row" id="mezun" style={{display: 'none'}} >
              <label type="text">Okul adı</label>
              <input type="text" class="form-control form-control-dark " placeholder="Okulunuzun adını giriniz"/>
              
              <label type="text">Bölüm Adı</label> 
              <input type="text" class="form-control form-control-dark " placeholder="Bölümünüzün adını giriniz"/>
            
              <label type="date">Mezuniyet Tarihi</label>
              <input type="date" placeholder="Mezuniyet tarihinizi giriniz" aria-label="mail"/>
              <label type="text">Diploma Notu</label>
              <input type="text" class="form-control form-control-dark " placeholder="Diploma notunuzu giriniz"/>

            </div>


            <div class="row" id="okul_devam" style= {{display: 'none'}} >       
            <label type="text">Okul adı</label>
            <input type="text" class="form-control form-control-dark " placeholder="Okulunuzun adını giriniz"/>
            
            <label type="text">Bölüm Adı</label> 
            <input type="text" class="form-control form-control-dark " placeholder="Bölümünüzün adını giriniz"/>   
              </div>


            <div ><hr/></div>

            <h3>Doküman</h3>
            <label type="text">Özgeçmiş</label>
            <div class="input-group">      
              <input type="file" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
              
            </div>
            <label type="text">Diploma</label>
            <div class="input-group">      
              <input type="file" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">İngilizce Yeterlilik Belgesi</label>
            <div class="input-group">      
              <input type="file" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">İkametgah</label>
            <div class="input-group">      
              <input type="file" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">Pasaport</label>
            <div class="input-group">      
              <input type="file" class="form-control" placeholder="dfsd"/>
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">Niyet Mektubu</label>
            <div class="input-group">      
              <input type="file" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <div ><hr/></div>
            
            <h3>İletişim Bilgileri</h3>
            <label type="text">Telefon Numarası</label>
            <input type="tel" class="form-control form-control-dark " placeholder="Telefon numaranızı giriniz"/>
            
          
            <label for="email">Mail Adresi</label> 
            <input type="email" id="email" name="email" placeholder="Mail adresinizi giriniz"/>
        

            

            <label type="text">Adres</label>
            <textarea rows="10" cols="32" placeholder="İkamet adresinizi giriniz"></textarea>
          </div>
        </div>
        </div>
      </form>
      <div ><hr/></div>
      <div style={{textAlign:'end'}}>
        <button type="reset" class="btn btn-outline-primary">Yenile</button>                
        <button type="submit" class="btn btn-success" style={{backgroundColor: '#0144a8'}}>Gönder</button>
      </div>      
    </div>
        </>
    );
}

export default Basvuru_formu;