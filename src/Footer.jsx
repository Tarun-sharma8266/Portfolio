import React from 'react'

export default function Footer() {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <h4>Also Contact Me On Social Media </h4>
              </div>
              <div className="footer_social">
                <a href="https://www.facebook.com/profile.php?id=100004039946070"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/sharma_tarun18?fbclid=IwAR0nONe85kgzhowscP8Fl8rxwkwKHViTFMTPkXBUz9yfIrlyjIYKe4Pes0M"><i className="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/up__wale__panditji/"><i className="fa fa-instagram"></i></a>
                <a href="https://github.com/Tarun-sharma8266"><i className="fa fa-github"></i></a>

              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">

            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This Portfolio is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by Tarun
          </p>
        </div>
      </div>
    </footer>
  )
}
