import React from 'react'

export default function Projects() {
  return (
    <>
      <section className="features_area section_gap_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>Some Details of Project's </h2>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../Assets/img/banner/News.png" alt="" />
                <h4 className='Project-card-Heading'>New-Website</h4>
                <p className='Project-card'>This is a News website build in React.js , user can search any kind of news Article's
                  and user also can Select Language's (Hindi and Engligh) and user also can select how many articles shown on display at a time  With the help Of API
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../Assets/img/banner/ApiCountry.png" alt="" />
                <h4 className='Project-card-Heading'>Countries-Details</h4>
                <p className='Project-card'>This is a small project for Javascript Api Practice user can search any Country name some 
                important Info showing on display of that particular country with the help of ( HTML5 , CSS3 , CountryApi )</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../Assets/img/banner/Shopia.png" alt="" />
                <h4 className='Project-card-Heading'>Shopia e-commerce websites</h4>
                <p className='Project-card'>This web-site is in under Development phase In (React.js) basically it is a E-commerce website for clothing , designing stage is almost done .( several Tools are Used ) Like :- Bootstrap , Material UI , Google Icons ,React.js , React-Router-Dom , Redux </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../Assets/img/banner/Xypo.png" alt="" />
                <h4 className='Project-card-Heading'>Xypo</h4>
                <p className='Project-card'>This is a basic dummy website build in HTML5 and CSS3 design </p>
              </div>
            </div>
            <br/>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../Assets/img/banner/Portfolio.png" alt="" />
                <h4 className='Project-card-Heading'>Portfolio</h4>
                <p className='Project-card'>This is my Portfolio Created in React.js with the help Of
                React-router-dom , Bootstrap , </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
