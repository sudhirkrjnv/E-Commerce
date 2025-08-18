import { Link } from 'react-router-dom';
import './Thirdpart.css'

function Thirdpart(props){

    return(
        <div>
            <div className='thirdpartcontainer1'>
                <div className='withexchange designing'>
                    <div style={{marginLeft:'10px'}}>
                        <div style={{fontWeight:'bold', fontSize:'17px'}}>With Exchange</div><div>Up to ₹ {props.withexchange} off</div>
                    </div>
                </div>
                <div className='withoutexchange designing'>
                    <div style={{marginLeft:'10px', marginTop:'10px'}}>
                        <div style={{fontWeight:'bold', fontSize:'17px'}}>Without Exchange</div><div>₹ {props.withoutexchange}</div>
                    </div>
                    <div className='delivery' style={{marginTop:'20px',fontSize:'1em', marginLeft:'10px'}}>
                        Free delivery <b>{props.delivery}</b><br/>Order within 21 hrs 43 mins.
                    </div><br/>
                    <div className='availability'>{props.availibility}</div>
                    <br/>
                    <div className='protectionplan' style={{marginLeft:'10px', color:'green'}}><div className='titlefont'>Add a Protection Plan :</div>
                        <input type='checkbox' value='plan1'/><label>Extended Waranty by OneAssistant for ₹1,099.00</label><br/>
                        <input type='checkbox' value='plan2'/><label>Total Protection Plan by Quess for ₹1,249.00</label><br/>
                    </div>
                    <br/>
                    <div>
                        <button className='addtocarts' onClick={props.addToCart}> Add to Cart</button>
                        <Link className='link' to='/checkout/'>
                            <button className='buynow'> Buy Now</button>
                        </Link>
                    </div>
                    <br/>
                    <input style={{marginLeft:'10px'}} type='checkbox' value='extendedwaranty'/><label>Add gift options</label><br/>
                </div>
                
            </div>
            <div className='thirdpartcontainer2'><div style={{fontSize:'1em', marginLeft:'10px', fontWeight:'bold'}}>Add to Wish List</div></div>
        </div>
    )
}
export default Thirdpart;