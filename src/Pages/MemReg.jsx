import React from 'react'
import Layout from '../components/Layout'
import "../styles/MemReg.css"

function MemReg() {
    return (
        <Layout active_tab={"More"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 offset-1 mem_head">MEMBERSHIP REGISTRATION</div>
                </div>
                <div className="row d-none d-md-block">
                    <div className="col-8 offset-2">
                        <img src="https://static.wixstatic.com/media/cca0e48a9eea265ba6be36a1eacc66d4.jpg/v1/fill/w_1074,h_643,al_c,q_85,usm_0.66_1.00_0.01/Business%20Team.webp" alt=""/>
                    </div>
                </div>
                <div className="row intro">
                    <div className="col-10 offset-1 ">
                        <p >
                            We, at The Entrepreneurship Network (TEN), have always been interested in associating ourselves with young professionals that show a constant zeal to learn and improve themselves.
                         We therefore extend a cordial invitation to you to join our society.</p>
                        <p >We are one of the fastest growing edu-tech startups in the world that not only provides you an opportunity to upskill
                        yourself in the hottest technologies present today but also assist you in getting a job that complements that skill-set.
                        </p>
                        <p >The membership starts as low as INR 100/- (RUPEES ONE HUNDRED ONLY). Register and pay today to start exploring an ocean of opportunities.</p>
                        <p >That's not it, become a member for an year and enjoy a free access to all courses,
                        at an introductory price of INR 10000/- (RUPEES TEN THOUSAND ONLY).
                        </p>
                        <p >HURRY UP!!! DON'T FORGET TO SCAN AND PAY FOR COMPLETING YOUR REGISTRATION.</p>

                    </div>
                </div>
                <div className="row perks" id="perk">
                    <div className="col-12 col-md-7 ">
                    <h1 className="perk_head">Perks</h1>
                    <ul>
                        
                        <li className="perk_list">Course Handbooks and other study material</li>
                        <li className="perk_list">Reduced product costs</li>
                        <li className="perk_list">Exclusive VIP Badges.</li>
                        <li className="perk_list">Updates on relevant news and job opportunities</li>
                    
                    </ul>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src="https://static.wixstatic.com/media/c4ea0b_656145e89827461a942d23b96161f7c4~mv2.jpg/v1/fill/w_600,h_345,al_c,lg_1,q_80/Perks.webp" alt=""/>
                </div>
                </div>
                <div className="row mem_form" id="reg_form">
                    <div className="col-10 offset-1 col-md-8 offset-md-2 sub_sec">
                        <div className="row">
                            <div className="col-10 offset-1">
                            <h1 className="memform_head">Membership Registration Form</h1>
                              <div className="head-tag"> If you would like to be a part of TEN, please fill in your details in the form bellow and you will be automatically registered.</div>
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
                  <div className="col-5 offset-1 form-group">
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
                        <div className="row qrscan">
                            <div className="col-10 offset-1">
                                To complete your registration, please scan and pay
                                     <img src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_495,h_653,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp" className="code" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </Layout >
    )
}

export default MemReg
