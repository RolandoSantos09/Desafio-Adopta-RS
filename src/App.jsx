import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MisCartas from "./components/MyCard";
import Perro1 from "./assets/images/perrotitan.jpg";
import Perro2 from "./assets/images/perroslapandilla.jpg";
import Perro3 from "./assets/images/perrosinnombre.jpg";
import Perro4 from "./assets/images/perropeteretes.jpg";
import Perro5 from "./assets/images/perromordisco.jpg";
import Perro6 from "./assets/images/perromanchas.jpg";

function App() {
  return (
    <>
      <div className="Titulo">
        <Header titulo="" />
      </div>
      <div className="container">
        <MisCartas
          imagen={Perro1}
          nombre="Titán"
          descripcion="Un guardián fiel y protector que te hará sentir seguro en tu hogar, lo bueno es que es de bolsillo así que te acompañará a todos lados"
          colorButton="success"
          textButton="Quiltro"
        />
        <MisCartas
          imagen={Perro2}
          nombre="La Pandilla"
          descripcion="Hermanitos que quedaron huerfanos, ahora están juntitos para defenderse entre ellos. No los separes"
          colorButton="danger"
          textButton="Rootweiller"
        />
        <MisCartas
          imagen={Perro3}
          nombre="Sin Nombre"
          descripcion="Este cachorrito apenas nació fue abandonado, así que no alcanzó a ser bautizado con un nombre. Llévalo a tu casa y dale un nombre"
          colorButton="primary"
          textButton="Labrador"
        />
      </div>
      <div className="container2">
        <MisCartas
          imagen={Perro4}
          nombre="Peteretes"
          descripcion="Aunque se ve flaquito, es un perro muy enérgico, le gusta pasear y correr con otros perritos. Adóptalo y sal a trotar con el"
          colorButton="secondary"
          textButton="Labrador"
        />
        <MisCartas
          imagen={Perro5}
          nombre="Mordisco"
          descripcion="Un Perrito que fue maltratado, en una pelea le mordieron su orejita, ahora solo busca paz y amor de sus nuevos dueños"
          colorButton="dark"
          textButton="Quiltro"
        />
        <MisCartas
          imagen={Perro6}
          nombre="Manchas"
          descripcion="Ella ya es adulta, tiene muy buenas costumbres, es respetuosa y no destruye muebles. Si quieres un perro tranquilo, ella es la ideal"
          colorButton="info"
          textButton="Pastor Ingles"
        />
      </div>
      <Footer
        text="¿Te gustan los perros? ¿Quieres tener un compañero fiel, cariñoso y divertido? Entonces no lo pienses más y ven a adoptar uno de 
nuestros perritos. Tenemos de diferentes razas, tamaños y edades, para que elijas el que más te guste y se adapte a tu estilo de vida. 
Todos nuestros perritos están vacunados, desparasitados y esterilizados, y te esperan con mucha ilusión en nuestro refugio. No compres, adopta. Así estarás salvando una vida y ganando un amigo. ¡Te aseguramos que no te arrepentirás!"
      />
    </>
  );
}

export default App;
