import { useEffect, useState } from 'react';
import Buynow from './Buynowcontainer/Buynow';
import Cartitems from './Cartitems/Cartitems';
import './Checkout.css'
import { useSelector , useDispatch} from 'react-redux';
import axios from 'axios';
import { clearCart, setCart , removeFromCart} from '../../redux/cartSlice';

function Checkout(){

    //const {cart} = useSelector(store=>store.cart);
    const user = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();

    //const [cart, setCart] = useState([]);
    const cart = useSelector((store) => store.cart.cart);
    

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
                    dispatch(setCart(res.data.cart.items));
                    //console.log(res.data.cart.items);
                }
            } catch (error) {
                console.error(error?.response?.data?.message);
            }
        }
        getCart();
    }, [dispatch, user._id]);

    const handleClearCart = async()=>{
        //dispatch(clearCart());
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/cart/clear/${user._id}`);
            if(res.data.success){
                console.log("cart cleared");
                dispatch(clearCart());
            }
        } catch (error) {
            console.error(error?.response?.data?.message);
        }
    }

    const handleRemoveFromCart = async (productId) => {
        try {
            const res = await axios.delete(`http://localhost:8000/api/v1/cart/removeFromCart/${user._id}/${productId}`);
            if (res.data.success) {
                dispatch(removeFromCart({ productId }));
                console.log("Item removed from cart");
            }
        } catch (error) {
            console.error(error?.response?.data?.message);
        }
    };

    const handleUpdateQuantity = async (productId, quantity) => {
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/cart/updateQuantity/${user?._id}/${productId}`, { quantity }, {
                headers: {
                    'Content-Type': 'application/json'
                }, withCredentials: true
            });
            if (res.data.success) { 
                dispatch(setCart(res.data.cart.items)); 
                console.log("Cart updated");
            }
        } catch (error) {
            console.error(error?.response?.data?.message);
        }
    };

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
                                    quantity={item.quantity} handleRemoveFromCart={handleRemoveFromCart} handleUpdateQuantity={handleUpdateQuantity}
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
                    <Buynow size={cart.length} items={cart} subtotalamount= {totalPrice} handleClearCart={handleClearCart}/>
                </div>

            </div>
        </>
    );
}
export default Checkout;