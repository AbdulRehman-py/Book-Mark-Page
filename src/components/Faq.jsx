import './faq.css';
import './features.css';
import { useState } from 'react';

const Faq = () => {
    const [show, setShow] = useState(null);

    const handleClick = (value) => {
        if (value === show) {
            setShow(null);
        } else {
            setShow(value);
        }
    }

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <p className='center'>Here are some FAQs. If you have any other questions you&apos;d like answered, feel free
                to email us at support@email.com
            </p>
            <div className='questions-container'>
                <div className='q-div'>
                    <div className='question' onClick={() => handleClick(1)}>
                        <span>What is a Bookmark?</span>
                        <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
                    </div>
                    <p className={`disappear ${show === 1 ? 'show' : ''}`}>A bookmark is a saved link to a web page that you can access quickly.</p>
                </div>
                <div className='q-div'>
                    <div className='question' onClick={() => handleClick(2)}>
                        <span>How can I request a new browser?</span>
                        <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
                    </div>
                    <p className={`disappear ${show === 2 ? 'show' : ''}`}>You can request a new browser by contacting our support team.</p>
                </div>
                <div className='q-div'>
                    <div className='question' onClick={() => handleClick(3)}>
                        <span>Is there a mobile app?</span>
                        <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
                    </div>
                    <p className={`disappear ${show === 3 ? 'show' : ''}`}>Yes, we have a mobile app available for both iOS and Android.</p>
                </div>
                <div className='q-div'>
                    <div className='question' onClick={() => handleClick(4)}>
                        <span>What about other Chromium browsers?</span>
                        <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
                    </div>
                    <p className={`disappear ${show === 4 ? 'show' : ''}`}>Our extension is compatible with all Chromium-based browsers.</p>
                </div>
            </div>
            <button className='btn bq'>More info</button>
        </div>
    );
};

export default Faq;