import React from "react";
import style from "./Contact.module.css";
import { Typography, makeStyles, TextField, Button } from "@material-ui/core";
import { useState } from "react";

const UseStyle = makeStyles({
  heading: {
    fontSize: 50,
    color: "#444",
    fontWeight: "bolder",
  },
  TextField: {
    width: 330,
    marginLeft: 20,
  },
  addressField: {
    width: 680,
    marginTop: 30,
    marginLeft: 40,
  },
});

const Contact = () => {
  const [formData, setFormData] = useState(true);
  const classes = UseStyle();

  const pettern = {
    Name: /^[a-z\d]{5,15}$/i,
    Email: /^([a-z\d]+)@([a-z\d]{3,20})\.([a-z]){2,10}$/i,
    Address: /^[a-z\d]+$/i,
    Message: /^[\s\S]{20,280}[^<>:;]$/i,
  };
  function validate(field, regex, name) {
    if (regex.test(field)) {
      setFormData([name, true]);
    } else {
      setFormData([name, false]);
    }
  }

  const handleFormData = (name, value) => {
    validate(value, pettern[name], name);
  };

  return (
    <div className={style.contact_container}>
      <div className={style.background_heading}>
        <h1>Contact Us</h1>
      </div>
      <div className={style.heading}>
        <Typography className={classes.heading} variant="h3">
          Contact Us
        </Typography>
      </div>
      <div className={style.conatct_form}>
        <form action="submit" autoComplete="on">
          <div className={style.form_field}>
            <div>
              <TextField
                id="name"
                onChange={(e) => handleFormData(e.target.name, e.target.value)}
                name="Name"
                className={classes.TextField}
                label="User Name"
                variant="outlined"
                type="text"
                required
              />
              <p
                className={
                  formData[0] === "Name" && formData[1] === false
                    ? style.warning
                    : style.hide
                }
              >
                Name cannot have any space, @, or _
              </p>
            </div>
            <div>
              <TextField
                id="email"
                onChange={(e) => handleFormData(e.target.name, e.target.value)}
                name="Email"
                type="email"
                label="Email"
                variant="outlined"
                className={classes.TextField}
                required
              />
              <p
                className={
                  formData[0] === "Email" && formData[1] === false
                    ? style.warning
                    : style.hide
                }
              >
                Please enter a valid email address
              </p>
            </div>
          </div>
          <div>
            <TextField
              id="address"
              onChange={(e) => handleFormData(e.target.name, e.target.value)}
              name="Address"
              type="text"
              label="Type your address"
              variant="outlined"
              className={classes.addressField}
              required
            />
            <p
              className={
                formData[0] === "Address" && formData[1] === false
                  ? style.warning
                  : style.hide
              }
            >
              Please enter a valid address
            </p>
          </div>
          <div>
            <TextField
              id="messages"
              onChange={(e) => handleFormData(e.target.name, e.target.value)}
              name="Message"
              label="Type your message"
              variant="outlined"
              multiline
              className={classes.addressField}
              required
              rows={4}
            />
            <p
              className={
                formData[0] === "Message" && formData[1] === false
                  ? style.warning
                  : style.hide
              }
            >
              Please enter minimum 20 upto 80 character
            </p>
          </div>
          <br />
          <Button variant="contained" color="primary">
            Submit Form
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
