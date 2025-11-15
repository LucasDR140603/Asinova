import carrusel14 from '../Img/Carrusel14.png'
import carrusel8 from '../Img/Carrusel8.jpg'
import vistaprevia from '../Img/VistaPrevia.jpg'
import patron from '../Img/Patron.jpg'
import vistaglobal from '../Img/VistaGlobal.jpg'
import cierre from '../Img/Cierre.jpg'
import listados from '../Img/Listados.jpg'
import patronmatricial from '../Img/PatronMatricial.jpg'
import informeajuste from '../Img/InformeAjuste.jpg'
import ReactHtmlParser from 'html-react-parser'
import Cookies from 'js-cookie'
export default function({}){
    const idioma=Cookies.get("idioma") || "es"
    const parse=ReactHtmlParser
    return <div>
        <div className="flex min1100" style={{gap:'1rem',justifyContent:'space-between'}}>
            <div>
                <h2 style={{lineHeight:0}}><span>asiQ</span></h2>
                <img src={carrusel14} className='img-pagina'/>
            </div>
            <div>
                <h2 style={{lineHeight:0,textAlign:'end'}}>{idioma=="en"?"QUALITY CONTROL":"CONTROL DE CALIDAD"}</h2>
                <p style={{textAlign:'end'}}>{parse(idioma=="en"?"Automatic and semi-automatic quality control systems based on <span>Artificial Vision, Measurement...</span>":"Sistemas de control de calidad automáticos y semi-automáticos, basados en <span>Visión Artificial, Medición...</span>")}</p>
            </div>
        </div>
        <hr/>
            <p>{idioma=="en"?"Manual and automatic Quality Control Systems, using technologies such as:":"Sistemas Manuales y automáticos de Control de Calidad, empleando Tecnologías tales como:"}</p>
            <ul>
                <li><span>{idioma=="en"?"Machine Vision.":"Visión Artificial."}</span></li>
                <li>{parse(idioma=="en"?"<span>Distance and Position</span> Measurements.":"Mediciones de <span>Distancia y Posición</span>.")}</li>
                <li>{parse(idioma=="en"?"Detection of <span>Presence</span> of Elements.":"Detección de <span>Presencia</span> de Elementos.")}</li>
                <li>{parse(idioma=="en"?"Checking <span>Color</span>.":"Comprobación de <span>Color</span>.")}</li>
                <li>{parse(idioma=="en"?"Barcode and Text Verification with <span>OCR</span>.":"Verificación de Códigos de Barras y Textos con <span>OCR</span>.")}</li>
            </ul>
        <hr/>
        <div className="flex min1100" style={{gap:'2rem'}}>
            <div className="col-imgs">
                <img src={carrusel14} className='img-pagina'/>
                <p>{idioma=="en"?"Automatic Control and Measurement Equipment for Closure Parameters in Preserves, Drinks...":"Equipo de Control y Medición Automática de Parámetros de Cierres en Envases de Conserva, Bebidas..."}</p>
                <img src={carrusel8} className='img-pagina'/>
                <p>{idioma=="en"?"Main View of the Application":"Vista Principal de la Aplicación"}</p>
                <img src={vistaprevia} className='img-pagina'/>
                <p>{idioma=="en"?"Report Preview Including Images and/or Results Table":"Vista Previa de Informe Incluyendo Imágenes y/o Tabla de Resultados"}</p>
                <img src={patron} className='img-pagina'/>
                <p>{idioma=="en"?"High-Precision Matrix Pattern Fitting with ENAC Certification. Uncertainty < 0.005 mm.":"Ajuste con Patrón Matricial de Alta Precisión con Certificado ENAC. Incertidumbre < 0.005mm."}</p>
            </div>
            <div className="col-content">
                <h2 style={{marginBottom:0}}>asiQ-CCVS</h2>
                <h2><span>{idioma=="en"?"Control of Container Closures":"Control de Cierres de Envases"}</span></h2>
                <p className='aqua'>{idioma=="en"?"General Features:":"Características Generales:"}</p>
                <ul>
                    <li>{parse(idioma=="en"?"<span>Automatic Measurement</span> of Body Width and Height, Bucket Depth, Body and Lid Thicknesses, Hook Ends and Overlap.":"<span>Medición Automática</span> de Ancho y Altura de Cuerpo, Produndidad de Cubeta, Espesores de Cuerpo y Tapa, Extremos de Ganchos y Solapamiento.")}</li>
                    <li>{parse(idioma=="en"?"<span>Automatic Calculation</span> of Integrity Parameters (Compactness, Overlap, Free Space...)":"<span>Cálculo Automático</span> de Parámetros de Integridad (Compacidad, Solapamiento-Traslape, Espacio Libre...)")}</li>
                    <li>{parse(idioma=="en"?"<span>Signaling</span> of Correct and Incorrect Results Out of Range according to the <span>Format Standard</span>.":"<span>Señalización</span> de Resultados Correctos e Incorrectos fuera de Rango de acuerdo al <span>Estándar del Formato</span>.")}</li>
                    <li>
                        {parse(idioma=="en"?"<span>Global View</span> of the Complete Control Results of All Samples and the corresponding <span>Closing Heads</span>.":"<span>Vista Global</span> de Resultados del Control Completo de Todas las Muestras y los correspondientes <span>Cabezales de Cierre</span>.")}
                        <div className='img-texto centro'>
                            <img src={vistaglobal} className='img-pagina'/>
                            <p>{idioma=="en"?"Fig. Overview of results for a complete control, including measurement averages and a navigable head-sample matrix. Results that fall outside the range allowed by the selected format standard are displayed in red.":"Fig. Vista Global de Resultados de un Control Completo, Incluyendo Medias de Medciones y Matriz navegable de Cabezales-Muestras. Se muestran en Color Rojo los Resultados que están fuera del Rango admitido en el Estándar del Formato seleccionado."}</p>
                        </div>
                    </li>
                    <li>
                        {parse(idioma=="en"?"<span>Zoom and Manual Measurement</span> Features":"Funciones de <span>Zoom y Mediciones Manuales</span>")}
                        <div className="img-texto centro">
                            <img src={cierre} className='img-pagina'/>
                            <p>{idioma=="en"?"Fig. Zoom Function and Manual Measurements.":"Fig. Función Zoom y Mediciones Manuales."}</p>
                        </div>
                    </li>
                    <li>{idioma=="en"?"Complete record of results in Database, including Images Obtained.":"Registro completo de resultados en Base de Datos, incluyendo las Imágenes Obtenidas."}</li>
                    <li>
                        {parse(idioma=="en"?"Obtaining Lists, Reports and Statistical Graphs of <span>Evolution of the deviations obtained in the measurements, with respect to the established standards</span>, allowing to anticipate the appearance of measurements out of range, through <span>Preventive Maintenance</span> of the heads of the <span>Closing Machines</span>.":"Obtención de Listados, Informes y Gráficas Estadísticas de <span>Evolución de las deviaciones obtenidas en las mediciones, respecto a los estándares establecidos</span>, permitiendo anticiparse a la aparición de mediciones fuera de rango, mediante <span>Mantenimiento Preventivo</span> de los cabezales de las <span>Máquinas Cerradoras</span>.")}
                        <div className="img-texto centro">
                            <img src={listados} className='img-pagina'/>
                            <p>{idioma=="en"?"Fig. Lists, Reports and Statistics.":"Fig. Listados, Informes y Estadísticas."}</p>
                        </div>
                    </li>
                    <li>
                        {parse(idioma=="en"?"Fitting with a <span>High Precision Matrix Pattern</span>, ENAC certified. The uncertainty obtained is less than 0.005 mm. The required uncertainty is 0.01 mm.":"Ajuste con <span>Patrón Matricial de Alta Precisión</span>, con certificado <span>ENAC. La incertidumbre obtenida es inferior a 0.005mm</span>. Siendo la Exigida de 0.01mm.")}
                        <div className="img-texto centro">
                        <img src={patronmatricial} className='img-pagina'/>
                        <p>{idioma=="en"?"Fig. Results of Fitting with Matrix Pattern, obtaining in this case an uncertainty of 0.003mm after 5 Measurement Repetitions.":"Fig. Resultados de Ajuste con Patrón Matricial, obteniendo en este caso una incertidumbre de 0.003mm tras 5 Repeticiones de la medición."}</p>
                        <img src={informeajuste} className='img-pagina'/>
                        <p>{idioma=="en"?"Fig. Adjustment Report - Calibration":"Fig. Informe de Ajuste - Calibración"}</p>
                    </div>
                </li>
                <li><span>{idioma=="en"?"Giga-Ethernet Industrial Camera and LED Dome Lighting.":"Cámara Industrial Giga-Ethernet e Iluminación con Domo-LED."}</span></li>
            </ul>
            <p className='aqua' style={{marginTop:'1rem'}}>{idioma=="en"?"Options:":"Opciones:"}</p>
            <ul>
                <li>{parse(idioma=="en"?"<span>Customer-tailored automatic integration with ERP and traceability</span>, with automatic loading of format, packaging and lid batches, etc. from a selected manufacturing order, <span>thereby considerably reducing the manual data entry workload and the error rate</span>.":"<span>Integración Automática a Medida del Cliente, con ERP y Trazabilidad</span>, con carga Automática de Formato, Lotes de envase y Tapa,etc. a partir de una Orden de Fabricación seleccionada, <span>reduciendo con ello considerablemente la carga de trabajo manual de introdución de datos y la Tasa de Errores</span>.")}</li>
                <li>{parse(idioma=="en"?"<span>Automatic Ink-Jet or Laser Marking</span> of the containers in the Sealers, of the Sealing Head number, thereby facilitating the task of identifying the sealing head and <span>avoiding errors</span>.":"<span>Marcado Automático Ink-Jet o Láser</span> de los envases en las Cerradoras, del número de Cabezal de Cierre, facilitando con ello la tarea de identificación de cabezal de cierre y <span>evitando errores</span>.")}</li>
            </ul>
            <div style={{width:'fit-content',margin:'0 auto'}}>
                <iframe src="https://drive.google.com/file/d/1gjVpG5K66F7DZbY5HmiaVHNHj1N6zDdl/preview" className="pdf" allow="autoplay"></iframe>  
                </div>
            </div>
        </div>
    </div>
}