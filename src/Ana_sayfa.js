import khaslogo from './resimler/khas_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Nav_eleman from './komponentler/nav_eleman_list';
import {Goster, Sifre_kontrol, Cikis, Kontrol} from './fonksiyonlar';
import {nav_eleman} from './komponentler/icerikler';
import logo from './resimler/khas_logo2.png';



function Ana_sayfa(){

    // const kullanici = sessionStorage.getItem("user");
    // const kullanici_adi = kullanici.split(",");


    return(
        <>
        <div class="container" style={{borderStyle: 'double', color : '#263238', backgroundColor : 'rgba(207, 216, 220,0.7)', marginTop: '49px', borderRadius: '7%', height : '100%' }} id="sidebar" >
            <div style={{textAlign: 'center'}}>
                <img id="resim" src = {logo} style={{width: '150px', margin: '31px'}} />
            </div> 
            <div style={{textAlign: 'center'}}>
                {/* <p>Hoşgeldiniz {kullanici_adi[0]}</p>   */}
                <p>Hoşgeldiniz </p>  

            </div>
            <div class="d-flex flex-column flex-shrink-0" style={{width: '10rem'}}>
            
   
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">    
        
                <div class="">                                      
                                             
                     
                    <ul class="nav col-lg-auto my-2 justify-content-left my-md-0  ">
                    <br/>

                        {nav_eleman.map((eleman, eleman_index) =>
                        (<Nav_eleman
                        nav_eleman ={eleman}
                        tiklandiginda={()=> Goster(eleman,eleman_index)}
                        />

                        ))}
                        
                    </ul> 
                                                            
                        
                    <a href="#"><button type="button" class="btn btn-danger justify-content-end"  id="cikis_btn"  onClick={Cikis}>Çıkış</button></a>
                    
                </div>
        
    </ul>
    
  </div>
  </div>

    </>
    );
}

export default Ana_sayfa;
