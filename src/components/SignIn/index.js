import React from "react";
import styled from "styled-components";
import "./style.css"
import visibility from "../../images/Icons/visibility.png"
import visibility_off from "../../images/Icons/visibility_off.png"
import { useState } from "react";
const SignIn = () => {
  const [visibilityPassword,setVisibilityPassword] = useState(false)
  const LoginContainer = styled.div`
    margin: auto;
    height: 80%;
    width: 35%;
    
    @media (max-width: 1000px) {
      width: 70%;
    }
    @media (max-width: 900px) {
      width: 80%;
    }
    @media (max-width: 800px) {
      width: 90%;
    }
  `;
  const Title = styled.form`
    font-size: 1.8em;
    font-weight: 600;
  `;
  const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  const InputContainers = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap:20px;
    align-items:center;
    justify-content:center;
  `;
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
  `;
  const InputLabel = styled.span`
    font-weight: bold;
    font-size:0.8em;
  `;

  const InputEntry = styled.div`
    width: 100%;
    margin: 0px 10px 0px 0px;
    
    border-radius: 20px;
    border: 1px solid gray;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-top:10px;
    padding-bottom:10px;

  `;
  const BtnShowPassword = styled.img`
      height:20px;
      width:20px;
      margin-right:10px;
      cursor:pointer;
  `;
  const TermsContainer = styled.div`
    width:100%;
    padding:18px 0px 18px 0px;
    display:flex;
    gap:10px;
    
  `;
  const CheckTerms = styled.input`
    
  `;
  const LinkTerms = styled.a`
    color:${({theme})=>theme.primaryColor};
    text-decoration:underline;
    font-size:0.9em;
    &:hover{

    }
  `;
  const BtnCreateAccount = styled.a`
    color:${({theme})=>theme.backgroundColor};
    background-color:${({theme})=>theme.buttonPrimaryColor};
    width:100%;
    font-size:1em;
    padding:13px 0px 13px 0px;
    text-align:center;
    border-radius:20px;
    cursor:pointer;
    margin-top:15px;
  
  `;
  const HaveAnAccountContainer = styled.div`
    margin-top:15px;
    font-size:0.9em;
    width:100%;
    gap:7px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:${({theme})=>theme.primaryColor};
  `;
  const HaveAnAccount = styled.span`
    
  `;
  const LoginLinkAccount = styled.a`
  color:${({theme})=>theme.buttonPrimaryColor};
  `;
  return (
    <LoginContainer>
      <FormLogin method="post" action="/sign_in/">
        <Title>Sing in</Title>
        <InputContainers>
          {/* Nombre */}
          <InputContainer>
            <InputLabel>Name</InputLabel>
            <InputEntry>
              <input type="text" className="inputLogin" placeholder="Your Name"></input>
            </InputEntry>
          </InputContainer>
          {/* Email */}
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <InputEntry>
              <input type="text" className="inputLogin" placeholder="youremail@gmail.com"></input>
            </InputEntry>
          </InputContainer>
           {/* Password */}
           <InputContainer>
            <InputLabel>Password</InputLabel>
            <InputEntry>
              <input type={visibilityPassword?"text":"password" } className="inputLogin" placeholder="··········"></input>
              
              <BtnShowPassword src={visibilityPassword?visibility:visibility_off } onClick={()=>{setVisibilityPassword(!visibilityPassword);}}></BtnShowPassword>
            </InputEntry>
          </InputContainer>
          {/* Confirm Password */}
          <InputContainer>
            <InputLabel>Confirm password</InputLabel>
            <InputEntry>
              <input type={visibilityPassword?"text":"password" } className="inputLogin" placeholder="··········"></input>
              <BtnShowPassword src={visibilityPassword?(visibility):(visibility_off)} onclick={()=>{setVisibilityPassword(!visibilityPassword);}}></BtnShowPassword>
            </InputEntry>
          </InputContainer>
        </InputContainers>
        <TermsContainer>
          <CheckTerms type="checkbox"/>
          <LinkTerms>Terms and Conditions</LinkTerms>
        </TermsContainer>
        <BtnCreateAccount>Create Account</BtnCreateAccount>

        <HaveAnAccountContainer>
          <HaveAnAccount>Have an account?</HaveAnAccount>
          <LoginLinkAccount href="/login/">Log in</LoginLinkAccount>
        </HaveAnAccountContainer>
      </FormLogin>
    </LoginContainer>
  );
};

export default SignIn;
