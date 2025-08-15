import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const RetoFormulario = () => {
  const { register, handleSubmit } = useForm();

  const onsubmit = handleSubmit((data)=>{
    console.log(data)
  })
  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">SignIn to your account</div>
        <form className="form" onSubmit={onsubmit}>
          <div className="input-field">
            <input
              
              autoComplete="off"
              type="text"
              name="text"
              id="username"
              {...register("username", {
                required: {
                  value: true,
                },
                minLength: 3,
              })}
            />
            <label htmlFor="username">Full Name</label>
          </div>
          <div className="input-field">
            <input
              
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              
              autoComplete="off"
              type="password"
              name="text"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            <label htmlFor="username">Password</label>
          </div>
          <div className="btn-container">
            <button className="btn">Submit</button>
            <div className="acc-text">
              New here ?
              <span style={{ color: "#0000ff", cursor: "pointer" }}>
                Create Account
              </span>
            </div>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    border: solid 1px #8d8d8d;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
  }

  .container .heading {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: bolder;
  }

  .form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .form .btn {
    padding: 10px 20px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border-radius: 10px;
    border: solid 1px #1034aa;
    border-bottom: solid 1px #90c2ff;
    background: linear-gradient(135deg, #0034de, #006eff);
    color: #fff;
    font-weight: bolder;
    transition: all 0.2s ease;
    box-shadow: 0px 2px 3px #000d3848, inset 0px 4px 5px #0070f0,
      inset 0px -4px 5px #002cbb;
  }

  .form .btn:active {
    box-shadow: inset 0px 4px 5px #0070f0, inset 0px -4px 5px #002cbb;
    transform: scale(0.995);
  }

  .input-field {
    position: relative;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    pointer-events: none;
    background-color: transparent;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
  }

  .input-field input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 8px;
    border: solid 1px #8d8d8d;
    letter-spacing: 1px;
    width: 100%;
  }

  .input-field input:focus,
  .input-field input:valid {
    outline: none;
    border: solid 1px #0034de;
  }

  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-51%) translateX(-10px) scale(0.8);
    background-color: #fff;
    padding: 0px 5px;
    color: #0034de;
    font-weight: bold;
    letter-spacing: 1px;
    border: none;
    border-radius: 100px;
  }

  .form .passicon {
    cursor: pointer;
    font-size: 1.3rem;
    position: absolute;
    top: 6px;
    right: 8px;
  }

  .form .close {
    display: none;
  }
`;

export default RetoFormulario;
