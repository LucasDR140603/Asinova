import { useLocation } from "react-router-dom"
import ReactHtmlParser from 'html-react-parser'
import Cookies from "js-cookie"
export default function(){
    const idioma=Cookies.get("idioma") || "es"
    const location=useLocation()
    const pagina=location.pathname.replace("/","")
    const parse=ReactHtmlParser
    return (
        <div style={{margin:'0 auto',width:'fit-content'}}>
            <h1 style={{color:"red",textAlign:'center'}}>{idioma=="en"?"Not Found":"No Encontrado"}</h1>
            <p>{parse(idioma=="en"?"The page <span>"+pagina+"</span> not exists or is no longer available":"La pagina <span>"+pagina+"</span> no existe o ya no está disponible")}.</p>
            <p>{idioma=="en"?"Note that URLs on this site are written":"Ten en cuenta que en este sitio las url se escriben"}:</p>
            <ul>
                <li>{parse(idioma=="en"?"In <span>lowercase</span>":"En <span>minúscula</span>")}</li>
                <li>{parse(idioma=="en"?"Without <span>spaces</span>":"Sin <span>espacios</span>")}</li>
                <li>{parse(idioma=="en"?"With <span>hyphens</span> instead <span>underscores</span>":"Con <span>guiones medios</span> en lugar de <span>guiones bajos</span>")}</li>
            </ul>
        </div>
    )
}