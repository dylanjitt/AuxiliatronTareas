import React from "react";
import Card from "./Card";

export default function CardList(props: any) {

  //const personas=props

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:'column' }}>

      {props.personas.map((person:any)=>{
        return(
          <Card
        image={person.foto}
        nombre={person.name}
        apellido={person.apellido}
      />
        )
      })}

    </div>
  )
}