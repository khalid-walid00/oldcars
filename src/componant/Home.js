import { arr } from "./Axios";
import NavBar from "./NavBar";
export default function Home(){
 let showcard= arr.map((el,key)=>(<div key={key} className="col p-lg-0 d-flex justify-content-center"><div className="card overflow-hidden bg-transparent text-light text-start" style={{width: "18rem"}}>
 <img src={el.img} className="card-img-top zoom" alt={el.img}/>
 <div className="card-body ">
   <h5 className="card-title text-light">{el.name}</h5>
   <p className="card-text text-light">Transmission:{el.Transmission}</p>
   <p className="card-text text-light">Mileage:{el.Mileage}</p>
   <p className="card-text text-light ">price:<span className="text-red">{el.price}</span></p>
  <div className="btnn text-center pt-3 fs-5 " style={{height:"60px"}}>Go somewhere</div>
   
</div>
</div></div>),2)
    return(<> 
 
    <div className="container text-center mt-5">
        <div className="carousel slide" data-bs-ride="carousel" id="smaillslide">
         <div className="carousel-inner overflow-hidden">
            <div className="carousel-item active zoom" data-bs-interval="2000">
                <img src={require("./img/car1.png")} className="img" />
            </div>
            <div className="carousel-item zoom"  data-bs-interval="4000">
                <img src={require("./img/car2.png")} className="img"  />
            </div>
            <div className="carousel-item zoom"  data-bs-interval="6000">
                <img src={require("./img/car3.png")} className="img"  />
            </div>
            <div className="carousel-caption d-none d-md-block p-0 ">
             <div className="row"><a className="btn btn-danger bg-red text-light" style={{width:'max-content'}}>see details</a></div>
           </div>
           <div className="carousel-caption d-none d-md-block h-25  p-0" style={{top:"0px",}}>
             <h1 className="bg-dark bg-opacity-50 text-light">
                ​0.9% APR FINANCING AVAILABLE FOR UP TO 24 MONTHS
             </h1>
           </div>
         </div>
        </div>
        <div className="row text-light mt-4">
            <div className="col fs-1 text-light">Hot On The Lot <span className="opacity-25 text-light">-------------------------------------------------</span></div>
        </div>
        <div className="row mt-4 ">
            {showcard}
        </div>
       <div className=" row text-light blockquote-footer my-5">© 2035 by Car Dealership. Powered and secured by Khalid_walid</div>





    </div>











  </> )
}