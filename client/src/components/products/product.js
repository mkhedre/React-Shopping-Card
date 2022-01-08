import React,{useState,useEffect} from 'react'
import '../../css/products/product.css'
function Product(props) {
    
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
                    <img className='item_img' src={item.imageurl} />
                    <div className='product-desc'>
                        <p>{item.desc}</p>
                        <span>{item.prize}</span>
                    </div>
                    <button>add to card</button>
                </div>
            ))}
        </div>
    )
}
export default Product