import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Product.css'


interface ProductSxema{
    id:string,
    images:string[],
    title:string,
    name:string,
    description:string,

}
const API_URL:string = "https://dummyjson.com"

const Product: React.FC = () => {
    const [products,setProducts] = useState<null | ProductSxema[]>(null)

    useEffect(() =>{
        axios
        .get(`${API_URL}/products?limit=4`)
        .then(res =>{
            setProducts(res.data.products)
         })
        
    },[])
   
    let productsAll: JSX.Element[] | undefined = products?.map((product: ProductSxema) =>(
        <div className="card" key={product.id}>
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </div>
    ))
    
    return (
        <div>
<div className="container">
<div className="h1">
    <h1>Meet our team</h1>
</div>
    <div className="wrapper">
        {productsAll}
    </div>
</div>
            
        </div>
    );
}

export default Product;
