import React from 'react'

export default function Card(props) {
    const {nama, rombel, rayon} = props;
  return (
    <>
    <h1 
        style={{
            width: 500,
            height: '150px',
            border: '1px solid black',
            borderRadius: 5
         }}
        
    >
        <tr>
            <td>nama</td>
            <td>=</td>
            <td>{props.nama}</td>
        </tr>
        <tr>
            <td>rombel</td>
            <td>=</td>
            <td>{props.rombel}</td>
        </tr>
        <tr>
            <td>rayon</td>
            <td>=</td>
            <td>{props.rayon}</td>
        </tr>
   
    {/* {props.children} */}
    </h1>
    </>
  )
}
