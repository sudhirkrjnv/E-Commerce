import Leftpart from './Leftpart/Leftpart';
import Rightpart from './Rightpart/Rightpart';
import './Product.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/productSlice';

function Product(){

    let { type } = useParams();
    //console.log(type);
    //const items = useSelector(store=>store.products.products) || [];
    //console.log(items);

    const dispatch = useDispatch();

    // let items=[
    //     {
    //         id:'01', type:"mobiles", img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', brand:"redmi", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4', brought:'2k+', price:'24,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
    //     },
    //     {
    //         id:'02', type:"mobiles", img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', brand:"realme", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'3', brought:'2k+', price:'23,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
    //     },
    //     {
    //         id:'03', type:"mobiles", img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', brand:"Samsung", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'2', brought:'2k+', price:'2,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
    //     },
    //     {
    //         id:'04', type:"mobiles", img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', brand:"iphone", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'1', brought:'2k+', price:'1,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
    //     }, 
    //     {
    //         id:'05', type:"mobiles", img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', brand:"iQOO", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'0', brought:'2k+', price:'999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
    //     }
    // ]
   
    /*let item={ 
               img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
            }*/

    const [items, setItems] = useState([]);
    //console.log(items);
    
    //let item = items?.filter((item) => item.type === type);

    const [listsOfitem, setlistOfitem]= useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);

    useEffect(()=>{
        const getproducts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/v1/product/getProduct');
                if(res.data.success){
                    dispatch(setProducts(res?.data?.products));
                    //console.log(res?.data?.products);
                    setItems(res?.data?.products);
                }
            } catch (error) {
                console.error(error?.response?.data?.message);
            }
        };
        getproducts();

    },[dispatch]);

    useEffect(()=>{
        let fileterByType = items?.filter((item) => item.type === type);
        setlistOfitem(fileterByType);
    },[items, type]);

    const brands = [...new Set(listsOfitem.map(item=>item.brand))];
    //console.log(brands);

    const filteredItem = selectedBrand.length > 0 
        ? listsOfitem?.filter((item)=>selectedBrand.includes(item.brand)) 
        : listsOfitem ;

    return(
        <>
            <div className='mainboxcontainer'>
                <Leftpart brands={brands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
                <div>
                    <div style={{ fontWeight: 'bolder',  marginTop:'30px', fontSize:'1.3em'}}>Results</div>
                    {/*
                    <Rightpart img={item.img} name={item.name} stars={item.stars} brought={item.brought} price={item.price} mrp={item.mrp} off={item.off} flatoff={item.flatoff} card={item.card} />
                */}
                    <div className='scrollingItem' style={{display:'flex', flexDirection:'column', overflowY:'scroll', scrollBehavior:'smooth', height:'100vh'}}>
                        {   
                            filteredItem.map((item, index) => {
                                //console.log(item);
                                return (
                                    <Rightpart key={item._id} id={item._id} img={item.img} name={item.name} stars={item.stars} brought={item.brought} price={item.price} mrp={item.mrp} off={item.off} flatoff={item.flatoff} card={item.card} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Product;