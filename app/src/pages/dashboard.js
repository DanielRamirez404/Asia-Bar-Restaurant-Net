import { useState } from 'react'
import { Menu, ChevronDown, ChevronRight } from 'lucide-react'

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState(null)

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
  ]

  // Simple function to replace cn
  const classNames = (...classes) => classes.filter(Boolean).join(' ')

  return (
    <div className="min-h-screen bg-[#FFF8DC]">
      {/* Botón de menú */}
      <button
        className="fixed left-4 top-4 z-50 p-2 bg-transparent hover:bg-gray-200 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={classNames(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-[#B22222] transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Espacio para logo */}
        <div className="h-40 w-full flex items-center justify-center">
          <div className="w-32 h-32 bg-white/10 rounded flex items-center justify-center text-white text-sm">
            Espacio para logo
          </div>
        </div>

        {/* Título del menú */}
        <div className="px-4 py-2 text-lg font-medium text-white">
          Asia Menú
        </div>

        {/* Items del menú */}
        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <div key={index} className="px-2">
              <button
                className="w-full flex items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-red-900"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                <span>{item.title}</span>
                {item.subItems && (
                  expandedItem === index ?
                    <ChevronDown className="h-4 w-4" /> :
                    <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {item.subItems && expandedItem === index && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="w-full rounded-lg px-4 py-1 text-left text-sm text-white hover:bg-red-900"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1">
        {/* Área de contenido vacía como solicitado */}
      </main>
    </div>
  )
}

export default Dashboard;