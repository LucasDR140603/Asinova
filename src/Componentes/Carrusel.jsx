import { useState,useEffect } from "react"
export default function({imagenes}){
    const [izquierda,setIzquierda]=useState(false)
    const [derecha,setDerecha]=useState(false)
    const [index,setIndex]=useState(0)
    const duration=500
    const [alto,setAlto]=useState(0)
    const [ancho,setAncho]=useState(0)
    const anterior=()=>{
        return index==0?imagenes.length-1:index-1;
    }
    const posterior=()=>{
        return index==imagenes.length-1?0:index+1;
    }
    const delay=(milliseconds)=>new Promise(resolve=>setTimeout(resolve,milliseconds))
    useEffect(()=>{
        const cargarDimensiones = async () => {
            const dimensiones = await Promise.all(
                imagenes.map(src => {
                    return new Promise(resolve => {
                    const img = new Image();
                    img.onload = () => resolve({ alto: img.height, ancho: img.width });
                    img.src = src;
                    });
                }
            )
        )
        setAlto(Math.max(...dimensiones.map((x)=>x.alto)))
        setAncho(Math.max(...dimensiones.map((x)=>x.ancho)))
        };
        cargarDimensiones();
    },[imagenes])
    return(
        <div className="flex vcenter" style={{gap:'1rem',maxWidth:'100%',margin:'0 auto',justifyContent:'center'}}>
            <a className="btn" style={{padding:'0.5rem 0.75rem'}} onClick={async()=>{setIzquierda(true);await delay(duration+25);setIndex(anterior());setIzquierda(false)}}>◄</a>
            <div style={{maxWidth:'100%',overflow:'hidden',position:'relative',width:`${ancho}px`,aspectRatio:`${ancho}/${alto}`,display:'grid',placeContent:'center'}}>
                <img src={imagenes[index]} style={{maxWidth:'100%',maxHeight:'100%',boxSizing:'border-box',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',animationName:izquierda?'centro-derecha':derecha?'centro-izquierda':'',animationDuration:`${duration}ms`,animationFillMode:'forwards'}}/>
                {izquierda || derecha?
                <img src={imagenes[izquierda?anterior():posterior()]} style={{maxWidth:'100%',maxHeight:'100%',boxSizing:'border-box',position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',animationName:`${izquierda?'izquierda':'derecha'}-centro`,animationDuration:`${duration}ms`,animationFillMode:'forwards'}}/>
                :null}
            </div>
            <a className="btn" style={{padding:'0.5rem 0.75rem'}} onClick={async()=>{setDerecha(true);await delay(duration+25);setIndex(posterior());setDerecha(false)}}>►</a>
        </div>)
}