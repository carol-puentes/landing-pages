import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Container } from "./FooterStyle";
import Nav2 from "./Nav2";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0wk88x",
        "template_ybqfpjb",
        form.current,
        "v7YU7AnSGlgbd0fTC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="textblack py-3" id='color'>
        <Nav2/>

        <div class="textblack py-3" id='color'>
            <div class="container py3"> 
                <div class="row"> 
                    <div class="col-md-6 ">
                        <h1 id='titulo'> 
                            <strong> NOS PREOCUPAMOS POR TU OPINION </strong>
                        </h1>
                        <p id='lema'>
                            <strong>Si tienes alguna queja o inquietud no dudes en hacernoslo saber</strong>
                        </p>
                    </div>
                    
                    <div class="col-md-6">
                        <Container>
                   <center>
                    <StyledContactForm>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Nombre</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Mensaje</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </StyledContactForm>
                    </center>
                    </Container>
                    </div>
                    
                </div>
            </div>
            
        </div>

    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;