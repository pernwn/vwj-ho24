"use client";

import React, { useEffect, useState } from "react";
import { Card, Input, Button } from "@material-tailwind/react";

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
    setFormValues({ ...formValues, [id]: value });
    if (value) {
      setErrors({ ...errors, [id]: false, contactFormat:false});
    }
  };

  const validateEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      contact: !formValues.contact || !validateEmail(formValues.contact),
      message: !formValues.message,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // All fields are filled, proceed with form submission
      console.log("Form submitted successfully");
    }
  };

  useEffect(() => {
    const { firstName, lastName, contact, message } = formValues;
    setIsButtonDisabled(!firstName || !lastName || !contact || !message || !validateEmail(contact));
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
              First Name
            </label>
            <input
              className={`appearance-none block w-full bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.firstName ? "border-[#ff0000]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="firstName"
              type="text"
              placeholder="Jane"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-[#FF0000] text-xs italic pt-2">
                Venligst udfyld feltet.
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-cmwhite text-h6 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={`appearance-none block w-full bg-cmsecondary/15 border-2 rounded py-3 px-4 leading-tight focus:outline-none ${
                errors.lastName ? "border-[#ff0000]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="lastName"
              type="text"
              placeholder="Doe"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-[#FF0000] text-xs italic pt-2">
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
                errors.contact ? "border-[#ff0000]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="contact"
              type="text"
              placeholder="eksempel@email.dk"
              value={formValues.contact}
              onChange={handleChange}
            />
            {errors.contact && !errors.contactFormat && (
              <p className="text-[#FF0000] text-xs italic pt-2">
                Venligst udfyld feltet.
              </p>
            )}
            {errors.contactFormat && (
                            <p className="text-[#FF0000] text-xs italic pt-2">
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
              className={`appearance-none block w-full bg-cmsecondary/15 text-cmwhite border-2 border-cmsecondary/45 rounded pt-3 pb-28 px-4 leading-tight focus:outline-none ${
                errors.lastName ? "border-[#ff0000]" : "border-cmsecondary/45"
              } focus:bg-cmsecondary/15 focus:border-cmsecondary`}
              id="message"
              type="textarea"
              placeholder="Jeg ønsker at indlede en dialog med jeres team for at diskutere vores specifikke behov og krav til IT-sikkerhed. Vores virksomhed opererer i en branche, hvor..."
              value={formValues.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-[#FF0000] text-xs italic pt-2">
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
            disabled={isButtonDisabled}
          >
            start dialogen
          </Button>
        </div>
      </form>
    </Card>
  );
}
