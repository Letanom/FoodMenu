import React, { useState } from 'react'
import Foods from './Foods'


const Header = ({setCategory}) => {



 

  return (
    <div>
    <h1 className="text-5xl text-center pt-10 m-10">Food Menu</h1>
  
   <div className='buttons  inline-flex py-8 px-8  min-w-full'>
   <button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("all")}>
  All
</button>
<button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("Kahvalti")} >
  Breakfast
</button>
<button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("Yemek")}>
  Foods
</button>
<button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("Icecek")}>
  Drinks
</button>


   </div>
    </div>


  )
}

export default Header

