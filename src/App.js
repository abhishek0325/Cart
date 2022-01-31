import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";
class App extends React.Component {

  constructor () {
    super();
    this.state = {
       products: [
           {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            id: 1
           },
           {
            price: 999,
            title: 'Laptop',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id: 2
           },
           {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id: 3
           }
       ]
    }}

    handleIncreaseQuantity = (product) => {
         const {products} = this.state;
         const index = products.indexOf(product);

         products[index].qty += 1;
         this.setState({
             products
         })
        }
    handleDecreaseQuantity = (product) => {
            const {products} = this.state;
            const index = products.indexOf(product);

            if(products[index].qty == 0){
                return;
            }
            products[index].qty -= 1;
            this.setState({
                products
            })

    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
    }


    getCartCount = () => {
      const {products} = this.state;

      let count = 0;

      products.forEach((product) => {
        count += product.qty;
      })


      return count;
    }

  render () {
    const { products } = this.state;
    return (
      <div className="App">
       <Navbar count={this.getCartCount()} /> 
       <Cart
            products = {products}     
            onIncreaseQuantity = {this.handleIncreaseQuantity} 
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
       />
      </div>
    );

  }
  
}

export default App;
