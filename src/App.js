import logo from './Img/logo.png';
import './App.css';
import { Link,Navigate,Routes,Route,useLocation } from 'react-router-dom';
import { useEffect,useRef,useState } from 'react';
import Cookies from 'js-cookie';
import { url,reemplazarAcentos } from './Funciones';
import es from './Img/bandera_espanhol.png'
import en from './Img/bandera_ingles.png'
import Inicio from './Componentes/Inicio';
import ProductosServicios from './Componentes/ProductosServicios';
import Contacto from './Componentes/Contacto';
import CP from "./Componentes/CP"
import CProc from "./Componentes/CProc"
import Q from "./Componentes/Q"
import AUT from "./Componentes/AUT"
import Mapa from './Componentes/Mapa';
import NoEncontrado from './Componentes/NoEncontrado';
function App() {
  const appref=useRef()
  const [scroll,setScroll]=useState(0)
  const [idioma,setIdioma]=useState(Cookies.get("idioma")||"es")
  const linksicon=useRef()
  const idiomas=["es","en"]
  const [show,setShow]=useState(false)
  const [subshow,setSubShow]=useState(false)
  const banderas=[es,en]
  const location=useLocation().pathname.replace('/','')
  const enlaces=["Inicio","Productos y Servicios","Contacto"]
  const enlaces_en=["Home","Products & Services","Contact"]
  const subenlaces=["asiCP Control de Producción","asiPROC Control de Procesos","asiQ Control de Calidad","asiAut Automatización"]
  const subenlaces_en=["asiCP Production Control","asiPROC Process Control","asiQ Quality Control","asiAut Automation"]
  const subpages=[<CP/>,<CProc/>,<Q/>,<AUT/>]
  const pages=[<Inicio subenlaces={subenlaces} subenlaces_en={subenlaces_en}/>,<ProductosServicios subenlaces={subenlaces} subenlaces_en={subenlaces_en} subpages={subpages}/>,<Contacto/>]
  const Idioma=(str)=>{
    setIdioma(str)
    Cookies.set("idioma",str)
  }
  useEffect(()=>{
    if (appref.current){
      appref.current.scrollTo(0,0)
    }
    setShow(false)
    setSubShow(false)
    const observer = new ResizeObserver(() => {
      const isVisible = linksicon.current.offsetParent !== null
        if (!isVisible){
          setShow(false)
          setSubShow(false)
        }
    });
    observer.observe(document.body)
  },[location])
  const onClick=()=>{
    setShow(!show)
    if (!show==false){
      setSubShow(false)
    }
  }
  useEffect(()=>{
    
  },[])
  const onSubClick=()=>{
    setSubShow(!subshow)
  }
  return (
    <div className="App" ref={appref}>
      <header style={{boxShadow:show?'none':''}}>
        <div className='headercontainer' style={{borderBottom:show?'1px solid azure':'none'}}>
          <div className='round-links-icon' ref={linksicon} onClick={()=>{setShow(!show)}}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='enlaces'>
            {enlaces.map((x,i)=>(
              <Link to={'/'+url(x)} className={reemplazarAcentos(location).includes(url(x)) || (i==0 && location.length==0)?'marcado':'enlace'}>{(idioma=="en"?enlaces_en[i]:x).toUpperCase()}</Link>
            ))}
          </div>
          <div className='flex vcenter banderas'>
            {idiomas.map((x,i)=>(<img key={i} src={banderas[i]} className="bandera" onClick={()=>{Idioma(x)}} style={{boxShadow:idioma==x?"0 0 0 0.1rem black, 0 0 0 0.22rem white":"none"}}/>))}
            <Link to={'/'} style={{lineHeight:0}}><img src={logo} className="logo"/></Link>
          </div>
        </div>
        {show?
        <div className='linkbox'>
          {enlaces.map((x,i)=>(
            <div><Link className={reemplazarAcentos(location).includes(url(x)) || (i==0 && location.length==0)?'pulsado':''} style={{width:'100%'}} to={'/'+url(x)}>{idioma=="en"?enlaces_en[i]:x}</Link>
            {i==1?
            <>
              <a onClick={()=>{setSubShow(!subshow)}} className={reemplazarAcentos(location).includes(url(x))?'pulsado':''} style={{backgroundImage:'none',position:'absolute',right:0,top:0,padding:'1rem 1.2rem',transform:`rotate(${subshow?'90':'0'}deg)`}}>►</a>
              {subshow?
                <div className='sublinkbox'>
                  {subenlaces.map((x,i)=>(
                    <div><Link className={reemplazarAcentos(location).includes(url(x))?'subpulsado':''} style={{width:'100%'}} to={'/productos-y-servicios/'+url(x)}>{(idioma=="en"?subenlaces_en[i]:x).replace(' ',' - ')}</Link></div>))}
                </div>
              :null}
            </>
            :null}
            </div>
          ))}
        </div>:null}
      </header>
      <main>
        <div className='content'>
          <div className="logo-titulo">
            <img src={logo} className="logo"/>
            <h1 className='subtitulo'>INDUSTRIAL SOFTWARE & AUTOMATION</h1>
          </div>
          <Routes>
            <Route path={'/'+url(enlaces[0])} element={<Navigate to={'/'}/>}/>
            {enlaces.map((x,i)=>(<Route path={`/${i==0?'':`${url(x)}${i==1?'/*':''}`}`} element={pages[i]}/>))}
            <Route path={'/sitemap'} element={<Mapa enlaces={enlaces} enlaces_en={enlaces_en} subenlaces={subenlaces} subenlaces_en={subenlaces_en}/>}/>
            <Route path='/*' element={<NoEncontrado/>}/>
          </Routes>
        </div>
        <footer>
          <div className='flex vcenter'><p>© ASINOVA {idioma=='en'?'SOLUTIONS':'SOLUCIONES'}, S.L.</p><div className='visible500' style={{margin:'1rem'}}>|</div><Link to='/sitemap'>{idioma=='en'?'Site Map':'Mapa del Sitio'}</Link></div>
          <a href='https://login.ionos.es/?redirect_url=https%3A%2F%2Fmy.ionos.es%2Fmywebsite-overview%3Fmywebsite.pageid%3D1433105&username=www.asinova.es'>{idioma=='en'?'Login':'Iniciar Sesión'}</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
