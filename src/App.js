import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  //this constructor has copied from cart
  //and making available here , so that navbar can aceess it too
  constructor(){
    // first call the constructor of the parent class

        super();
        this.state={
            products: [
                {
                price: 99,
                title: 'Watch',
                qty: 1,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&w=1000&q=80',

                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img:'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80',

                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img:'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80',
                id: 3
            }
            ]

        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    //code for increase quantity after probs
    handleIncreaseQuantity=(product)=>{
        console.log('Heyy please inc the qty of', product);
        const { products }=this.state;
        const index=products.indexOf(product);

        products[index].qty +=1;

        this.setState({
            // products: products
            products
        })
    }

    handleDecreaseQuantity=(product)=>{
        console.log('Heyy please inc the qty of', product);
        const { products }=this.state;
        const index=products.indexOf(product);

        if(products[index].qty===0){
            return;
        }

        products[index].qty -=1;

        this.setState({
            // products: products
            products
        })
    }

    handleDeleteProduct= (id) =>{
        const { products }=this.state;

        const items= products.filter((item)=> item.id!==id);//[{}]
        this.setState({
            products : items
        })
    }

    getCartCount=()=>{
      const { products}=this.state;
      let count=0;
      products.forEach((product)=>{
        count+=product.qty;
      })
      return count;
    }
    getCartTotal=()=>{
      const { products}=this.state;
      let cartTotal=0;
      products.map((product)=>{
        cartTotal=cartTotal+product.qty*product.price
      })
      return cartTotal;


    }

  render(){
    const { products }=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
     
     <Cart 
     products={ products}
     onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteProduct={this.handleDeleteProduct}
     
     />
     <div style={{padding:10, fontSize:20}}>TOTAL: {this.getCartTotal()}</div>

    </div>
  );
}
}

export default App;
