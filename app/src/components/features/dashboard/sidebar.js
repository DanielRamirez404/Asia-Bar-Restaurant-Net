import { Link } from 'react-router-dom';
import MenuItem from './menu-item.js';

import { routes } from '../../../config/routes.js';

import Logo from '../../../assets/logo.png';
import './sidebar.css';

function HomeButton() {
    return (
        <li className="home-button" >
            <Link className="home-button-link" to={routes['Inicio'] } >
                Inicio
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
            <img src={Logo} alt="Logo" className="logo-image" />
        </div>
    );
}

export default function Sidebar({ dashboardItems, isOpen, onClick, expandedMenuItemIndex, onMenuItemClick, onMenuItemSubClick }) {
    const statusString = (isOpen) ? "open" : "";
    const className = "sidebar " + statusString;

    return (
        <aside className={className} onClick={onClick}>
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
