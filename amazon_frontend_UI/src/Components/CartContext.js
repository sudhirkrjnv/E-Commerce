import { Component, createContext } from "react";

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);

        let existingcart = localStorage.getItem('mycart') !=undefined ? JSON.parse(localStorage.getItem('mycart')) : [];
        let cartAmount = existingcart.reduce((total, item) => total + (item.quantity || 0), 0);

        this.state = {
            //item: [],
            //size: 1,
            item: existingcart,
            size: cartAmount,

            /*
            increment: (value) => {
                let itemList = this.state.item;
                itemList.push(value);

                this.setState({item: itemList});
                this.setState({size : this.state.item.length});

                this.state.saveToLocalCache();
            },
            */

            increment: (value)=> {
                let itemList = [...this.state.item];
                const itemIndex = itemList.findIndex(item => item.id === value.id);
        
                if (itemIndex > -1) {
                    itemList[itemIndex].quantity += 1;
                } else {
                    itemList.push({ ...value, quantity: 1 });
                }
        
                this.setState({ item: itemList, size: itemList.reduce((total, item) => total + item.quantity, 0) }, this.saveToLocalCache);
            },

            decrement: (value)=> {
                let itemList = [...this.state.item];
                const itemIndex = itemList.findIndex(item => item.id === value.id);
        
                if (itemIndex > -1) {
                    if (itemList[itemIndex].quantity > 1) {
                        itemList[itemIndex].quantity -= 1;
                    } else {
                        itemList.splice(itemIndex, 1);
                    }
                }
        
                this.setState({ item: itemList, size: itemList.reduce((total, item) => total + item.quantity, 0) }, this.saveToLocalCache);
            },

            emptyCart: ()=> {
                this.setState({ item: [], size: 0 }, this.saveToLocalCache);
            },

            saveToLocalCache: ()=> {
                localStorage.setItem('mycart', JSON.stringify(this.state.item));
            }
        
        }
    }

    render() {
        return (
            <CartContext.Provider value={{...this.state, ...this.increment, ...this.decrement, ...this.emptyCart}}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartContextProvider;
