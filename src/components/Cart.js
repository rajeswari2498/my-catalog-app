import React, { useState } from "react";
import { useCart } from "react-use-cart";
import axios from 'axios';

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
    } = useCart();
  
    if (isEmpty) return <p>Your cart is empty</p>;

    async function doPostRequest() {
        await axios.post("https://g70ff7o269.execute-api.ap-south-1.amazonaws.com/production/", {
            Items : JSON.stringify(items)
     }); 
    }
  
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mt-4">
                    <h1>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h1>
                    <table className="table table-light table-hover mt-4">
                        <tbody>
                            <tr className="headings">
                                <th> </th>
                                <th>Item Name</th>
                                <th>Amount</th>
                                <th>No of Items</th>
                                <th>Update Items</th>
                            </tr>
                            {items.map((item,index)=>{
                                return(  
                                    <tr key={index}>
                                    <td>
                                        <img src={item.image} style={{height:"7rem",width:"7rem"}}/>
                                    </td>
                                    <td className="pn"> {item.category}</td>
                                    <td> Rs :{item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm ms-2 me-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1) }>-</button>
                                        <button className="btn btn-danger btn-sm ms-2 me-2" onClick={() => updateItemQuantity(item.id , item.quantity + 1) }>+</button>
                                        <button className="btn btn-primary btn-sm ms-2" onClick={() => removeItem(item.id) }>Remove Item</button>
                                    </td>
                                </tr>
                        
                                )             
                                })}
                                </tbody>
                            </table>
                            </div>
                            <div className="mt-3">
                            <h4>Total Price : Rs {cartTotal}</h4>
                            </div>
                            <div className="gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-danger me-1" onClick={()=>emptyCart()}>
                                Clear Cart
                            </button>
                            <button className="btn btn-primary" onClick={()=>doPostRequest()}>Place order</button>
                            </div>
                        </div>
                        </section>
                        
                    )
                    }

export default Cart;