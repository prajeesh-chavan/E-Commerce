import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "157f9ade-6f52-49bc-8538-669829357c22");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="flex justify-center items-center min-h-screen">
            <form onSubmit={onSubmit} className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg text-gray-800 m-6">
                <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
                <div className="mt-4">
                    <label className="block text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="w-full h-12 bg-transparent border-2 border-gray-300 rounded-lg p-3 text-sm mt-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full h-12 bg-transparent border-2 border-gray-300 rounded-lg p-3 text-sm mt-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium">Your Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        className="w-full h-52 bg-transparent border-2 border-gray-300 rounded-lg p-3 text-sm mt-2 focus:outline-none resize-none"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full h-14 mt-6 bg-gray-700 text-white font-medium rounded-lg shadow-lg hover:bg-gray-800"
                >
                    Send Message
                </button>
                {result && <p className="text-center mt-4 text-gray-600">{result}</p>}
            </form>
        </section>
    );
};

export default Contact;
