import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownUpAcrossLine, faBook, faBoxes, faDatabase, faFaceRollingEyes, faFolder, faMoneyBill, faTachometer, faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const Sidebar = ({}) => {
    return (
        <div>
            {/* <Navbar /> */}
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse shadow">
                <div className="position-sticky pt-3">
                    <div className="container text-center" style={{marginBottom: '36px', marginTop: '24px'}}>
                        <p className='username-text'>Username</p>
                    </div>
                    
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <FontAwesomeIcon icon={faTachometer} /> Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faMoneyBill} /> Transactions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faArrowDownUpAcrossLine} /> History
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#CashCollapse"  data-bs-toggle="collapse" role="button" data-bs-target="#CashCollapse" aria-expanded="false" aria-controls='CashCollapse'>
                                <FontAwesomeIcon icon={faFolder} /> Master Data
                            </a>        
                            <div className="collapse menu-collapse" id="CashCollapse">
                                <div className="bg-dark">
                                    <ul className="nav flex-column ">
                                        <li className="nav-item dropdown-collapse">
                                            <a className="nav-link" href="#">Income Type</a>
                                        </li>
                                        <li className="nav-item dropdown-collapse">
                                            <a className="nav-link" href="#">Expense Type</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" />
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;