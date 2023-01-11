// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando'
// };

import PropTypes from 'prop-types';

const nombreApellido= (nombre, apellido) => {
    return nombre+' '+apellido;
}

export const FirstApp = ({title}) => {
  return (
    <>
    {/* <h1>First App {nombreApellido('fernando', 'alcocer') }</h1> */}
    <h1>{ title }</h1>
    {/* <code>{ JSON.stringify( newMessage ) }</code> */}
    <p>Como hacer un fragment, se utiliza </p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string
.isRequired,
subtitle: PropTypes.string 
}

FirstApp.defaultProps ={
    name: 'Fernando Alcocer',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
}
