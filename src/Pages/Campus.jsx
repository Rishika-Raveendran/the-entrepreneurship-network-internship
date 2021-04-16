import React from 'react'
import "../styles/Campus.css"

import Layout from '../components/Layout'
function Campus() {
    return (
        <Layout active_tab={"More"}>
            <div className="row">
                <div className="col-12">
                    <div className="row camp_amb">
                        <div className="col-10 offset-1 col-md-8 offset-md-2">
                            <h1 className="amb_head">
                                Campus Ambassador Registration
                           </h1>
                           <div className="green">WE ARE LOOKING FOR</div> 
                            <div className="camp">CAMPUS AMBASSADORS</div>
                            <div className="button-row">
                                <span className="skillb">
                                    <a href="#skills">Skills required </a>
                                </span>
                                <span className="rewb">
                                    <a href="#rewards">Rewards ></a>
                                </span>
                            </div>
                            <div className="apply">
                                <button className="btn btn-lg appb">Apply Now</button>
                            </div>
                        
                        </div>
                    </div>
                    <div className="row " id="skills">
                        <div className="col-10 offset-1 col-md-4 offset-md-1 skill_row" >
                           
                            <h1 className="heading" >SKILLS REQUIRED</h1>
                            <ul>
                                <li>Social Media presence of min 500 followers</li>
                                <li>Strategy and planning skills</li>
                                <li>Relationship building</li>
                                <li>Part of a college society or club</li>
                            </ul>
                        </div>
                        <div className="d-none d-md-block col-7 skill_bck"></div>
                    </div>
                    <div className="row rew_row" id="rewards">
                        <div className="col-6 rew_bck d-none d-md-block"></div>
                        <div className="col-10 offset-1 offset-md-0 col-md-6" >
                            <h1 className="r_head">Rewards</h1>
                            <ul>
                            <li>'Campus Ambassador' certificate</li>
                            <li>Performance/target based cash rewards</li>
                            <li>'AMBASSADOR OF THE MONTH' certificate for the top performers</li>
                            <li>Free access to social events conducted by TEN</li>
                            </ul>
                        </div>

                    </div>
                    <div className="row camp_form">
                    <div className="col-10 offset-1 col-md-8 offset-md-2 sub_sec">
                        <div className="row">
                            <div className="col-10 offset-1">
                            <h1 className="campform_head">Campus Ambassador Registration Form</h1>
                              <div className="head-tag">If you would like to be campus ambassador of TEN, please fill in your details in the form bellow and you will be automatically registered.</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-10 offset-1 lab">Name*</div>
                        </div>
                        <div className="row">
                        <div className="col-5 offset-1 form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      id="fname"
                    />
                  </div>
                  <div className="col-5 form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      id="lname"
                    />
                  </div>
                        </div>
                        <div className="row">
                            <div className="col-10 offset-1 lab">Email*</div>
                        </div>
                        <div className="row">
                        <div className="col-10 offset-1 form-group">
                            <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      id="mail"
                    />
                            </div></div>
                            <div className="row">
                            <div className="col-10 offset-1 lab">Phone*</div>
                        </div>
                        <div className="row">
                        <div className="col-10 offset-1 form-group">
                            <input
                      className="form-control"
                      type="number"
                      placeholder="### ### ####"
                      id="phone"
                    />
                            </div></div>
                            <div className="row">
                            <div className="col-10 offset-1 lab">Comments or questions</div>
                        </div>
                        <div className="row">
                        <div className="col-10 offset-1 form-group">
                            <textarea
                      className="form-control"
                                    type="text"
                                    rows="3"
                      id="questions"
                    />
                            </div></div>
                        <div className="row"><div className="col-4 offset-4 col-md-2 offset-md-5"><button className="btn btn-block btn-secondary ">Register</button></div></div>
                       

                    </div>
                    </div>
                    


                </div>
            </div>
            
        </Layout >
    )
}

export default Campus
