import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';
import Giris from './sayfalar/Giris.js';
import Kayit from './sayfalar/Kayit.js';
import Ana_sayfa from './Ana_sayfa.js';
import Acilis_sayfa from './sayfalar/Acilis_sayfa.js';


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Acilis_sayfa />} />
                <Route path="giris" element={<Giris />} />
                <Route path="kayit" element={<Kayit />} /> 
                {/* <Route path="ana_sayfa" element={<Ana_sayfa />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;