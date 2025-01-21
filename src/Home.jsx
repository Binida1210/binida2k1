export default function Home () {
    return(
        <div className="home">
            <div className="welcome-section">
                <h2 className="welcome-section-tittle">Wellcome to Little Lemon</h2>
                <p className="welcome-section-body">We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twists.</p>
                <div className="welcome-btn">
                    <button className="welcome-section-btn btn-1">Order now</button>
                    <button className="welcome-section-btn btn-2">Contact us</button>
                </div>
            </div>
            <div className="home-img-section">
                <img className="home-img" src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="restaurant-image" />
            </div>
        </div>
        
    )
}