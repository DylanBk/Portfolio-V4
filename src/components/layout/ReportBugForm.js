import React, { useState } from "react";
import emailjs from 'emailjs-com';

import closeForm from "../../utils/closeReportForm";

export default function ReportBugForm() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const user_id = process.env.REACT_APP_EMAILJS_USER_ID ;

        emailjs.sendForm(service_id, template_id, e.target, user_id)
            .then((result) => {
                alert("Bug Reported Successfully");
                setFormData({ email: '', message: '' }); // resets form after its sent
            })
            .catch((error) => {
                alert("Failed to send Bug Report");
                console.error(error.text);
            });
    };

    return (
        <div
            id="bug-report-form-bg-blur"
            className="h-full w-full fixed left-1/2 top-1/2 bg-black bg-opacity-75 backdrop-blur-sm invisible -translate-x-1/2 -translate-y-1/2 z-10">
            <form
                id="bug-report-form"
                className="h-1/2 w-1/2 fixed top-1/2 left-1/2 flex flex-col gap-6 p-8 rounded-xl bg-almostWhite dark:bg-onyxBlack invisible -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
                onSubmit={handleSubmit}>
                    <button
                        id="close-report-form-btn"
                        className="h-7 w-7 absolute top-1 right-1 flex items-center justify-center rounded-full bg-midRed text-white hover:bg-darkRed transition-colors duration-300"
                        onClick={closeForm}>
                        X
                    </button>
                    <input
                        className="p-2 rounded-md bg-gray-300 dark:bg-deepBlue dark:text-white placeholder:text-midGrey transition-transform duration-150"
                        name="email"
                        type="email"
                        placeholder="email@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        required>
                    </input>
                    <textarea
                        className="h-1/2 p-2 rounded-md bg-gray-300 dark:bg-deepBlue dark:text-white placeholder:text-midGrey transition-transform duration-150"
                        name="message"
                        placeholder="Write a detailed report of the bug you have encountered..."
                        maxLength={1000}
                        value={formData.message}
                        onChange={handleChange}
                        required>
                    </textarea>
                    <div className="absolute left-1/2 bottom-8 flex flex-row gap-5 -translate-x-1/2">
                        <button
                            className="px-4 py-2 border-2 border-midRed rounded-md bg-none text-midRed hover:border-darkRed hover:text-darkRed transition-colors duration-200"
                            onClick={closeForm}>
                                Cancel
                            </button>
                        <button
                            className="px-4 py-2 rounded-md bg-midGreen hover:bg-darkGreen text-white transition-colors duration-200"
                            type="submit">
                            Submit Report
                        </button>
                    </div>
            </form>
        </div>
    )
};