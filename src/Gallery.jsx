import gallery1 from "./pic/gallery-1.jpg"
import gallery2 from "./pic/gallery-2.jpg"
import gallery3 from "./pic/gallery-3.jpg"
import gallery4 from "./pic/gallery-4.jpg"
import gallery5 from "./pic/gallery-5.jpg"
import gallery6 from "./pic/gallery-6.jpg"

export default function Gallery () {
    return(
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-image-container">
                <img className="gallery-image" src={gallery1} alt="gallery1" />
                <img className="gallery-image" src={gallery2} alt="gallery2" />
                <img className="gallery-image" src={gallery3} alt="gallery3" />
                <img className="gallery-image" src={gallery4} alt="gallery4" />
                <img className="gallery-image" src={gallery5} alt="gallery5" />
                <img className="gallery-image" src={gallery6} alt="gallery6" />
            </div>
        </div>
    )
}