import React, { Component } from "react";
import PersonalInfoFormCSS from '../styles/PersonalInfoForm.module.css'

export default class PersonalInfoForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={PersonalInfoFormCSS.formHeader}>Personal Info</div>
                <form>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName"></input>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName"></input>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"></input>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber"></input>
                </form>
            </div >

        )
    }
}