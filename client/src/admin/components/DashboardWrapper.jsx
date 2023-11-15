import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faGauge, faGear, faTruck } from '@fortawesome/free-solid-svg-icons';
import "./DashboardWrapper.css"


export default function DashboardWrapper(){
    return (
        <div className="d-flex sidebar flex-column flex-shrink-0 bg-dark">
                    <ul className="nav nav-pills flex-column mb-auto px-0">
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link text-white d-flex align-items-center ">
                                <FontAwesomeIcon icon={faGauge} className="custom-icon" />
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/products" className="nav-link text-white d-flex align-items-center">
                                <FontAwesomeIcon icon={faBagShopping} className="custom-icon " />
                                <span className="ms-3">Products</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/orders" className="nav-link text-white d-flex align-items-center">
                                <FontAwesomeIcon icon={faTruck} className="custom-icon " />
                                <span className="ms-3">Orders</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/settings" className="nav-link text-white d-flex align-items-center">
                                <FontAwesomeIcon icon={faGear} className="custom-icon " />
                                <span className="ms-3">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
    )
}