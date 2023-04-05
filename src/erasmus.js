import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Erasmus(){
    return(
        <>
            <body>     
                <div class="container" style={{textAlign: 'justify', borderStyle: 'double', color : '#263238', backgroundColor : 'rgba(207, 216, 220,0.7)', borderRadius: '3%'}}>
                <h1 style={{color:'#0144a8'}} >Erasmus Programı</h1>

                <ul>
                    <a href="#bir"><li>Erasmus nedir?</li></a> 
                    <a href="#iki"> <li>Erasmus ne değildir?</li></a>
                    <a href="#uc"><li>Erasmus ile hangi programlardan yararlanabilirsiniz?</li></a>
                    <a href="#dort"><li>Erasmus kaç ay sürer?</li></a>
                    <a href="#bes"><li>Erasmus başvurusu nasıl yapılır?</li></a>          
                </ul>

                <h3 id="bir" style={{color:'#0144a8'}}>Erasmus nedir?</h3>
                <p>
                    Erasmus+ (Erasmus Plus), Avrupa Birliği tarafından eğitim, iş deneyimi ve sportif aktivite gibi alanlarda kişilerin kendilerini geliştirmeleri için hazırlanmış bir programdır. Erasmus, üniversite ve yüksek lisans öğrencilerinin ve eğitim görevlilerinin eğitimlerine yurt dışındaki bir üniversitede devam etmelerini sağlamaları ve yeni iş olanakları elde edebilmeleri amacıyla kurulmuş bir sistemdir. Erasmus'un sağladığı yurt dışı eğitim ve yurt dışı kariyer olanaklarına bir yurt dışı dil eğitimi ile de adım atabilirsiniz.
                    2021-2027 yılları arasında Hayat Boyu Öğrenme Programları kapsamında uygulanan Erasmus programı, 2014 yılından beri Erasmus+ olarak uygulanmaktadır. Hayat Boyu Öğrenme ismi altında operasyonel olan birçok program (Comenius, Erasmus, Leonardo da Vinci, Grundtvig programları ile Gençlik Programı ve 5 uluslararası iş birliği programı: Erasmus Mundus, Tempus, Alfa, Edulink ve Sanayileşmiş Ülkelerle İş Birliği Programı) artık Erasmus+ çatısı altında toplanıyor ve bu sayede Erasmus başvuruları kişisel bazda oldukça kolaylaşıyor. Kapsamlı bir öğrenci değişim programı olan Erasmus, Erasmus+'ın bir parçası olup öğrencilerin yurtdışında bir üniversitede eğitim görmeleri veya yabancı bir şirkette staj yapmalarına imkan tanır.
                </p>
                        
                <h3 id="iki" style={{color:'#0144a8'}}>Erasmus ne değildir?</h3>
                <p>
                    Erasmus bir burs programı değildir, bir öğrenci değişim harekeliliğidir 
                    Erasmus programı, bir yabancı dil öğrenme programı değildir
                    Erasmus bir diploma programı değildir
                </p>
                            
                <h3 id="uc" style={{color:'#0144a8'}}>Erasmus ile hangi programlardan yararlanabilirsiniz?</h3>
                <p>
                    Erasmus öğrenci değişim programlarının bir parçası olarak iki türlü yurtdışına çıkabilirsiniz:
                    Bir Avrupa üniversitesinde eğitim alarak Avrupalı bir şirkette staj yaparak
                    Öğrenciler iki programa da bir defaya mahsus olmak üzere katılabilirler. Erasmus hibeleri öğrenci başına maksimum olarak 24 ay ile sınırlıdır. Yurtdışı eğitimi yurtdışı stajı ile birleştirmek de mümkündür.
                </p>  

                <h3 id="dort" style={{color:'#0144a8'}}>Erasmus başvurusu nasıl yapılır?</h3>
                <p>
                    Kendi başınıza katılmak istiyorsanız, muhtemelen üniversiteniz, eğitim merkeziniz, şirketiniz veya bir kuruluş aracılığıyla başvurmanız gerekecektir. Bu nedenle okuyorsanız ilk olarak yapmanız gereken üniversitenizin Dış İlişkiler Erasmus Koordinatörlüğü merkezine gitmek olacaktır. Başvurunuzun değerlendirilebilmesi için Erasmus şartları neler, hangi belgeler isteniyor, yabancı dil şartı var mı, Erasmus’a kimler başvurabilir, Erasmus yaş sınırı nedir gibi soruları sizin için cevapladık. 
                </p> 

                <h3 id="bes" style={{color:'#0144a8'}}>Erasmus başvurusu ne zaman?</h3> 
                <p>
                    Erasmus için başvuru tarihleri eğitim aldığınız üniversiteye göre değişiklik gösterir. Bazen yılda iki kez bazense yılda bir kez ve Ocak ya da Haziran ayında alabilir. Bu nedenle üniversitenizle ya da danışmanınızla başvuru tarihleri için erkenden görüşmenizde fayda var. 
                </p>
            </div>  
            </body>
    </>
    );
}

export default Erasmus;