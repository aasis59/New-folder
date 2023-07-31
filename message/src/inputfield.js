import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";

const InputFiled = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
        <section className=" vh-100   d-flex align-items-end  justify-content-center p-5    " style={{backgroundColor:"#2F788A", }}>
        <div className=" p-4 rounded "  style={{backgroundColor:"white", width:"300px", boxShadow: '-3px -8px 9px #F4AAB9'}}  >
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
          
            <Form.Group controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <InputGroup hasValidation>

                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Name.
                    </Form.Control.Feedback>

                </InputGroup>

            </Form.Group>
            

          
          <Form.Group  controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="Email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
         

            <Form.Group  controlId="validationCustom03">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" placeholder="Meassage" required />
            <Form.Control.Feedback type="invalid">
                Please provide a valid Message.
            </Form.Control.Feedback>
        </Form.Group>
       
        <Button  className="mt-2"type="submit">Submit form</Button>
    </Form>
    </div>
    </section>

    <div style={{width:"100%",backgroundColor:"black" , height:"100vh"}}>
        


    </div>


    </>
    );
}






export default InputFiled;
