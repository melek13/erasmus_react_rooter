import {Gonder} from '../fonksiyonlar';
import { useState } from 'react';


function Basvuru_formu() {




    return(
        <>
         <div class="container" style={{borderStyle: 'double', color : '#263238', marginTop: '49px', backgroundColor : 'rgba(207, 216, 220,0.7)', borderRadius: '3%', height : '100%'}}>
      <form >
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
                class="form-control form-control-dark " 
                placeholder="Adınızı ve soyadınızı giriniz"/>
            <br/>
            <label type="text">Cinsiyet</label> 
            <div class="row">
              <div class="col-5" ><input id="secim" type="radio" name="cinsiyet"/> Erkek</div>
              <div class="col-5" ><input id="secim" type="radio" name="cinsiyet"/> Kadın</div>
            </div>
            <label type="date">Doğum Tarihi</label>
            <input type="date" placeholder="Doğum tarihinizi giriniz" aria-label="mail" id="dogum"/>
            <div class="row">
              <div class="col-6">
                <label type="text" style={{marginRight : "13px"}}>1. Milliyet  </label>
                <input type="text" id="milliyet1"/>
              </div>
              <div class="col-6">
                <label type="text" style={{marginRight : "13px"}}> 2. Milliyet  </label>
                <input type="text" id="milliyet2"/>
              </div>
              </div>
            <label type="text">Kimlik no</label>
            <input type="text" id="kimlik" class="form-control form-control-dark " placeholder="Kimlik numaranızı giriniz"/>
            <label type="text">Engellilik durumu</label> 
            <textarea rows="10" id="engel"cols="32" placeholder="Bir engel durumunuz varsa belirtiniz"></textarea>
            

            <div ><hr/></div>

            <h3>Eğitim Bilgileri</h3>
            <label for="mezun_durum">Mezuniyet Durumu</label>
            <div class="row">
              <div class="col-5" ><input type="checkbox" id="secim_mezun" name="mezuniyet"  onClick="Mezun"/> Mezun</div>
              <div class="col-5" ><input type="checkbox" id="secim_okul_devam" name="mezuniyet" onClick="Mezun"/> Devam ediyor</div>
            </div>

            <div class="row" id="mezun_div" style={{display: 'none'}} >
              <label type="text">Okul adı</label>
              <input type="text" id="mezun_okul" class="form-control form-control-dark " placeholder="Okulunuzun adını giriniz"/>
              
              <label type="text">Bölüm Adı</label> 
              <input type="text" id="mezun_bolum" class="form-control form-control-dark " placeholder="Bölümünüzün adını giriniz"/>
            
              <label type="date">Mezuniyet Tarihi</label>
              <input type="date" id="mezun_tarih" placeholder="Mezuniyet tarihinizi giriniz" aria-label="mail"/>
              <label type="text">Diploma Notu</label>
              <input type="text" id="diploma" class="form-control form-control-dark " placeholder="Diploma notunuzu giriniz"/>

            </div>


            <div class="row" id="okul_devam_div" style= {{display: 'none'}} >       
            <label type="text">Okul adı</label>
            <input type="text" id="devam_okul" class="form-control form-control-dark " placeholder="Okulunuzun adını giriniz"/>
            
            <label type="text">Bölüm Adı</label> 
            <input type="text" id="devam_bolum" class="form-control form-control-dark " placeholder="Bölümünüzün adını giriniz"/>   
              </div>


            <div ><hr/></div>

            <h3>Doküman</h3>
            <label type="text">Özgeçmiş</label>
            <div class="input-group">      
              <input type="file" id="ozgecmis" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
              
            </div>
            <label type="text">Diploma</label>
            <div class="input-group">      
              <input type="file" id="diploma_belge" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">İngilizce Yeterlilik Belgesi</label>
            <div class="input-group">      
              <input type="file" id="iyb"class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">İkametgah</label>
            <div class="input-group">      
              <input type="file" id="ikametgah" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">Pasaport</label>
            <div class="input-group">      
              <input type="file" id="pasaport" class="form-control" placeholder="dfsd"/>
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <label type="text">Niyet Mektubu</label>
            <div class="input-group">      
              <input type="file" id="niyet" class="form-control" placeholder="dfsd" />
              <button type="button" class="btn btn-outline-primary" style = {{height: '39px'}}>Yükle</button>
            </div>
            <div ><hr/></div>
            
            <h3>İletişim Bilgileri</h3>
            <label type="text">Telefon Numarası</label>
            <input type="tel" id="telefon" class="form-control form-control-dark " placeholder="Telefon numaranızı giriniz"/>
            
          
            <label for="email">Mail Adresi</label> 
            <input type="email" id="email" name="email" placeholder="Mail adresinizi giriniz"/>      

            

            <label type="text">Adres</label>
            <textarea rows="10" cols="32" id="adres" placeholder="İkamet adresinizi giriniz"></textarea>
          </div>
        </div>
        </div>
        
      </form>
      <div ><hr/></div>
      <div class="row" style={{justifyContent :'end'}}>
        <div class="col-2"style={{paddingRight : '2px', textAlign :'end'}}>
          <button type="reset" class="btn btn-outline-primary ">Yenile</button> 
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-success " style={{backgroundColor: '#0144a8'}}  onClick={Gonder}  >Gönder</button>
        </div>
      </div>      
    </div>
        </>
    );
}

export default Basvuru_formu;