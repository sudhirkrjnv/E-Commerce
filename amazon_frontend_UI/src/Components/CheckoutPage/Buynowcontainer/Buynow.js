import './Buynow.css'

function Buynow(props){
    return(
        <div>
            <div className='paycontainer'>
                <div className='summarybox'>
                    <div className='summary'>Summary</div>
                </div>
                <div className='boxdesigning'>
                    <div style={{marginLeft:'10px', marginTop:'10px'}}>
                        <div style={{fontWeight:'bold', fontSize:'17px'}}>Sub Total</div><div>₹ {props.subtotalamount}</div>
                    </div>
                    <div style={{marginLeft:'10px', marginTop:'10px'}}>
                        <div style={{fontWeight:'bold', fontSize:'17px'}}>Items</div><div>{props.size}</div>
                    </div>
                    <br/> 
                    <div className='pay' > Pay </div>
                    <br/>
                </div>
                
                <div className='emptycontainer'>
                    <div onClick={props.empty}>Remove all Items</div> 
                </div>
            </div>
        </div>
    );
}
export default Buynow;