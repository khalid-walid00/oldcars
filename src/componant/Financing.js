import { arrtext } from "./Axios"

export default function()
{
    let showdata=arrtext.map((el,key)=>(
        <div key={key} className="row">
            <div className="fs-4 mt-5"><span className="fs-1 text-red fw-bold">{el.num}</span>{el.title}</div>
            <div id="pra">{el.pra}​</div>
          </div>
    ))
    return(
        <div className="container">
            <div className="row mt-5 mb-4 "><a className="icon-link link-underline-danger link-light fs-2 ">Financing</a></div>
             <div className="row text-light text-start">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                        “Edit Text” or double click me and you can start adding your own content and make
                        changes to the font. I’m a great place for you to let your users know a little more abo</div>
                        <div className="row">{showdata}</div>
                        <div className="row"><a className="btnn text-decoration-none my-5 px-4 py-2" style={{width:"max-content"}}>ONLINE FINANCING</a></div>
                      <div className="text-light blockquote-footer my-4">© 2035 by Car Dealership. Powered and secured by Khalid_walid</div>
              
        </div>)
}