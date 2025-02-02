
import { Header } from "./components/Header"
import { IniciarSesion } from "./pages/IniciarSesion"
import { Registro } from "./pages/Registro"
import { Card } from "./components/Card";
import { Perfil } from "./pages/Perfil";

import {Landing }from "./pages/Landing"





const userData = {
  nombre: 'Mario',
  usuario:'MLopez',
  apellidos: 'López Ruiz',

  edad: '31',
  ciudad:'Valencia',

  img: '../src/imgs/avatar.png',

  valoraciones: '⭐⭐⭐⭐',

  prestados:5,
  alquilados: 7,


}



const CardLibros = [
  {

    img:{
      src:'../imgs/cien-soledad.png',
      alt:'img1'

    } ,
      nombre: "Cien años de soledad",
      precio: 15.99,
      genero: "Realismo mágico"
  },



  {
    img:{
      src:'./',
      alt:'img2'

    } ,
      nombre: "1984",
      precio: 12.50,
      genero: "Distopía"
  },



  {
    img:{
      src:'./',
      alt:'img3'

    } ,
      nombre: "El Señor de los Anillos",
      precio: 22.00,
      genero: "Fantasía"
  },



  {
    img:{
      src:'./',
      alt:'img4'

    } ,
      nombre: "Orgullo y prejuicio",
      precio: 9.99,
      genero: "Romance"
  },



  {
    img:{
      src:'./',
      alt:'img5'

    } ,



      nombre: "Crónica de una muerte anunciada",
      precio: 10.75,
      genero: "Novela"
  },



  {
    img:{
      src:'./',
      alt:'img6'

    } ,
      nombre: "Harry Potter y la piedra filosofal",
      precio: 18.95,
      genero: "Fantasía"
  },



  {
    img:{
      src:'./',
      alt:'img7'

    } ,
      nombre: "El Principito",
      precio: 7.99,
      genero: "Literatura infantil"
  }
];











function App() {
  

  return (
    <>
    <Header />
    {/* <IniciarSesion /> */}
    {/* <Registro /> */}
    {/* <Card nombre='Cien años de soledad' precio= {6} genero='Realismo mágico' img = {{src: '../imgs/cien-soledad.png', alt:'cien-años'}}  /> */}
    {/* <Perfil userData={userData}/> */}
    <Landing />

    </>
  )
}

export default App
