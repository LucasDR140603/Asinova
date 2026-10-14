import Cookies from "js-cookie"
import { url,reemplazarAcentos } from "../Funciones"
import { useLocation } from "react-router-dom"
import LPSHorizontal from './LPSHorizontal'
import carrusel15 from '../Img/Carrusel15.jpg'
import cocedor from '../Img/Cocedor.jpg'
import carrusel14 from '../Img/Carrusel14.png'
import carrusel13 from '../Img/Carrusel13.png'
import linkedin from '../Img/linkedin.png'
import i1 from '../Img/I1.png'
import fieldbus from '../Img/Fieldbus.png'
import piramide from '../Img/Piramide.png'
import { Link,Routes,Route } from "react-router-dom"
import NoEncontrado from "./NoEncontrado"
import {Tabs,Tab} from '@mui/material'
export default function({subenlaces,subenlaces_en,subpages}){
    const idioma=Cookies.get("idioma")||'es'
    const location=useLocation()
    return <>
        <div className="flex" style={{gap:'2rem'}}>
            <div className="flex visible min1100" style={{flexDirection:'column',alignItems:'start',gap:'1rem'}}>
                <Tabs
                    orientation="vertical"
                    value={reemplazarAcentos(location.pathname)}
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {subenlaces.map((x,i)=>(
                        <Tab key={i} component={Link} label={x.toUpperCase().replace(' ',' - ')} value={'/productos-y-servicios/'+url(x)} to={'/productos-y-servicios/'+url(x)}/>
                    ))}
                </Tabs>
                {/* <div className="flex" style={{flexDirection:'column',gap:'1rem',width:'100%'}}>
                {subenlaces.map((x,i)=>(
                    <Link style={{boxSizing:'border-box',width:'100%',textAlign:'center',fontWeight:'bold',letterSpacing:'1px'}} className={reemplazarAcentos(location.pathname).includes(url(x))?'marcado':'enlace'} to={'/productos-y-servicios/'+url(x)}>{(idioma=='en'?subenlaces_en[i]:x).replace(' ',' - ')}</Link>
                ))}
                </div> */}
                <a className='aqua' href='https://www.linkedin.com/company/asinova-soluciones?trk=eml-company_page_created-body-view_cp_button&midToken=AQGSTYPgQU6OoA&fromEmail=fromEmail&ut=3f3-xZx1gam7c1'><img src={linkedin}/>{idioma=="en"?"Asinova on LinkedIn":"Asinova en linkedin"}</a>
                <div style={{minWidth:'100%'}}>
                    <img src={i1} style={{backgroundColor:'white',width:'100%'}}/>
                    <p style={{fontSize:'0.9rem'}}>{idioma=="en"?"PC, PLC, HMI, SCADA programming":"Programación PC, PLC, HMI, SCADA"}</p>
                </div>
                <div style={{minWidth:'100%'}}>
                    <img src={fieldbus} style={{backgroundColor:'white',width:'100%'}}/>
                    <p style={{fontSize:'0.9rem'}}>{idioma=="en"?"Industrial Field Bus (FieldBus)":"Bus de Campo Industrial (FieldBus)"}</p>
                </div>
                <div className='flex' style={{minWidth:'100%',width:'min-content'}}>
                    <img src={piramide}/>
                    <p style={{fontSize:'0.9rem'}}>{idioma=="en"?"Integration with Traceability, MES and ERP Systems":"Integración con Trazabilidad, Sistemas MES y ERP"}</p>
                </div>
            </div>
            <div style={{flex:'1',width:'100%'}}>
                <Routes>
                    <Route path="/" element={<>
                        <h2 style={{textAlign:'end',marginTop:'0rem'}}>{idioma=='en'?'PRODUCTS Y SERVICES':'PRODUCTOS Y SERVICIOS'}</h2>
                        <div className="flex" style={{flexDirection:'column',gap:'1rem'}}>
                            <LPSHorizontal subenlace={subenlaces[0]} subenlace_en={subenlaces_en[0]} img={carrusel15} texto={idioma=="en"?"Automatic real-time production control systems, integrating <span>weighing, piece counting, RFID identification, barcodes, MES systems, ERP</span>...":"Sistemas automáticos de control de producción en tiempo real, integrando <span>pesaje, contaje de piezas, identificación RFID, códigos de barras, Sistemas MES, ERP</span>..."}/>
                            <LPSHorizontal subenlace={subenlaces[1]} subenlace_en={subenlaces_en[1]} img={cocedor} texto={idioma=="en"?"Control, monitoring, recording, reporting, and graphing of industrial processes involving temperature, pressure, etc., such as: <span>Sterilization, Cooking, Defrosting</span>...":"Control, supervisión, registro, informes y gráficas de procesos industriales de temperatura, presión, etc. Tales como: <span>Esterilización, Cocción, Descongelación</span>..."}/>
                            <LPSHorizontal subenlace={subenlaces[2]} subenlace_en={subenlaces_en[2]} img={carrusel14} texto={idioma=="en"?"The image shows our <span>Machine Vision (CCVS)</span> equipment for the automatic control and measurement of sealing parameters for canned food containers.":"La imagen corresponde a nuestro equipo de <span>Visión Artificial -CCVS</span>, para el control y medición automática de los parámetros de cierre de envases de conserva..."}/>
                            <LPSHorizontal subenlace={subenlaces[3]} subenlace_en={subenlaces_en[3]} img={carrusel13} texto={idioma=="en"?"Automation of machines and production lines, including <span>manufacturing and installation of panels and automation systems</span>. The image corresponds to the PLC-HMI application of a <span>Biomass Boiler</span>...":"Automatización de máquinas y líneas de producción, incluyendo <span>fabricación e instalación de cuadros y automatismos</span>. La imagen corresponde a la aplicación PLC-HMI de una <span>Caldera de Biomasa</span>..."}/>
                        </div>
                    </>}/>
                    {subenlaces.map((x,i)=>(
                        <Route path={"/"+url(x)} element={subpages[i]}/>
                    ))}
                    <Route path={"/*"} element={<NoEncontrado/>}/>
                </Routes>
            </div>
        </div>
    </>
}