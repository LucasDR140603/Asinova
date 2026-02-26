import ReactHtmlParser from 'html-react-parser'
import { url } from '../Funciones'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
export default function LPSHorizontal({subenlace,subenlace_en,img,texto}){
    const idioma=Cookies.get("idioma") || "es"
    let array=subenlace.split(" ")
    return(
        <Link to={'/productos-y-servicios/'+url(subenlace)} className='flex min900 lpshorizontal' style={{gap:'1rem'}}>
            <div>
                <img src={img} style={{display:'block',width:'150px',height:'100%',margin:'0 auto',}}/>
            </div>
            <div style={{margin:'0 auto',width:'100%',padding:'0.5rem'}}>
                <h2 style={{margin:0}}><span>{array[0]}</span></h2>
                <h2 style={{marginTop:'0',marginBottom:'0'}}>{idioma=="en"?subenlace_en.replace(array[0],""):subenlace.replace(array[0],"")}</h2>
                <p style={{marginBottom:'1rem'}}>{ReactHtmlParser(texto)}</p>
            </div>
        </Link>
    )
}