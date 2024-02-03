import React, {useEffect} from "react";


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data).map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      ).join("&");
    }

    function handleSubmit(e){
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded"},
        body: encode({ "form-name": "contact", name, email, message}),
      }).then(() => alert("Message sent!")).catch((error) => alert(error));
    }

    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://smtpjs.com/v3/smtp.js";
      script.async = true;
  
      document.body.appendChild(script);
  
      return ()=> {
        document.body.removeChild(script);
      };
    }, []);

  return (
<div className="section contact" id="contact">
  <div id="map" className="map" >
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26425.03961711161!2d18.808362220157676!3d-34.117422702815915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdcaf09981875b%3A0x16f0da427073a721!2sStrand%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1706892698175!5m2!1sen!2sza"
  width={"100%"}
  height={"100%"}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="contact-form-card">
          <h4 className="contact-title">Send a message</h4>
          <form
            netlify
            onSubmit={handleSubmit}
           >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name *"
                required=""
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email *"
                required=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id=""
                placeholder="Message *"
                rows={7}
                required=""
                defaultValue={""}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <button type="submit" className="form-control btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="contact-info-card">
          <h4 className="contact-title">Contact me</h4>
          <div className="row mb-2">
            <div className="col-1 pt-1 mr-1">
              <i className="ti-map-alt icon-md" />
            </div>
            <div className="col-10">
              <h6 className="d-inline">
                Address :<br />{" "}
                <span className="text-muted">
                  Strand, Cape Town, Western Cape, South Africa
                </span>
              </h6>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-1 pt-1 mr-1">
              <i className="ti-github icon-md" />
            </div>
            <div className="col-10 ">
              <h6 className="d-inline">
                GitHub : <br />{" "}
                <span className="text-muted"><a href="https://github.com/AyrtonFrieslaar">https://github.com/AyrtonFrieslaar</a></span>
              </h6>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-1 pt-1 mr-1">
              <i className="ti-email icon-md" />
            </div>
            <div className="col-10">
              <h6 className="d-inline">
                Email :<br />{" "}
                <span className="text-muted"><a href="mailto:ayrtonfrieslaar.git@gmail.com">ayrtonfrieslaar.git@gmail.com</a></span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );


}

