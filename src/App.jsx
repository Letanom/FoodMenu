import { useEffect, useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Foods from './components/Foods'; // Foods dosyasının yolunu doğru şekilde belirtin

function createCard(Food) {
  return (
    <Cards
      key={Food.id}
      title={Food.title}
      category={Food.category}
      price={Food.price}
      img={Food.img}
      desc={Food.desc}
    />
  );
}

function App() {

  const[category,setCategory] = useState("all")
  const [filteredData,setFilteredData] = useState([])
  useEffect(()=>{
    if(category==="all"){
      setFilteredData(Foods)
    }
    else{
      setFilteredData(Foods.filter(item =>item.category ===category
        ))
    }


  },[category,Foods])





  return (
    <div>
      <Header 
        setCategory={setCategory}
      />
      {/* Foods veri dizisi */}
      {filteredData.map(createCard)}
    </div>
  );
}

export default App;
