import './Cartitems.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart, setCart } from '../../../redux/cartSlice';
import axios from 'axios';
import { useEffect } from 'react';

function Cartitems(props){

    const dispatch = useDispatch();
    const user = useSelector((store) => store.auth.user);

    // const handleRemoveFromCart = async () => {
    //     //dispatch(removeFromCart(props));
    //     //console.log(props);
    //     try {
    //         const res = await axios.delete(`http://localhost:8000/api/v1/cart/removeFromCart/${user._id}/${props?.id}`);
    //         if(res.data.success){
    //             dispatch(removeFromCart(props));
    //             //dispatch(setCart(res.data.cart.items));
    //             console.log("Item removed from cart");
    //         } 
    //     } catch (error) {
    //         console.error(error?.response?.data?.message);
    //     }
    // };

    return(
        <div>
            <div className='rightpartcontainer'>
                <div className='productimagebox'>
                    <img src={props.img}/>
                </div>
                <div className='shortdetails'>
                    <div style={{fontSize:'1.2em', fontWeight:'bold'}} className='itemtitle'>{props.name}</div><br/>
                    <div className='ratings&reviews'>
                        <Stack spacing={1}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Rating name="rating-read-only" defaultValue={(props.stars)} precision={0.1} readOnly size="medium" />
                            </div>
                        </Stack>
                    </div>
                    <br/>
                    <div className='price&off' style={{display:'flex'}}>
                        <div className='percoff'style={{marginTop:'5px', fontSize:'1.2em'}}>₹ &nbsp;</div>
                        <div className='pricetag' style={{fontSize:'30px', fontWeight:'bold'}}>{props.price}</div>
                        <div className='percoff' style={{marginTop:'10px', fontSize:'1.2em'}}>&nbsp;M.R.P: ₹ {props.mrp} ({props.off} % off)</div>
                    </div><br/>
                    <div className='flatoff' style={{fontSize:'1.2em'}}>
                        Flat INR {props.flatoff} off on {props.card} BankCards
                    </div>
                    <div className='delivery' style={{marginTop:'10px',fontSize:'1.2em'}}>
                        Free delivery <b>{props.delivery}</b>
                    </div><br/>
                    <div className='availability'>{props.availibility}</div>
                    <div style={{display:'flex'}}>
                        <div className='soldby'>Soldby : <b>Sudhir Kumar</b></div>
                        <div style={{marginLeft:'18vw',marginBottom:'1.5rem',fontWeight:'bolder', color:'red', outline:'none', border:'none', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'1.5rem', cursor:'pointer'}}
                            onClick={() => props.handleRemoveFromCart(props.id)}
                        >
                            Delete
                        </div>
                    </div>

                    
                    <div className='itemnumber'>
                        <button className='minus' 
                            onClick={()=>{ 
                                //props.quantity > 1 ? dispatch(decrementQuantity(props)) : dispatch(removeFromCart(props))
                                if (props.quantity > 1) {
                                    dispatch(decrementQuantity(props));
                                    props.handleUpdateQuantity(props.id, props.quantity - 1);
                                } else {
                                    //dispatch(removeFromCart(props));
                                    //props.handleUpdateQuantity(props.id, 0);
                                    props.handleRemoveFromCart(props.id)
                                }
                            }}
                        > - </button>
                        <button className='totitem'> {props.quantity} </button>
                        <button className='plus' onClick={()=>{dispatch(incrementQuantity(props)); props.handleUpdateQuantity(props.id, props.quantity + 1)}}> + </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Cartitems;