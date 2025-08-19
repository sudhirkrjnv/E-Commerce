import { Link } from 'react-router-dom';
import './HomePage.css'
import Menubar from './Menubar/Menubar';
import Navbar from './Navbar/Navbar';

function HomePage(){
    let homeItemsCategories = ["homeStyle", "homeAppliances", "headphones", "specialDeals", "automotiveEssentials", "amazonBrands", "BabyCare", "mobiles"];
    let items = [
        {
            categories: "Revamp your home in style",
            item: [
                {
                    title: "Cushion covers, bedsheets & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
                },
                {
                    title: "Figurines, vases & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
                },
                {
                    title: "Home storage", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
                },   
                {
                    title: "Lighting Solutions", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
                },    
            ] 
        },
        {
            categories: "Appliances for your home | Up to 55% off",
            item: [
                {
                    title:  "Air Conditioners", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Refrigerators", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Microwaves", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                },
                {
                    title: "Washing Machines", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                }
            ]
        },
        {
            categories: "Revamp your home in style",
            item: [
                {
                    title: "Cushion covers, bedsheets & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
                },
                {
                    title: "Figurines, vases & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
                },
                {
                    title: "Home storage", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
                },   
                {
                    title: "Lighting Solutions", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
                },    
            ] 
        },
        {
            categories: "Appliances for your home | Up to 55% off",
            item: [
                {
                    title:  "Air Conditioners", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Refrigerators", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Microwaves", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                },
                {
                    title: "Washing Machines", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                }
            ]
        },
        {
            categories: "Revamp your home in style",
            item: [
                {
                    title: "Cushion covers, bedsheets & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
                },
                {
                    title: "Figurines, vases & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
                },
                {
                    title: "Home storage", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
                },   
                {
                    title: "Lighting Solutions", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
                },    
            ] 
        },
        {
            categories: "Appliances for your home | Up to 55% off",
            item: [
                {
                    title:  "Air Conditioners", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Refrigerators", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Microwaves", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                },
                {
                    title: "Washing Machines", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                }
            ]
        },
        {
            categories: "Revamp your home in style",
            item: [
                {
                    title: "Cushion covers, bedsheets & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
                },
                {
                    title: "Figurines, vases & more", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
                },
                {
                    title: "Home storage", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
                },   
                {
                    title: "Lighting Solutions", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
                },    
            ] 
        },
        {
            categories: "Appliances for your home | Up to 55% off",
            item: [
                {
                    title:  "Air Conditioners", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Refrigerators", 
                    image:  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                },
                {
                    title:  "Microwaves", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                },
                {
                    title: "Washing Machines", 
                    image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                }
            ]
        },
    ];
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
                        items.map((item, index)=>{
                            return (
                                <>
                                    {/* <div key={index} className='homeboxes'>box {item}</div> */}
                                    <Link key={index} to={'/product/'+item.categories}  className='homeboxes'>
                                        <h2 style={{padding: '10px', height:'2rem'}}>{item.categories}</h2>
                                        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                                            {
                                                item.item.map((subItem, subIndex) => (
                                                    <div key={subIndex} style={{width:'164px', height:'150px'}}>
                                                        <div style={{width: '150px', height: '110px', backgroundImage: `url(${subItem.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                                        <div>{subItem.title}</div>
                                                    </div>
                                                ))
                                            }
                                        
                                            {/* <div style={{width:'164px', height:'150px'}}>
                                                <div style={{width: '150px', height: '102px', backgroundImage: `url(${item.item[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                                <div>{item.item[0].title}</div>
                                            </div>
                                            <div style={{width:'164px', height:'150px'}}>
                                                <div style={{width: '150px', height: '102px', backgroundImage: `url(${item.item[1].image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                                <div>{item.item[1].title}</div>
                                            </div>
                                            <div style={{width:'164px', height:'150px'}}>
                                                <div style={{width: '150px', height: '102px', backgroundImage: `url(${item.item[2].image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                                <div>{item.item[2].title}</div>
                                            </div>
                                            <div style={{width:'164px', height:'150px'}}>
                                                <div style={{width: '150px', height: '102px', backgroundImage: `url(${item.item[3].image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                                <div>{item.item[3].title}</div>
                                            </div> */}
                                        </div>
                                        <div style={{color:'#2F6CA7' , paddingLeft:'10px'}}>Explore all</div>
                                    </Link>
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
            <div style={{height:'10vh', backgroundColor:'black', color:'white', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <p>© 2024-2025, TrueSolution by Sudhir Kumar</p>
            </div>
        </div>
    );
}
export default HomePage;