import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import './dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const menuItems = [
    {
      title: "Opción Uno",
      subItems: ["subopción uno", "subopción dos"]
    },
    {
      title: "Opción Dos"
    },
    {
      title: "Opción Tres"
    },
    {
      title: "etc..."
    }
  ];

  // Simple function to replace cn
  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  return (
    <div className="dashboard">
      {/* Botón de menú */}
      <button
        className={`menu-toggle-button ${isSidebarOpen ? 'sidebar-open' : ''}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu size={24} color="#000" /> {/* Cambia el color a negro */}
      </button>

      {/* Sidebar */}
      <aside
        className={classNames(
          "sidebar",
          isSidebarOpen ? "open" : ""
        )}
      >
        {/* Espacio para logo */}
        <div className="logo-container">
          <div className="logo-placeholder">
            Espacio para logo
          </div>
        </div>

        {/* Título del menú */}
        <div className="menu-title">
          Asia Menú
        </div>

        {/* Items del menú */}
        <nav className="menu">
          <ul className="menu-items">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <button
                  className="menu-button"
                  onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                >
                  <span>{item.title}</span>
                  {item.subItems && (
                    expandedItem === index ? 
                      <ChevronDown size={16} /> : 
                      <ChevronRight size={16} />
                  )}
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
            ))}
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="main">
        {/* Área de contenido vacía como solicitado */}
      </main>
    </div>
  );
}

export default Dashboard;