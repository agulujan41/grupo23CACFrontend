import styled from "styled-components";
import "./style.css"
import visibility from "../../images/Icons/visibility.png"
import visibility_off from "../../images/Icons/visibility_off.png"
import { useState } from "react";import React from "react";
import googleIcon from "../../images/Icons/google.png"
import { useForm } from "react-hook-form";
const Login = () => {
  const [visibilityPassword,setVisibilityPassword] = useState(false);

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
    font-size:0.9em;
    &:hover{

    }
  `;
const ToolsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    align-items:center;
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
  font-size:0.9em;
  text-wrap:nowrap;
  `;
  const OrDelimiter = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
  `;
  const HLine = styled.div`
    width:40%;
    height:1px;
    background-color:gray;
  `;
  const OSpan = styled.span`
    font-size:0.9em;
    color: gray;
    margin:30px 0px 30px 0px;
  `;
  const BtnSIWGoogle= styled.a`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:${({theme})=>theme.backgroundColor};
    font-size:1em;
    border:1px solid gray;
    width:100%;
    gap:10px;
    padding:13px 0px 13px 0px;
    text-align:center;
    border-radius:20px;
    cursor:pointer;
  `;
  const BtnSIWGoogleImg= styled.img`
    height:20px;
    width:20px;
  `;
  const BtnSIWGoogleSpan= styled.span`
    
  `;
  const { register, handleSubmit, errors } = useForm()
  return (
    <LoginContainer>
    <FormLogin method="post" action="/login/" id="formLogin">
      <Title>Login</Title>
      <InputContainers>
        
        {/* Email */}
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <InputEntry>
            <input type="text" className="inputLogin" placeholder="youremail@gmail.com" ref={register("email",{required:true})}></input>
          </InputEntry>
        </InputContainer>
         {/* Password */}
         <InputContainer>
          <InputLabel>Password</InputLabel>
          <InputEntry>
            <input id="sign_in_input_cpassword" type={visibilityPassword?"text":"password" } className="inputLogin" placeholder="··········"    required ></input>
            <BtnShowPassword src={visibilityPassword?visibility:visibility_off } onClick={()=>{setVisibilityPassword(!visibilityPassword);}}></BtnShowPassword>
          </InputEntry>
        </InputContainer>
      </InputContainers>
      <ToolsContainer>
        <TermsContainer>
          <CheckTerms type="checkbox"/>
          <LinkTerms>Remember me</LinkTerms>
          
        </TermsContainer>
        <LoginLinkAccount href="/login/">Forgot your password?</LoginLinkAccount>
      </ToolsContainer>
     
      <BtnCreateAccount onClick={()=>{
        document.forms["formLogin"].submit();
    
        

      }}>Login</BtnCreateAccount>
      <OrDelimiter>
        <HLine></HLine>
        <OSpan>Or</OSpan>
        <HLine></HLine>
      </OrDelimiter>
      <BtnSIWGoogle>
        <BtnSIWGoogleImg src={googleIcon}></BtnSIWGoogleImg>
        <BtnSIWGoogleSpan>Sign In with Google</BtnSIWGoogleSpan>
      </BtnSIWGoogle>
      <HaveAnAccountContainer>
        <HaveAnAccount>Dont have an account?</HaveAnAccount>
        <LoginLinkAccount href="/sign_in/">Sign in</LoginLinkAccount>
      </HaveAnAccountContainer>
    </FormLogin>
  </LoginContainer>
    
  );
};

export default Login;
