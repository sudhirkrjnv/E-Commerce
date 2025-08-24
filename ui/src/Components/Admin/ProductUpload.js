import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function ProductUpload() {

    const [input, setInput] = useState({
        type:"", 
        img:"", 
        brand:"", 
        name:"",
        stars:'', 
        bought:'', 
        price:'', 
        mrp:'', 
        off:'', 
        flatoff:'', 
        card:''
    })

    const inputHandler = (e)=>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        console.log(input);
        try {
            const res = await axios.post('', input, {
                headers:{'Content-Type':'application/json'},
                withCredentials: true
            })
            if(res.data.success){
                console.log(res.data.message);
            }
        } catch (error) {
            console.error(error.response.data.message);
        }
    }

    return (
        <>
            <center>
                <div style={{width:'30vw', height:'70vh', border:'1px solid #ccc', borderRadius:'1rem'}}>
                    <h2>Upload your products</h2>
                    <form onSubmit={submitHandler}>
                        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>Type : </h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='type' value={input.type} onChange={inputHandler} placeholder='Item type' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'0.5vw'}}>Brand : </h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='brand' value={input.brand} onChange={inputHandler} placeholder='Brand' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <h3 style={{width:'6vw', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>Name : </h3>
                            <div style={{width:'40vh', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <input type='text' name='name' value={input.name} onChange={inputHandler}placeholder='Item Name' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                            </div>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <h3 style={{width:'6vw', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>Image : </h3>
                            <div style={{width:'40vh', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <input type='text' name='img' value={input.img} onChange={inputHandler} placeholder='Image' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                            </div>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>Stars : </h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='stars' value={input.stars} onChange={inputHandler} placeholder='Ratings' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'0.5vw'}}>Bought : </h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='bought' value={input.bought} onChange={inputHandler} placeholder='Bought' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>MRP</h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='mrp' value={input.mrp} onChange={inputHandler} placeholder='MRP' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>Price</h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='price' value={input.price} onChange={inputHandler} placeholder='Price' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'0.5vw'}}>Off</h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='off' value={input.off} onChange={inputHandler} placeholder='Off' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>Flat Off</h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='flatoff' value={input.flatoff} onChange={inputHandler} placeholder='Flat Off' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <h3 style={{width:'30%', display:'flex', justifyContent:'flex-start', paddingLeft:'1vw'}}>Card</h3>
                                <div style={{width:'60%', height:'5vh', border:'1px solid #ccc', borderRadius:'0.4rem', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <input type='text' name='card' value={input.card} onChange={inputHandler} placeholder='Card' style={{width:'90%', height:'80%', border:'none', outline:'none'}}></input>
                                </div>
                            </div>
                        </div>
                        <center>
                            <button type='submit' style={{display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid #FEBD69', height:'6vh', width:'90%', backgroundColor:'#FEBD69', borderRadius:'0.5rem', margin:'1rem'}}>
                                <h2>Upload</h2>
                            </button>
                        </center>
                    </form>
                </div>
            </center>
        </>
    )
}

export default ProductUpload;