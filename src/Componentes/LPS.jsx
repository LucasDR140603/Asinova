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
        <div style={{width:'100%',boxSizing:'border-box',backgroundColor:'#292929',borderRadius:'10px',boxShadow:'azure 0px 0px 6px 0px',padding:'1rem'}}>
            <h2 style={{textAlign:'center'}}><span>{array[0]}</span></h2>
            <h2 style={{textAlign:'center'}}>{idioma=="en"?subenlace_en.replace(array[0],""):subenlace.replace(array[0],"")}</h2>
            <Link className='btn' to={'/productos-y-servicios/'+url(subenlace)} style={{display:'block',margin:'0 auto',width:'fit-content'}}>+ Info</Link>
            <div style={{margin:'1rem'}}>
                {imagenes}
            </div>
            <p>{ReactHtmlParser(texto)}</p>
        </div>
    )
}