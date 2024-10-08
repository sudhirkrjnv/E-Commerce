
import { Link } from 'react-router-dom';
import './HomePage.css'
import Menubar from './Menubar/Menubar';
import Navbar from './Navbar/Navbar';

function HomePage(){
    return(
        <div>
            <Menubar/>
            <div className='bannerbox'>
                <div className='banner'>
                    <div className='mask'></div>
                </div>
            </div>
            <div  className='bundledbox'>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <Link className='link' to='/product/mobiles' >
                        <div className='typeone'>box 1</div>
                    </Link>
                    <div className='typeone'>box 2</div>
                    <div className='typeone'>box 3</div>
                    <div className='typeone'>box 4</div>
                    <div className='typeone'>box 5</div>
                    <div className='typeone'>box 6</div>
                    <div className='typeone'>box 7</div>
                    <div className='typeone'>box 8</div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;