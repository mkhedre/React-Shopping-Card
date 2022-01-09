
import React ,{useState} from "react";
import Filter from "./components/filter/Filter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/products/product";
import data from'./data.json'
function App() {
  const [product ,setproduct] = useState(data)
  const [size , setsize] =useState("")
  const [sort ,setsort] = useState("")

  const handlesort =(e)=>{
    let order =e.target.value
    setsort(order);
    let productclone = [...product]
    let newproduct= productclone.sort(function(a,b){
      if(order=="lowest"){
        return a.prize - b.prize
      }else if(order =="heighest"){
        return b.prize - a.prize
      }else{
        return a.id <b.id ? 1 :-1
      }
    })
    setproduct(newproduct)
  }
  const handlesize=(e)=>{
    setsize(e.target.value)
    if(e.target.value =="ALL"){
      setproduct(data)
    }else{
    let productclone = [...data]
    //console.log(productclone.filter(p=>p.sizes.indexOf(e.target.value))!==-1)
    let products=productclone.filter(p=>p.sizes.indexOf(e.target.value) !=-1)
    console.log(products);
    setproduct(products)
  }}
  return (

    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <div className="product"><Product products={product} /></div>
          <Filter handlesort={handlesort} handlesize={handlesize} size={size} sort={sort}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
