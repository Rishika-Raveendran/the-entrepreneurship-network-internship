import React from 'react'

import Layout from '../components/Layout'
import "../styles/Testimonials.css";

function Testimonials() {
    return (
        <Layout>
        
          <div className="row">
          <div className="col-12 ">
          <div className="row ">
              <div className="col-8 offset-2 col-md-4 offset-md-4 testimonial_sep">
                <div>Testimonials</div>
              </div>
            </div>
              <video src="https://video.wixstatic.com/video/11062b_bc016da29c8b4da282f4052c9a538621/720p/mp4/file.mp4" autoPlay loop muted></video>
            </div>
          </div>
            <div className="row caro_sep">
              <div className="col-10 col-md-11 offset-1 offset-md-1">
                <div id="carouselExampleControls" className="carousel_sep slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="car-con" >
                        <p>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</p>
​
                        <p>-Aakriti Malik, DM Intern</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="car-con">
                        <p>Parallel Lines                        ​
Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
                        <p> -Harsh Rajput, General Management Intern</p></div>    </div>
                    <div class="carousel-item">
                      <div className="car-con">
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
                    <div className="car-con" >
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
</div></div></div>
         
            
        </Layout>
    )
}

export default Testimonials

