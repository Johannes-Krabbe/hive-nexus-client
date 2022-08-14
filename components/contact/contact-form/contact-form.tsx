import { useState } from 'react';
import Button from '../../button/button'
import TextInput from "./text-input/text-input";
import TextAreaInput from './text-area-input/text-area-input';
// import CheckboxInput from "../checkbox-input/checkbox-input";

import styles from './contact-form.module.scss'

interface FormPost {
  firstname?: string;
  lastname?: string;
  email?: string;
	text?: string;
}

const ContactForm = () => {
	// TODO: URL endpoint to send formdata

	const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  };

  const [state, setState] = useState<FormPost>();
  const [submitted, setSubmitted] = useState(false);

  const submitFormData = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state })
    })
      .then(() => console.log("Success!"))
      .catch(error => console.log(error));

    event.preventDefault();
    setSubmitted(true);
  }

  const textInputErrorMessage = 'Bitte füllen Sie dieses Feld aus. Zahlen sind nicht erlaubt.'
  const mailInputErrorMessage = 'Bitte geben sie Ihre E-Mail Adresse im Format example@org.com ein.'
  const messageInputErrorMessage = 'Bitte geben sie Ihre Nachricht an uns hier ein.'

  return (
      <div className={styles.container}>
          <div className={styles.FormWrapper}>
              {/* TODO: action */}
              {	(!submitted) &&
								<form id="ContactForm" name="Contact" className={styles.Form} onSubmit={submitFormData} method="post">
                  <TextInput id="firstname" inputType="text" name="firstname" placeholder="First Name" pattern="^(\D+)$" errorMessage={textInputErrorMessage} title={textInputErrorMessage}/>
                  <TextInput id="lastname" inputType="text" name="lastname" placeholder="Last Name" pattern="^(\D+)$" errorMessage={textInputErrorMessage} title={textInputErrorMessage}/>
                  <TextInput id="email" inputType="email" name="email" placeholder="Email" pattern="\S+@\S+\.\S+" errorMessage={mailInputErrorMessage} title={mailInputErrorMessage}/>
                  <TextAreaInput id="message" formName="ContactForm" name="message" placeholder="Ihre Nachricht" errorMessage={messageInputErrorMessage} title={messageInputErrorMessage}/>
                  {/* <CheckboxInput id="privacy" name="privacy" value="privacyAccepted" label="Ich habe die Datenschutzerklärung zur Kenntnis genommen"/> */}

                  {/* TODO: onclick */}
                  <Button
										action='submit'
										variant='primary'
                    text='Senden'
                  />
                </form>}
								{ submitted && <h5>Thanks for submitting!</h5>}
            </div>
        </div>
    )
}

export default ContactForm;
