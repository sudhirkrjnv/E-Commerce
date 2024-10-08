import './Rightpart.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function Rightpart(props){

    //let img='https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384',name="HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars='4.5',brought='2k+' , price='25,999',mrp='30,000', off='16', flatoff='3000', card='ICICI', delivery='Tuesday' ;

    return(
        <div>
            <div className='rightpartcontainer'>
                <div className='productimagebox'>
                    <img src={props.img}/>
                </div>
                <div className='shortdetails'>
                    <div style={{fontSize:'1.2em', fontWeight:'bold'}} className='itemtitle'><Link className='link' to={'/productdescription/'+props.id}>{props.name}</Link></div><br/>
                    <div className='ratings&reviews'>
                        <Stack spacing={1}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Rating name="rating-read-only" defaultValue={props.stars} precision={0.1} readOnly size="medium" />
                                <span style={{ marginLeft: '0.5em' }}>& Up</span>
                            </div>
                        </Stack>
                    </div>
                    <div className='totalbought'>{props.brought} bought in past month</div><br/>
                    <div className='price&off' style={{display:'flex'}}>
                        <div className='percoff'style={{marginTop:'5px', fontSize:'1.2em'}}>₹ &nbsp;</div>
                        <div className='pricetag' style={{fontSize:'30px', fontWeight:'bold'}}>{props.price}</div>
                        <div className='percoff' style={{marginTop:'10px', fontSize:'1.2em'}}>&nbsp;M.R.P: ₹{props.mrp} ({props.off} % off)</div>
                    </div><br/>
                    <div className='flatoff' style={{fontSize:'1.2em'}}>
                        Flat INR {props.flatoff} off on {props.card} BankCards
                    </div>
                    <div className='delivery' style={{marginTop:'10px',fontSize:'1.2em'}}>
                        Free delivery <b>{props.delivery}</b>
                    </div><br/>
                    <button className='addincart'><div>Add to Cart</div></button>
                </div>
            </div>
            <br/>
        </div>
    );
}
export default Rightpart;