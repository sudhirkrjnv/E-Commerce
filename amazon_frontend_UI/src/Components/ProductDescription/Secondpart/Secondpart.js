import './Secondpart.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Secondpart(props){
    return(
        <>
            <div className='secondpartcontainer'>
                <div className='producttitle'>{props.name}</div><br/>
                <div className='productratings'>
                    <Stack spacing={1}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Rating name="rating-read-only" defaultValue={props.stars} precision={0.1} readOnly size="large" />
                            <span style={{ marginLeft: '0.5em' }}> 4.5 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.ratings} ratings</span>
                        </div>
                    </Stack>
                </div>
                <div className='totalbought border'>{props.brought} bought in past month</div><br/>
                <div className='emiplan'>
                    <div style={{display:'flex'}}><div style={{fontSize:'30px', fontWeight:'bold', marginTop:'2px'}}>₹{props.emi}</div><div style={{marginTop:'15px'}}> &nbsp;/months (24 months)</div></div>
                    <div>with EMI on your {props.card} Bank Credit Card</div>
                </div><br/>
                <div className='price&off border' style={{display:'flex'}}>
                    <div className='percoff'style={{marginTop:'5px', fontSize:'1.2em'}}>₹</div>
                    <div className='pricetag' style={{fontSize:'30px'}}>{props.price}</div>
                    <div className='percoff' style={{marginTop:'10px', fontSize:'1.2em'}}>&nbsp;M.R.P: ₹{props.mrp} ({props.off} % off)</div>
                </div>
                <div className='about'><div style={{fontSize:'1.5em', fontWeight:'bold' , position:'relative', bottom:'-10px', paddingBottom:'10px'}}>About this item</div>
                    <div className='scrollingItem' style={{display:'flex', height:'40vh', overflowY:'scroll'}}>
                        <ul>
                            {/*<li>{props.about}</li>*/}
                            
                            {
                                props.about != undefined &&
                                props.about.map((abouts)=>(
                                    <li>{abouts}</li>
                                ))
                            }
                            
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Secondpart;