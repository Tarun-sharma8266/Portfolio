import React from 'react'

export default function Home() {
    return (
        <>
        
            <section className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner_content"style={{marginTop:"90px"}}>
                                    <h3 className="text-uppercase">Hell0</h3>
                                    <h1 className="text-uppercase">I am tarun sharma</h1>
                                    <h5 className="text-uppercase">front-end developer</h5>
                                    <div className="d-flex align-items-center">
                                        <a className="primary_btn tr-bg" href="https://drive.google.com/drive/folders/1P_Pzq0xnbeiM-eofgv3ZEOSwCK07rrFR?usp=sharing"><span>Get CV</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img className="LogoTarun" src="../Assets/img/banner/logoTarun1.jpg"alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
