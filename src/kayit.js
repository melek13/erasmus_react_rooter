import logo from './resimler/khas_logo2.png';
import {sifre_kontrol, giris_kontrol} from './fonksiyonlar';

function Kayit(){
    return(
        <>
         <div class="container"  style={{borderStyle: 'double', color : '#263238', backgroundColor : 'rgba(207, 216, 220,0.7)', marginTop: '49px', borderRadius: '3%'}} id="giris">  
      <div style={{textAlign: 'center'}}>
        <img id="resim" src = {logo} style={{width: '150px', margin: '31px'}}/>
      </div>          
      <h1 style={{textAlign:'center', color:'#0144a8', marginBottom: '31px'}}>Kayıt Ol</h1>
      <form>
        <div class="row justify-content-center">
          <div class="col-6">          
            <ul class="list-group mb-3">
              <input type="email" class="form-control form-control-dark " placeholder="Mail adresinizi giriniz" aria-label="mail" id="mail"/>
              <br></br>
              <input type="password" class="form-control form-control-dark " placeholder="Şifrenizi giriniz" aria-label="password" id="sifre1"/>
              <br></br>
              <input type="password" class="form-control form-control-dark " placeholder="Şifrenizi tekrar giriniz" aria-label="password" id="sifre2"/>
            </ul>
          </div> 
        </div>
      </form>
      <div class="row justify-content-center">
        <div class="col-2"  style={{textAlign:'center', marginBottom: '31px'}}>     
          <p id="sonuc"></p>     
          <p id="sonuc2"></p>     
          <button type="submit" class="btn btn-success" style={{backgroundColor: '#0144a8'}} onClick={() => sifre_kontrol()}>Kayıt Ol</button>
        </div>
      </div>  
    </div>
        
        
        </>


    );
    }

    export default Kayit;