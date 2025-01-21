// write product card here
import React from "react";

const ProductCard=()=>{
    const product = {
        productImage:'',
        productName:'Product',
        productPrice:'$499',
    }
    return(
        <>
            <div>
                <img src={product.productImage}/>
                <h2>{product.productName}</h2>
                <p>{product.productPrice}</p>
                <button onClick={()=>console.log(`Button Clicked!`)}>
                    View product
                </button>
            </div>
        </>
    )

}

export default ProductCard;