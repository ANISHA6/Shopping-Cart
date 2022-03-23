import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products: [
                {
                price: 99,
                title: 'Watch',
                qty: 1,
                img:'',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img:'', 
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img:'',
                id: 3
            }
            ]

        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    // first call the constructor of the parent class
    render(){
        const {products}=this.state;
        //return some jsx
        return(
        <div className="cart">
            {products.map((product)=>{
           return (
           <CartItem product={product} 
           key={product.id}
        //    func={()=> console.log('sdsd')}
        //    islogged={false}
        //    jsx={<h1>Test</h1>}
           />
           );
            
            })}

         </div>
         );
    }
}



export default Cart;