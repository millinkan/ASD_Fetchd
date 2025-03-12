/* This is the scripts controls the Home page */
/* The corresponding CSS is Home CSS and makes calls to the backend*/

import '../styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome To Fetch'd!</h1>
            <div className="home-card">
                <p>Fetch'd is here to fetch your items..😊 🐶..Woof!,Register or Login to Explore</p>
                <button className="card-button">
                    <i className="fas fa-arrow-right"></i> Login <i className="fas fa-arrow-left"></i>
                </button>
                <button className="card-button">
                    <i className="fas fa-arrow-right"></i> Register <i className="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    );
}

export default Home;