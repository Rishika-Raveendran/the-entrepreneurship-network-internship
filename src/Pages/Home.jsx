import React from "react";
import Layout from "../components/Layout";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout active_tab={"Home"}>
      <div className="container-fluid home">
        <div className="row first">
          <div className="col-12 col-md-8 offset-md-2 ftext">
            A World of Knowledge at Your Fingertips
          </div>
        </div>
        <div className="row aboutus">
          <div className="col-12">
            <div className="row ab_head">
              <div className="col-12">About us</div>
            </div>
            <div className="row">
              <div className="col-11 offset-1 offset-md-2 col-md-4 ab_tail">
                <div> Learning Together From the Comfort of Your Home</div>
                <div>
                  <button className="ab_button" ><Link to="/about">Learn More</Link></button>
                </div>
              </div>
              <div className="col-12  col-md-6">
                <img
                  className="  ab_img"
                  alt=""
                  src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_551,h_370,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="row move">
          
          <div className="col-12">
          <div className="row ">
          
          <div className="col-11 offset-1 col-md-8 offset-md-2">
            <p className="welcome">Welcome to</p>
            
                <p className="next">THE NEXT BIG THING</p>
                <p className="lit_line">.</p>
          </div>

            </div>
            <div className="row">
              <div className="col-8 offset-2 col-md-4 offset-md-4">
                <button className="btn btn-block join-button">Join TEN Virtual Campus</button>
              </div>
            </div>
         </div>

        </div>
        <div className="row journey">
          <div className="col-12  col-md-8 fhalf ">
            <div className="courses">Our Courses</div>
            <div className="j_text">Your New</div>
            <div className="j_text">Journey Begins Here,</div>
            <div className="j_text">Today</div>

          </div>
          <div className="col-12 col-md-4 shalf">
            <p>Entrepreneurship made fun</p>
            <button className="btn btn-block exp-button">Explore Here</button>
          </div>
        </div>
        <div className="row dig_mrktg">

        <div className="col-12  col-md-6  dig_img1">
           
          </div>
          <div className="col-12 col-md-3 dig">
            <p className="digital">Digital Marketing</p>
            <button className="btn btn-block exp-button">Explore Here</button>
          </div>
          <div className="col-12 col-md-3 dig_img2 bg-dark"></div>
        </div>
        <div className="row product">
        <div className="col-12 col-md-6 prohalf">
            <p>Product management</p><p> like a Pro</p>
            <button className="btn btn-block exp-button">Explore Here</button>
          </div>
          <div className="col-12  col-md-6 lhalf ">
           

          </div>
        </div>
        <div className="row band">
          <div className="col-md-2"></div>
          <div className="col-md-1 arrow-left-up"></div>
          <div className="col-12 col-md-8 b"></div>
          <div className="col-md-1 arrow-right-up"></div>

        </div>
        <div className="row band">
        <div className="col-2"></div>
          <div className="col-md-1 arrow-left-down"></div>
          <div className="col-12 col-md-8 b"><p className="btext">Our Course Benefits</p></div>
          <div className="col-md-1  arrow-right-down"></div>
        </div>
        <div className="row benefits">
          <div className="col-12 col-md-4">
 <img alt="" src="images/t4.png" className="each"/>
            <h3>Expert Teachers</h3>
            <p className="content">Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>

          </div>
          <div className="col-12 col-md-4">
 <img alt="" src="images/t5.png" />
            <h3>Online community</h3>
            <p className="content">Feel like home, with a "family of invisible friends"</p>

          </div>
          <div className="col-12 col-md-4">
 <img alt="" src="images/t6.png" />
            <h3>Flexible Curriculum</h3>
            <p className="content">Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</p>

          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row ">
              <div className="col-8 offset-2 col-md-4 offset-md-4 testimonial">
                <div>Testimonials</div>
              </div>
            </div>
          
          
            <div className="row caro">
              <div className="col-10 col-md-11 offset-1 offset-md-1">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="car-content" >
                        <p>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</p>
​
                        <p>-Aakriti Malik, DM Intern</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="car-content">
                        <p>Parallel Lines                        ​
Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
                        <p> -Harsh Rajput, General Management Intern</p></div>    </div>
                    <div class="carousel-item">
                      <div className="car-content">
                        <p> I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt.
                        I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV.
                        I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a
                        part of it as it has made me so much more confident and empowered. As much as this organization changes,
                         I hope that it’s class remains constant.
                      Thank you team TEN!</p>
                        <p> -Kshema Unni, Business Development Intern</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                    <div className="car-content" >
                      <p>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities,
                          my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout</p>
                        <p>-Anjali Srivastava, Content Intern</p>
                    </div>
                </div></div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div></div></div></div>
          

        </div>
        <div className="row vid">
          <div className="col-12 ">
    <div className="vid_over">      <p >Power of TEN Consulting</p>
            <div  ><button type="button" className="btn btn-lg exp">Explore Here</button></div></div>
            <video  autoPlay playsinline loop muted >
              <source src="images/file.mp4" type="video/mp4"/>
          </video>
          </div>  
        </div>
      </div>
    </Layout>
  );
}

export default Home;
