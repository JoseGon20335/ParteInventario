import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { db } from '../firebase/firebase';


class App extends Component {
  state = {
    inventario: null
  }

  Firedb () {

    console.log("entro a Firedb")
  
    let ID = [];
    let ID_categoria = [];
    let ID_marca = [];
    let calificacion = [];
    let cant_ventas = [];
    let cantidad = [];
    let descripcion = [];
    let imagen = [];
    let nombre = [];
    let precio = [];
  
    db.collection('inventario')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            ID.push(doc.get("ID"))
            ID_categoria.push(doc.get("ID_categoria"))
            ID_marca.push(doc.get("ID_marca"))
            calificacion.push(doc.get("calificacion"))
            cant_ventas.push(doc.get("cant_ventas"))
            cantidad.push(doc.get("cantidad"))
            descripcion.push(doc.get("descripcion"))
            imagen.push(doc.get("imagen"))
            nombre.push(doc.get("nombre"))
            precio.push(doc.get("precio"))
        });
  
        for(let i=0; i< ID.length; i++){
            console.log("ENTRO AL FETCH")
            let temp = {
              ID: ID[i],
              ID_categoria: ID_categoria[i],
              ID_marca : ID_marca[i],
              calificacion : calificacion[i],
              cant_ventas : cant_ventas[i],
              cantidad : cantidad[i],
              descripcion : descripcion[i],
              imagen : imagen[i],
              nombre : nombre[i],
              precio : precio[i]
            }

            this.setState({ inventario: temp})
            console.log("aqui llego")
        }
        
      });
  }

  render() {

    return (
      <div className="App">
        <div>
              {
                this.state.inventario &&
                this.state.inventario.map((object) => {
                  <div>
                    <div>{object.ID}</div>
                    <div>{object.ID_categoria}</div>
                    <div>{object.ID_marca}</div>
                    <div>{object.calificacion}</div>
                    <div>{object.cant_ventas}</div>
                    <div>{object.cantidad}</div>
                    <div>{object.descripcion}</div>
                    <div>{object.imagen}</div>
                    <div>{object.nombre}</div>
                    <div>{object.precio}</div>
                  </div>
                })
              }
          </div>
      </div>
    );
  }
}
export default withRouter(App)