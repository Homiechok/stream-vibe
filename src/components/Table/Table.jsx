import "./Table.scss"

const Table = (props) => {
    const {
        className,
        headCells = [],
        rows = [],
    } = props

    return (
        <table className={className}>
            <thead>
                <tr>
                    {headCells.map(({ children, width }, index) => (
                        <th width={width} key={index}>{children}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(({ cells }, index) => (
                    <tr key={index}>
                        {cells.map((cell, index) => (
                            <td key={index}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table