import { NavLink } from "react-router-dom";
export default function NavBar(){
    return(<div className='contai'>
      <div id="call" className="row mt-3 justify-content-end">
         <div className="col-lg-3" style={{width:"max-content"}}>
         <a className="btnn text-decoration-none px-3 py-2 ">CALL US TODAY 1-800-000-0000</a>
         </div>
         <div className="col-sm-2" style={{width:"max-content"}}>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100012325211174&mibextid=ZbWKwL" className="cursor"><img src={require("./img/facebook.png")}/></a>
    
        
         <a target="_blank" href="https://www.facebook.com/profile.php?id=100012325211174&mibextid=ZbWKwL" className="cursor"><img src={require("./img/twitter.png")}/></a>
         </div>
         </div>
    <nav className='navbar navbar-expand-lg justify-content-between'>
     <div className='navbar-brand d-flex fs-1 text-light'><div className='text-danger'>​Pre​</div>​​Owned Cars</div>
     <a href="#kk" data-bs-toggle="collapse" className="navbar-toggler">
     <span className="navbar-toggler-icon"></span>
     </a>
     <div id="kk" className="collapse navbar-collapse flex-grow-0">
        <ul className="navbar-nav text-uppercase ">
             <NavLink to="/" className=" nav-item mx-3 px-2 border-end border-start border-2 border-light text-decoration-none ">home</NavLink>
             <NavLink to="INVENTORY" className=" nav-item mx-3 px-2 border-end border-start border-2 border-light text-decoration-none ">  INVENTORY</NavLink>
             <NavLink to="FINANCING" className=" nav-item mx-3 px-2 border-end border-start border-2 border-light text-decoration-none "> FINANCING</NavLink>
             <NavLink to="ABOUTUS" className=" nav-item mx-3 px-2 border-end border-start border-2 border-light text-decoration-none ">ABOUT US</NavLink>
             <NavLink to="CONTACT" className=" nav-item mx-3 px-2 border-end border-start border-2 border-light text-decoration-none ">CONTACT</NavLink>
       </ul>
      </div>
    </nav>
 </div>)
}