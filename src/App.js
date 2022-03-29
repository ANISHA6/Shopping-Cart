import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';


class App extends React.Component {
  //this constructor has copied from cart
  //and making available here , so that navbar can aceess it too
  constructor(){
    // first call the constructor of the parent class

        super();
        this.state={
            products: [],
            loading: true
            //     {
            //     price: 99,
            //     title: 'Watch',
            //     qty: 1,
            //     img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&w=1000&q=80',

            //     id: 1
            // },
            // {
            //     price: 999,
            //     title: 'Mobile Phone',
            //     qty: 10,
            //     img:'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80',

            //     id: 2
            // },
            // {
            //     price: 999,
            //     title: 'Laptop',
            //     qty: 4,
            //     img:'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80',
            //     id: 3
            // }
            //now fetch the data from firebase, instead of having products array.



            

        }
        this.db=firebase.firestore();
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }

componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot)=>{
  //     console.log(snapshot);
  //     snapshot.docs.map((doc)=>{
  //       console.log(doc.data());
  //     });
  //     //after fetching the product, set the state
  //     //so that browser can re-render
  //     //and it will be display me all the products
      
    
  //       const products= snapshot.docs.map((doc)=>{
  //         const data=doc.data();
  //         data['id']=doc.id;
  //         return data;

  //       }) 
  //       this.setState({
  //         products,
  //         loading:false
  //       })
  //   })
  // firebase
    // .firestore()
    this.db
    .collection('products')
    //querying the data, we can also group the query
    // .where('price', '==', 999 )
    // .where('title', '==', 'Mug')

    //sort the data a/c to price

    .orderBy('price', 'desc')
    //after adding this onSnapshot listener we will able to see the updated data without refreshing the browser
    .onSnapshot((snapshot)=>{
      console.log(snapshot);
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      });
      //after fetching the product, set the state
      //so that browser can re-render
      //and it will be display me all the products
      
    
        const products= snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;

        }) 
        this.setState({
          products,
          loading:false
        })
    })
}

    //code for increase quantity after probs
    handleIncreaseQuantity=(product)=>{
        console.log('Heyy please inc the qty of', product);
        const { products }=this.state;
        const index=products.indexOf(product);

        // products[index].qty +=1;
        // this.setState({
        //     // products: products
        //     products
        // });

        //instead in state, now increase the quantity in firebase
//get refrence of that particular document in firebase
const doRef=this.db.collection('products').doc(products[index].id);
doRef
.update({
  qty:products[index].qty+1
})
.then(()=>{
  console.log('Updated sucessfully');
})
.catch((error)=>{
  console.log('Error', error);
});
    }

    handleDecreaseQuantity=(product)=>{
        console.log('Heyy please inc the qty of', product);
        const { products }=this.state;
        const index=products.indexOf(product);

        if(products[index].qty===0){
            return;
        }

        // products[index].qty -=1;

        // this.setState({
        //     // products: products
        //     products
        // })

        //get refrence of that particular document in firebase
const doRef=this.db.collection('products').doc(products[index].id);
doRef
.update({
  qty:products[index].qty-1
})
.then(()=>{
  console.log('Updated sucessfully');
})
.catch((error)=>{
  console.log('Error', error);
});




    }

    handleDeleteProduct= (id) =>{
        const { products }=this.state;

        
        //get refrence of that particular document in firebase
const doRef=this.db.collection('products').doc(id);
doRef
.delete()
.then(()=>{
  console.log('Deleted sucessfully');
})
.catch((error)=>{
  console.log('Error', error);
});
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
        if(product.qty >0){
        cartTotal=cartTotal+product.qty*product.price
        }
        return '';
      })
      return cartTotal;


    }
    addProduct=()=>{
      this.db
      .collection('products')
      .add({
        //it is converted to document and added to collection product
        img:'',
        price: 399,
        qty: 4,
        title: 'Washing machine'
      })
      .then((docRef)=>{
        console.log('product has been added', docRef);
      })
      .catch((error)=>{
        console.log('Error', error);
      })
    }

  render(){
    const { products, loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      {/* button for adding the product to firebase */}
      {/* <button onClick={this.addProduct} style={{padding:20, fontSize: 20}}>Add a product</button> */}
     
     <Cart 
     products={ products}
     onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteProduct={this.handleDeleteProduct}
     
     />
     {loading && <h1> Loading products.... </h1>}
     <div style={{padding:10, fontSize:20}}>TOTAL: {this.getCartTotal()}</div>

    </div>
  );
}
}


export default App;
