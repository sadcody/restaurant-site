import { head } from "lodash";
import { resetPage , content} from "./index";

export default function contactPage(){
    resetPage();

    const allInformation = document.createElement("div");

// Contact Info

    const heading = document.createElement("h1");
    heading.classList.add("contactTitles")
    heading.textContent = "Contact Information"
    const phoneNumber = document.createElement("div");
    const emailAdress = document.createElement("div");
    const Adress = document.createElement("div");
    phoneNumber.classList.add("contactInfo");
    emailAdress.classList.add("contactInfo");
    Adress.classList.add("contactInfo")


    phoneNumber.textContent = "Phone number: +1 (555) 123-4567";
    emailAdress.textContent = "Email address: info@bistroburger.com";
    Adress.textContent  ="Address: 123 Main Street, Cityville, State, Zip Code"

    const headingProgram = document.createElement("h1");
    headingProgram.textContent = "Opening Hours";
    headingProgram.classList.add("contactTitles");


// Opening Hours
    
    const programMF = document.createElement("div");
    programMF.textContent = "Monday to Friday: 11:00 AM - 9:00 PM";
    programMF.classList.add("contactInfo")
    const programWeekend = document.createElement("div");
    programWeekend.textContent = 'Saturday and Sunday: 11:00 AM - 10:00 PM';
    programWeekend.classList.add("contactInfo");


//Feedback Input
    const headingForm = document.createElement("h1");
    headingForm.textContent = "Feedback";
    headingForm.classList.add("contactTitles");

    const form = document.createElement("form");
    
    
    const divEmail = document.createElement("div");
    divEmail.classList.add("formDivs");
    const labelEmail = document.createElement("label");
    labelEmail.classList.add("labels");
    labelEmail.textContent = "E-mail:";
    const inputEmail = document.createElement("input");
    inputEmail.classList.add("inputs");
    inputEmail.type = "email";
    divEmail.appendChild(labelEmail).appendChild(inputEmail);


    const divFeed = document.createElement("div");
    divFeed.classList.add("formDivs");
    const labelFeedback = document.createElement("label");
    labelFeedback.textContent = "Feedback:"
    labelFeedback.classList.add("labels");
    const feedbackInput = document.createElement("input");
    feedbackInput.classList.add("inputs");
    feedbackInput.type = "text";
    divFeed.appendChild(labelFeedback).appendChild(feedbackInput);




    allInformation.appendChild(heading).appendChild(phoneNumber).appendChild(emailAdress).appendChild(Adress).appendChild(headingProgram).appendChild(programMF).appendChild(programWeekend);
    allInformation.appendChild(headingForm)
    allInformation.appendChild(form);
    form.appendChild(divEmail);
    form.appendChild(divFeed);


    content.appendChild(allInformation);
    
}