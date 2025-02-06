import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { DashboardMenuItems } from '../../pagination/paths';
import { GetPageFromPath } from '../../pagination/page';
import './constants.css';
import './dashboard-page.css';
import { Link } from 'react-router-dom';

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

function MenuItem({ menuItem, index, expandedItem, setExpandedItem }) {
    const isExpanded = expandedItem === index;
    const arrowIcon = isExpanded ? <ChevronDown size={30} /> : <ChevronRight size={30} />;

    return (
        <li key={index} className="menu-item">
            <button className="menu-button" onClick={() => setExpandedItem(isExpanded ? null : index)}>
                <span>
                    {menuItem.title}
                </span>
                { menuItem.subItems ? arrowIcon : null }
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

function SideBarMenu({ expandedItem, setExpandedItem }) {
    return (
        <nav className="menu">
            <ul className="menu-items">
                {DashboardMenuItems.map((menuItem, index) => (
                    <MenuItem
                        key={index}
                        menuItem={menuItem}
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
                isSidebarOpen={ isSidebarOpen }
                onClick={ handleToggleSidebar }
            />

            <Sidebar 
                isSidebarOpen={ isSidebarOpen }
                expandedItem={ expandedItem }
                setExpandedItem={ setExpandedItem } 
            />

            <main className="main"  onClick={ handleMainClick }>
                {content}
            </main>
        </div>
    );
}

export default DashboardPage;