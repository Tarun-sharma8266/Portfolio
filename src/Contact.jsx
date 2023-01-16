import React ,{useState}from 'react'

export default function Contact() {
  
  let [data, setdata] = useState({
    fname: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  function getData(event) {
    var name = event.target.name
    var value = event.target.value
    setdata((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  function postData(event) {
    event.preventDefault()
    alert(`
        fname : ${data.fname}
        email : ${data.email}
        phone : ${data.phone}
        subject : ${data.subject}
        message : ${data.message}
    `)
  }
  return (
    <>
      <div className="bg-light py-3">
        <div className="container">
        </div>
      </div>

      <div className="site-section" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            </div>
            <div className="col-md-6 ml-auto">
              <div className="p-4 border mb-3 text-center">
                <span className="d-block text-primary h6 text-uppercase">India</span>
                <p className="mb-0">1/1264-D Vikas Nagar,New Etah Chungi,Naurangabad,Street No-4,Aligarh (202001),UP,India</p>
                <p className="mb-0">Phone :  7983108372</p>
                <p className="mb-0">tarundayalsharma@gmail.com</p>
                <div className="mapouter my-5"><div className="gmap_canvas"></div></div>
              </div>
            </div>
            <div className="col-md-6">
              <form onSubmit={postData} >

                <div className="p-3 p-lg-5 border">
                  
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="name" className="text-black">Full Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="name" name="fname"onChange={getData} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="email" className="text-black">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="" onChange={getData}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="phone" className="text-black">Phone Number </label>
                      <input type="text" className="form-control" id="phone" name="phone" onChange={getData}/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="subject" className="text-black">Subject </label>
                      <input type="text" className="form-control" id="subject" name="subject" onChange={getData}/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="message" className="text-black">Message </label>
                      <textarea name="message" onChange={getData} id="message" cols="10" rows="2" className="form-control"></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-lg-12">
                      <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Message" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
