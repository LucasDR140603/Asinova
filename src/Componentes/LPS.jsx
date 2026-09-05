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
        <img key={i} src={imgs[i]} style={{height:'125px'}}/>
    ))
    return(
        <Link to={'/productos-y-servicios/'+url(subenlace)} className='lps'>
            <div className='flex min700'>
                {imagenes}
            </div>
            <div>
                <h2 style={{textAlign:'center'}}><span>{array[0]}</span></h2>
                <h2 style={{textAlign:'center'}}>{(idioma=="en"?subenlace_en:subenlace).replace(array[0],"")}</h2>
                <p>{ReactHtmlParser(texto)}</p>
            </div>
        </Link>
    )
}