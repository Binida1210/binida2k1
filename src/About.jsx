import about from "./pic/about-image.jpg"

export default function About () {
    return (
        <div className="about-section">
            <div className="about-section-img">
                <img className="about-img" src={about} alt="about image" />
            </div>
            <div className="about-info">
                <h2 className="about-tittle">About Us</h2>
                <p className="about-infor">Welcome to Little Lemon – your go-to spot for delicious and quick meals that never compromise on taste! At Little Lemon, we believe in offering fresh, flavorful food that’s perfect for any occasion, whether you're on the go or enjoying a quick break with friends and family.</p>
                <button className="about-section-btn btn-1">Order now</button>
                <button className="about-section-btn btn-1">Contact us</button>
            </div>
        </div>
    )
}