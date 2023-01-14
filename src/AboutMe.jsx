import React from 'react'

export default function AboutMe() {
  return (
    <>
    <section class="about_area section_gap ">
        <div class="container">
            <div class="row justify-content-start align-items-center"style={{marginTop:"30px"}}>
                <div class="col-lg-5">
                    <div class="about_img">
                        <img class="" src="../Assets/img/about-us.png" alt=""/>
                    </div>
                </div>

                <div class="offset-lg-1 col-lg-5">
                    <div class="main_title text-left">
                        <h2>let’s <br/>
                            Introduce about <br/>
                            myself
                            </h2>
                        <p>
                            Hello my name is Tarun Sharma i am from Aligarh (U.P), i have completed my schooling from
                            pandit dayal Inter College , and i'm BCA graduate from Himalayan Garhwal University (U.K)
                        </p>
                        <a className="primary_btn" href="https://drive.google.com/drive/folders/1P_Pzq0xnbeiM-eofgv3ZEOSwCK07rrFR?usp=sharing"><span className='DownloadCV'>Download CV</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
