import DashboardWrapper from "../components/DashboardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faBagShopping, faIndianRupeeSign, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import NavbarWrapper from "../components/Navbar";



export default function DashboardPage() {
    return (

        <div>
            <NavbarWrapper title="Dashboard" />
            <div className="d-flex dashboardWrapper">
                <DashboardWrapper />
                <div className="content container mt-3">
                    <div className="row">
                        <div className="col-md-3 text-white col bg-primary d-flex justify-content-aroud px-1 py-4 rounded">
                        <FontAwesomeIcon icon={faBagShopping} className="custom-icon" />
                            <p>Orders</p>
                        </div>
                        <div className="col-md-3 text-white col bg-primary d-flex justify-content-aroud px-1 py-4 rounded">
                        <FontAwesomeIcon icon={faUserGroup} className="custom-icon" />
                        <p>Users</p>
                        </div>
                        <div className="col-md-3 text-white col bg-primary d-flex justify-content-aroud px-1 py-4 rounded">
                        <FontAwesomeIcon icon={faIndianRupeeSign} className="custom-icon" />
                        <p>Revenue</p>
                        </div>
                        <div className="col-md-3 text-white col bg-primary d-flex justify-content-aroud px-1 py-4 rounded">
                        <FontAwesomeIcon icon={faArrowRotateLeft} className="custom-icon" />
                        <p>Refund</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}