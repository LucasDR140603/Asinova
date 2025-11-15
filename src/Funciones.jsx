export function url(str){
    return str.toLowerCase().replaceAll(" ","-")
}
export function vacio(str){
    return str==null || str.replaceAll(" ","").length==0
}
export function reemplazarAcentos(url) {
  // Reemplazar los códigos URL codificados por caracteres con acento
  return url
    .replace(/%C3%A1/g, 'á')
    .replace(/%C3%A9/g, 'é')
    .replace(/%C3%AD/g, 'í')
    .replace(/%C3%B3/g, 'ó')
    .replace(/%C3%BA/g, 'ú')
    .replace(/%C3%91/g, 'Ñ')
    .replace(/%C3%B1/g, 'ñ');
}