import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Menu, ChevronDown, ChevronRight, LogOut } from 'lucide-react'; 
import { DashboardMenuItems } from '../../pagination/paths';
import { GetPageFromPath } from '../../pagination/page';
import './constants.css';
import './dashboard-page.css';
import { Link } from 'react-router-dom';
import '../../Visual-Resources/Logo.png';  
import Popup from '../reusables/Pop-up.js'; 
import { onLogout } from '../../on-fetch-endpoints/session.js';

function MenuToggleButton({ isSidebarOpen, onClick }) {
    const className = `menu-toggle-button ${isSidebarOpen ? 'sidebar-open' : ''}`;

    return (
        <button className={ className } onClick={ onClick }>
            <Menu size={30} color="#000" />
        </button>
    );
}

function MenuSubItemButton({ path }) {
    const title = GetPageFromPath(path).title;

    return (
        <Link to={ path }>
            <button className="submenu-button">
                { title }
            </button>
        </Link>
    )
}

function MenuItem({ menuItem, index, isExpanded, onClick }) {
    const arrowIcon = isExpanded ? <ChevronDown size={30} /> : <ChevronRight size={30} />;

    return (
        <li key={index} className="menu-item">
            <button className="menu-button" onClick={ onClick }>
                <span>
                    { menuItem.title }
                </span>
                { menuItem.subItems && arrowIcon }
            </button>

            {
                menuItem.subItems && isExpanded && (
                <ul className="submenu">
                    {menuItem.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                            <MenuSubItemButton path={ subItem } />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

function SideBarMenu({ expandedIndex, setExpandedIndex }) {
    return (
        <nav className="menu">
            <ul className="menu-items">
                {/* Botón "Inicio" */}
                <li className="inicio-btn" >
                    <Link to="/inicio" >
                            <button className="menu-button">
                                    <span>Inicio</span>
                            </button>
                    </Link>
                </li>

                {/* Resto de los elementos del menú */}
                {DashboardMenuItems.map((menuItem, index) => (
                    <MenuItem
                        index={index}
                        menuItem={menuItem}
                        isExpanded={expandedIndex === index}
                        onClick={() => setExpandedIndex((expandedIndex === index) ? null : index)}
                    />
                ))}
            </ul>
        </nav>
    );
}

function Sidebar({ isSidebarOpen, expandedIndex, setExpandedIndex, onSidebarClick }) {
    const statusString = (isSidebarOpen) ? "open" : "";
    const className = "sidebar " + statusString;

    return (
        <aside className={className} onClick={ onSidebarClick }>
            <div className="logo-container">
                <div className="logo-placeholder">
                <img src={require('../../Visual-Resources/Logo.png')} alt="Logo" className="logo-image" />
                </div>
            </div>

            <div className="menu-title">
                Asia Menú
            </div>

            <SideBarMenu expandedIndex={ expandedIndex } setExpandedIndex={setExpandedIndex} />
        </aside>
    );
}

function handleSidebarClick(event, setExpandedIndex) {
    if (event.target.classList.contains('sidebar')) {
        setExpandedIndex(null);
    }
}

function handleDashboardEvent(isSidebarOpen, setIsSidebarOpen, setExpandedIndex) {
    if (!isSidebarOpen)
        return;

    setIsSidebarOpen(false);
    setTimeout(() => { setExpandedIndex(null) }, 500);
}

function handleToggleSidebar(isSidebarOpen, setIsSidebarOpen, setExpandedIndex) {
    setIsSidebarOpen(!isSidebarOpen);
    handleDashboardEvent(isSidebarOpen, setIsSidebarOpen, setExpandedIndex);
}

const DashboardPage = ({ content }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isQuitPopupOpen, setQuitPopupState] = useState(false); 

    const handleOpenPopup = () => setQuitPopupState(true);
    const handleClosePopup = () => setQuitPopupState(false); 

    const navigate = useNavigate();
    
    return (
        <div className="dashboard">
            <button className="logout-icon" onClick={handleOpenPopup}>
                <LogOut size={24} color="#fff" />
            </button>

            <MenuToggleButton
                isSidebarOpen={ isSidebarOpen }
                onClick={ () => handleToggleSidebar(isSidebarOpen, setIsSidebarOpen, setExpandedIndex) }
            />
                
            <Sidebar 
                isSidebarOpen={ isSidebarOpen }
                expandedIndex={ expandedIndex }
                setExpandedIndex={ setExpandedIndex } 
                onSidebarClick={ (event) => handleSidebarClick(event, setExpandedIndex) }
            />

            <main
                className="dashboard-main"
                onClick={() => handleDashboardEvent(isSidebarOpen, setIsSidebarOpen, setExpandedIndex)}
            >
                {content}
            </main>
            
            <Popup
                message="¿Está seguro que desea salir?"
                isOpen={isQuitPopupOpen}
                onClose={handleClosePopup}
            >
                <form onSubmit={ (e) => onLogout(e, navigate) } className="popup-buttons">
                    <button type="post" className="popup-confirm-button">
                        Sí
                    </button>
                    <button className="popup-cancel-button" onClick={handleClosePopup}>
                        No
                    </button>
                </form>
            </Popup>
        </div>
    );
};

export default DashboardPage;
