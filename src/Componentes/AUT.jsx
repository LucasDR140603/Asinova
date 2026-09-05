import Carrusel from './Carrusel'
import carrusel5 from '../Img/Carrusel5.png'
import carrusel4 from '../Img/Carrusel4.png'
import carrusel1 from '../Img/Carrusel1.png'
import carrusel2 from '../Img/Carrusel2.png'
import carrusel3 from '../Img/Carrusel3.png'
import carrusel16 from '../Img/Carrusel16.png'
import carrusel17 from '../Img/Carrusel17.png'
import carrusel7 from '../Img/Carrusel7.jpg'
import carrusel6 from '../Img/Carrusel6.jpg'
import ReactHtmlParser from 'html-react-parser'
import Cookies from 'js-cookie'
export default function({}){
    const idioma=Cookies.get("idioma") || "es"
    const parse=ReactHtmlParser
    return <>
            <div className='flex min1100' style={{justifyContent:'space-between',gap:'1rem'}}>
                <div>
                    <h2 style={{lineHeight:0}}><span>asiAUT</span></h2>
                    <img src={carrusel5} className='img-pagina'/>
                </div>
                <div>
                    <h2 style={{lineHeight:0,textAlign:'end'}}>{idioma=="en"?"AUTOMATION":"AUTOMATIZACIÓN"}</h2>
                    <p style={{textAlign:'right'}}>{parse(idioma=="en"?"Automation of machines and production lines, including <span>manufacturing and installation of panels and automation systems</span>.":"Automatización de máquinas y líneas de producción, incluyendo <span>fabricación e instalación de cuadros y automatismos</span>.")}</p>
                </div>
            </div>
            <hr/>
            <p>{idioma=="en"?"Development and Programming of Control Panels for Machines and Manufacturing Lines:":"Elaboración y Programación de Cuadros de Control de Máquinas y Líneas de Fabricación:"}</p>
            <ul>
                <li><span>{idioma=="en"?"PLC, HMI, Industrial PC, SCADA programming.":"Programación PLC, HMI, PC Industrial, SCADA."}</span></li>
                <li>{parse(idioma=="en"?"Frequency <span>Variable Drives</span>.":"<span>Variadores</span> de Frecuencia.")}</li>
                <li><span>{idioma=="en"?"Servo drives. Axis positioning.":"Servo-accionamientos. Posicionamiento de ejes."}</span></li>
                <li><span>{idioma=="en"?"Pneumatic Automation.":"Automatismos Neumáticos."}</span></li>
                <li>{idioma=="en"?"Data Acquisition and Recording.":"Adquisición y Registro de Datos."}</li>
                <li>{idioma=="en"?"Detection.":"Detección."}</li>
                <li>{idioma=="en"?"Valve Control.":"Control de Válvulas."}</li>
                <li>{idioma=="en"?"PID regulation.":"Regulación PID."}</li>
                <li>
                    {idioma=="en"?"Industrial Communications.":"Comunicaciones Industriales."}
                    <ul>
                        <li><span>{idioma=="en"?"Fieldbus Ethernet/IP, Profibus, ProfiNet, DeviceNet,ModbusRTU/TCP...":"Bus de campo Ethernet/IP, Profibus, ProfiNet, DeviceNet,ModbusRTU/TCP..."}</span></li>
                        <li><span>{idioma=="en"?"Weight reading, barcodes, RFID":"Lectura de peso, códigos de barras, RFID"}</span></li>
                        <li><span>{idioma=="en"?"Integration of Ink-Jet Markers, Laser Markers, Labelers.":"Integración Marcadoras Ink-Jet, Láser, Etiquetadoras."}</span></li>
                    </ul>
                </li>
            </ul>
            <hr/>
            <h2>{idioma=="en"?"RECENT PROJECTS":"PROYECTOS RECIENTES"}</h2>
            <p>{parse(idioma=='en'?"Development of automation and control of the <a className='verde' href='https://cogersa.es'>Cogersa</a> <span>waste treatment plant</span> in Asturias, giving operators complete control at their fingertips, improving efficiency and responsiveness. We have implemented a comprehensive solution using <span>Siemens TIA Portal</span> for programming:":"Desarrollo de la automatización y control de la <span>planta de tratamiento de residuos</span> de <a className='verde' href='https://cogersa.es'>Cogersa</a> en Asturias, dándole a los operarios el control total en la palma de su mano, mejorando la eficiencia y la respuesta en planta. Hemos implementado una solución integral utilizando <span>Siemens TIA Portal</span> para la programación de:")}</p>
            <ul>
                <li>PLC S71500</li>
                <li>SCADA WinCC Unified</li>
                <li>Tablets</li>
            </ul>
            <iframe style={{display:'block', margin:'0 auto',width:'50vw',height:'40vw'}} src="https://www.youtube.com/embed/5SeKGC9FIoY?si=6wiapg-0Vak-IBac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br/><hr/><br/>
            <p>{parse(idioma=="en"?"PLC+SCADA+HMI+Production Control Application programming for the new <a className='verde' href='https://www.sogama.gal/es'>Sogama</a> plant in Galicia, managed by <a className='verde' href='https://valtalia.com/web/'>Valtalia</a> in Galicia, for the <span>treatment, classification and recovery of materials from urban solid waste (MSW).</span>":"Programación PLC+SCADA+HMI+Aplicación de Control de Producción de nueva planta de <a className='verde' href='https://www.sogama.gal/es'>Sogama</a>, gestionada por <a className='verde' href='https://valtalia.com/web/'>Valtalia</a> en Galicia, de <span>Tratamiento, Clasificación y Recuperación de materiales procedentes de Residuo Sólido Urbano (RSU).</span>")}</p>
            <ul>
                <li>{parse(idioma=="en"?"Local Control via <span>Tablets</span>":"Mando Local mediante <span>Tablets</span>")}</li>
                <li>{parse("Secure Industrial Communications <span><a className='subrayado gold' href='https://www.rockwellautomation.com/es-es.html'>Rockwell</a> - <a className='subrayado gold' href='https://www.cisco.com/c/en/us/support/switches/catalyst-3650-series-switches/series.html'>Cisco</a></span>: WiFi, Copper Ethernet Rings <a className='gold subrayado' href='https://www.odva.org/Publication-Download/ID/202/Guidelines-for-Using-Device-Level-Ring-DLR-with-EtherNetIP'>DLR</a> and fiber optic <a className='gold subrayado' href='https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/116384-technote-rep-00.html'>REP</a>.","Comunicaciones Industriales seguras <span><a className='subrayado gold' href='https://www.rockwellautomation.com/es-es.html'>Rockwell</a> - <a className='subrayado gold' href='https://www.cisco.com/c/en/us/support/switches/catalyst-3650-series-switches/series.html'>Cisco</a></span>: WiFi, Anillos Ethernet de cobre <a className='gold subrayado' href='https://www.odva.org/Publication-Download/ID/202/Guidelines-for-Using-Device-Level-Ring-DLR-with-EtherNetIP'>DLR</a> y fibra óptica <a className='gold subrayado' href='https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/116384-technote-rep-00.html'>REP</a>.")}</li>
                <li><span>{idioma=="en"?"Safety programmed in PLC SIL2 and SIL3 PLd PLe With Rockwell GuardLogix L83 CPUs.":"Seguridad programada en PLC SIL2 y SIL3 PLd PLe Con CPUs Rockwell GuardLogix L83."}</span></li>
                <li>{idioma=="en"?"Distributed SCADA.":"SCADA distribuido."}</li>
                <li>{parse(idioma=="en"?"Mass Data Storage (<span>Virtualized Servers <a className='gold subrayado' href='https://www.dell.com/en-us/shop/scc/sc/servers'>Dell</a> - <a className='gold subrayado' href='https://www.vmware.com/content/vmware/vmware-published-sites/us/products/vcenter-server.html.html'>VMware VCenter</a></span> and redundant <span>RAID</span> disk arrays)":"Almacenamiento masivo de datos (<span>Servidores virtualizados <a className='gold subrayado' href='https://www.dell.com/en-us/shop/scc/sc/servers'>Dell</a> - <a className='gold subrayado' href='https://www.vmware.com/content/vmware/vmware-published-sites/us/products/vcenter-server.html.html'>VCenter VMware</a></span> y cabinas de discos <span>RAID</span> redundantes)")}</li>
                <li>{parse(idioma=="en"?"<span>Ethernet data communication with drives and starters</span>. With complete diagnostic information and remote parameterization.":"Comunicación de datos <span>Ethernet con Variadores y Arrancadores</span>. Con información completa de diagnóstico y parametrización remota.")}</li>
                <li>{parse(idioma=="en"?"Production Control application developed in the <span><a className='gold subrayado' href='https://dotnet.microsoft.com/es-es/'>.NET</a> / <a className='gold subrayado' href='https://learn.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-9.0'>WPF</a></span> programming environment, with <span>customizable DashBoards</span> of graphs and tables of production data in real time and periodic.":"Aplicación de Control de Producción desarrollada en entorno de programación <span><a className='gold subrayado' href='https://dotnet.microsoft.com/es-es/'>.NET</a> / <a className='gold subrayado' href='https://learn.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-9.0'>WPF</a></span>, con <span>DashBoards personalizables</span> de Gráficas y tablas de datos de producción en tiempo real y periódico.")}</li>
                <li>{parse(idioma=="en"?"<span>Gateways</span> for communication with other equipment and PLCs: <span>ModBus TCP/RTU, <a className='gold subrayado' href='https://us.profinet.com/technology/profinet/'>ProfiNet</a></span>":"<span>Gateways</span> para comunicación con otros equipos y PLCs: <span>ModBus TCP/RTU, <a className='gold subrayado' href='https://us.profinet.com/technology/profinet/'>ProfiNet</a></span>")}</li>
            </ul>
            <Carrusel imagenes={[carrusel4,carrusel5,carrusel1,carrusel2,carrusel3,carrusel16,carrusel17]}/>
            <br/><hr/>
            <h2 style={{textAlign:'center'}}><span>{idioma=="en"?"Automation of industrial biomass boilers":"Automatización de calderas industriales de Biomasa"}</span></h2>
            <div className='flex min1100' style={{justifyContent:'space-around',margin:'0 auto'}}>
                <img src={carrusel7} className='img-pagina' style={{display:'block',margin:'0 auto'}}/>
                <img src={carrusel6} className='img-pagina' style={{display:'block',margin:'0 auto'}}/>
            </div>
        </>
}