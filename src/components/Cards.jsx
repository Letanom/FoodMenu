import React, { useEffect, useState } from 'react'
import Foods from './Foods'



export const Cards = (props) => {


  return (

    <div className="cards flex flex-1 float-left pt-7 p-6 m-1 text-center  ">
      
      <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full h-52 object-cover" src={props.img}></img>
          <div className='title text-xl p-6  uppercase font-bold text-gray-950'>{props.title}</div>
          <p className="font-semibold text-sm">{props.desc}</p>
          <p className=" text-green-700 text-lg">{props.price}₺</p>
          <p className="text-blue-400">{props.category} </p>
         
          </div>
        </div>
      


  );

}
export default Cards
/*  <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
     */