import { arr } from "./Axios"

export default function(){
    let showcard= arr.map((el,key)=>(<div key={key} className="card bg-transparent" style={{width:"450px"}}>
    <div className="card-img "><img src={el.img} className="w-100"/></div>
    <div className="card-body mb-4 d-flex">
         <div className="col border-end pe-4 me-4 border-3 border-dark-subtle">
              <div className="card-title text-light fs-5 mt-2  mb-1">{el.name}</div>
              <div className="card-title text-light fs-5">Price:<span className="text-red">{el.price}</span></div>
       </div>
       <div className="col  pe-4" >
              <div className="card-title  ">Exterior: {el.Exterior}<br/>Interior: {el.Interior}<br/>Transmission: {el.Transmission}<br/>Mileage: {el.Mileage}</div>
              <div className="card-title fs-5"><a className="btnn text-decoration-none px-5 py-1">INQUIRE</a></div>
       </div>
    </div>
</div>))
    return(
    <div className="container">
     <div className="row mt-5 mb-4 "><a className="icon-link link-underline-danger link-light fs-2 ">Inventory</a></div>
     <div className="row text-light text-start">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
    “Edit Text” or double click me and you can start adding your own content and make
    changes to the font. I’m a great place for you to let your users know a little more about you.</div>
   <div className="row justify-content-around  mt-4">
  
 {showcard}

   </div>
  
    </div>)
}