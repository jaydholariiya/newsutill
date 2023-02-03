import React, { useEffect, useState  } from 'react'
// import { Redirect } from "react-router-dom";
// import { Redirect ,useHistory } from "react-router-dom";
// import { Redirect, Switch } from "react-router-dom";


function SignUp() {
    // const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{
        let auth = localStorage.getItem("users");
        if(auth){window.location.href="/sports";};
    })
    // let navigate = useNavigate();

    useEffect(()=>{
        
       
        
    })

    const dataPrint = async () => {
      
        console.log({name , email , password});
        let result = await fetch("http://localhost:5000/register",{
            method:'post',
            body:JSON.stringify({name , email , password}),
            headers:{'Content-Type' : 'application/json'}
        })
        result = await result.json();
     
        localStorage.setItem("users",JSON.stringify(result))
        console.log(result);

        if(result){
            window.location.href="/sports"; 
        }
      

       
       
    }
   
  return (
    <>
          <div className="jd ">
        <div className="wrapper wrapper--w780">
            <div className="card card-3 bg-dark">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Registration Info</h2>
                
                        <div className="input-group">
            <input className="input--style-3" type="text" placeholder="Name" name="name" value={name} onChange={(event)=>setName(event.target.value)}/>
                        </div>
                        <div className="input-group">
                            <input className="input--style-3 js-datepicker" type="text" value={email} placeholder="Email" name="Email" onChange={(event)=>setEmail(event.target.value)}/>
                            <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                        </div>

                     
                        <div className="input-group">
                            <input className="input--style-3" type="email" value={password} placeholder="Password" name="Password" onChange={(event)=>setPassword(event.target.value)}/>
                        </div>
                       
                        <div className="p-t-10">
                            <button type="button" className="button buttonSign btn btn--green" onClick={dataPrint}>Submit</button>
                        </div>

                       
                
                </div>
            </div>
        </div>
    </div>

    <script src="vendor/jquery/jquery.min.js"></script>

    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

      </>
    
  )
}

export default SignUp