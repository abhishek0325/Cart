import React from "react";


const CartItem = (props) => {
   
    
    // increaseQuantity = () => {
          
    //       //console.log('this', this.state);
    //       //setState Form 1 - if prev state not required use this
    //       // this.setState({
    //           // qty: this.state.qty + 1
    //       // });
    //       // setState form 2 - if prev state required use this
    //       this.setState((prevState) => {
    //           return {
    //               qty: prevState.qty + 1
    //           }
    //       });
    // }
    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }



    
        const {price, title, qty} = props.product;
        const {product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props;
        return(
            <div className="cart-item">
            <div className="left-block">
            <img style={ styles.image } src={product.img} />

            </div>
            <div className="right-block">
             <div style={{fontSize: 25}}>{title}</div>
             <div style={{color:'#777'}}>Rs {price}</div>
             <div style={{color:'#777'}}>Qty: {qty}</div>
             <div className="cart-item-actions">
                 {/* Buttons */}
                 <img 
                 alt="increase" 
                 className="action-icons" 
                 src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
                 onClick={() => onIncreaseQuantity(product)}

                 />
                 <img 
                 alt="decrease" 
                 className="action-icons" 
                 src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                 onClick={() => onDecreaseQuantity(product)}
                  />
                 <img 
                 alt="Delete" 
                 className="action-icons" 
                 src="https://cdn-icons-png.flaticon.com/512/1214/1214594.png"
                 onClick = {() => onDeleteProduct(product.id)}
                  />

             </div>
            </div>
 
            </div>
        );

    
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;