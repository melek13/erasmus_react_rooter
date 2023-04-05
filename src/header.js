import khaslogo from './resimler/khas_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Nav_eleman from './nav_eleman_list';
import {Goster, Sifre_kontrol} from './fonksiyonlar';
import {nav_eleman} from './icerikler';
import logo from './resimler/khas_logo2.png';



function Header(){
    return(
        <>
        <div class="container" style={{borderStyle: 'double', color : '#263238', backgroundColor : 'rgba(207, 216, 220,0.7)', marginTop: '49px', borderRadius: '3%'}} id="sidebar" >
            <div style={{textAlign: 'center'}}>
                <img id="resim" src = {logo} style={{width: '150px', margin: '31px'}} />
            </div> 
            <div class="d-flex flex-column flex-shrink-0" style={{width: '4.5rem'}}>
   
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
    <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search" >
                <input type="search" class="form-control" placeholder="Search..." aria-label="Search" style={{backgroundColor: "none"}}/>
                </form>
        
                <div class="text-end">
                    <div class="row">
                        <div class="col-6">
                        <a href="#"><button type="button" class="btn btn-outline-primary" id="giris_btn" onClick={() => goster("giris_btn")} >Giriş Yap</button></a> 

                        </div>
                        <div class="col-6">
                       <a href="#"><button type="button" class="btn btn-success" style={{backgroundColor: "#0144a8"}} id="kayit_btn" onClick={() => goster("kayit_btn")}>Kayıt Ol</button></a>

                        </div>
                    </div>  
                                          
                        
                    <span id="span" style={{display:"none"}}></span>
                    <a href="#"><button type="button" class="btn btn-danger justify-content-end"  id="cikis_btn" style={{display:"none"}} onclick="logout()">Çıkış</button></a>
                </div>
        
    </ul>
    <div class="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle"/>
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
        <ul class="nav col-lg-auto my-2 justify-content-left my-md-0  ">

                    {nav_eleman.map((eleman, eleman_index) =>
                    (<Nav_eleman
                    nav_eleman ={eleman}
                    tiklandiginda={()=> goster(eleman,eleman_index)}
                    />
                    
                    ))}
        </ul> 
        
      </ul>
    </div>
  </div>
  </div>





        {/* <div class="container">
        <header>
            <div class="row">
                <div class="col-6">
                <a href="#" ><img id="resim" class="d-flex flex-wrap align-item-center justify-content-md-end py-3" src = {khaslogo}/></a>
                </div> 
                <div class="col-6 d-flex flex-wrap align-items-center justify-content-end" id="navbar">
        
                <ul class="nav col-lg-auto my-2 justify-content-center my-md-0  ">
                    {nav_eleman.map((eleman, eleman_index) =>
                    (<Nav_eleman
                    nav_eleman ={eleman}
                    tiklandiginda={()=> goster(eleman,eleman_index)}
                    />
                    
                    ))}
                </ul>        
                </div>
            </div>
            
        
            
            <div class="px-3 py-2 border-bottom mb-3">
                <div class="container d-flex flex-wrap justify-content-center">
        
                <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search" >
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search" style={{backgroundColor: "none"}}/>
                </form>
        
                <div class="text-end">      
                    <a href="#"><button type="button" class="btn btn-outline-primary" id="giris_btn" onClick={() => goster("giris_btn")} >Giriş Yap</button></a> 
                    <a href="#"><button type="button" class="btn btn-success" style={{backgroundColor: "#0144a8"}} id="kayit_btn" onClick={() => goster("kayit_btn")}>Kayıt Ol</button></a>
                    <span id="span" style={{display:"none"}}></span>
                    <a href="#"><button type="button" class="btn btn-danger justify-content-end"  id="cikis_btn" style={{display:"none"}} onclick="logout()">Çıkış</button></a>
                </div>
        
                </div>
            </div>
        </header>
        </div>       
       */}
    </>
    );
}

export default Header;
