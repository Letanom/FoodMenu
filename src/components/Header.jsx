import React, { useState } from 'react'
import Foods from './Foods'


const Header = ({setCategory}) => {



 

  return (
    <div>
    <h1 className="text-5xl text-center pt-10 m-10">YEMEK MENÜSÜ</h1>
  
   <div className='buttons  inline-flex py-8 px-8  min-w-full'>
   <button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("all")}>
  Tümü
</button>
<button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("Kahvalti")} >
  Kahvaltı
</button>
<button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("Yemek")}>
  Yemekler
</button>
<button  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCategory("Icecek")}>
  İçecekler
</button>


   </div>
    </div>


  )
}

export default Header

/*onClick={() => handleClickedT('Tumu')}
onClick={()=> handleClicked('Kahvalti')}
onClick={() => handleClicked('Yemek')}
onClick={() => handleClicked('shakes')}/
  const [group, setGroup] = useState(Foods);
  const [activeCategory, setActiveCategory] = useState('');

  const handleClicked = (category) => {
    if (category === 'Tumu') {
      setGroup(Foods);
    } else {
      const filteredGroup = Foods.filter(food => food.category === category);
      setGroup(filteredGroup);
    }
    setActiveCategory(category);
  };/*/
