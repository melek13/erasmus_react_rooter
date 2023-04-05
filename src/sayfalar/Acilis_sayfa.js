import {Giris_kontrol, Sifre_kontrol} from '../fonksiyonlar';
import { Link } from 'react-router-dom';

function Acilis_sayfa(){
    return(
        <>
        <div class="container" style={{borderStyle: 'double', color : '#263238', backgroundColor : 'rgba(207, 216, 220,0.7)', marginTop: '49px', borderRadius: '3%'}}  >
            <div class="d-flex align-items-center justify-content-center justify-content-s-start py-3" >
                <h1>ERASMUS  BAŞVURUSUNA  KALAN  SÜRE</h1>
            </div>
            <div class="d-flex align-items-center justify-content-center justify-content-s-start">
                <span id="sayac"></span>  
            </div>
            <div class="row justify-content-center">
                <div class="col-2" style={{textAlign:'center', marginBottom: '31px'}}>   
                    <Link to="/giris"><button type="submit" class="btn btn-outline-primary"  id="giris_btn">Giriş Yap</button></Link><br></br><br></br>                    
                    <p>
                        Hesabınız yok mu? 
                    </p>
                    <h6>
                        <Link to="/kayit">Kayıt Ol!</Link>
                    </h6>
                </div>
            </div> 
        
    </div>

        
        </>
    );
}
export default Acilis_sayfa;