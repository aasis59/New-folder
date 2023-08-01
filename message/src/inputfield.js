import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";
import "./assets/css/style.css"

const InputFiled = () => {

    const [validated, setValidated] = useState(false);
    const[count,setCount] = useState(true);
    

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

        <section className=" vh-100   d-flex align-items-end  justify-content-center p-5 section  " style={{backgroundColor:"#2F788A", }}>
        { !count && <div className=" p-4 rounded  section-01 "  style={{backgroundColor:"#B2C5D6", width:"300px"  }}  >
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <div className="d-flex justify-content-between">
                        <div className="title text-primary fw-bold support">
                            Support
                        </div>
                        <div>
                           <ImCross className="cross"  onClick={()=> {setCount(true);
                           setValidated(false);
                           
                        }} 
                           
                           />
                        </div>
                       
                    </div>
              
                <Form.Group controlId="validationCustom01">
                    <Form.Label >Name</Form.Label>
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
                    <Form.Label className="pad">Email</Form.Label>
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
                <Form.Label  className="pad" >Message</Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Meassage" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a Message.
                </Form.Control.Feedback>
            </Form.Group>
           
            <Button  className="mt-3 fw-medium"type="submit">Send</Button>
        </Form>
        </div> }
        
    <FaFacebookMessenger size={40}  color= "#022541"style={{margin:'20px', position:'fixed'}}  className="icon" onClick={()=>setCount(false)}  />  
    </section>

    <div style={{backgroundColor:"black" , height:"100vh"}}>

    </div>


    </>
    );
}






export default InputFiled;
