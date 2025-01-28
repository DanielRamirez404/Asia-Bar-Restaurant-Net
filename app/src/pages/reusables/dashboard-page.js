import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import './constants.css';
import './dashboard-page.css';

function MenuToggleButton({ className, onClick }) {
    return (
        <button className={className} onClick={onClick}>
            <Menu size={30} color="#000" />
        </button>
    );
}

function MenuItem({ item, index, expandedItem, setExpandedItem }) {
    const isExpanded = expandedItem === index;

    return (
        <li key={index} className="menu-item">
            <button className="menu-button" onClick={() => setExpandedItem(isExpanded ? null : index)}>
                <span>{item.title}</span>
                {item.subItems && (isExpanded ? <ChevronDown size={30} /> : <ChevronRight size={30} />)}
            </button>

            {item.subItems && isExpanded && (
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

function SideBarMenu({ expandedItem, setExpandedItem }) {
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

    return (
        <nav className="menu">
            <ul className="menu-items">
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        index={index}
                        expandedItem={expandedItem}
                        setExpandedItem={setExpandedItem}
                    />
                ))}
            </ul>
        </nav>
    );
}

function Sidebar({ isSidebarOpen, expandedItem, setExpandedItem }) {
    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    const handleSidebarClick = (e) => {
        // Verificar si el clic fue en un área en blanco del sidebar
        if (e.target.classList.contains('sidebar')) {
            setExpandedItem(null);
        }
    };

    return (
        <aside className={classNames("sidebar", isSidebarOpen ? "open" : "")} onClick={handleSidebarClick}>
            <div className="logo-container">
                <div className="logo-placeholder">
                    Espacio para logo
                </div>
            </div>

            <div className="menu-title">
                Asia Menú
            </div>

            <SideBarMenu expandedItem={expandedItem} setExpandedItem={setExpandedItem} />
        </aside>
    );
}

const DashboardPage = ({ content }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);

    const handleMainClick = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
            setTimeout(() => {
                setExpandedItem(null); // Cerrar el menú desplegado después de cerrar el sidebar
            }, 500); // Ajusta el tiempo según la duración de la animación de cierre del sidebar
        }
    };

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (isSidebarOpen) {
            setTimeout(() => {
                setExpandedItem(null); // Cerrar el menú desplegado después de cerrar el sidebar
            }, 500); // Ajusta el tiempo según la duración de la animación de cierre del sidebar
        }

        // Agregar clase temporalmente para el cambio de color
        const button = document.querySelector('.menu-toggle-button');
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 1000); // Quitar la clase después de 1 segundo
    };

    return (
        <div className="dashboard">
            <MenuToggleButton
                className={`menu-toggle-button ${isSidebarOpen ? 'sidebar-open' : ''}`}
                onClick={handleToggleSidebar}
            />

            <Sidebar isSidebarOpen={isSidebarOpen} expandedItem={expandedItem} setExpandedItem={setExpandedItem} />

            <main className="main" onClick={handleMainClick}>
                {content}
            </main>
        </div>
    );
}

export default DashboardPage;