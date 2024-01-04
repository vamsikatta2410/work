import React, { useState } from 'react';

function ContactForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyP84To_S3DA0AnYz8TPBLkiuessY-rwqrM7LodWwUrAYaXqIvYWYv4NbYo-6hQcjlNiA/exec';
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Website: '',
        Message: '',
        AgreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.AgreeToTerms) {
            alert('Please agree to the terms before submitting.');
            return;
        }

        fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
            .then((response) => {
                if (response.ok) {
                    alert('Thank you! Your form is submitted successfully.');
                    // Optionally, you can reset the form here.
                    setFormData({
                        Name: '',
                        Email: '',
                        Phone: '',
                        Website: '',
                        Message: '',
                        AgreeToTerms: false,
                    });
                } else {
                    alert('Form submission failed.');
                }
            })
            .catch((error) => {
                console.error('Error!', error.message);
                alert('Form submission failed.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form" method="post">
            <p className="text-center text-danger fs-12px mb-30">
                The fields marked with * are required.
            </p>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group mb-20">
                        <input
                            type="text"
                            name="Name"
                            className="form-control"
                            placeholder="Name"
                            value={formData.Name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group mb-20">
                        <input
                            type="text"
                            name="Email"
                            className="form-control"
                            placeholder="Email Address *"
                            value={formData.Email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group mb-20">
                        <input
                            type="text"
                            name="Phone"
                            className="form-control"
                            placeholder="Phone Number (optional)"
                            value={formData.Phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group mb-20">
                        <input
                            type="text"
                            name="Website"
                            className="form-control"
                            placeholder="Your Website (optional)"
                            value={formData.Website}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <textarea
                            name="Message"
                            rows={10}
                            className="form-control"
                            placeholder="How can we help you?"
                            value={formData.Message}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                        <input
                            className="form-check-input me-2 mt-0"
                            type="checkbox"
                            name="AgreeToTerms"
                            checked={formData.AgreeToTerms}
                            onChange={handleChange}
                        />
                        <label className="form-check-label small" htmlFor="flexCheckDefault">
                            By submitting, I agree to the{' '}
                            <a href="#" className="text-decoration-underline">
                                Terms &amp; Conditions
                            </a>
                        </label>
                    </div>
                </div>
                <div className="col-lg-12 text-center">
                    <input
                        type="submit"
                        value="Submit Your Response"
                        className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                    />
                </div>
            </div>
        </form>
    );
}

export default ContactForm;
