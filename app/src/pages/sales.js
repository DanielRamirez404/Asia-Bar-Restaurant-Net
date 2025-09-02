import TablePage from "../components/features/table/table-page.js";
import useTable from "../hooks/useTable.js";
import { useActionButtons } from "../hooks/control.js";
import { useData, useHeaderButtons } from "../hooks/sales.js";

const fields = ["N°", "ID. Cliente", "Cliente", "Tipo", "Total"];

function SalesControl() {
    const table = useTable();
    const [data, setData] = useData();
    const [onEdit, onDelete] = useActionButtons(table);
    const [onNew, onSearch] = useHeaderButtons(setData)

    return (
        <TablePage 
            key="sales-control" 
            title="Control de Ventas"
            fields={fields} 
            data={data}
            onEdit={onEdit}
            onDelete={onDelete}
            onNew={onNew}
            onSearch={onSearch}
        />
    );
};

export default SalesControl;
