import carrusel15 from '../Img/Carrusel15.jpg'
import carrusel17 from '../Img/Carrusel17.png'
import carrusel5 from '../Img/Carrusel5.png'
import terminalhmi from '../Img/TerminalHMI.jpg'
import carrusel11 from '../Img/Carrusel11.jpg'
import contaje from '../Img/Contaje.jpg'
import rfid from '../Img/RFID.jpg'
import grafica from '../Img/Grafica.jpeg'
import hmitactil from '../Img/TerminalTactilHMI.jpeg'
import madera from '../Img/Madera.jpg'
import carrusel12 from '../Img/Carrusel12.jpg'
import monitorizacion from '../Img/Monitorizacion.jpg'
import impresora from '../Img/Impresora.jpg'
import ReactHtmlParser from 'html-react-parser'
import Cookies from 'js-cookie'
export default function({}){
    const idioma=Cookies.get("idioma") || "es"
    const parse=ReactHtmlParser
    return (
        <div>
            <div className="flex min1100" style={{gap:'1rem',justifyContent:'space-between'}}>
                <div>
                    <h2 style={{lineHeight:0}}><span>asiCP</span></h2>
                    <img src={carrusel15} className='img-pagina'/>
                </div>
                <div>
                    <h2 style={{lineHeight:0,textAlign:'end'}}>{idioma=="en"?"PRODUCTION CONTROL":"CONTROL DE PRODUCCIÓN"}</h2>
                    <p style={{textAlign:'end'}}>{parse(idioma=="en"?"Automatic real-time production control systems, integrating <span>weighing, piece counting, RFID identification, barcodes</span>...":"Sistemas automáticos de control de producción en tiempo real, integrando <span>pesaje, contaje de piezas, identificación RFID, códigos de barras</span>...")}</p>
                </div>
            </div>
            <hr/>
            <p>{parse(idioma=="en"?"We develop production control systems <span>tailored to our clients' needs</span>, integrating:":"Desarrollamos <span>a medida de las necesidades del cliente</span>, sistemas de control de producción, integrando:")}</p>
            <ul>
                <li>{parse(idioma=="en"?"Machine dialogue and real-time monitoring <span>PC, HMI, SCADA</span>.":"Diálogo con máquinas y supervisión en tiempo real <span>PC, HMI, SCADA</span>.")}</li>
                <li>{parse(idioma=="en"?"Data acquisition <span>PLC, dynamic and static scales, RFID readers and barcodes</span>.":"Adquisición de datos <span>PLC, básculas dinámicas y estáticas, lectores RFID y códigos de barras</span>.")}</li>
                <li>{parse(idioma=="en"?"<span>Advanced production reports</span> include lists and graphs of current and historical production data, allowing you to filter, sort, group, totalize, and subtotalize information by multiple concepts and levels of detail.":"<span>Informes avanzados</span> de producción el listas y gráficas de datos de producción en curso e histórica, permitiendo filtrar, ordenar, agrupar, totalizar y sub-totalizar la información por múltiples conceptos y niveles de detalle.")}</li>
                <li>{parse(idioma=="en"?"Automatic Generation and Printing of <span>EAN Labels</span> for Items, Boxes and Pallets.":"Generación e Impresión Automática de <span>Etiquetas EAN</span> de Artículos, Cajas y Palets.")}</li>
                <li>{parse(idioma=="en"?"Optional: <span>Integration with the client's ERP and traceability information systems</span>, allowing for automatic linking of recorded production data with work orders, manufacturing and supplier batches, production personnel, and items. This also substantially reduces the manual data entry workload and the resulting potential for errors.":"Opcionalmente: <span>Integración con los sistemas de información del cliente ERP y de trazabilidad</span>, permitiendo vincular automáticamente los datos de producción registrados con: órdenes de trabajo, lotes de fabricación y de proveedores, personal de producción y artículos. Con ello también se reduce de forma sustancial la carga de trabajo de introducción manual de datos y la consiguiente posibilidad de errores.")}</li>
            </ul>
            <hr/>
            <h2 className='aqua'>{idioma=="en"?"Examples of Developments Completed...":"Ejemplos de Desarrollos Realizados..."}</h2>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={carrusel17} className='img-pagina'/>
                    <p>{idioma=="en"?"Production Control of products recovered from MSW (Urban Solid Waste)":"Control de Producción de productos recuperados de RSU (Residuo Sólido Urbano)"}</p>
                    <img src={carrusel5} className='img-pagina'/>
                </div>
                <div className='col-content'>
                    <h3 className='aqua'>{idioma=="en"?"In Spain...":"En España..."}</h3>
                    <h2><span>{idioma=="en"?"Production of Recycled MSW Materials":"Producción de Materiales Reciclados de RSU"}</span></h2>
                    <p>{parse(idioma=="en"?"In the new <a className='verde' href='https://www.sogama.gal/es'>SOGAMA</a> plant, <span>managed by</span> <a className='verde' href='https://valtalia.com/web/'>Valtalia</a> in Galicia, materials such as: <span>HDPE, PET, Paper, Cardboard, Ferrous, Aluminum, PP, PS</span>, etc. are automatically recovered. The production control application developed in the <span>.NET / WPF</span> environment is integrated with the PLC+SCADA programming also developed by Asinova, to obtain via <span>OPC</span> and record in a <span>SQL</span> database, the production of said materials.":"En la nueva planta de <a className='verde' href='https://www.sogama.gal/es'>SOGAMA</a>, <span>gestionada por</span> <a className='verde' href='https://valtalia.com/web/'>Valtalia</a> en Galicia, se recuperan de forma automática materiales como: <span>PEAD, PET, Papel, Cartón, Férricos, Aluminios, PP, PS</span>, etc. La aplicación de control de producción desarrollada en entorno <span>.NET / WPF</span>, se integra con la programación PLC+SCADA desarrollada también por Asinova, para obtener vía <span>OPC</span> y registrar en base de datos <span>SQL</span>, las producciones de dichos materiales.")}</p>
                    <p>{parse(idioma=="en"?"Production is displayed on a <span>customizable dashboard</span>, where different tables and graphs of production evolution are selected in real time and over time periods, totaling and subtotaling by date, material type, shift, etc. It includes a report printing utility and export to standardized formats such as Excel, CSV, etc.":"Se visualiza la producción en <span>DashBoard personalizable</span>, en donde se seleccionan diferentes tablas y gráficas de evolución de producción en tiempo real y en periodos de tiempo, totalizando y sub-totalizando por fecha, tipo de material, turno, etc. Incluye utilidad de impresión de informes y exportación a formatos estandarizados como: Excel, CSV, etc.")}</p>
                </div>
            </div>
            <hr/>
            <div className='flex min1200' style={{justifyContent:'space-around'}}>
                <div>
                    <p style={{textAlign:'center',marginBottom:0}}><b>{idioma=="en"?"Rockwell Automation Article. Spanish Version":"Artículo de Rockwell Automation en Español"}</b></p>
                    <iframe src="https://drive.google.com/file/d/1rt_O3NT4P1H-uJe7g7JqbY1AvO0iwddV/preview" allow="autoplay" className="pdf" style={{marginBottom:'1rem'}}></iframe>
                </div>
                <div>
                    <p style={{textAlign:'center',marginBottom:0}}><b>Rockwell Automation Article. English Version</b></p>
                    <iframe src="https://drive.google.com/file/d/1-gQrL8R7JecEmHEwCakQirn4kdh_Pq3Q/preview" allow="autoplay" className="pdf"></iframe>
                </div>
            </div>
            <hr/>
            <iframe style={{display:'block', margin:'0 auto',width:'50vw',height:'40vw'}} src="https://www.youtube.com/embed/eEOyw8b5Qv0?si=MoNwtDDBf3HD0VD-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <hr/>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={carrusel15} className='img-pagina'/>
                    <p>{idioma=="en"?"Large-format production visualization":"Visualización de producción en gran formato"}</p>
                    <img src={terminalhmi} className='img-pagina'/>
                    <p>{idioma=="en"?"HMI Terminal":"Terminal HMI"}</p>
                    <img src={carrusel11} className='img-pagina'/>
                    <p>{idioma=="en"?"Individual Control of each Operator":"Control Individual de cada Operario"}</p>
                </div>
                <div className='col-content'>
                    <h3 className='aqua'>{idioma=="en"?"In Ecuador...":"En Equador..."}</h3>
                    <h2><span>{idioma=="en"?"Banana Production":"Producción de Plátanos"}</span></h2>
                    <p>{idioma=="en"?"The production line consists of two consecutive stages in which the banana is peeled and chopped manually for further processing.":"La línea de producción consta de dos etapas consecutivas en las que respectivamente se pela y trocea plátano de forma manual para su posterior procesamiento."}</p>
                    <p>{parse(idioma=="en"?"For each stage, there is a team of operators and a shared weighing scale. Each operator has a trapdoor on a conveyor belt where they place the product. <span>The advance and position of the belt are controlled by the system</span> so that when the product reaches the weighing scale, the weight of the product and the operator who processed it are automatically obtained.":"Para cada etapa se dispone de un grupo de operarios y de una báscula de pesaje común. Cada operario dispone de una trampilla sobre una banda de transporte en la que deposita el producto. <span>El avance y posición de la banda está controlado por el sistema</span> de tal forma que cuando el producto llega a la báscula de pesaje, se obtiene automáticamente el peso del producto y el operario que lo procesó.")}</p>
                    <p>{parse(idioma=="en"?"<span>Information on current production is displayed in real time</span> within view of the group of operators on a large-format screen that informs each operator individually of their production in kilos, productivity (kg/h), time spent at the workstation, and deviation from the selected production standard.":"<span>La información de la producción en curso se muestra en tiempo real</span> a la vista del grupo de operarios en una pantalla de gran formato que informa para cada operario de forma individual de su producción en kilos, productividad (Kg/H), tiempo de presencia en el puesto de trabajo y desviación al estándar de producción seleccionado.")}</p>
                    <p>{parse(idioma=="en"?"There is also a scale for weighing raw material containers connected to the system, so that, by relating the quantities of raw material with the quantities processed, <span>information on the performance obtained in %</span> is automatically obtained.":"Se dispone así mismo de una báscula de pesaje de contenedores de materia prima conectada al sistema, de tal forma que, relacionando las cantidades de materia prima con las cantidades procesadas, se obtiene automáticamente de <span>información del rendimiento obtenido en %.</span>")}</p>
                    <p>{parse(idioma=="en"?"The line consists of a <span>HMI touch operator panel</span> at the foot of the machine that allows production to be started and stopped, the line to be put into operation, batch and item selection, etc.":"La línea consta a pie de máquina de un <span>panel de operador táctil HMI</span> que permite iniciar y finalizar la producción, realizar la puesta en funcionamiento de la línea, selección de lote y artículo, etc.")}</p>
                    <p>{parse(idioma=="en"?"A <span>PC application</span> installed on multiple PCs connected to the factory computer network or connected <span>remotely via the Internet</span>, allows monitoring of ongoing production in real time, as well as obtaining production reports and assigning operators to their work stations.":"Una <span>aplicación PC</span> instalada en múltiples PC conectados a la red informática de fábrica o conectados <span>remotamente vía internet</span>, permiten supervisar la producción en curso en tiempo real, así como obtener informes de producción y realizar la asignación de los operarios a sus puestos de trabajo.")}</p>
                </div>
            </div>
            <hr/>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={contaje} className='img-pagina'/>
                    <p>{idioma=="en"?"Automatic Counting and Weighing of Cans Produced Individually by Each Operator":"Contaje y Pesaje Automático de Latas Producidas individualmente por cada Operario"}</p>
                    <img src={rfid} className='img-pagina'/>
                    <p>{idioma=="en"?"RFID Identification":"Identificación RFID"}</p>
                </div>
                <div className='col-content'>
                    <h3 className='aqua'>{idioma=="en"?"In Portugal...":"En Portugal..."}</h3>
                    <h2><span>{idioma=="en"?"Canned Fish Production":"Producción de Latas de Pescado"}</span></h2>
                    <p>{idioma=="en"?"The production line consists of a carousel-type conveyor belt for the supply of raw materials in boxes and work tables where teams of operators manually process the product and insert it into containers, which are then placed on a conveyor belt.":"La línea de producción consta de una banda de transporte de tipo carrusel para el abastecimiento de materia prima mediante cajas y de mesas de trabajo en donde grupos de operarios procesan manualmente el producto y lo introducen en los envases que posteriormente son depositados sobre una cinta de transporte."}</p>
                    <p>{parse(idioma=="en"?"For <span>raw material control</span>, a weighing scale is located at the entrance to the carousel, where the boxes are weighed and identified by an <span>RFID antenna</span>. Each time a box is processed by an operator, it is returned by the same operator to the transport carousel, incorporating, in addition to the RFID box identifier (Tag), a tag that identifies the operator who processed its contents. Subsequently, when the box is automatically identified by an RFID antenna as having been processed, it is automatically ejected, with the weight and operator who processed it being recorded in the production control <span>database</span>.":"Para el <span>control de materia prima</span> se dispone de una báscula de pesaje a la entrada del carrusel en donde las cajas son pesadas e identificadas mediante una <span>antena RFID</span>. Cada vez que una caja es procesada por un operario, esta es devuelta por el mismo operario al carrusel de transporte, incorporando además del identificador de la caja (Tag) RFID, un tag que identifica al operario que procesó su contenido. Posteriormente, cuando la caja es identificada automáticamente por una antena RFID como caja ya procesada, esta es expulsada de forma automática , quedando registrado en la <span>base de datos</span> del control de producción el peso y operario que la procesó.")}</p>
                    <p>{parse(idioma=="en"?"For the <span>individual control</span> of the cans produced, the progress and position of the conveyor belts of the work tables that carry the cans from the work stations to the end of the line are monitored, where they are weighed and counted dynamically, automatically recording the production of each operator in quantity and weight in the database.":"Para el <span>control individual</span> de las latas producidas, se controla el avance y la posición de las bandas de transporte de las mesas de trabajo que conducen las latas desde los puestos de trabajo hasta el final de línea, donde son pesadas y contadas dinámicamente, quedado con ello automáticamente registrada en la base de datos la producción de cada operario en cantidad y peso.")}</p>
                    <p>{idioma=="en"?"By relating the quantities of raw materials processed with the quantities produced, information on the performance obtained in % is automatically available for each individual operator.":"Relacionando las cantidades de materia prima procesadas con las cantidades producidas, se dispone automáticamente de información del rendimiento obtenido en % de forma individual para cada operario."}</p>
                    <p>{idioma=="en"?"The line has a touchscreen HMI operator panel at the machine level for starting and ending production, commissioning the line, batch and item selection, etc.":"La línea dispone a pie de máquina de un panel de operador táctil HMI para iniciar y finalizar la producción, puesta en funcionamiento de la línea, selección de lote y artículo, etc."}</p>
                    <p>{idioma=="en"?"As in the previous case, a PC application installed on multiple PCs connected to the factory computer network or remotely connected via the Internet allows for real-time monitoring of ongoing production, as well as obtaining production reports and assigning workers to their workstations.":"Al igual que en el caso anterior, una aplicación PC instalada en múltiples PC conectados a la red informática de fábrica o conectados remotamente vía internet, permiten supervisar la producción en curso en tiempo real, así como obtener informes de producción y realizar la asignación de los operarios a sus puestos de trabajo."}</p>
                    <p>{parse(idioma=="en"?"On this type of line, it is optional to perform <span>Ink-Jet marking</span> of the cans by incorporating the workstation number of the operator who produced them.":"En este tipo de líneas y de forma opcional, es posible realizar el <span>marcado Ink-Jet</span> de las latas incorporando el número del puesto de trabajo del operario que las ha elaborado.")}</p>
                </div>
            </div>
            <hr/>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={grafica} className='img-pagina'/>
                    <p>{idioma=="en"?"Production Evolution Chart":"Gráfica de evolución de Producción"}</p>
                    <img src={hmitactil} className='img-pagina'/>
                    <p>{idioma=="en"?"HMI Touch Terminal":"Terminal Táctil HMI"}</p>
                </div>
                <div className='col-content'>
                    <h3 className='aqua'>{idioma=="en"?"In Spain...":"En España..."}</h3>
                    <h2><span>{idioma=="en"?"Frozen Food Production":"Producción de Congelados"}</span></h2>
                    <p>{idioma=="en"?"This production control is simpler than those seen in the previous cases, as it does not have RFID identification or a PLC.":"Este control de producción es más simple que los vistos en los casos anteriores, pués no dispone de identificación RFID ni tampoco de PLC."}</p>
                    <p>{idioma=="en"?"This manual production line has two control stations for weighing and identifying boxes of raw materials and finished products, respectively. Each station also includes a weighing scale and an HMI touchscreen operator panel for manually entering the box code and the code of the operator who processed the box.":"Esta línea de producción manual, dispone de dos puestos de control para pesaje e identificación de cajas de materia prima y producto terminado respectivamente. Cada puesto consta además de una báscula de pesaje y de un panel de operador táctil HMI para la introducción manual del código de caja y del código del operario que ha procesado la caja."}</p>
                    <p>{idioma=="en"?"As in the previous cases, a PC application installed on multiple PCs connected to the factory computer network or remotely connected via the Internet allows for real-time monitoring of ongoing production and the generation of production reports.":"Al igual que en los casos anteriores, una aplicación PC instalada en múltiples PC conectados a la red informática de fábrica o conectados remotamente vía internet, permiten supervisar la producción en curso en tiempo real, así como obtener informes de producción."}</p>
                </div>
            </div>
            <hr/>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={madera} className='img-pagina'/>
                    <p>{idioma=="en"?"Wooden Pieces Manufacturing":"Fabricación de Piezas de Madera"}</p>
                </div>
                <div className='col-content'>
                    <h2><span>{idioma=="en"?"Wooden Pieces Production":"Producción de Piezas de Madera"}</span></h2>
                    <p>{parse(idioma=="en"?"The factory consists of a set of machines for turning <span>wooden parts</span> and manufacturing tool handles.":"La fábrica consta de un conjunto de máquinas para el torneado de <span>piezas de madera</span> y fabricación de mangos para herramientas.")}</p>
                    <p>{parse(idioma=="en"?"A PLC obtains the <span>quantity of parts produced by each machine</span> and delivers the information to the production control system for recording in the database.":"Un PLC obtiene la <span>cantidad de piezas producidas de cada máquina</span> y le entrega la información al sistema de control de producción para su registro en la base de datos.")}</p>
                    <p>{parse(idioma=="en"?"The system also controls the time that each machine spends in production, thus allowing the calculation of the <span>productivity (pieces/hour)</span> of each of them.":"El sistema controla así mismo el tiempo que cada máquina empla en la producción, permitiendo de esta forma calcular la <span>productividad (piezas/hora)</span> de cada una de ellas.")}</p>
                </div>
            </div>
            <hr/>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={carrusel12} className='img-pagina'/>
                    <p>{idioma=="en"?"Urban Waste MSW Processing":"Procesamiento de Residuos Urbanos RSU"}</p>
                    <img src={monitorizacion} className='img-pagina'/>
                    <p>{idioma=="en"?"Production Monitoring and Control Application":"Aplicación de Monitorización y Control de Producción"}</p>
                </div>
                <div className='col-content'>
                    <h2><span>{idioma=="en"?"Urban Waste MSW Production":"Producción de Residuos Urbanos RSU"}</span></h2>
                    <p>{parse(idioma=="en"?"The production of the <span>classification lines</span> and crushing of <span>urban waste MSW</span> is controlled and recorded in a database, obtaining from the PLC controlling the <span>collection cranes</span>, the weight of the load and the number of the classification and crushing line in which it is unloaded.":"Se controla y registra en una base de datos, la producción de las <span>líneas de clasificación</span> y trituración de <span>residuos urbanos RSU</span>, obteniendo del PLC de control de las <span>grúas de recogida</span>, el peso de la carga y el número de línea de clasificación y trituración en la que se descarga.")}</p>
                    <p>{idioma=="en"?"Each weighing is recorded individually, including, in addition to the weight, the crane number, sorting line number, work shift, and operator.":"Cada pesada se registra de forma individual, incluyendo en cada registro, además del peso, el número de grúa, número de línea de clasificación, turno de trabajo y operario."}</p>
                </div>
            </div>
            <hr/>
            <div className='flex min1100' style={{gap:'2rem'}}>
                <div className='col-imgs'>
                    <img src={impresora} className='img-pagina'/>
                    <p>{idioma=="en"?"Automatic Generation and Printing of EAN Labels":"Generación e Impresión Automática de Etiquetas EAN"}</p>
                </div>
                <div className='col-content'>
                    <h2><span>{idioma=="en"?"Dairy Food Production":"Producción de Alimentos Lácteos"}</span></h2>
                    <p>{parse(idioma=="en"?"The production line is controlled from a common control station <span>HMI</span>, where after selecting the article, Batch and expiration date, the <span>Ink-Jet Article Marker, the EAN Box Weighing and Labeling Train and the EAN Pallet Label Printer</span> are automatically adjusted.":"La línea de Producción se controla desde un puesto de control común <span>HMI</span>, en el que trás seleccionar el artículo, Lote y fecha de caducidad, se ajustan automáticamente la marcadora <span>Ink-Jet de Artículos, el Trén de Pesaje y Etiquetado EAN de Cajas y la Impresora de Etiquetas EAN de Palet</span>.")}</p>
                    <p>{parse(idioma=="en"?"The System automatically records in the Database, each of the Boxes and their corresponding weight, Automatically printing the <span>EAN label of the pallet</span> and the data it contains, such as: Number of Boxes, Total Weight, EAN14 Barcodes of the Article, personalized EAN128 and <span>SSCC EAN128</span>.":"El Sistema registra automáticamente en Base de datos, cada una de las Cajas y su correspondiente peso, Imprimiendo automáticamente la etiqueta <span>EAN del palet</span> y los datos que esta contiene, tales como: Cantidad de Cajas, Peso Total, Códigos de barras EAN14 de Artículo, EAN128 personalizados y <span>SSCC EAN128</span>.")}</p>
                </div>
            </div>
        </div>
    )
}