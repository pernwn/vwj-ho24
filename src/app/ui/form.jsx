"use client";

import React, { useEffect, useState } from "react";
import { Card, Input, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

// Originally I wanted the 'Submit' CTA to be disabled from the beginning, but I felt it defeated the purpose of the error messages. I've kept the code to handle the diabled button if it turns out the users prefer this instead.
// In current version the button is never disabled

export default function FormComp() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    contact: false,
    message: false,
    contactFormat: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: false }));
      if (id === "contact") {
        setErrors((prevErrors) => ({ ...prevErrors, contactFormat: false }));
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      contact: !formValues.contact,
      message: !formValues.message,
      contactFormat: !validateEmail(formValues.contact),
    };
    setErrors(newErrors);

    // Submit ONLY IF all fields are filled and email is valid
    if (
      !Object.values(newErrors).some((error) => error) &&
      validateEmail(formValues.contact)
    ) {
      console.log("Form submitted successfully");
    }

      //Code for handling disabled button function
    // ---if (!newErrors.contactFormat && !Object.values(newErrors).filter(error => error && error !== 'contactFormat').length === 0) {
    //   console.log("Form submitted successfully");
    // }
  };

  useEffect(() => {
    const { firstName, lastName, contact, message } = formValues;
    const allFieldsFilled = firstName && lastName && contact && message;
    setIsButtonDisabled(!allFieldsFilled);
  }, [formValues]);

  return (
    <Card shadow={false} className="text-cmwhite">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="firstName"
            >
              Fornavn
            </label>
            <input
              className={`appearance-none block w-full bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.firstName ? "border-[#FFFF00]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="firstName"
              type="text"
              placeholder="Jane"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-[#FFFF00] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />{" "}
                Venligst udfyld feltet.
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="lastName"
            >
              Efternavn
            </label>
            <input
              className={`appearance-none block w-full bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.lastName ? "border-[#FFFF00]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="lastName"
              type="text"
              placeholder="Doe"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-[#FFFF00] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />{" "}
                Venligst udfyld feltet.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="contact"
            >
              Email
            </label>
            <input
              className={`appearance-none block w-full bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.contact || errors.contactFormat
                  ? "border-[#FFFF00]"
                  : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="contact"
              type="text"
              placeholder="eksempel@email.dk"
              value={formValues.contact}
              onChange={handleChange}
            />
            {errors.contact && !errors.contactFormat && (
              <p className="text-[#FFFF00] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                Venligst udfyld feltet.
              </p>
            )}
            {errors.contactFormat && (
              <p className="text-[#FFFF00] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                Indtast en gyldig email-adresse.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="message"
            >
              Beskriv hvordan vi kan hjælpe dig
            </label>
            <textarea
              className={`appearance-none block w-full bg-cmsecondary/15 text-cmwhite border-2 rounded pt-3 pb-28 px-4 leading-tight focus:outline-none ${
                errors.message ? "border-[#FFFF00]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="message"
              type="textarea"
              placeholder="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
              value={formValues.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-[#FFFF00] text-xs italic pt-2">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="pr-2"
                />
                Venligst udfyld feltet.
              </p>
            )}
          </div>
        </div>
        <div>
          <Button
            type="submit"
            variant="filled"
            className={`enabled:bg-cmaccent enabled:text-cmprimary uppercase w-full p-3 text-md font-medium transition-colors ease-in enabled:hover:bg-[#ED532D] enabled:hover:cursor-pointer ${
              isButtonDisabled ? "bg-cmdark/40 text-cmwhite/40" : ""
            }`}
            //code for handling disabled button mode
            //---disabled={isButtonDisabled}
          >
            start dialogen
          </Button>
        </div>
      </form>
    </Card>
  );
}
