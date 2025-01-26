import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import './constants.css'
import './dashboard-page.css';

function MenuToggleButton({ className, onClick }) {
    return (
        <button className={className} onClick={ onClick } >
            <Menu size={30} color="#000" />
        </button>
    );
}

function MenuItem({item, index}) {

    const [expandedItem, setExpandedItem] = useState(null);

    return (
        <li key={index} className="menu-item">
                        
            <button className="menu-button" onClick={() => setExpandedItem(expandedItem === index ? null : index)} >
                <span>{item.title}</span>
                { item.subItems && (expandedItem === index ? <ChevronDown size={30} /> : <ChevronRight size={30} /> ) }
            </button>

            {item.subItems && expandedItem === index && (
                <ul className="submenu">
                    {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                            <button className="submenu-button">
                                {subItem}
                            </button>
                        </li>
                    ))}
                </ul>
            )}

        </li>
    );
}

function SideBarMenu() {

    const menuItems = [
        {
            title: "Control de Pedidos",
            subItems: ["Nuevo Pedido", "Pedidos Pendientes"]
        },
        {
            title: "Control de Productos",
            subItems: ["Nuevo Producto", "Lista de Productos"]
        },
        {
            title: "Control de Ventas",
            subItems: ["Lista de Ventas"]
        }
    ];

    return(
        <nav className="menu">
            <ul className="menu-items">
                {menuItems.map((item, index) => ( <MenuItem item={item} index={index} />) ) }
            </ul>
        </nav>
    );
}

function Sidebar({isSidebarOpen}) {

    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    return (
        <aside className = { classNames("sidebar", isSidebarOpen ? "open" : "") } >
                
                <div className="logo-container">
                    <div className="logo-placeholder">
                        Espacio para logo
                    </div>
                </div>

                
                <div className="menu-title">
                    Asia Menú
                </div>

                <SideBarMenu />
                
        </aside>
    );
}

const DashboardPage = ({ content }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="dashboard">
            
            <MenuToggleButton
                className={`menu-toggle-button ${isSidebarOpen ? 'sidebar-open' : ''}`}
                onClick={ () => setIsSidebarOpen(!isSidebarOpen) }
            />

            <Sidebar isSidebarOpen={ isSidebarOpen } /> 

            <main className="main">
                { content }
            </main>
        </div>
    );
}

export default DashboardPage;