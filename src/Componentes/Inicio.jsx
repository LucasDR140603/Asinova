import Cookies from "js-cookie"
import logo from '../Img/logo.png'
import i1 from '../Img/I1.png'
import piramide from '../Img/Piramide.png'
import fieldbus from '../Img/Fieldbus.png'
import carrusel17 from '../Img/Carrusel17.png'
import carrusel15 from '../Img/Carrusel15.jpg'
import cocedor from '../Img/Cocedor.jpg'
import carrusel10 from '../Img/Carrusel10.jpg'
import carrusel14 from '../Img/Carrusel14.png'
import cierre from '../Img/Cierre.jpg'
import carrusel5 from '../Img/Carrusel5.png'
import carrusel13 from '../Img/Carrusel13.png'
import carrusel1 from '../Img/Carrusel1.png'
import carrusel2 from '../Img/Carrusel2.png'
import carrusel3 from '../Img/Carrusel3.png'
import carrusel4 from '../Img/Carrusel4.png'
import carrusel6 from '../Img/Carrusel6.jpg'
import carrusel7 from '../Img/Carrusel7.jpg'
import carrusel8 from '../Img/Carrusel8.jpg'
import carrusel9 from '../Img/Carrusel9.jpg'
import carrusel11 from '../Img/Carrusel11.jpg'
import carrusel12 from '../Img/Carrusel12.jpg'
import carrusel16 from '../Img/Carrusel16.png'
import linkedin from '../Img/linkedin.png'
import ReactHtmlParser from 'html-react-parser'
import LPS from "./LPS"
import Carrusel from "./Carrusel"
export default function({subenlaces,subenlaces_en}){
    const idioma=Cookies.get("idioma")||'es'
    const parse=ReactHtmlParser
    return <>
        <div className="flex min1100" style={{gap:'2rem'}}>
            <div>
                <div className='img-texto centro'>
                    <img src={i1} style={{backgroundColor:'white',height:'20vmin'}} className='img-pagina'/>
                    <p>{idioma=="en"?"PC, PLC, SCADA, HMI, Database programming...":"Programación PC, PLC, SCADA, HMI, Bases de Datos..."}</p>
                </div>
                <div className='img-texto centro'>
                    <img src={piramide}/>
                    <p>{idioma=="en"?"Traceability, MES, ERP Integration...":"Integración Trazabilidad, MES, ERP..."}</p>
                </div>
            </div>
            <div>
                <p style={{textAlign:'justify'}}>{parse(idioma=="en"?"With extensive experience in various industrial sectors (<span>Food, Automotive, Renewables, etc.</span>), <span>ASINOVA</span> offers you industrial programming and automation services and products adapted to your needs, using the latest technologies <span>PC - DATABASES - PLC - HMI - SCADA - FIELDBUS - ARTIFICIAL VISION - WEIGHING - RFID AND OPTICAL IDENTIFICATION</span> among others.":"Con una amplia experiencia en diversos sectores industriales (<span>Alimentación, Automóvil, Renovables, etc.</span>), <span>ASINOVA</span> le ofrece servicios y productos de programación y automatización industrial adaptados a sus necesidades, empleando para ello las últimas tecnologías <span>PC - BASES DE DATOS - PLC - HMI - SCADA - FIELDBUS - VISION ARTIFICIAL - PESAJE - IDENTIFICACION RFID Y OPTICA</span> entre otras.")}</p>
                <br/>
                <div className='img-texto centro'>
                    <img src={fieldbus} style={{backgroundColor:'white'}} className='fieldbus'/>
                    <p>{idioma=="en"?"Industrial Field Bus (FieldBus)":"Bus de Campo Industrial (FieldBus)"}</p>
                </div>
            </div>
            <div>
                <p>{idioma=="en"?"We help you control and optimize the efficiency of your production process by integrating your machines with your information systems, thereby achieving the following benefits:":"Le ayudamos a controlar y a optimizar la eficiencia de su proceso productivo, integrando sus máquinas con sus sistemas de información y obteniendo con ello los siguientes beneficios:"}</p>
                <ul>
                    <li>{parse(idioma=="en"?"Improving the <span>Efficiency</span> of your Production Lines.":"Mejora de la <span>Eficiencia</span> de sus Líneas de Producción.")}</li>
                    <li>{parse(idioma=="en"?"<span>Traceability</span> Automation.":"Automatización de <span>Trazabilidad</span>.")}</li>
                    <li>{parse(idioma=="en"?"<span>Real-Time Information</span> Availability.":"Disponibilidad de <span>Información en Tiempo Real</span>.")}</li>
                    <li>{idioma=="en"?"Decision-making automation.":"Automatización de toma de decisiones."}</li>
                    <li>{idioma=="en"?"Reduction of data entry work.":"Reducción de trabajo de introducción de datos."}</li>
                    <li>{parse(idioma=="en"?"Improved response in <span>Audits</span>.":"Mejora de respuesta en <span>Auditorías</span>.")}</li>
                    <li>{parse(idioma=="en"?"Custom <span>integration</span> with <span>MES and ERP</span> systems.":"<span>Integración</span> a medida con sistemas <span>MES y ERP</span>.")}</li>
                </ul>
            </div>
        </div>
        <hr/>
        <h1 style={{textAlign:'center'}}>{idioma=="en"?"Product and Service Lines":"Líneas de Producto y Servicio"}</h1>
        <hr/>
        <br/>
        <div className="flex min1100" style={{gap:'2rem'}}>
            <LPS subenlace={subenlaces[0]} subenlace_en={subenlaces_en[0]} imgs={[carrusel17,carrusel15]} texto={idioma=="en"?"Automatic real-time production control systems, integrating <span>weighing, piece counting, RFID identification, barcodes, MES systems, ERP</span>...":"Sistemas automáticos de control de producción en tiempo real, integrando <span>pesaje, contaje de piezas, identificación RFID, códigos de barras, Sistemas MES, ERP</span>..."}/>
            <LPS subenlace={subenlaces[1]} subenlace_en={subenlaces_en[1]} imgs={[cocedor,carrusel10]} texto={idioma=="en"?"Control, monitoring, recording, reporting, and graphing of industrial processes involving temperature, pressure, etc., such as: <span>Sterilization, Cooking, Defrosting</span>...":"Control, supervisión, registro, informes y gráficas de procesos industriales de temperatura, presión, etc. Tales como: <span>Esterilización, Cocción, Descongelación</span>..."}/>
            <LPS subenlace={subenlaces[2]} subenlace_en={subenlaces_en[2]} imgs={[carrusel14,cierre]} texto={idioma=="en"?"The image shows our <span>Machine Vision (CCVS)</span> equipment for the automatic control and measurement of sealing parameters for canned food containers...":"La imagen corresponde a nuestro equipo de <span>Visión Artificial -CCVS</span>, para el control y medición automática de los parámetros de cierre de envases de conserva..."}/>
            <LPS subenlace={subenlaces[3]} subenlace_en={subenlaces_en[3]} imgs={[carrusel5,carrusel13]} texto={idioma=="en"?"PLC-HMI automation and programming of machines and production lines, including <span>manufacturing and installation of control panels and automation systems</span>...":"Automatización y programación PLC-HMI de máquinas y líneas de producción, incluyendo <span>fabricación e instalación de cuadros y automatismos</span>..."}/>
        </div>
        <br/>
        <hr/>
        <br/>
        <Carrusel imagenes={[carrusel1,carrusel2,carrusel3,carrusel4,carrusel5,carrusel6,carrusel7,carrusel8,carrusel9,carrusel10,carrusel11,carrusel12,carrusel13,carrusel14,carrusel15,carrusel16,carrusel17]}/>
        <a className='aqua' href="https://www.linkedin.com/company/asinova-soluciones?trk=eml-company_page_created-body-view_cp_button&midToken=AQGSTYPgQU6OoA&fromEmail=fromEmail&ut=3f3-xZx1gam7c1"><img src={linkedin} className="linkedin"/>{idioma=="en"?"View the profile of ASINOVA INDUSTRIAL PROGRAMMING":"Ver el perfil de ASINOVA PROGRAMACION INDUSTRIAL"}</a>
    </>
}