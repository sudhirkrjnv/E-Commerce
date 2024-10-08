import Leftpart from './Leftpart/Leftpart';
import Rightpart from './Rightpart/Rightpart';
import './Product.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Product(){

    const ratingHandlers=(rating)=>{
        if(rating === 4){
            alert("Rating 4 is Clicked");
        } else if(rating === 3){
            alert("Rating 3 is Clicked");
        } else if(rating === 2){
            alert("Rating 2 is Clicked");
        } else if(rating === 1){
            alert ("Rating 1 is Clicked");
        }   
    }
    const brandHandlers=(brand)=>{
        if(brand === 'redmi'){
            alert("Redmi is Selected");
        } else if(brand ==='realme'){
            alert("realme is Selected");
        } else if(brand ==='Samsung'){
            alert("Samsung is Selected");
        } else if(brand ==='iphone'){
            alert("iphone is Selected");
        } else if(brand ==='iQOO'){
            alert("iQOO is Selected");
        } else if(brand ==='OnePlus'){
            alert("OnePlus is Selected");
        } else if(brand ==='Xiaomi'){
            alert("Xiaomi is Selected");
        } else if(brand ==='POCO'){
            alert("POCO is Selected");
        }  
    }

    let items=[
        {
            id:'01', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384',brand:"HONOR", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
        },
        {
            id:'02', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384',brand:"HONOR", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'3.5', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
        },
        {
            id:'03', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384',brand:"HONOR", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'3.5', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
        },
        {
            id:'04', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384',brand:"HONOR", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
        }, 
        {
            id:'05', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384',brand:"HONOR", name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
        } 
    ]
   
    /*let item={ 
               img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI'
            }*/
    

    let [listsofitem, setlistofitem]= useState([]);

    useEffect(()=>{
        const getproducts = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getproducts/');
                setlistofitem(response.data);
            } catch (error) {
                console.log("error "+ error.message);
            }
        };
        //getproducts();

        setlistofitem(items);

    },[]);
            

    return(
        <>
            <div className='mainboxcontainer'>
                <Leftpart ratingHandlers={ratingHandlers} brandHandlers={brandHandlers} />
                <div>
                    <div style={{ fontWeight: 'bolder',  marginTop:'30px', fontSize:'1.3em'}}>Results</div>
                    {/*
                    <Rightpart img={item.img} name={item.name} stars={item.stars} brought={item.brought} price={item.price} mrp={item.mrp} off={item.off} flatoff={item.flatoff} card={item.card} />
                */}

                {   listsofitem.map((item) => (
                        <Rightpart  id={item.id} img={item.img} name={item.name} stars={item.stars} brought={item.brought} price={item.price} mrp={item.mrp} off={item.off} flatoff={item.flatoff} card={item.card} />
                    ))
                }

                </div>
            </div>
        </>
    );
}
export default Product;