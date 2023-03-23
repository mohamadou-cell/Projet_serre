import { Card, Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import './styles/connexion.css'
import eyeon from '../assets/eyes-on.png'
import eyesoff from '../assets/eyes-off.png'
import { useForm } from "react-hook-form";
// import { React } from "react";



const Connexion = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data: any) => console.log(data);

    const[inputtext,setinputtext]=useState({
        email:"",
        password:""
        });
        
        const[warnemail,setwarnemail]=useState(false);
        const[warnpassword,setwarnpassword]=useState(false);
        
        const[eye,seteye]=useState(true);
        const[password,setpassword]=useState("password");
        const[type,settype]=useState(false);
        
        const inputEvent=(event:any)=>{
        const name=event.target.name;
        const value=event.target.value;
        setinputtext((lastValue)=>{
        return{
        ...lastValue,
        [name]:value
        }
        });
        
        }

    

    const Eye = () => {
        if (password == "password") {
            setpassword("text");
            seteye(false);
            settype(true);
        }
        else {
            setpassword("password");
            seteye(true);
            settype(false);
        }
    }

    return (
        <div id="body1">
            <div id="body2">
                <div id="body3">
                    <h3 className="haut">Veuillez saisir vos information d'authentification <br />
                        ou bien vous connecter avec la carte RFID.</h3>
                    <br /><br />
                    <div id="corps" className="d-flex gap-5">
                        <div id="from">
                            <Form onSubmit={handleSubmit(onSubmit)} className="" >
                                <Form.Group className=""
                                    controlId="formBasicEmail">
                                    <Form.Label>Email<span id="etoile">*</span></Form.Label>
                                    <Form.Control className="saisie" type="email"
                                        placeholder="veillez saisir votre email"
                                        {...register("email", {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,

                                        })}
                                    />
                                    <div id='msgerror'>
                                        {errors.email?.type === "required" && "Ce champs est requis"}
                                        {errors.email?.type === "pattern" && "format email incorrect"}
                                    </div>
                                </Form.Group>

                                
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                
                                    <div className="input-text">
                                    <Form.Label>Mot de passe<span id="etoile">*</span></Form.Label>
                                        <Form.Control id="txt"  type={password} className={` ${warnpassword ? "warning" : "" } ${type ? "type_password" : "" }` }
                                            placeholder="veillez saisir votre mot de passe"
                                            {...register("password", {
                                                required: true,
                                                minLength: 5,
                                            })}
                                        />
                                        <i className="bi bi-eye"></i>
                                        <i onClick={Eye} className={`bi ${eye ? "bi bi-eye-slash" : "bi-eye" }`}></i>                                 
                                    </div>
                                    
                                    <div id='msgerror'>
                                        {errors.password?.type === "required" && "Ce champs est requis"}
                                        {errors.password?.type === "minLength" &&
                                            "au moins de 5 caractères"}

                                        
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                </Form.Group>

                                <br />

                               
                                   
                                    <input id="btn" type="submit" />
                                
                            </Form>
                        </div>
                        <div id="carte" className="d-flex gap-1">
                            <div id="reseau">
                                <svg width="259" height="189" viewBox="0 0 259 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M259 17.7187L259 171.281C259 176.006 257.057 180.141 253.172 183.684C249.287 187.228 244.755 189 239.575 189L19.425 189C14.245 189 9.7125 187.228 5.8275 183.684C1.9425 180.141 4.53038e-09 176.006 4.40876e-09 171.281L4.56079e-10 17.7187C3.34458e-10 12.9937 1.9425 8.85937 5.8275 5.31562C9.7125 1.77187 14.245 -3.66665e-10 19.425 -4.99998e-10L239.575 -6.16664e-09C244.755 -6.29997e-09 249.287 1.77187 253.172 5.31562C257.057 8.85937 259 12.9937 259 17.7187ZM19.425 49.9078L239.575 49.9078L239.575 17.7187L19.425 17.7187L19.425 49.9078ZM19.425 88.0031L19.425 171.281L239.575 171.281L239.575 88.0031L19.425 88.0031Z" fill="#35B6FF" />
                                </svg>
                                <div id="mdp">
                                    <a href="" className='mdp2'>Mot de passe oublié?</a>
                                </div>
                            </div>
                            <div id="wifi">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.9 34C3.53333 34 2.375 33.525 1.425 32.575C0.475 31.625 7.84209e-10 30.4667 7.49031e-10 29.1C7.13854e-10 27.7333 0.475 26.575 1.425 25.625C2.375 24.675 3.53333 24.2 4.9 24.2C6.26667 24.2 7.425 24.675 8.375 25.625C9.325 26.575 9.8 27.7333 9.8 29.1C9.8 30.4667 9.325 31.625 8.375 32.575C7.425 33.525 6.26667 34 4.9 34ZM29.5 34C29.5 29.9333 28.725 26.1083 27.175 22.525C25.625 18.9417 23.5167 15.8167 20.85 13.15C18.1833 10.4833 15.0583 8.375 11.475 6.825C7.89167 5.275 4.06667 4.5 1.1583e-10 4.5L0 0C4.7 -1.20978e-10 9.10833 0.891667 13.225 2.675C17.3417 4.45833 20.9417 6.89167 24.025 9.975C27.1083 13.0583 29.5417 16.6583 31.325 20.775C33.1083 24.8917 34 29.3 34 34L29.5 34ZM17.6 34C17.6 28.7333 15.9833 24.4167 12.75 21.05C9.51667 17.6833 5.26667 16 4.11839e-10 16L2.96009e-10 11.5C3.23333 11.5 6.2 12.0667 8.9 13.2C11.6 14.3333 13.925 15.9 15.875 17.9C17.825 19.9 19.35 22.275 20.45 25.025C21.55 27.775 22.1 30.7667 22.1 34L17.6 34Z" fill="#35B6FF" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Connexion