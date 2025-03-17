//dos atributos: nombre y funcion 
function Button({ nombre, funcion }) {
  return <button onClick={funcion}>{nombre}</button>;
}

export default Button;