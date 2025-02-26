import './hero.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="content-section">
                <h1>A Simple BookMark Manager</h1>
                <p>A clean and simple interface to organize
                    your favourite websites. Open a new
                    browser tab and see your sites load instantly.
                    Try it for free.</p>
                    <div className="buttons-div">
                        <button className="btn btn-primary">Get it on Chrome</button>
                        <button className="btn btn-secondary">Get it on Firefox</button>
                    </div>
            </div>
            <div className="hero-image">
                </div>

            </div>
    )
}

export default HeroSection;