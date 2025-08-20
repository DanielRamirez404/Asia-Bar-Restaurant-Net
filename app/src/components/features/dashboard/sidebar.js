import { Link } from 'react-router-dom';
import MenuItem from './menu-item.js';

import Logo from '../../../assets/logo.png';

import { routes } from '../../../config/routes.js';

function HomeButton() {
    return (
        <li className="inicio-btn" >
            <Link to={routes['Inicio']} >
                <button className="menu-button">
                        <span>Inicio</span>
                </button>
            </Link>
        </li>
    ); 
}

function SideBarMenu({ dashboardItems, expandedIndex, onItemClick, onSubItemClick }) {
    return (
        <nav className="menu">
            <ul className="menu-items">
                <HomeButton />

                {dashboardItems.map((menuItem, index) => (
                    <MenuItem
                        key={menuItem.title}
                        title={menuItem.title}
                        isExpanded={expandedIndex === index}
                        onClick={ () => onItemClick(index) }
                        subitems={menuItem.subItems} 
                        onSubClick={onSubItemClick}
                    />
                ))}
            </ul>
        </nav>
    );
}

function LogoContainer() {
    return (
        <div className="logo-container">
            <div className="logo-placeholder">
                <img src={Logo} alt="Logo" className="logo-image" />
            </div>
        </div>
    );
}

export default function Sidebar({ dashboardItems, isSidebarOpen, onSidebarClick, expandedMenuItemIndex, onMenuItemClick, onMenuItemSubClick }) {
    const statusString = (isSidebarOpen) ? "open" : "";
    const className = "sidebar " + statusString;

    return (
        <aside className={className} onClick={onSidebarClick}>
            <LogoContainer />
            <div className="menu-title">
                Asia Menú
            </div>

            <SideBarMenu
                dashboardItems={dashboardItems}
                expandedIndex={ expandedMenuItemIndex } 
                onItemClick={onMenuItemClick} 
                onSubItemClick={onMenuItemSubClick}
            />
        </aside>
    );
}
