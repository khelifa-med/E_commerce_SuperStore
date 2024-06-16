import React from 'react';
import './Css/privacy.css'

export const Privacy = () => {
    return (
        <div className="privacy-policy-container">
            <h1>Privacy Policy</h1>
            <p>Last Updated: [Date]</p>
            
            <section>
                <h2>Introduction</h2>
                <p>Welcome to [Your E-Commerce Shop] ("Company", "we", "our", "us")! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [yourwebsite.com], purchase products from our online store, or interact with us in other ways.</p>
            </section>

            <section>
                <h2>Information We Collect</h2>
                <h3>Personal Data</h3>
                <p>When you use our website or make a purchase, we may collect personal data including, but not limited to:</p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Shipping and billing address</li>
                    <li>Phone number</li>
                    <li>Payment information (credit/debit card details, etc.)</li>
                    <li>Purchase history</li>
                </ul>
                <h3>Automatically Collected Information</h3>
                <p>We may also collect information automatically as you navigate through our site. This may include:</p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Time zone setting</li>
                    <li>Browser plug-in types and versions</li>
                    <li>Operating system and platform</li>
                    <li>Information about your visit including the full Uniform Resource Locators (URLs), clickstream to, through, and from our site, products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page.</li>
                </ul>
            </section>

            <section>
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect in the following ways:</p>
                <ul>
                    <li><strong>To process transactions:</strong> We use your information to process payments and deliver the products you purchase.</li>
                    <li><strong>To provide customer support:</strong> We use your information to respond to your inquiries, provide support, and handle any issues that may arise.</li>
                    <li><strong>To personalize your experience:</strong> We may use your information to understand your preferences and enhance your experience on our website.</li>
                    <li><strong>To send periodic emails:</strong> We may use your email address to send you information and updates related to your order, occasional company news, updates, related product or service information, etc.</li>
                    <li><strong>To improve our website:</strong> We continually strive to improve our website offerings based on the information and feedback we receive from you.</li>
                </ul>
            </section>

            <section>
                <h2>How We Protect Your Information</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secure networks and is only accessible by a limited</p>
            </section>
        </div>
    );
}

export default Privacy;
