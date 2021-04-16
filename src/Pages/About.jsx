import React from 'react'
import "../styles/About.css"
import Layout from '../components/Layout'

function About() {
    return (
        <Layout>
            <div className="container">
                <div className="row ">
                    <div className="col-10 offset-1 about">
                        <h2>About us</h2>
                        <h1>Quality Teaching Any Time, Everywhere</h1>
                        <p>The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.
Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.
This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
