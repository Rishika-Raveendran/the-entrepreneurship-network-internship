import React from 'react'
import Layout from '../components/Layout'
import "../styles/Alumni.css"

function Alumni() {
    return (
        <Layout active_tab={"More"}>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-10 offset-1">

                        <div className="row red_band ">
                            <div className="col-10 offset-1 col-md-6 offset-md-3"> Alumni Team</div>
                           
                        </div>
                        <div className="row alumni">
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/44a6c2_8c0dfa5b884a498b9972a25977eddc6a~mv2.png/v1/fill/w_250,h_250,al_c,lg_1,q_85/suyash.webp" alt="" />
                                <div className="al_name">Suyash Gupta</div>
                            </div>
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/44a6c2_ffd59dfb22174d1b942b53791ac1b20c~mv2.png/v1/fill/w_250,h_250,al_c,lg_1,q_85/yagya.webp" alt=""/>
                            <div className="al_name">Yagya Vats</div>

                            </div>
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/44a6c2_b64fd9de4bbb4c25af262d35c973b678~mv2.png/v1/fill/w_250,h_250,al_c,lg_1,q_85/Aakar%20(1).webp" alt=""/>
                            <div className="al_name">Akar Aggarwal</div>
                            </div>
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/44a6c2_8b922d55d4bf4d63b7d4f0fc41da06a1~mv2.png/v1/fill/w_250,h_250,al_c,lg_1,q_85/sanchit.webp" alt=""/>
                            <div className="al_name">Sanchit Gupta</div>
                            </div>
                        </div>
                     
                        <div className="row alumni">
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/693073_441572e6c4604b399ce8959b304a3b1f~mv2.jpeg/v1/fill/w_250,h_250,al_c,lg_1,q_80/apoorv.webp" alt=""/>
                            <div className="al_name">Apoorv Agarwal</div>
                        </div>
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/693073_0739c43fded9474e94802f0e5ff3b679~mv2.jpeg/v1/fill/w_250,h_250,al_c,lg_1,q_80/ankur.webp" alt=""/>
                            <div className="al_name">Ankur Dahiya</div>
                        </div>
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/693073_d6bc4a1e0fc743d39accd54ec62ecf03~mv2.jpeg/v1/fill/w_250,h_250,al_c,lg_1,q_80/mayank.webp" alt=""/>
                            <div className="al_name">Mayank Gupta</div>
                        </div>
                            <div className="col-10 offset-1 col-md-3 offset-md-0">
                                <img src="https://static.wixstatic.com/media/693073_393d5ad75df844de81c3c2ddcfa2c5bf~mv2.jpeg/v1/fill/w_250,h_250,al_c,lg_1,q_80/nikhil.webp" alt=""/>
                            <div className="al_name">Nikhil Bhukan</div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </Layout >
    )
}

export default Alumni

