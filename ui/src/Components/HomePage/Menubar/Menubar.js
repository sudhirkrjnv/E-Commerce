import { Link } from 'react-router-dom';
import './Menubar.css'

function Menubar(){
    return(
        <div className='menubarbox'>
            <div className='all'>
                <div className='threeline'></div>
                <div className='alltext'>All</div>
            </div>
            <div className='menuchilds'>
                <ul>
                    <li>Amazon miniTV</li>
                    <li>Sell</li>
                    <li>Amazon Pay</li>
                    <li>Gift Cards</li>
                    <li>Buy Again</li>
                    <li>Today's Deals</li>
                    <li>Fashion</li>
                    <li>Gift Ideas</li>
                    <li>Browsing History</li>
                    <li>Coupons</li>
                    <li>Books</li>
                    <li>Costomer Service</li>
                    <li>Sudhir's Amazon.in</li>
                    <Link className='link' to='/product/mobiles'><li>Mobiles</li></Link>
                    <Link className='link' to='/admin'><li>Seller login</li></Link>
                </ul>
            </div>
        </div>
    );
}
export default Menubar;