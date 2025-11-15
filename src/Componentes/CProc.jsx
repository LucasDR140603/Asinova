import cocedor from '../Img/Cocedor.jpg'
import consulta from '../Img/Consulta.jpg'
import vision from '../Img/VisionTerminal.jpg'
import carrusel10 from '../Img/Carrusel10.jpg'
import carrusel9 from '../Img/Carrusel9.jpg'
import informe from '../Img/Informe.jpg'
import proceso from '../Img/Proceso.jpg'
import ReactHtmlParser from 'html-react-parser'
import Cookies from 'js-cookie'
export default function({}){
    const idioma=Cookies.get("idioma") || "es"
    const parse=ReactHtmlParser
    return <div>
        <div className="flex min1100" style={{gap:'1rem',justifyContent:'space-between'}}>
            <div>
                <h2 style={{lineHeight:0}}><span>asiCProc</span></h2>
                <img src={cocedor} className='img-pagina'/>
            </div>
            <div>
                <h2 style={{lineHeight:0,textAlign:'end'}}>{idioma=="en"?"PROCESS CONTROL":"CONTROL DE PROCESOS"}</h2>
                <p style={{textAlign:'end'}}>{parse(idioma=="en"?"Control, monitoring, recording, reporting, and graphing of industrial processes involving temperature, pressure, etc., such as: <span>Autoclave Sterilization, Cooking, Defrosting</span>...":"Control, supervisión, registro, informes y gráficas de procesos industriales de temperatura, presión, etc. Tales como: <span>Esterilización en Autoclave, Cocción, Descongelación</span>...")}</p>
            </div>
        </div>
        <hr/>
            <iframe src="https://drive.google.com/file/d/1dzQrjOrXOM4QTPj8qxtsAOgqk7vlybad/preview" class="pdf" allow="autoplay"></iframe>
        <hr/>
        <div>
            <p>{parse(idioma=="en"?"Complete control systems for <span>automatic transformation and treatment processes, including</span>:":"Sistemas completos de Control de <span>Procesos automáticos de transformación y tratamiento, incluyendo</span>:")}</p>
            <ul>
                <li>{idioma=="en"?"Manufacturing of control panels":"Fabricación de cuadros de control"}</li>
                <li>{parse(idioma=="en"?"<span>PLC, HMI, SCADA, PC</span> programming":"Programación <span>PLC, HMI, SCADA, PC</span>")}</li>
                <li>{parse(idioma=="en"?"Real-time monitoring of machine status and <span>dynamic process graphics</span>.":"Monitorización en tiempo real del estado de la máquina y <span>gráfica dinámica</span> de proceso.")}</li>
                <li>{parse(idioma=="en"?"Periodic monitoring and recording of process variables: <span>Temperature, pressure, status of valves, pumps, motors, doors</span>...":"Control y registro periódico de variables de proceso: <span>Temperatura, presión. estado de válvulas, bombas, motores, puertas</span>...")}</li>
                <li>{parse(idioma=="en"?"<span>PID control</span> of proportional and discrete all-or-nothing valves":"<span>Regulación PID</span> de válvulas proporcionales y discretas 'todo-nada'")}</li>
                <li>{parse(idioma=="en"?"<span>Graph with advanced functions</span> with sliding window of time and process values, zoom and axis sliding, customization of colors and scale, dynamic selection of values ​​to display or hide (temperature, pressure..., status of valves and recirculation pump, alarms...)":"<span>Gráfica con funciones avanzadas</span> de ventana deslizante de tiempo y valores de proceso, zoom y deslizamiento de ejes, personalización de colores y escala, selección dinámica de valores a visualizar u ocultar (temperatura, presión..., estado de válvulas y bomba de recirculación, alarmas...)")}</li>
                <li>{parse(idioma=="en"?"Scalable and customizable visualization with <a className='aqua' href='https://learn.microsoft.com/es-es/dotnet/desktop/wpf/?view=netdesktop-9.0&redirectedfrom=MSDN'>WPF</a> technology.":"Visualización escalable y personalizable con tecnología <a className='aqua' href='https://learn.microsoft.com/es-es/dotnet/desktop/wpf/?view=netdesktop-9.0&redirectedfrom=MSDN'>WPF</a>.")}</li>
                <li>{idioma=="en"?"Remote monitoring and control of customizable sets of machines in a single window":"Monitorización y control remoto de conjuntos personalizables de máquinas en una única ventana"}</li>
                <li>{idioma=="en"?"Generation of process lists and reports, including graphs.":"Generación de listados e informes de procesos, incluyendo gráficas."}</li>
                <li><span className='aqua'>{idioma=="en"?"Meets requirements: FDA - CFR 21 Part 11":"Cumple con requisitos: FDA - CFR 21 Part 11"}</span></li>
            </ul>
            <p className='verde'>{idioma=="en"?"Options upon request:":"Opciones a petición del cliente:"}</p>
            <ul>
                <li><span>{idioma=="en"?"Custom developments and adaptations.":"Desarrollos y adaptaciones a medida."}</span></li>
                <li><span>{idioma=="en"?"Automatic integration and linking of traceability and MES/ERP systems.":"Integración y vinculación automática de trazabilidad y sistemas MES / ERP."}</span></li>
                <li><span>{idioma=="en"?"Product tracking using RFID identification / Barcodes...":"Seguimiento de producto mediante identificación RFID / Códigos de barras..."}</span></li>
                <li><span>{idioma=="en"?"Adaptation to existing machines, with or without replacement of the control system.":"Adaptación a máquinas ya existentes, con sustitución o no de su sistema de control."}</span></li>
                <li><span>{idioma=="en"?"Machine-level monitoring versions on industrial PCs and HMI terminals.":"Versiones de supervisión a pie de máquina en PC industrial y terminal HMI."}</span></li>
            </ul>
            <hr/>
            <h2 className='aqua'>{parse(idioma=="en"?"<span>asiPROC</span> Product Range":"Gama de Productos <span>asiPROC</span>")}</h2>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={cocedor} className='img-pagina'/>
                    <p>{idioma=="en"?"Real-time on-site and remote monitoring and control (PC version)":"Supervisión y control a pie de máquina y remoto en tiempo real (Versión PC)"}</p>
                    <img src={consulta} className='img-pagina'/>
                    <p>{idioma=="en"?"Query and print recorded processes, including graphs":"Consulta e impresión de procesos registrados, incluyendo gráficas"}</p>
                    <img src={vision} className='img-pagina'/>
                </div>
                <div className='col-content'>
                    <h2 style={{marginBottom:'0'}}>asiPROC-AC</h2>
                    <h2><span>{idioma=="en"?"Autoclave Sterilization":"Esterilización en Autoclave"}</span></h2>
                    <p className='aqua'>{idioma=="en"?"General Features:":"Características Generales:"}</p>
                    <ul >
                        <li>{parse(idioma=="en"?"Definition of recipes for variable quantity and type of phases (filling, heating, holding, cooling, and emptying), including definition of <span>time-temperature-pressure ramps</span>.":"Definición de recetas de cantidad y tipo de fases variable (llenado, calentamiento, mantenimiento, enfriado y vaciado), incluyendo definición de <span>rampas de tiempo-temperatura-presión</span>.")}</li>
                        <li>{parse(idioma=="en"?"Calculation and graphical display of <span>F0</span>.":"Cálculo y visualización gráfica de <span>F0</span>.")}</li>
                        <li>{parse(idioma=="en"?"Control by valid accumulated time or by <span>F0</span>.":"Control por tiempo acumulado válido o por <span>F0</span>.")}</li>
                        <li><span>{idioma=="en"?"Autoclave variants: flooding, steam, platform rotation...":"Variantes de autoclave por inundación, vapor, giro de plataformas..."}</span></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={carrusel10} className='img-pagina'/>
                    <p>{idioma=="en"?"Simultaneous Supervision of Cooker Set":"Supervisión Simultánea de Conjunto de Cocedores"}</p>
                    <img src={carrusel9} className='img-pagina'/>
                    <p>{idioma=="en"?"Individual Cooker Supervision":"Supervisión de Cocedor Individual"}</p>
                    <img src={informe} className='img-pagina'/>
                    <p>{idioma=="en"?"Printed Process Report":"Informe Impreso de Proceso"}</p>
                </div>
                <div className='col-content'>
                    <h2 style={{marginBottom:'0'}}>asiPROC-CK</h2>
                    <h2><span>{idioma=="en"?"Cooking Food":"Cocción de Alimentos"}</span></h2>
                    <p className='aqua'>{idioma=="en"?"Variants:":"Variantes:"}</p>
                    <ul>
                        <li><b>asiPROC-CKS</b>: {parse(idioma=="en"?"Cooking with <span>Steam and Vacuum</span>.":"Cocción con <span>Vapor y Vacío</span>.")}</li>
                        <li><b>asiPROC-CKW</b>: {parse(idioma=="en"?"Cooking with <span>Water</span>.":"Cocción con <span>Agua</span>.")}</li>
                    </ul>
                    <p className='aqua'>{idioma=="en"?"General Features:":"Características Generales:"}</p>
                    <ul>
                        <li>{idioma=="en"?"Multiple cooking phases configurable per recipe.":"Múltiples fases de cocción configurables por receta."}</li>
                        <li>{parse(idioma=="en"?"<span>Automatic selection of valid temperature probes</span>, based on deviation from the average temperature or process phase, allowing manual override of probes.":"<span>Selección automática de sondas de temperatura</span> válidas, según desviación a la temperatura media o según fase de proceso, permitiendo anulación manual de sondas.")}</li>
                        <li>{idioma=="en"?"Cooking by Product Temperature or by Time.":"Cocción por temperatura de Producto o por Tiempo."}</li>
                    </ul>
                    <p className='aqua'>{idioma=="en"?"Options:":"Opciones:"}</p>
                    <ul>
                        <li><span>{idioma=="en"?"Vacuum with pump or Steam-Ejector.":"Vacío con bomba o Steam-Eyector."}</span></li>
                        <li><span>{idioma=="en"?"Broth recovery system.":"Sistema de recuperación de caldos."}</span></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="flex min1100" style={{gap:'2rem'}}>
                <div className="col-imgs">
                    <img src={proceso} className='img-pagina'/>
                    <p>{idioma=="en"?"Real-Time Process Graph":"Gráfica de Proceso en Tiempo Real"}</p>
                </div>
                <div className="col-content">
                    <h2 style={{marginBottom:'0'}}>asiPROC-DF</h2>
                    <h2><span>{idioma=="en"?"Defrosting Food":"Descongelación de Alimentos"}</span></h2>
                    <p className='aqua'>{idioma=="en"?"Variants:":"Variantes:"}</p>
                    <ul>
                        <li><b>asiPROC-DFC</b>: {parse(idioma=="en"?"Defrosting in <span>Chambers</span>.":"Descongelación en <span>Cámaras</span>.")}</li>
                        <li><b>asiPROC-DFW</b>: {parse(idioma=="en"?"Defrosting in <span>Water</span>.":"Descongelación en <span>Agua</span>.")}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}