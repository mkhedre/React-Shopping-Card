
import React ,{useState} from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/products/product";
import data from'./data.json'
function App() {
  const [product ,setproduct] = useState(data)
  
  const mapping=()=>{
    product.map((item)=>{
      return(
        <div className="productitem">
          <h2>{item.title}</h2>
          <img src={item.imageurl} />
          <p>{item.desc}</p>
        </div>
      )
    })
  }
  return (

    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={product} />
          <div className="filter">filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
