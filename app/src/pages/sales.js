import TablePage from "../components/features/table/table-page.js";
import useTable from "../hooks/useTable.js";
import { useTableData, useActionButtons } from "../hooks/control.js";
import { useHeaderButtons } from "../hooks/sales.js";

function SalesControl() {
    const table = useTable();
    const [data, setData] = useTableData(table);
    const [onEdit, onDelete] = useActionButtons(table);
    const [onNew, onSearch] = useHeaderButtons(table, setData)

    return (
        <TablePage 
            key="sales-control" 
            title="Control de Ventas"
            fields={table.fields} 
            data={data}
            onEdit={onEdit}
            onDelete={onDelete}
            onNew={onNew}
            onSearch={onSearch}
        />
    );
};

export default SalesControl;
