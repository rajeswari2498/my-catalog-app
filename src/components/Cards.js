import React from 'react';
import {useCart} from "react-use-cart" 

function Cards(props) {
  const {addItem} = useCart();
  
  return (
    <div className="col-4 col-md-6 col-lg-4 mx-0 mb-8">
        <div class="card p-0 overflow-hidden h-60 shadow" style={{width:"18rem"}}>
            <img src={props.image} class="card-img-top"/>
                <div className="card-body">
                    <h3 class="card-title">{props.category}</h3>
                    <p class="card-text">Rs {props.price}</p>
                    <div className='btn1'>
                    <button type="button" class="btn btn-success " onClick={()=>addItem(props.item)}>Add to Cart</button>
                    </div>
                    
                </div>
        </div>
         
    </div>
  )
}

export default Cards
