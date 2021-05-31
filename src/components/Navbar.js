import React from "react";
const Navbar = () =>{
 return (
   <div class="web-navbar">
   
      <div className="left-navbar">
      
      <p> medoc <span> + </ span> </p> 
            
       </div>
       <div className="right-navbar">
         <div class="doc-div">
             <h1>Doctors</h1>
             <p>Book an appointment </p> 
             </div>
             <div class="doc-div">
             <h1>Consult</h1>
             <p>Consult with top doctors </p> 
             </div>

             <div class="doc-div">
             <h1>Dignostics</h1>
             <p>Book tests and checkups </p> 
             </div>

             <div class="doc-div">
             <h1>Pharmacy</h1>
             <p>Medicines and health products </p> 
             </div>
       </div>


       <div className="login">
           <p>Login/Signup</p>
         </div>
     

  </div>


 );

}

export default Navbar;