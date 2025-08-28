import { useEffect, useState } from 'react';
import Buynow from './Buynowcontainer/Buynow';
import Cartitems from './Cartitems/Cartitems';
import './Checkout.css'
import { useSelector } from 'react-redux';
import axios from 'axios';

function Checkout(){

    //const {cart} = useSelector(store=>store.cart);
    const user = useSelector((store) => store.auth.user);

    const [cart, setCart] = useState([]);

    let totalPrice = 0;
    // cart.forEach(item => {
    //     const price = parseFloat((item.price).replace(/,/g, ""));
    //     totalPrice += price * (item.quantity);
    // });
    cart.forEach(item => {
        const price = parseFloat((item?.productId?.price || "0").toString().replace(/,/g, ""));
        totalPrice += price * item.quantity;
    });

    useEffect(() => {
        const getCart = async () => {
            try {
                const res = await axios.post(`http://localhost:8000/api/v1/cart/getCart/${user._id}`);
                if (res.data.success) {
                    setCart(res.data.cart.items);
                    console.log(res.data.cart.items);
                }
            } catch (error) {
                console.error(error.response.data.message);
            }
        }
        getCart();
    }, []);

    return(
        <>
            <div className='checkoutpanel'>
                <h1>Checkout</h1>
            </div>
            <div className='cartcontents'>
                <div className='leftcontainer scrollingItem' style={{overflowY:'scroll', height:'82vh'}}>
                    {   
                        cart?.map((item, index)=>{
                            return (
                                <Cartitems key={index} id={item?.productId?._id} name={item?.productId?.name} img={item?.productId?.img} stars={item?.productId?.stars} price={item?.productId?.price} mrp={item?.productId?.mrp} off={item?.productId?.off} flatoff={item?.productId?.flatoff} card={item?.productId?.card} delivery={item?.productId?.delivery} availibility={item?.productId?.availibility}  
                                    quantity={item.quantity} 
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