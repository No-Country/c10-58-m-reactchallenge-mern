import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Bienvenido</h1>
        <h2>
          La salud a un clic de distancia: encuentra al mejor especialista para
          ti
        </h2>
        <p>
          Nuestra plataforma es una herramienta integral de atención médica en
          línea, diseñada para conectar a los usuarios con especialistas
          altamente capacitados en diversas áreas de la salud. Nuestro objetivo
          es proporcionar un acceso fácil y eficiente a la atención médica, al
          tiempo que garantizamos una atención personalizada y de alta calidad.
          A través de nuestra plataforma, los usuarios pueden programar citas
          virtuales o presenciales con los especialistas médicos más adecuados
          para satisfacer sus necesidades. Ya sea que estén buscando
          asesoramiento en temas físicos o mentales, nuestros especialistas
          están aquí para ayudarlos a encontrar las soluciones que necesitan de
          manera rápida y profesional. Nuestra plataforma es el lugar ideal para
          aquellos que desean recibir una atención médica de calidad sin tener
          que salir de su hogar. Únase a nosotros y experimente una nueva forma
          de atención médica en línea
        </p>
      </main>
      <Footer />
    </>
  );
};
export default Home;
