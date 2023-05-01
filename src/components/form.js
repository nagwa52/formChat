import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./form.css";

const MyForm = () => {
  const [fromValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message:"",
  });
  const [firstNameValidation, setFirstNameValidation] = useState();
  const [lastNameValidation, setLastNameValidation] = useState();
  const [emailValidation, setEmailValidation] = useState();
  const [phoneValidation, setPhoneValidation] = useState();
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = (event) => {
    event.preventDefault();
    handleShow()
    console.log(fromValue);
    emailjs
      .send(
        "service_f4ey52m",
        "template_dy92n3b",
        fromValue,
        "SdJ8ZhADbSZEMeUKZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(()=>{
            window.location.replace(
              "https://www.directmediationservices.co.uk/mediation-legal-aid/"
            );
          },2000)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className="container row justify-content-center mt-5">
      <Form className="col-8" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            isInvalid={firstNameValidation}
            placeholder="First Name"
            value={fromValue.firstName}
            onChange={(e) => {
              setFormValue({ ...fromValue, firstName: e.target.value });
              if (e.target.value) {
                setFirstNameValidation(false);
              } else {
                setFirstNameValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            isInvalid={lastNameValidation}
            placeholder="Last Name"
            value={fromValue.lastName}
            onChange={(e) => {
              setFormValue({ ...fromValue, lastName: e.target.value });
              if (e.target.value) {
                setLastNameValidation(false);
              } else {
                setLastNameValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            isInvalid={emailValidation}
            placeholder="E-mail"
            value={fromValue.email}
            onChange={(e) => {
              setFormValue({ ...fromValue, email: e.target.value });
              if (e.target.value) {
                setEmailValidation(false);
              } else {
                setEmailValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            required
            isInvalid={phoneValidation}
            placeholder="Phone Number"
            value={fromValue.phone}
            onChange={(e) => {
              setFormValue({ ...fromValue, phone: e.target.value });
              if (e.target.value) {
                setPhoneValidation(false);
              } else {
                setPhoneValidation(true);
              }
            }}
          />
          <Form.Control.Feedback type="invalid">
            This field is requid.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="message mb-3" controlId="details">
          <Form.Label>Message</Form.Label>
          <textarea class="form-control"  type="text"
            rows="5"
            placeholder="You can leave any message here..."
            value={fromValue.message}
            onChange={(e) => {
              setFormValue({ ...fromValue, message: e.target.value });
            }} id="exampleFormControlTextarea1"></textarea>
        </Form.Group>
        {/* <div className="container "> */}
          <div className="button-container">
            <Button className="form-button" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        {/* </div> */}
      </Form>
    </div>
      <p class="footer">
        By completing this form you consent to Direct Mediation Services holding
        the information you provide us about you in accordance with our&nbsp;
        <a
          href="https://www.directmediationservices.co.uk/wp-content/uploads/2022/09/Privacy-Policy-v-1.1.pdf"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Privacy notice.
        </a>
          By submitting your email address and telephone number to us you
        consent to us contacting you in order to enable us to deal with your
        query.
      </p>
      <Modal show={show} onHide={handleClose} className="message-container">
        
        <Modal.Body>
          
          <p className="message-text">Thank you very much for your message! We will be in contact with you shortly.</p>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default MyForm;
