import { useEffect,useRef,useState } from "react"
import linkedin from '../Img/linkedin.png'
import i1 from '../Img/I1.png'
import fieldbus from '../Img/Fieldbus.png'
import piramide from '../Img/Piramide.png'
import ReactHtmlParser from 'html-react-parser'
import axios from "axios"
import Cookies from "js-cookie"
import Turnstile from "react-turnstile"
import {ThreeDots} from 'react-loader-spinner'
import {TextField,Card,CardHeader,CardContent,CardActions,Button,Alert} from '@mui/material'
export default function({}){
    const [token,setToken]=useState(null)
    const idioma=Cookies.get("idioma")||'es'
    const parse=ReactHtmlParser
    const [nombre,setNombre]=useState("")
    const [empresa,setEmpresa]=useState("")
    const [email,setEmail]=useState("")
    const [mensaje,setMensaje]=useState("")
    const [error,setError]=useState(false)
    const [acierto,setAcierto]=useState(false)
    const campos=[nombre,empresa,email,mensaje]
    const setsCampos=[setNombre,setEmpresa,setEmail,setMensaje]
    const [enviando,setEnviando]=useState(false)
    const placeholders=idioma=="en"?["Name *","Company","Email *","Message *"]:["Nombre *","Empresa","Email *","Mensaje *"]
    const refs=useRef([])
    useEffect(()=>{
        setAcierto(false)
        const handleKeyDown=(e)=>{
            if (e.key=='Enter' && document.activeElement!=refs.current[setsCampos.indexOf(setMensaje)]){
                enviar()
            }
        }
        window.addEventListener('keydown',handleKeyDown)
        return()=>{
            window.removeEventListener('keydown',handleKeyDown)
        }
    },[...campos,token])
    useEffect(()=>{
        const handleKeyDown=(e)=>{
            if (['ArrowDown','ArrowUp'].includes(e.key)){
                let abajo=e.key=='ArrowDown'
                let indice_actual=refs.current.indexOf(document.activeElement)
                let ultimo=campos.length-1
                let sumador=abajo?indice_actual==ultimo?-indice_actual:1:indice_actual==0?ultimo:-1
                let nuevo_indice=indice_actual+sumador
                let elemento=refs.current[nuevo_indice]
                let cursor_actual=refs.current[indice_actual].selectionStart
                if (indice_actual!=setsCampos.indexOf(setMensaje) || !mensaje.includes('\n') || ((cursor_actual==mensaje.split('\n')[0].length && !abajo) || (cursor_actual==mensaje.length && abajo))){
                    elemento.focus()
                    if (nuevo_indice==setsCampos.indexOf(setMensaje)){
                        e.preventDefault()
                        let cursor=mensaje.length
                        elemento.selectionStart = cursor;
                        elemento.selectionEnd = cursor;
                    }
                }
                else{
                    
                }
            }
        }
        window.addEventListener('keydown',handleKeyDown)
        return()=>{
            window.removeEventListener('keydown',handleKeyDown)
        }
    },[mensaje])
    const enviar=()=>{
        if (campos.filter(x=>x.replaceAll(" ","").length==0).length!=0 || token==null){
            setError(true)
        }
        else{
            setError(false)
            setEnviando(true)
            const gmail={
                para:"jorge.guinarte@asinova.es",
                asunto:"Contacto",
                mensaje:"Nombre: "+nombre+"\nEmpresa: "+empresa+"\nEmail: "+email+"\n"+mensaje,
                captchaToken:token
            }
            axios.post('https://www.asinova.es/webapi/gmail',gmail).then(res=>{
                if (res.data.mensaje=="Correo enviado correctamente"){
                    setAcierto(true)
                }
                else{
                    setError(true)
                }
                setEnviando(false)
            }).catch((error)=>{
                setEnviando(false)
                setError(true)
                setAcierto(false)
            })
        }
    }
    return (
        <div className='flex' style={{gap:'2rem'}}>
            <div style={{flexDirection:'column',alignItems:'start',gap:'1rem'}} className='flex visible min1100'>
                <a className='aqua' href='https://www.linkedin.com/company/asinova-soluciones?trk=eml-company_page_created-body-view_cp_button&midToken=AQGSTYPgQU6OoA&fromEmail=fromEmail&ut=3f3-xZx1gam7c1'><img src={linkedin}/>{idioma=="en"?"Asinova on LinkedIn":"Asinova en linkedin"}</a>
                <div style={{minWidth:'100%'}}>
                    <img src={i1} style={{backgroundColor:'white',width:'100%'}}/>
                    <p style={{fontSize:'0.9rem'}}>{idioma=="en"?"PC, PLC, HMI, SCADA programming":"Programación PC, PLC, HMI, SCADA"}</p>
                </div>
                <div style={{minWidth:'100%'}}>
                    <img src={fieldbus} style={{backgroundColor:'white',width:'100%'}}/>
                    <p style={{fontSize:'0.9rem'}}>{idioma=="en"?"Industrial Field Bus (FieldBus)":"Bus de Campo Industrial (FieldBus)"}</p>
                </div>
                <div className='flex' style={{minWidth:'100%',width:'min-content'}}>
                    <img src={piramide}/>
                    <p style={{fontSize:'0.9rem'}}>{idioma=="en"?"Integration with Traceability, MES and ERP Systems":"Integración con Trazabilidad, Sistemas MES y ERP"}</p>
                </div>
            </div>
            
            <div style={{flex:'1',width:'100%'}}>
                <Card variant="outlined" sx={{maxWidth:'100%',margin:'0 auto',width:'25rem'}}>
                    <CardHeader sx={{textAlign:'center',fontWeight:'bold'}} title={'CONTACTO'}/>
                    <CardContent style={{display:'flex',flexDirection:'column',gap:'0.5rem',alignItems:'center'}}>
                    {campos.map((x,i)=>(
                    i!=setsCampos.indexOf(setMensaje)?
                    <TextField style={{width:'100%'}} inputRef={(el)=>(refs.current[i]=el)} error={error && x.replaceAll(" ","").length==0 && placeholders[i].includes("*")} type="text" value={x} label={placeholders[i]} onChange={(e)=>{setError(false);setsCampos[i](e.target.value)}}/>
                    :<TextField style={{width:'100%'}} multiline maxRows={2} inputRef={(el)=>(refs.current[i]=el)} error={error && x.replaceAll(" ","").length==0} label={placeholders[i]} value={x} onChange={(e)=>{setError(false);setsCampos[i](e.target.value)}}/>
                    ))}
                    <div className="turnstile" style={{width:'100%'}}>
                    <Turnstile
                        size='flexible'
                        style={{width:'100%',boxSizing:'border-box'}}
                        sitekey="0x4AAAAAACnQ4khv88uI5n97"
                        language={idioma}
                        onSuccess={(t)=>setToken(t)}
                    />
                    </div>
                    </CardContent>
                    <CardActions sx={{'display':'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                        <Button loading={enviando} style={{display:'flex',alignItems:'center',gap:'0.5rem'}} variant="outlined" onClick={enviar}>{idioma=="en"?"Send":"Enviar".slice(0,enviando?-1:6)}{enviando?<>{idioma=='en'?'ing':'ndo'}</>:null}</Button>
                        {error?
                        <Alert severity='error'>ERROR</Alert>
                        :acierto?
                        <Alert severity='success'>{idioma=="en"?"Email sent successfully":"Correo enviado correctamente"}</Alert>
                        :null}
                    </CardActions>
                </Card>
                <p style={{marginTop:'1rem',textAlign:'center'}}>{idioma=="en"?"Address: ASINOVA SOLUTIONS, S.L. C/Amio, 114 Costavella Business Center - 15707 - Santiago de Compostela - A Coruña":"Dirección: ASINOVA SOLUCIONES, S.L. C/Amio, 114 CENTRO DE NEGOCIOS COSTAVELLA - 15707 - Santiago de Compostela - A CORUÑA"}</p>
                <iframe style={{display:'block',width:'100%',margin:'0 auto'}} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2922.7209941933666!2d-8.511116999999999!3d42.899833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDUzJzU5LjQiTiA4wrAzMCc0MC4wIlc!5e0!3m2!1ses!2ses!4v1737651598314!5m2!1ses!2ses" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p className="aqua" style={{marginTop:'1rem'}}>{idioma=="en"?"LEGAL NOTICE:":"AVISO LEGAL:"}</p>
                <p className="aqua" style={{marginTop:'1rem'}}>{parse(idioma=="en"?"In compliance with Organic Law 15/1999, of December 13, on the Protection of Personal Data, we inform you that the personal data you provide to us through the website www.asinova.es will be treated confidentially and will become part of a file owned by ASINOVA SOLUCIONES, S.L., at LUGAR DE VIGO, 39, CRUCES, 15980, PADRÓN, A CORUÑA, which has been duly registered with the Data Protection Agency (<a href='https://www.aepd.es/' className='aqua subrayado'>www.agpd.es</a>). We also inform you that you may exercise your rights of access, rectification, cancellation and opposition in accordance with the provisions of Organic Law 15/1999, of December 13, on the Protection of Personal Data, by sending an email to info@asinova.es":"En cumplimiento de la Ley Orgánica 15/1999, de13 de diciembre, de Protección de Datos de Carácter Personal, le informamos que los datos personales que nos suministre a través de la página web www.asinova.es serán tratados de forma confidencial y pasarán a formar parte de un fichero titularidad de ASINOVA SOLUCIONES, S.L., en la LUGAR DE VIGO, 39, CRUCES, 15980 , PADRÓN, A CORUÑA, que ha sido debidamente inscrito en la Agencia de Protección de Datos (<a href='https://www.aepd.es/' className='aqua subrayado'>www.agpd.es</a>).  Asimismo le informamos que puede ejercitar sus derechos de acceso, rectificación, cancelación y oposición con arreglo a lo previsto en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, enviando un mail a info@asinova.es")}</p>            
            </div>
        </div>
    )
}