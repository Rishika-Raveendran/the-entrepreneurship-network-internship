import React from 'react'
import "../styles/Complaints.css"

import Layout from '../components/Layout'
function Complaints() {
    return (
        <Layout>
            <div className="container">
                <div className="row complaints">
                    <div className="col-12">
                        
                        <div className="row">
                            <div className="col-10 offset-1">
                            <h1 className="chead">COMPLAINTS</h1>
                            </div>
                        </div>
                        
                    </div> <div className="row">
                            <div className="col-12 col-md-6 ">
                            <p className="info">For any complaints regarding The Entrepreneurship Network(TEN)  please contact at our email address:
                            <a href="mailto:contact@entrepreneurshipnetwork.net">contact@entrepreneurshipnetwork.net</a>
​                           </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="images/cimg.png" alt=""/>
                </div>
                    </div>
                        </div>
                        
            </div>
            
        </Layout>
    )
}

export default Complaints
