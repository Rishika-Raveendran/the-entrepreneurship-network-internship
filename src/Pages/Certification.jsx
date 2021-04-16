import React from 'react';
import Layout from "../components/Layout";
import "../styles/Certification.css";
import { Link } from "react-router-dom";

function Certification() {
    return (
        <Layout active_tab={"More"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 cert_col">
                        <div className="row"><div className="col">
                        <img className="bk_img" src="https://static.wixstatic.com/media/e0136acb6a91480b87e8514652680cbf.jpg/v1/fill/w_1225,h_2560,al_c,q_90,usm_0.66_1.00_0.01/e0136acb6a91480b87e8514652680cbf.webp" alt=""/>
                        </div></div>
                        <div className="row cert_details">
                            <div className="col-10 offset-1">
                        
                                <h1 className="cert_head">TEN Certified Expert</h1>
                                
                                <p className="cert_content">Dear Intern,</p>
                                <p className="cert_content">We at TEN not only strive to provide the best guidance to our interns but also ensure their experience with us proves to be a career milestone.</p>
                                <p className="cert_content">We hereby offer to certify you as an Expert in your domain for a paltry sum of INR 200/- (RUPEES TWO HUNDRED ONLY).
                                This Internship encompasses all the major learnings you gave and received and establishes you as a certified professional.
                                <p className="cert_content">The <a href="#qrcode">QR code</a> below helps you to make the required payment.
                                    The certificate would be shared on your email Id registered with us, once the payment is successful.
                                    Also, fill up the form below that helps you subscribe for the required certificate.</p>
                                    We are certain this accomplishment will go a long way in building your fledgling career and prove instrumental in making you the best in business.</p>
                                <p className="cert_content">We look forward to certifying you and thereby enhancing your skill set and enriching your ever-growing profile</p>
                                <div className="sub_head">Susbscribe here to get certificates</div>
                            <div className="row sub-form ">
                                <div className="col-6 offset-md-2 col-md-3">
                                <div class="form-group">
                                   
                                    <select class="form-control"  id="sel1">
                                            <option>Internship Track</option>
                                            <option>Market Research</option>
                                            <option>Sales</option>
                                            <option>Project Management</option>
                                            <option>Product Management</option>
                                            <option>General Management</option>
                                            <option>Angular Developer</option>
                                            <option>React Developer</option>
                                            <option>Java Developer</option>
                                            <option>Spring Boot Developer</option>
                                            <option>Wordpress Developer</option>
                                            <option>UX Designer</option>
                                            <option>Text Content Preparation</option>
                                            <option>Video Content Preparation</option>
                                            <option>Audio Content Preparation</option>
                                            <option>Graphic Content Preparation</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-6 offset-md-2 col-md-3">
                                <div className=" form-group">
                                    <input
                                    className="form-control"
                                    type="text"
                                    placeholder="First Name"
                                    id="fname"
                                    />
                                </div>
                                
                                </div>

                                </div>
                                <div className="row sub-form">

                                    <div className="col-6 offset-md-2 col-md-3">
                                    <div className=" form-group">
                                    <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Mobile"
                                    id="mob"
                                    />
                                </div></div>
                                                <div className="col-6 offset-md-2 col-md-3">
                                <div className=" form-group">
                                    <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email"
                                    id="mail"
                                    />
                                </div>
                                </div></div>
                                <div className="row">
                                <div className="col-6 offset-md-2 col-md-3">
                  <div className=" form-group">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Transaction ID"
                      id="t_id"
                    />
                  </div></div>
                                </div>
                                
                                <div className="row">
                                <div className=" col-6 offset-3 col-md-2 offset-md-5 "><button className="btn btn-block  sub_button">Subscribe</button></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 offset-md-4">
                                    <img alt="" id="qrcode" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_454,h_603,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp"/>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>
       </Layout>
    )
}

export default Certification
