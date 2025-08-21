import Swal from 'sweetalert2';
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { dashboardItems } from '../../config/dashboard-items.js';
import { getPageFromPath } from '../../config/pages.js';
import './dashboard-page.css';
import { Link } from 'react-router-dom';
import { onLogout } from '../../utils/api.js';
import { useTableChanger, useLateTableChanger } from "../../hooks/session.js";

import Dashboard from "../../components/features/dashboard/dashboard.js";

import { questionAlert } from "../../utils/alerts.js";

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

    const onQuit = () =>
        questionAlert(
            "¿Desea Salir?",
            "¿Está seguro de que desea salir? Su sesión será cerrada.",
            () => onLogout(navigate)
        );

    return (
        <Dashboard
            isOpen={isSidebarOpen}
            onToggle={ () => handleToggleSidebar(isSidebarOpen, setIsSidebarOpen, setExpandedIndex) }
            onSidebarClick={ (event) => handleSidebarClick(event, setExpandedIndex) }
            onMenuItemClick={ (index) => setExpandedIndex(expandedIndex === index ? null : index) }
            onMenuItemSubClick={ onMenuItemSubClick }
            onMainClick={() => handleDashboardEvent(isSidebarOpen, setIsSidebarOpen, setExpandedIndex)}
            onQuit={onQuit}
            dashboardItems={dashboardItems}
            expandedIndex={expandedIndex}
        >
            {content}
        </Dashboard>
    );
};

export default DashboardPage;
