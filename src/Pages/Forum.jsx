import React,{Component} from 'react'
import "../styles/Forum.css"
import Layout from '../components/Layout'


class Forum extends Component  {
    constructor(props) {
        super(props);
    }
    handleClick = ()=>  {
        var lm = document.getElementById("loginModal");
        var sm = document.getElementById("signupModal");
        
        if (lm.classList.contains("show")) {
            console.log("hi");
            sm.classList.add("show");          
            lm.classList.remove("show");
        } else {
            lm.classList.add("show");
            lm.classList.add("in");
            sm.classList.remove("show");
            sm.classList.remove("in");
        }
       
}
    

    render() {
      
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 forum">
                        <div className="row row1 ">
                            <div className="col-12 col-md-3">Entrepreneurship A-Z</div>
                            <div className="col-12 col-md-3 offset-md-6 ">
                                <div className="input-group ">
                                    <span><i className=" fa fa-search"></i></span>
                                    <input type="search" placeholder="Search" className="search"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 e_head">
                                <div>
                                    Entrepreneurship A-Z
                                </div>
                                <p>Share stories, ideas, pictures and more!</p>
                            </div>
                        </div>
                        <div className="row outline-row ">
                            <div className="col-11 col-md-5 offset-1 ">
                                <h5>Already have an account?</h5>
                                <h6>Log in to access forum</h6>
                                <button className="login btn" data-toggle="modal" data-target="#loginModal">Log in</button>
                            </div>
                            
                            <div className="col-11 offset-1 offset-md-0 col-md-6">
                                <h5>Sign up today</h5>
                                <h6>Join the forum to check out the posts and add your voice</h6>
                                <button className="signup" data-toggle="modal" data-target="#signupModal">Get started</button>
                            </div>
                            
                        </div>
                       
                            


<div class="modal fade"  id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mC">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mB">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                        <div className="row" id="login">
                            <div className="col-10 offset-1 ">
                                <h1>Log In</h1>
                                                                    <h4>New to this site?<button className="btn sb" onClick={()=>this.handleClick()}>Sign Up</button></h4>
                                <div className="row">
                                    <div className="col-10 offset-1">
                                    <button className="fb btn btn-block">
                                        <i className="fa fa-facebook"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;Log In with Facebook
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-10 offset-1">
                                    <button className="google btn btn-block">
                                        <i className="fa fa-google"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;Log In with Google
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5 line"></div>
                                    <div className="col-2">or</div>
                                    <div className="col-5 line"></div>
                                </div>
                                <div className="row">
                                    <div className="col-10 offset-1">
                                    <button className="mail btn btn-block">
                                            Log In with Email
                                        </button>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                                                        </div>
                                                    </div>
       </div>
      </div>
     
    </div>
  </div>
                                </div>
                                
                                <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mC">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mB">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                             
                        <div className="row " id="signup">
                            <div className="col-10 offset-1 ">
                                <h1>Sign Up</h1>
                                <h4>Already a member?<button className="btn sb" onClick={()=>this.handleClick()}>Log In</button></h4>
                                <div className="row">
                                    <div className="col-10 offset-1">
                                    <button className="fb btn btn-block">
                                        <i className="fa fa-facebook"></i>
                                            Sign up with Facebook
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-10 offset-1">
                                    <button className="google btn btn-block">
                                        <i className="fa fa-google"></i>
                                        &nbsp;&nbsp;&nbsp;&nbsp;Sign up with Google
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5 line"></div>
                                    <div className="col-2">or</div>
                                    <div className="col-5 line"></div>
                                </div>
                                <div className="row">
                                    <div className="col-10 offset-1">
                                    <button className="mail btn btn-block">
                                    &nbsp;&nbsp;&nbsp;&nbsp; Sign up with Email
                                        </button>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                                                        </div>
                                                    </div>
       </div>
      </div>
     
    </div>
  </div>
</div>
                            </div>
                        </div>
                    </div>
         
            
        </Layout>
    )
    }}

export default Forum
