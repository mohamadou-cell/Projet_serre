import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./styles/update_password.css";
import eyeon from "../assets/eyes-on.png";
import eyesoff from "../assets/eyes-off.png";
import { useForm } from "react-hook-form";

const Updatepassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => console.log(data);

  const [inputtext, setinputtext] = useState({
    password_actuel: "",
    password_nouveau: "",
    password_confirmation: "",
  });
  const [password_actuel, setpassword_actuel] = useState(false);
  const [password_news, setpassword_news] = useState(false);
  const [password_confirm, setpassword_confirm] = useState(false);

  const [eye, seteye] = useState(true);
  const [eye2, seteye2] = useState(true);
  const [eye3, seteye3] = useState(true);

  const [password1, setpassword1] = useState("password");
  const [password2, setpassword2] = useState("password");
  const [password3, setpassword3] = useState("password");

  const [type, settype] = useState(false);
  const [type2, settype2] = useState(false);
  const [type3, settype3] = useState(false);

  const [musted, setMusted] = useState(null);

  const inputEvent = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const must = () => {
    const compa = document.getElementById("compa").value;
    const new_ = document.getElementById("new").value;

    if (compa == new_) {
      console.log("correct");
      setMusted(false);
    } else {
      console.log("in");
      setMusted(true);
    }
  };

  const Eye = () => {
    if (password1 == "password") {
      setpassword1("text");
      seteye(false);
      settype(true);
    } else {
      setpassword1("password");
      seteye(true);
      settype(false);
    }
  };

  const Eye_news = () => {
    if (password2 == "password") {
      setpassword2("text");
      seteye2(false);
      settype2(true);
    } else {
      setpassword2("password");
      seteye2(true);
      settype2(false);
    }
  };

  const Eye_confirm = () => {
    if (password3 == "password") {
      setpassword3("text");
      seteye3(false);
      settype3(true);
    } else {
      setpassword3("password");
      seteye3(true);
      settype3(false);
    }
  };

  return (
    <div id="global">
      <div id="body1">
        <div className="retour">
          <a className="bn" href="../dashboard" role="button">
            Retour
          </a>
        </div>
        <div id="body2">
          <div id="body3">
            <div id="corps" className="d-flex gap-5">
              <div id="from">
                <Form onSubmit={handleSubmit(onSubmit)} className="">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className="input-text">
                      <Form.Label>
                        Actuel mot de passe<span id="etoile">*</span>
                      </Form.Label>
                      <Form.Control
                        type={password1}
                        className={` ${password_actuel ? "warning" : ""} ${
                          type ? "type_password" : ""
                        }`}
                        placeholder="veillez saisir votre mot de passe"
                        {...register("password_actuel", {
                          required: true,
                          minLength: 5,
                        })}
                      />
                      <i className="bi bi-eye"></i>
                      <i
                        onClick={() => {
                          Eye();
                        }}
                        className={`bi ${eye ? "bi bi-eye-slash" : "bi-eye"}`}
                      ></i>
                    </div>

                    <div id="msgerror">
                      {errors.password_actuel?.type === "required" &&
                        "Ce champs est requis"}
                      {errors.password_actuel?.type === "minLength" &&
                        "au moins de 5 caractères"}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className="input-text">
                      <Form.Label>
                        Nouveau mot de passe<span id="etoile">*</span>
                      </Form.Label>
                      <Form.Control
                        id="compa"
                        type={password2}
                        className={` ${password_news ? "warning" : ""} ${
                          type ? "type_password" : ""
                        }`}
                        placeholder="veillez saisir votre mot de passe"
                        {...register("password2", {
                          required: true,
                          minLength: 5,
                        })}
                      />
                      <i className="bi bi-eye"></i>
                      <i
                        onClick={() => {
                          Eye_news();
                        }}
                        className={`bi ${eye2 ? "bi bi-eye-slash" : "bi-eye"}`}
                      ></i>
                    </div>

                    <div id="msgerror">
                      {errors.password2?.type === "required" &&
                        "Ce champs est requis"}
                      {errors.password2?.type === "minLength" &&
                        "au moins de 5 caractères"}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <div className="input-text">
                      <Form.Label>
                        Confirmation mot de passe<span id="etoile">*</span>
                      </Form.Label>
                      <Form.Control
                        id="new"
                        onKeyUp={() => {
                          must();
                        }}
                        type={password3}
                        className={` ${password_confirm ? "warning" : ""} ${
                          type ? "type_password" : ""
                        }`}
                        placeholder="veillez saisir votre mot de passe"
                        {...register("password3", {
                          required: true,
                        })}
                      />
                      <i className="bi bi-eye"></i>
                      <i
                        onClick={() => {
                          Eye_confirm();
                        }}
                        className={`bi ${eye3 ? "bi bi-eye-slash" : "bi-eye"}`}
                      ></i>
                    </div>
                    <p
                      className={`text-danger ${
                        musted ? "afficher" : "cacher"
                      }`}
                    >
                      les valeurs ne correspondent pas
                    </p>
                    <div id="msgerror">
                      {errors.password3?.type === "required" &&
                        "Ce champs est requis"}

                      {errors.password3?.type === "minLength" &&
                        "au moins de 5 caractères"}
                    </div>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>

                  <br />

                  <input id="button" type="submit" />
                </Form>
              </div>
              <div id="can">
                <h1 className="haut">Créer un nouveau mot de passe </h1>
                <div className="rsx">
                  <svg
                    width="160"
                    height="192"
                    viewBox="0 0 160 192"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9375 191.625C10.8297 191.625 7.31315 190.285 4.38789 187.604C1.46263 184.924 4.67698e-09 181.702 4.5801e-09 177.938L2.03168e-09 78.9313C1.9348e-09 75.1672 1.46263 71.9449 4.38789 69.2645C7.31315 66.584 10.8297 65.2438 14.9375 65.2438L32.3646 65.2438L32.3646 43.3437C32.3646 31.352 36.9791 21.1301 46.2082 12.678C55.4372 4.22602 66.5988 -1.71425e-09 79.693 -2.05129e-09C92.7873 -2.38834e-09 103.94 4.22602 113.152 12.678C122.363 21.1301 126.969 31.352 126.969 43.3437L126.969 65.2438L144.396 65.2438C148.504 65.2438 152.02 66.584 154.945 69.2645C157.871 71.9449 159.333 75.1672 159.333 78.9313L159.333 177.937C159.333 181.702 157.871 184.924 154.945 187.604C152.02 190.285 148.504 191.625 144.396 191.625L14.9375 191.625ZM14.9375 177.937L144.396 177.937L144.396 78.9313L14.9375 78.9313L14.9375 177.937ZM79.7085 146C84.9917 146 89.5005 144.325 93.2349 140.974C96.9693 137.624 98.8365 133.596 98.8365 128.891C98.8365 124.328 96.9553 120.184 93.1931 116.458C89.4308 112.732 84.9081 110.869 79.6248 110.869C74.3416 110.869 69.8328 112.732 66.0984 116.458C62.3641 120.184 60.4969 124.366 60.4969 129.005C60.4969 133.643 62.378 137.635 66.1403 140.981C69.9025 144.327 74.4253 146 79.7085 146ZM47.3021 65.2438L112.031 65.2438L112.031 43.3437C112.031 35.1059 108.888 28.1037 102.6 22.3373C96.3127 16.5708 88.678 13.6875 79.696 13.6875C70.714 13.6875 63.0694 16.5708 56.7625 22.3373C50.4556 28.1037 47.3021 35.1059 47.3021 43.3437L47.3021 65.2438Z"
                      fill="#35B6FF"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatepassword;
