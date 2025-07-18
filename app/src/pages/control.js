import TablePage from "./reusables/tablePage.js";
import useTable from "../hooks/useTable.js";
import { useTableData, useActionButtons } from "../hooks/control.js";

function ControlPage() {
    const table = useTable();
    const [data, setData] = useTableData(table);
    const [onEdit, onDelete] = useActionButtons(table);

    return (
        <TablePage 
            key={table.dbname} 
            title={`Control de ${table.name}`}
            table={table} 
            data={data}
            setData={setData}
            onEdit={onEdit}
            onDelete={onDelete}
        />
    );
};

export default ControlPage;
