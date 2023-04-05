import logo from './resimler/khas_logo2.png';
import {giris_kontrol} from './fonksiyonlar';


function Giris() {
    return(
        <>
          <div class="container" style={{borderStyle: 'double', color : '#263238', backgroundColor : 'rgba(207, 216, 220,0.7)', marginTop: '49px', borderRadius: '3%'}} id="giris" >
            <div style={{textAlign: 'center'}}>
            <img id="resim" src = {logo} style={{width: '150px', margin: '31px'}} />
            </div>            
            <h1 style={{textAlign:'center', color:'#0144a8', marginBottom: '31px'}} >Giriş Yap</h1>
            <form>
            <div class="row justify-content-center py-2">
                <div class="col-6">          
                    <ul class="list-group mb-3">
                        <label for="email"> </label>
                        <input type="email" class="form-control form-control-dark " placeholder="Mail adresinizi giriniz" aria-label="mail" id="mail"/>
                        <br></br> 
                        <input type="password" class="form-control form-control-dark " placeholder="Şifrenizi giriniz" aria-label="password" id="sifre"/>
                    </ul>
                </div> 
            </div>
            <p id="yazi1" style={{textAlign:'center'}}></p>
            <p id="yazi2" style={{textAlign:'center'}}></p> 
            </form>
            <div class="row justify-content-center">
            <div class="col-2" style={{textAlign:'center', marginBottom: '31px'}}>   
            <button class="btn btn-outline-primary" onClick={() => giris_kontrol()}  id="giris_btn">Giriş Yap</button><br></br><br></br>                    
            <a href="#"><button type="button" class="btn btn-success" style={{backgroundColor: '#0144a8'}} id="kayit_btn">Kayıt Ol</button></a>    
            </div>
            </div>  
        </div>       
        
        </>
    );
}

export default Giris;