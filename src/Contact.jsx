import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Contact () {
    function signUp(formData) {
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        const employmentStatus = formData.get("employmentStatus")
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const favColor = formData.get("favColor")
        console.log(favColor)
    }

    return (
        <div className='contact-body'>
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-flex">
            <div className="contact-section" id="contact">
                <div className="section-content">
                    <ul className="contact-info-list">
                        <li className="contact-info">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <p>123 Camsite Avenue, Wilderness, CA 98765</p>
                        </li>
                        <li className="contact-info">
                            <i className="fa-solid fa-envelope"></i>
                            <p>info@littelemon.com</p>
                        </li>
                        <li className="contact-info">
                            <i className="fa-solid fa-phone"></i>
                            <p>0123 456 789</p>
                        </li>
                        <li className="contact-info">
                            <i className="fa-solid fa-clock"></i>
                            <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                        </li>
                        <li className="contact-info">
                            <i className="fa-solid fa-clock"></i>
                            <p>Weekend: 10: AM - 11:30 PM</p>
                        </li>
                        <li className="contact-info">
                            <i className="fa-solid fa-globe"></i>
                            <p>www.littlelemon.xyz</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='booking'>
                <h1 className='booking-tittle'>Table Booking</h1>
                <form action={signUp} className='form'>

                    <div>
                        <label htmlFor="name">Your Name :</label>
                        <input id="name" type="text" name="text" placeholder="Tran Xuan Binh" />
                    </div>

                    <div>
                        <label htmlFor="date">Date :</label>
                        <input id="date" type="date" name="date" />
                    </div>
                    
                    <div>
                        <label htmlFor="time">Time :</label>
                        <input id="time" type="time" name="time"/>
                    </div>

                    <div>
                    <label htmlFor="description">Additional Information:</label>
                    <textarea id="description" name="description" defaultValue="This is a description"></textarea>
                    </div>
                    
                    <div>
                        <label htmlFor="payment-method">Select Payment Method:</label>
                        <select id="payment-method">
                            <option value="">--Choose an option--</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="bank-transfer">Bank Transfer</option>
                        </select>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </div>
            
        </div>
    )
}