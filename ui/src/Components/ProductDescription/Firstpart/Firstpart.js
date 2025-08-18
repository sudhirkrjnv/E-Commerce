import './Firstpart.css'

function Firstpart(props){
    return(
        <>
            <div className='firstpartcontainer'>
                <img src={props.img} />
            </div>
        </>
    );
}
export default Firstpart;