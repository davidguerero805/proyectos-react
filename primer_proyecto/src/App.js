//import logo from './logo.svg';
import './App.css';
import Perfil from './components/perfil';

function App() {
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
          resumen='Una corte de rosas y espinas, también llamada a veces ACOTAR por las siglas de su título en inglés (A Court of Thorns and Roses) es una saga de alta fantasía dirigida a un público joven escrita por la estadounidense Sarah J. Maas. La protagonista es Feyre Archeron, una humana que se verá arrastrada a Prythian, tierra de faes y magia.'
        />
      </div>
      
    </div>
  );
}

export default App;
