//import logo from './logo.svg';
import './App.css';
import Perfil from './components/perfil';
import { useState } from 'react';
//import Contador from './components/Contador';
function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <h1>Mis Libros Fantasticos favoritos son</h1>
      <div class='contenedor-principal'>
        <Perfil
          libro='Trono de cristal'
          autor='Sarah J. Maas'
          imagen='trono-de-cristal'
          pais='estadounidense'
          genero='alta fantasia'
          editorial='Bloomsbury Publishing'
          resumen='es una serie de novelas de alta fantasía de la autora estadounidense Sarah J. Maas, que comienza con la entrada del mismo nombre, lanzada en agosto de 2012.'
          pdf='https://ww3.lectulandia.com/book/trono-de-cristal/'
          bio='https://es.wikipedia.org/wiki/Sarah_J._Maas'
          fisico='https://www.penguinlibros.com/co/libros-infantiles/78825-libro-trono-de-cristal-trono-de-cristal-i-9789585428270'

        />
      </div>
      <div class='contenedor-principal'>
        <Perfil
          libro='Alas de Sangre'
          autor='Rebecca Yarros'
          imagen='alas-de-sangre'
          pais='estadounidense'
          genero='Fantasia romantica y alta fantasia'
          editorial='Planeta'
          resumen='Alas de sangre es el primer volumen de la serie Empíreo, una mezcla entre la Serie Crave, la Saga De Sangre y Cenizas y Una corte de rosas y espinas.'
          pdf='https://drive.google.com/file/d/1iMisNYOPHyBMn4TuUTMZ3JWL5L_5oKM7/view?usp=sharing'
          bio='https://en.wikipedia.org/wiki/Rebecca_Yarros'
          fisico='https://www.librerianacional.com/producto/alas-de-sangre?gad_source=1&gclid=CjwKCAiAlcyuBhBnEiwAOGZ2SwLHx9ET7NGQg867Umkd0QtvxZezHlLA0a6OjgBHBvEK65IR_MD_yRoCMw4QAvD_BwE'
        />
      </div>
      <div class='contenedor-principal'>
        <Perfil
          libro='Una corte de rosas y espinas'
          autor='Sarah J. Maas.'
          imagen='acotar'
          pais='estadounidense'
          genero='Alta fantasia'
          editorial=' Crossbooks'
          resumen='Una corte de rosas y espinas, también llamada a veces ACOTAR por las siglas de su título en inglés (A Court of Thorns and Roses) es una saga de alta fantasía dirigida a un público joven escrita por la estadounidense Sarah J. Maas.'
          pdf='https://ww3.lectulandia.com/book/una-corte-de-rosas-y-espinas/'
          bio='https://es.wikipedia.org/wiki/Sarah_J._Maas'
          fisico='https://www.amazon.com/Una-corte-rosas-espinas-colecci%C3%B3n-ebook/dp/B09HNHHRMQ/ref=sr_1_1?adgrpid=99556583463&hvadid=602535258200&hvdev=c&hvlocphy=1003659&hvnetw=g&hvqmt=b&hvrand=5793826019369538208&hvtargid=kwd-410857712848&hydadcr=16235_13569251&keywords=corte+rosas+y+espinas&qid=1708345439&sr=8-1' />
      </div>

      <p>Has hecho click {contador} veces </p>
      <button onClick={() => setContador(contador + 1)}>
        Haz click aquí para aumentar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Haz click aquí para disminuir
      </button>
    </div>

  );
}

export default App;
