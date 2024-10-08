import Buynow from './Buynowcontainer/Buynow';
import Cartitems from './Cartitems/Cartitems';
import './Checkout.css'
import { useContext } from 'react';
import { CartContext } from '../CartContext';

function Checkout(){
    const {item, size, increment, decrement, emptyCart} = useContext(CartContext);

    const cartValue = function(){
        let price = 0;
        for(let i=0;i<item.length;i++){
            const itemPrice = parseFloat(item[i].price.replace(/,/g, ""));
            //price += itemPrice;
            price += itemPrice * item[i].quantity;
        }
        return price.toLocaleString();
    }

    return(
        <>
            <div className='checkoutpanel'>
                <h1>Checkout</h1>
            </div>
            <div className='cartcontents'>
                <div className='leftcontainer'>
                    {
                        item.map((value)=>(
                            <Cartitems id={value.id} name={value.name} img={value.img} stars={value.stars} price={value.price} mrp={value.mrp} off={value.off} flatoff={value.flatoff} card={value.card} delivery={value.delivery} availibility={value.availibility} minus={()=>decrement(value)} plus={()=>increment(value)} quantity={value.quantity} />
                        ))
                    }
                    {/*<Cartitems/>
                    <Cartitems/>
                    <Cartitems/>
                    <Cartitems/>
                    <Cartitems/>
                    <Cartitems/>*/}
                </div>
                <div>
                    <Buynow subtotalamount= {cartValue()} size={size} empty={emptyCart} />
                </div>

            </div>
        </>
    );
}
export default Checkout;