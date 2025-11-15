import { url } from "../Funciones"
import Cookies from "js-cookie"
import { Link } from "react-router-dom"
export default function({enlaces,enlaces_en,subenlaces,subenlaces_en}) {
    const idioma=Cookies.get("idioma") || "es"
    let sublinks=Array.from({length:subenlaces.length},(_,i)=>(
        <li><Link to={'/productos-y-servicios/'+url(subenlaces[i])}>{idioma=="en"?subenlaces_en[i].replace(" "," - "):subenlaces[i].replace(" "," - ")}</Link></li>
    ))
    let links=Array.from({length:enlaces.length},(_,i)=>(
        <li>
            <Link to={'/'+url(enlaces[i])}>{idioma=="en"?enlaces_en[i]:enlaces[i]}</Link>
            {url(enlaces[i])=="productos-y-servicios"?
                <ul className="mapa">
                    {sublinks}
                </ul>:null}
        </li>
    ))
    return (
        <div>
            <h2>{idioma=="en"?"SITE MAP":"MAPA DEL SITIO"}</h2>
            <ul className="mapa">
                {links}
            </ul>
        </div>
    )
}