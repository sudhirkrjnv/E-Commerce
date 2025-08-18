import { Link } from 'react-router-dom';
import './HomePage.css'
import Menubar from './Menubar/Menubar';
import Navbar from './Navbar/Navbar';

function HomePage(){
    let homeItemsCategories = ["homeStyle", "homeAppliances", "headphones", "specialDeals", "automotiveEssentials", "amazonBrands", "BabyCare", "mobiles"];
    return(
        <div>
            <Menubar/>
            <div className='bannerbox'>
                <div className='banner'>
                    <div className='mask'></div>
                </div>
            </div>
            <div  className='bundledbox'>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                    {/* <Link className='link homeboxes' to='/product/mobiles' >
                        box1
                    </Link> */}
                    {
                        homeItemsCategories.map((item, index)=>{
                            return (
                                <>
                                    {/* <div key={index} className='homeboxes'>box {item}</div> */}
                                    <Link key={index} to={'/product/'+item}  className='homeboxes'>{item}</Link>
                                </>
                            )
                        })
                    }
                    {/* <div className='homeboxes'>box 2</div>
                    <div className='homeboxes'>box 3</div>
                    <div className='homeboxes'>box 4</div>
                    <div className='homeboxes'>box 5</div>
                    <div className='homeboxes'>box 6</div>
                    <div className='homeboxes'>box 7</div>
                    <div className='homeboxes'>box 8</div> */}
                </div>
            </div>
        </div>
    );
}
export default HomePage;