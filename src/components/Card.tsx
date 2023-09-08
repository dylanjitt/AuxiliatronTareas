import React from "react";

export default function Card(props:any) {
  return (
    <div style={{ width: 600, height: 200, alignItems: 'center', display: 'flex',borderWidth:1,borderRadius:10,borderColor:'#000',borderStyle:'solid',margin:30 }}>
      <div style={{ padding: 30, width: '30%' }}>
        <img src={props.image} style={{ width: 150, height: 150,borderRadius:100 ,backgroundColor:'#fff',borderColor:'#000',borderStyle:'solid',borderWidth:1}} />
      </div>
      <div style={{ padding: 10, width: '45%',alignItems:'flex-start', justifyContent:'space-evenly',display:'flex',flexDirection:'column' }}>
        <h1 style={{fontSize:30,fontWeight:'bold'}}>Nombre: {props.nombre}</h1>
        <h1 style={{fontSize:30,fontWeight:'bold'}}>Apellido: {props.apellido}</h1>
      </div>
    </div>
  )
}