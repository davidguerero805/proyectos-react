import React from 'react';
//import ReactDOM from 'react-dom/client';
import '../styles/perfil.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

function Perfil(props) {
    return (
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
                src={require(`../img/${props.imagen}.png`)} alt='Foto de desarrollador' />
            <div className='contenedor-texto-perfil'>
                <p className='nombre-perfil'>
                    <strong>{props.libro}</strong> fue escrito por {props.autor} de origen {props.pais}
                </p>
                <p className='cargo-perfil'>
                    su genero literario es el {props.genero} y su editorial es {props.editorial}
                </p>
                <p className='texto-perfil'>{props.resumen}</p>
            </div>
            {/*agregar botones para traer información*/}
            <button onClick={() => window.open(props.pdf, '_blank')}>
                Obtener pdf
            </button>
            <button onClick={() => window.open(props.bio, '_blank')}>
                Biografia de la autora
            </button>
            <button onClick={() => window.open(props.fisico, '_blank')}>
                Comprar libro en fisico
            </button>
        </div>
    );
}
export default Perfil;