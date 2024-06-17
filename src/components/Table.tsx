
interface TableColumn{
    key: string;
    header: string;
    align?: "left" | "right" | "center";
}

interface TableRow{
    [key: string]: string | number;
}

export interface TableData{
    columns: TableColumn[];
    rows: TableRow[];
}

interface TableProps {
    tableData: TableData;
}

export default function Table({tableData}: TableProps){
    const { columns, rows } = tableData;

    return(<>
        <table>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col) => (
                            <td
                                key={col.key}
                                className={col.align ? `${col.align}-align` : ""}
                            >
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </>);
}