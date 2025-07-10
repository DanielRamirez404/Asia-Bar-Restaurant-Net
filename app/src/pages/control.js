import TablePage from "./reusables/tablePage.js";
import useTable from "../hooks/useTable.js";

function ControlPage() {
    const table = useTable();

    return (<TablePage key={table.dbname} title={`Control de ${table.name}`} fields={table.fields} tableName={table.dbname} />);
};

export default ControlPage;
