import React,{useEffect, useState} from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        let auth = localStorage.getItem("users");
        if(auth){window.location = "/sports"};
    })
    const dataPrint = async () => {
      
        console.log({ email , password});
        let result = await fetch("http://localhost:5000/login",{
            method:'post',
            body:JSON.stringify({email , password}),
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
                    <h2 className="title">Login NewsUtill</h2>
                    <form method="POST">
                       
                        <div className="input-group">
                            <input className="input--style-3 js-datepicker" type="text" placeholder="Email" name="Email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                            <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                        </div>

                     

                      
                        <div className="input-group">
                            <input className="input--style-3" type="email" placeholder="Password" name="Password"  value={password} onChange={(event)=>setPassword(event.target.value)}/>
                        </div>
                       
                        <div className="p-t-10">
                            <button className="buttonSign btn btn--pill btn--green" type="submit" onClick={dataPrint}>Submit</button>
                        </div>
                    </form>
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

export default Login