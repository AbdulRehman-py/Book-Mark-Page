import './features.css';
import './hero.css'

const features = () => {
    

    return (
        <div className="features-section">
            <h2>Features</h2>
            <p className='center'>Our aim is to make it quick and easy for you to access your websites
                easily. Your Bookmarks sync between your devices so you can access them on the go.
            </p>
            <li className="li-feature">
                <h3>Simple BookMarking</h3>
                <h3>Speedy Searches</h3>
                <h3>Easy Sharing</h3>
            </li>

            <div className='img-content-section'>
                <div className='img2'>
                    
                </div>
                <div className='featue-content'>
                    <h4>Bookmark in one click</h4>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button className='btn btn-feature'>More Info</button>
                </div>
            </div>

        </div>
    )
}

export default features;