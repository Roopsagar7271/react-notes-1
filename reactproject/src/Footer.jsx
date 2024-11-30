import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Trulia is a registered Trademark of Zillow, Inc. Zillow, Inc. holds real estate brokerage licenses in all 50 states and D.C. and Zillow (Canada) Inc. holds real estate brokerage licenses in multiple provinces.</p>
                <p>§ 442-H New York Standard Operating Procedures</p>
                <p>New York Fair Housing Notice</p>
                <p>TREC: Information about brokerage services, Consumer protection notice</p>
                <p>California DRE #1522444</p>
                <p>Contact Zillow, Inc Brokerage</p>
                <div className="footer-links">
                    <p>Zillow Group ® Other Brands:</p>
                    <ul>
                        <li>Zillow</li>
                        <li>StreetEasy</li>
                        <li>HotPads</li>
                        <li>Out East</li>
                    </ul>
                </div>
                <p>Privacy Portal | Cookie Preference | Do Not Sell or Share My Personal Information</p>
                <div className="footer-corporate">
                    <p>Trulia Corporate</p>
                    <ul>
                        <li>About Zillow Group</li>
                        <li>Fair Housing Guide</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Investor Relations</li>
                        <li>Advertising Terms</li>
                        <li>Privacy</li>
                        <li>Terms of Use</li>
                        <li>Listings Quality Policy</li>
                        <li>Subscription Terms</li>
                        <li>Help</li>
                    </ul>
                </div>
                <p>Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please let us know.</p>
            </div>
        </footer>
    );
}

export default Footer;