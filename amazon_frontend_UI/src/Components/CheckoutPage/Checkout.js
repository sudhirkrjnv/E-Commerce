import Buynow from './Buynowcontainer/Buynow';
import Cartitems from './Cartitems/Cartitems';
import './Checkout.css'
import { useSelector } from 'react-redux';

function Checkout(){

    const {cart} = useSelector(store=>store.cart);

    let totalPrice = 0;
    cart.forEach(item => {
        const price = parseFloat((item.price).replace(/,/g, ""));
        totalPrice += price * (item.quantity);
    });

    return(
        <>
            <div className='checkoutpanel'>
                <h1>Checkout</h1>
            </div>
            <div className='cartcontents'>
                <div className='leftcontainer scrollingItem' style={{overflowY:'scroll', height:'82vh'}}>
                    {
                        cart.map((value)=>{
                            return (
                                <Cartitems key={value.id} id={value.id} name={value.name} img={value.img} stars={value.stars} price={value.price} mrp={value.mrp} off={value.off} flatoff={value.flatoff} card={value.card} delivery={value.delivery} availibility={value.availibility}  
                                quantity={value.quantity} 
                                />
                            )
                        })
                    }
                    {/*<Cartitems/>
                    <Cartitems/>
                    <Cartitems/>
                    <Cartitems/>
                    <Cartitems/>
                    <Cartitems/>*/}
                </div>
                <div>
                    <Buynow size={cart.length} items={cart} subtotalamount= {totalPrice}/>
                </div>

            </div>
        </>
    );
}
export default Checkout;