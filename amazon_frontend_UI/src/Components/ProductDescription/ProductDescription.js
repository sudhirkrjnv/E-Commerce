import Firstpart from './Firstpart/Firstpart';
import Secondpart from './Secondpart/Secondpart';
import Thirdpart from './Thirdpart/Thirdpart';
import './ProductDescription.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import axios from 'axios';

function ProductDescription(){


    const {item, size, increment, decrement} = useContext(CartContext);
    const addToCart= function(){
        //console.log('addtocart is clicked')
        increment(itemdetails);
    }

    let { id } = useParams();
    console.log("id:"+id);

    let items=[
        {
            id:'01', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5',ratings:'45', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI', emi:'1,273', withexchange:'24,690.00', withoutexchange:'25,999.00', delivery:'Tuesday', availibility:'In stock', about:["HONOR Ultra-Bounce Anti-Drop Display - An industry-first offering 360° whole-device protection. Its three-level protection system ensures comprehensive drop resistance for the screen, frame, and internal components.", "5800mAh Upto 3-Day Battery - The HONOR X9b boasts a high-energy-density 5800mAh DXOMARK Gold Li-Po battery, showcasing its durability with over 80% battery health retention after 3 years and 1000 charging cycles.", "Stunning AMOLED Display - The HONOR X9b showcases a 6.78-inch curved AMOLED display with 120Hz refresh rate, 1200 nits peak brightness, and 92.8% screen-to-body ratio, providing crystal-clear details for an immersive viewing experience with its 1200x2652 pixel resolution.", "High Power Experience - The HONOR X9b delivers a robust Android 13 experience with MagicOS 7.2, powered by a Qualcomm Snapdragon 6 Gen 1 (4nm) chipset for efficient multitasking and powerful performance. Plus, enjoy exceptional gaming with the Adreno 710 GPU.", "Captivating Photography - The HONOR X9b features a triple-camera setup with a 108MP wide, 5MP ultrawide, and 2MP macro camera for detailed exploration, offering high-quality 4K photo and video recording. Plus, enjoy exquisite selfies with its 16MP front camera."]
        },
        {
            id:'02', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5',ratings:'45', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI', emi:'1,273', withexchange:'24,690.00', withoutexchange:'25,999.00', delivery:'Tuesday', availibility:'In stock', about:["HONOR Ultra-Bounce Anti-Drop Display - An industry-first offering 360° whole-device protection. Its three-level protection system ensures comprehensive drop resistance for the screen, frame, and internal components.", "5800mAh Upto 3-Day Battery - The HONOR X9b boasts a high-energy-density 5800mAh DXOMARK Gold Li-Po battery, showcasing its durability with over 80% battery health retention after 3 years and 1000 charging cycles.", "Stunning AMOLED Display - The HONOR X9b showcases a 6.78-inch curved AMOLED display with 120Hz refresh rate, 1200 nits peak brightness, and 92.8% screen-to-body ratio, providing crystal-clear details for an immersive viewing experience with its 1200x2652 pixel resolution.", "High Power Experience - The HONOR X9b delivers a robust Android 13 experience with MagicOS 7.2, powered by a Qualcomm Snapdragon 6 Gen 1 (4nm) chipset for efficient multitasking and powerful performance. Plus, enjoy exceptional gaming with the Adreno 710 GPU.", "Captivating Photography - The HONOR X9b features a triple-camera setup with a 108MP wide, 5MP ultrawide, and 2MP macro camera for detailed exploration, offering high-quality 4K photo and video recording. Plus, enjoy exquisite selfies with its 16MP front camera."]
        },
        {
            id:'03', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5',ratings:'45', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI', emi:'1,273', withexchange:'24,690.00', withoutexchange:'25,999.00', delivery:'Tuesday', availibility:'In stock', about:["HONOR Ultra-Bounce Anti-Drop Display - An industry-first offering 360° whole-device protection. Its three-level protection system ensures comprehensive drop resistance for the screen, frame, and internal components.", "5800mAh Upto 3-Day Battery - The HONOR X9b boasts a high-energy-density 5800mAh DXOMARK Gold Li-Po battery, showcasing its durability with over 80% battery health retention after 3 years and 1000 charging cycles.", "Stunning AMOLED Display - The HONOR X9b showcases a 6.78-inch curved AMOLED display with 120Hz refresh rate, 1200 nits peak brightness, and 92.8% screen-to-body ratio, providing crystal-clear details for an immersive viewing experience with its 1200x2652 pixel resolution.", "High Power Experience - The HONOR X9b delivers a robust Android 13 experience with MagicOS 7.2, powered by a Qualcomm Snapdragon 6 Gen 1 (4nm) chipset for efficient multitasking and powerful performance. Plus, enjoy exceptional gaming with the Adreno 710 GPU.", "Captivating Photography - The HONOR X9b features a triple-camera setup with a 108MP wide, 5MP ultrawide, and 2MP macro camera for detailed exploration, offering high-quality 4K photo and video recording. Plus, enjoy exquisite selfies with its 16MP front camera."]
        },
        {
            id:'04', img:'https://ik.imagekit.io/sudhirkumarjnv2k12/Amazon/New%20Folder/81dT7CUY6GL._SL1500_-removebg-preview.png?updatedAt=1704121494384', name:"HONOR X9b 5G (Midnight Black, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger", stars:'4.5',ratings:'45', brought:'2k+', price:'25,999', mrp:'30,000', off:'16', flatoff:'3000', card:'ICICI', emi:'1,273', withexchange:'24,690.00', withoutexchange:'25,999.00', delivery:'Tuesday', availibility:'In stock', about:["HONOR Ultra-Bounce Anti-Drop Display - An industry-first offering 360° whole-device protection. Its three-level protection system ensures comprehensive drop resistance for the screen, frame, and internal components.", "5800mAh Upto 3-Day Battery - The HONOR X9b boasts a high-energy-density 5800mAh DXOMARK Gold Li-Po battery, showcasing its durability with over 80% battery health retention after 3 years and 1000 charging cycles.", "Stunning AMOLED Display - The HONOR X9b showcases a 6.78-inch curved AMOLED display with 120Hz refresh rate, 1200 nits peak brightness, and 92.8% screen-to-body ratio, providing crystal-clear details for an immersive viewing experience with its 1200x2652 pixel resolution.", "High Power Experience - The HONOR X9b delivers a robust Android 13 experience with MagicOS 7.2, powered by a Qualcomm Snapdragon 6 Gen 1 (4nm) chipset for efficient multitasking and powerful performance. Plus, enjoy exceptional gaming with the Adreno 710 GPU.", "Captivating Photography - The HONOR X9b features a triple-camera setup with a 108MP wide, 5MP ultrawide, and 2MP macro camera for detailed exploration, offering high-quality 4K photo and video recording. Plus, enjoy exquisite selfies with its 16MP front camera."]
        }
    ]
    const [itemdetails, setitemdetails]= useState([]);

    useEffect(()=>{
        /*const getindividualproduct = async () => {
            try {
                const response = await axios.get('http://localhost:8085/getproductsone/'+ id);
                setitemdetails(response.data);
            } catch (error) {
                console.log("error "+ error.message);
            }
        };
        getindividualproduct();*/
        
        let item = items.filter( (item) =>{
            if(item.id==id) return item;
        })
        setitemdetails(item[0]);
    },[id]);

    return(
        <>
            <div className='productdescriptioncontainer'>
                <Firstpart img={itemdetails.img}/>
                <Secondpart name={itemdetails.name} stars='4.5' ratings={itemdetails.ratings} brought={itemdetails.brought} price={itemdetails.price} mrp={itemdetails.mrp} off={itemdetails.off} emi={itemdetails.emi} card={itemdetails.card} about={itemdetails.about} />
                <Thirdpart withexchange={itemdetails.withexchange} withoutexchange={itemdetails.withoutexchange} delivery={itemdetails.delivery} availibility={itemdetails.availibility}  addToCart={addToCart} />
            </div>
        </>
    );
}
export default ProductDescription;