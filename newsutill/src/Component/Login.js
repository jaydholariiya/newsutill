
import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (<>
     
      <div class="jd ">
        <div class="wrapper wrapper--w780">
            <div class="card card-3 bg-dark">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Login NewsUtill</h2>
                    <form method="POST">
                       
                        <div class="input-group">
                            <input class="input--style-3 js-datepicker" type="text" placeholder="Email" name="Email"/>
                            <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                        </div>

                     

                      
                        <div class="input-group">
                            <input class="input--style-3" type="email" placeholder="Password" name="Password"/>
                        </div>
                       
                        <div class="p-t-10">
                            <button class="buttonSign btn btn--pill btn--green" type="submit">Submit</button>
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
}
