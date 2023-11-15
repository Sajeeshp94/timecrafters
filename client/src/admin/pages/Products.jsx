import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import DashboardWrapper from "../components/DashboardWrapper";
import NavbarWrapper from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ProductsPage() {
    return (
        <div>
            <NavbarWrapper title="Products" />
            <div className="d-flex dashboardWrapper">
                <DashboardWrapper />
                <div className="content container mt-3">
                    <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="btn btn-primary">Add</button>
                    </div>

                    <table className="table w-100">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Title</th>
                                <th scope="col">Title</th>
                                <th scope="col">Title</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rolex</td>
                                <td>Rolex</td>
                                <td>Rolex</td>
                                <td>
                                    <button className="btn btn-light mx-2"><FontAwesomeIcon icon={faPen} className="custom-icon" style={{ color: "dark", height: "15px" }} /></button>
                                    <button className="btn btn-light  mx-2"><FontAwesomeIcon icon={faTrash} className="custom-icon" style={{ color: "red", height: "15px" }} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Fossil</td>
                                <td>Fossil</td>
                                <td>Fossil</td>
                                <td>
                                    <button className="btn btn-light mx-2"><FontAwesomeIcon icon={faPen} className="custom-icon" style={{ color: "dark", height: "15px" }} /></button>
                                    <button className="btn btn-light  mx-2"><FontAwesomeIcon icon={faTrash} className="custom-icon" style={{ color: "red", height: "15px" }} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Rolex</td>
                                <td>Rolex</td>
                                <td>Rolex</td>
                                <td>
                                    <button className="btn btn-light mx-2"><FontAwesomeIcon icon={faPen} className="custom-icon" style={{ color: "dark", height: "15px" }} /></button>
                                    <button className="btn btn-light  mx-2"><FontAwesomeIcon icon={faTrash} className="custom-icon" style={{ color: "red", height: "15px" }} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Fossil</td>
                                <td>Fossil</td>
                                <td>Fossil</td>
                                <td>
                                    <button className="btn btn-light mx-2"><FontAwesomeIcon icon={faPen} className="custom-icon" style={{ color: "dark", height: "15px" }} /></button>
                                    <button className="btn btn-light  mx-2"><FontAwesomeIcon icon={faTrash} className="custom-icon" style={{ color: "red", height: "15px" }} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Rolex</td>
                                <td>Rolex</td>
                                <td>Rolex</td>
                                <td>
                                    <button className="btn btn-light mx-2"><FontAwesomeIcon icon={faPen} className="custom-icon" style={{ color: "dark", height: "15px" }} /></button>
                                    <button className="btn btn-light  mx-2"><FontAwesomeIcon icon={faTrash} className="custom-icon" style={{ color: "red", height: "15px" }} /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Fossil</td>
                                <td>Fossil</td>
                                <td>Fossil</td>
                                <td>
                                    <button className="btn btn-light mx-2"><FontAwesomeIcon icon={faPen} className="custom-icon" style={{ color: "dark", height: "15px" }} /></button>
                                    <button className="btn btn-light  mx-2"><FontAwesomeIcon icon={faTrash} className="custom-icon" style={{ color: "red", height: "15px" }} /></button>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>


            </div>
        </div>
    )
}