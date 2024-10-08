import './Cartitems.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Cartitems(props){
    
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
                                <Rating name="rating-read-only" defaultValue={props.stars} precision={0.1} readOnly size="medium" />
                                <span style={{ marginLeft: '0.5em' }}>& Up</span>
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
                    <div className='soldby'>Soldby : <b>Sudhir Kumar</b></div>
                    <div className='itemnumber'>
                        <button className='minus' onClick={props.minus}> - </button>
                        <button className='totitem'> {props.quantity} </button>
                        <button className='plus' onClick={props.plus}> + </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cartitems;