import menu1 from "./pic/menu1.png"
import menu2 from "./pic/menu2.png"
import menu3 from "./pic/menu3.png"
import menu4 from "./pic/menu4.png"
import menu5 from "./pic/menu5.png"
import menu6 from "./pic/menu6.png"

export default function Menu () {
    return (
        <section className="menu-section">
        <div className="section-content">
            <ul className="menu-list">
                <li className="menu-item">
                    <img src={menu1} alt="Hot Beverages" className="menu-image" />
                    <h3 className="menu-name">Hot Beverages</h3>
                    <p className="text">Wide range of Steaming hot coffe to make you fresh and light.</p>
                </li>

                <li className="menu-item">
                    <img src={menu2} alt="Cold Beverages" className="menu-image" />
                    <h3 className="menu-name">Cold Beverages</h3>
                    <p className="text">Creamy and forothy cold coffe to make you cool.</p>
                </li>

                <li className="menu-item">
                    <img src={menu3} alt="Desserts" className="menu-image" />
                    <h3 className="menu-name">Desserts</h3>
                    <p className="text">Satiate your palate and take you on a culinary treat.</p>
                </li>

                <li className="menu-item">
                    <img src={menu4} alt="Burger Frenchfries" className="menu-image" />
                    <h3 className="menu-name">Burger Frenchfries</h3>
                    <p className="text">Quick bites to satisfy your small size hunger.</p>
                </li>

                <li className="menu-item">
                    <img src={menu6} alt="Desserts" className="menu-image" />
                    <h3 className="menu-name">Desserts</h3>
                    <p className="text">Satiate your palate and take you on a culinary treat.</p>
                </li>

                <li className="menu-item">
                    <img src={menu5} alt="Special Combo" className="menu-image" />
                    <h3 className="menu-name">Special Combo</h3>
                    <p className="text">Your favorite eating and drinking combations.</p>
                </li>
            </ul>
        </div>
        </section>
    )
}