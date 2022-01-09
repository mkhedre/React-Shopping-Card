import React,{useState,useEffect} from 'react'
import '../../css/products/product.css'
import ProductModal from '../Modal/ProductModal'
function Product(props) {
    const [clickeditem ,setclickeditem] = useState("")
    const isopened=(product)=>{
        setclickeditem(product)
    }
    const closeModal=()=>{
        setclickeditem(false)
    }
    // const mapproducts=()=>(
    //     props.products.map((item)=>(
    //         <div className='product' key={item.id}>
    //             <h2>{item.title}</h2>
    //             <img src={item.imageurl} />
    //             <p>{item.desc}</p>
    //         </div>
    //     ))
    // )
    return (
        <div className='products-wrapper'>
            {props.products.map(item=>(
                <div className='product-item' key={item.id} > 
                    <a href='#' onClick={()=>isopened(item)}>
                        <img className='item_img' src={item.imageurl} />
                    </a>
                    <div className='product-desc'>
                        <p>{item.desc}</p>
                        <span>{item.prize}</span>
                    </div>
                    <button>add to card</button>
                </div>
            ))}
            <ProductModal clickeditem={clickeditem} closeModal={closeModal} />
        </div>
    )
}
export default Product