import './extension.css';

const Extension = () => {
    return (
        <div className="extension">
            <h2>Extension</h2>
            <p>We&apos;ve got more browsers in the pipeline. Please let us
            know if you&apos;ve got a favourite you&apos;d like us to prioritize.
            </p>
            <div className='browsers'>
                <div className='browser b1'>
                <div className='img i1'></div>
                    <h3>opera</h3>
                    <span>Minimum version 12</span>
                    <button className='btn2 btn2-1'>Add & Install Extension</button>
                </div>
                <div className='browser b2'>
                <div className='img i2'></div>
                    <h3>Google Chrome</h3>
                    <span>Minimum version 62</span>
                    <button className='btn2 btn2-2'>Add & Install Extension</button>
                </div>
                <div className='browser b3'>
                    <div className='img i3'></div>
                    <h3>Mozilla Firefox</h3>
                    <span>Minimum version 55</span>
                    <button className='btn2 btn3-1'>Add & Install Extension</button>
                </div>
            </div>
        </div>
    );
}

export default Extension;