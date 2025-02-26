import './subscribe.css'

const SubscriptionForm = () => {
    return (
      <div className="subscription-form">
        <p className="subscribers-count">35,000+ ALREADY JOINED</p>
        <h1 className="headline">Stay up-to-date with what we’re doing</h1>
        <div className="form-container">
          <input type="email" placeholder="Enter your email address" className="email-input" />
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    );
  };
  
  export default SubscriptionForm;
  