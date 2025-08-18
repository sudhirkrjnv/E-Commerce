import './Buynow.css'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/cartSlice';

function Buynow(props){

    const dispatch = useDispatch();

    let totalQuantity = 0;
    props.items.forEach(item => {
        totalQuantity += item.quantity;
    });

    return(
        <div>
            <div className='paycontainer'>
                <div className='summarybox'>
                    <div className='summary'>Summary</div>
                </div>
                <div className='boxdesigning'>
                    <div style={{marginLeft:'10px', marginTop:'10px'}}>
                        <div style={{display:'flex', justifyContent:'space-between', marginRight:'20px'}}>
                            <div style={{fontWeight:'bold', fontSize:'17px'}}>Sub Total</div><div style={{fontSize:'1.2rem', fontWeight:'bolder'}}>₹ {props.subtotalamount}</div>
                        </div>
                        <div className='scrollingItem' style={{borderTop:'1px solid black', borderBottom:'1px solid black', height:'80px', width:'220px', fontSize:'0.8rem', overflowY:'scroll'}}>
                            {props.items.map((item, index) => {
                                const price = parseFloat((item.price).replace(/,/g, ""));
                                const words = item.name.split(" ");
                                const shortName = words.length > 3 ? words.slice(0, 3).join(" ") : item.name;
                                return (
                                    <div key={index} style={{display:'flex', justifyContent:'space-between', margin:'5px 0'}}>
                                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'150px'}}>
                                            <div>{shortName}</div><div>*</div><div>{item.quantity} Q </div>
                                        </div>
                                        <div style={{marginLeft:"5px", marginRight:'5px'}}>=</div>
                                        <span>₹ {price * item.quantity}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div style={{marginLeft:'10px', marginTop:'10px', display:'flex', justifyContent:'space-between',marginRight:'20px'}}>
                        <div style={{fontWeight:'bold', fontSize:'17px'}}>Items</div><div>{props.size}</div>
                        <div style={{fontWeight:'bold', fontSize:'17px'}}>Quantity</div><div>{totalQuantity}</div>
                    </div>
                    <br/> 
                    <div className='pay' > Pay </div>
                    <br/>
                </div>
                
                <div className='emptycontainer'>
                    <div onClick={() => dispatch(clearCart())}>Remove all Items</div> 
                </div>
            </div>
        </div>
    );
}
export default Buynow;