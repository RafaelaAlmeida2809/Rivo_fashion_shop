import React, { useState } from "react";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import Alert from "../items/alert";
import "./contact.css";

export default function Contact() {
  const serviceID = "service_re6y7lf";
  const templateID = "template_07wg3ip";
  const userID = "hwbmZFXvjdE1RDXyQ";
  const [contact, setContact] = useState({});
  const [alert, setAlert] = useState({});
  const [load, setLoad] = useState(false);

  const onEdit = (event, key) => {
    setContact({ ...contact, [key]: event.target.value });
  };
  const sendEmail = (event) => {
    setLoad(true);
    event.preventDefault();
    const emailParams = {
      subject: "Novo contato no portifólio",
      message: `Oi Rafaela, 
      \n Você recebeu uma nova mensagem de ${contact.name}:
      email: ${contact.email},
      phone: ${contact.phone},
      \n ${contact.message}`
    };
    emailjs
      .send(serviceID, templateID, emailParams, userID)
      .then((response) => {
        setAlert({
          show: true,
          text: "E-mail enviado com sucesso!",
          status: "success"
        });
        setLoad(false);
      })
      .catch((error) => {
        setAlert({
          show: true,
          text: "Erro ao enviar o e-mail",
          status: "danger"
        });
        setLoad(false);
      });
  };
  return (
    <div
      id="contact"
      className="contact div-form row g-0 mx-4 mx-lg-5 d-flex justify-content-center mb-5"
    >
      <form
        id="form-contact"
        class="col-lg-8 col-10 p-4 d-lg-flex flex-lg-row row justify-content-center "
        onSubmit={sendEmail}
      >
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              required
              onChange={(event) => onEdit(event, "name")}
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
              onChange={(event) => onEdit(event, "email")}
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Phone:</label>
            <InputMask
              type="tel"
              class="form-control"
              id="phone"
              name="phone"
              required
              mask="(99) 99999-9999"
              onChange={(event) => onEdit(event, "phone")}
            />
          </div>
        </div>
        <div class="form-group col-lg-6 d-lg-flex flex-column">
          <label htmlFor="message">Message:</label>
          <textarea
            class="form-control flex-grow-1"
            id="message"
            name="message"
            rows="5"
            required
            onChange={(event) => onEdit(event, "message")}
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn-base py-2 p-lg-1 mt-3 col-4 col-lg-4 "
          disabled={load}
        >
          Send
        </button>
      </form>
      {alert.show ? (
        <Alert
          text={alert.text}
          status={alert.status}
          func={() => setAlert({ show: false })}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
