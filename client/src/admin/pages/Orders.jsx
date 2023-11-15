import DashboardWrapper from "../components/DashboardWrapper";
import NavbarWrapper from "../components/Navbar";


export default function OrdersPage(){
    return(
        <div>
            <NavbarWrapper title="Orders" />
            <div className="d-flex dashboardWrapper">
                <DashboardWrapper />
                <div className="content container mt-3">
                    <div className="row">
                        <div className="col-md-3 text-white col bg-info d-flex justify-content-aroud px-1 py-4 rounded">
                            <p>Orders</p>
                        </div>
                        <div className="col-md-3 text-white col bg-info d-flex justify-content-aroud px-1 py-4 rounded">
                            Orders
                        </div>
                        <div className="col-md-3 text-white col bg-info d-flex justify-content-aroud px-1 py-4 rounded">
                            Orders
                        </div>
                        <div className="col-md-3 text-white col bg-info d-flex justify-content-aroud px-1 py-4 rounded">
                            Orders
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}