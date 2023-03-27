import React, { useState } from 'react'
import Product from './Product';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Content = () => {
  const [data, setData] = useState(Product);
  const[searchvalue, setSearchValue] = useState("")
  const{totalItems} = useCart();
  
  const filterResult = (catItem) => {
    const result = Product.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
    console.log(result)
  
  }


 return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h4 className="navbar-brand font-size:x-large " color='black' href="/">Shopping</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">Home</a>
              </li>
             
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><button className='btn  w-77 mb-4 ' onClick={() => filterResult('Books')} > Books</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className='btn  w-77 mb-4' onClick={() => filterResult('Cosmetics')}> Cosmetics</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className='btn  w-77 ' onClick={() => filterResult('Rings')}> Rings</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className='btn  w-77 ' onClick={() => filterResult('Bags')}>Bags</button></li>
                </ul>
              </li>

            </ul>
              <Link to={"/Order"}><a className='order' style ={{"margin":"20px"}}>My Orders</a></Link>
            
            


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>{ e.preventDefault(); setSearchValue(e.target.value)}} />
              <button className="btn btn-outline-success" type="submit" onClick={(e) =>{e.preventDefault(); filterResult(searchvalue)}}>Search</button>
            </form>
            <Link to={'/Cart'}><FontAwesomeIcon className='shopcart' style= {{"margin":"20px"}} icon={faShoppingCart}></FontAwesomeIcon>
            <span className='translate-middle badge rounded-pill bg-danger'>{totalItems}</span>
            </Link>
          </div>
        </div>
      </nav>
      <section className='py-4 container'>
            <div className='row justify-content-center'>
                {data.filter((item) => {
                            if (searchvalue === "") {
                                return item
                            } else if (item.title.toLowerCase().includes(searchvalue.toLowerCase())) {
                                return item
                            }
                        }).
                map((item,index)=>{
                    return(
                        <Cards image={item.image} productName={item.category} price={item.price} item={item}  key={index}/>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Content;