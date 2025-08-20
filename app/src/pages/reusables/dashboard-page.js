import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Menu, LogOut } from 'lucide-react'; 
import { dashboardItems } from '../../config/dashboard-items.js';
import { getPageFromPath } from '../../config/pages.js';
import './dashboard-page.css';
import { Link } from 'react-router-dom';
import Popup from '../reusables/Pop-up.js'; 
import { onLogout } from '../../utils/api.js';
import { useTableChanger, useLateTableChanger } from "../../hooks/session.js";

import MenuItem from "../../components/features/dashboard/menu-item.js";
import Sidebar from "../../components/features/dashboard/sidebar.js";

function MenuToggleButton({ isSidebarOpen, onClick }) {
    const className = `menu-toggle-button ${isSidebarOpen ? 'sidebar-open' : ''}`;

    return (
        <button className={ className } onClick={ onClick }>
            <Menu size={30} color="#000" />
        </button>
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
    
    const lateTableChanger = useLateTableChanger();
    
    const onMenuItemSubClick = (subitem) => {
        lateTableChanger(subitem.table); 
        navigate(subitem.route);
    };
    
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
                dashboardItems={ dashboardItems }
                isSidebarOpen={ isSidebarOpen }
                onSidebarClick={ (event) => handleSidebarClick(event, setExpandedIndex) }
                expandedMenuItemIndex={ expandedIndex }
                onMenuItemClick={ (index) => setExpandedIndex(expandedIndex === index ? null : index) }
                onMenuItemSubClick={ onMenuItemSubClick }
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
