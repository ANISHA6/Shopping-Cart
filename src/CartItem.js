import React from 'react';

const CartItem= (props) =>{
    // first call the constructor of the parent class
    // constructor(){
    //     super();
    //     this.state={
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img:''
    //     }
    //     // this.increaseQuantity=this.increaseQuantity.bind(this);
    // }
    // increaseQuantity= ()=>{
        // this.state.qty+=1;
        // console.log('this', this.state);
        // setState form 1
    //     this.setState({
    //         qty: this.state.qty +1
    //     }, ()=>{});
    // }
        // setState form 2, if preState required use this

    //     this.setState((preState)=>{
    //         return{
    //             qty:preState.qty+1
    //         }
    //     });
    // }


    // decreaseQuantity= ()=>{
    //     const {qty}=this.state;
    //     if(qty===0){
    //         return;
    //     }
       
        // setState form 2, if preState required use this
    //     this.setState((preState)=>{
    //         return{
    //             qty:preState.qty-1
    //         }
    //     });
    // }

    
   
        // console.log('this.probs', this.props);
        // const {price, title, qty}=this.state;
        const {price, title, qty}=props.product;
        const {
            product,
             onIncreaseQuantity, 
             onDecreaseQuantity,
             onDeleteProduct
             }=props;

        return(
            <div className="cart-item">
                {/* {this.props.jsx} */}
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Button */}
                        <img 
                        alt="increase" 
                        className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                         onClick={()=>onIncreaseQuantity(product)}
                         />
                        <img
                         alt="decrease"
                          className="action-icons" 
                          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                         onClick={()=> onDecreaseQuantity(product)}

                           />
                        <img 
                        alt="delete" 
                        className="action-icons"
                         src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                         onClick={()=>onDeleteProduct(product.id)}
                          />

                    </div>
                </div>
            </div>
        );
    }


const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'

    }
}

export default CartItem;