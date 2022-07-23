import styles from './contact-form.module.scss'
import Button from '../../button/button'
import TextInput from "../../text-input/text-input";
import TextAreaInput from "../../text-area-input/text-area-input";
import CheckboxInput from "../../checkbox-input/checkbox-input";

const sendData = async (event) => {
    event.preventDefault()
    // console.log(hubspotClient)
    // Create the new request
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/25198299/66aafe0b-95d8-4753-93e7-9401764da114'

    // Example request JSON:
    console.log(event.target.email.value)
    var data = {
        "submittedAt": new Date(),
        "fields": [
            {
                "objectTypeId": "0-1",
                "name": "email",
                "value": event.target.email.value
            },
            {
                "objectTypeId": "0-1",
                "name": "firstname",
                "value": event.target.firstname.value
            },
            {
                "objectTypeId": "0-1",
                "name": "lastname",
                "value": event.target.lastname.value
            },
            {
                "objectTypeId": "0-1",
                "name": "message",
                "value": event.target.message.value
            }

        ],
        "context": {
            "pageUri": "https://peaksandpies.com",
            "pageName": "Peaks & Pies Homepage"
        },
        "legalConsentOptions": { // Include this object when GDPR options are enabled
            "consent": {
                "consentToProcess": true,
                "text": "I agree to allow Example Company to store and process my personal data.",
                "communications": [
                    {
                        "value": true,
                        "subscriptionTypeId": 999,
                        "text": "I agree to receive marketing communications from Example Company."
                    }
                ]
            }
        }
    }

    var final_data = JSON.stringify(data)

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText); // Returns a 200 response if the submission is successful.
        } else if (xhr.readyState == 4 && xhr.status == 400) {
            alert(xhr.responseText); // Returns a 400 error the submission is rejected.
        } else if (xhr.readyState == 4 && xhr.status == 403) {
            alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
        } else if (xhr.readyState == 4 && xhr.status == 404) {
            alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
        }
    }

    // Sends the request

    xhr.send(final_data)

}

const ContactForm = props => {
    const {} = props

    return (
        <div className={styles.Container}>
            <div className={styles.FormWrapper}>
                {/* TODO: action */}
                <form id="ContactForm" className={styles.Form} onSubmit={sendData} method="post">
                    <TextInput id="firstname" inputType="text" name="name" placeholder="Name"/>
                    <TextInput id="lastname" inputType="text" name="name" placeholder="Name"/>
                    <TextInput id="email" inputType="email" name="email" placeholder="Email"/>
                    <TextAreaInput id="message" form="ContactForm" name="message" placeholder="Nachricht"/>
                    <CheckboxInput id="privacy" name="privacy" value="privacyAccepted" label="Ich habe die Datenschutzerklärung zur Kenntnis genommen"/>
                    {/* TODO: onclick */}
                    <Button
                        action='submit'
                        type='primary'
                        text='Senden'
                    />
                </form>
            </div>
        </div>
    )
}

export default ContactForm
