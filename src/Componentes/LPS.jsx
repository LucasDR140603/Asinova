import {useNavigate} from 'react-router-dom'
import ReactHtmlParser from 'html-react-parser'
import { url } from '../Funciones'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
export default function LPS({subenlace,subenlace_en,imgs,texto}){
    const idioma=Cookies.get("idioma") || "es"
    let array=idioma=="en"?subenlace_en.split(" "):subenlace.split(" ")
    let imagenes=Array.from({length:imgs.length},(_,i)=>(
        <Link to={"/productos-y-servicios/"+url(subenlace)}><img key={i} src={imgs[i]} style={{display:'block',width:'125px',height:'89px',margin:'0 auto',cursor:'pointer'}}/></Link>
    ))
    return(
        <Link to={'/productos-y-servicios/'+url(subenlace)} className='lps'>
            <h2 style={{textAlign:'center'}}><span>{array[0]}</span></h2>
            <h2 style={{textAlign:'center'}}>{idioma=="en"?subenlace_en.replace(array[0],""):subenlace.replace(array[0],"")}</h2>
            <div style={{margin:'1rem'}}>
                {imagenes}
            </div>
            <p>{ReactHtmlParser(texto)}</p>
        </Link>
    )
}