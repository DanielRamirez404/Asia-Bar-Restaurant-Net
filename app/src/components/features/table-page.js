function getAllColumnNames(table) {
    const names = [...table.fields];
    names.push("Acciones");
    return names;
}

export default function TablePage({ table }) {
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const fetched = await(table.dbname);
        setTableData(fetched);
    };

    useEffect(() => {
        fetchData();
    }, [table.dbname]);

    const content = (tableData.length === 0) ? 
        <h1>No hay entradas</h1> 
        :(
            <div className="table-container">
                <Table fields={ getAllColumnNames(table.fields) } data={ tableData } tableName={ tableName } />
            </div>
        );

    return <DashboardPage content={
        <>
            <TablePageHeader 
                title={ title } dataSetter = { setTableData } tableName = { tableName }
            />
            { content }
        </>
    } />;
}
