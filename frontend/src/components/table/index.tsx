import React from 'react'

import TableWrap, { Table, HeaderCell, Cell } from './table.styles'

interface TableRowInterface {
    text?: string
    Jsx?: React.ComponentType
    props?: React.ComponentProps<any>
}

const HeadRow: React.StatelessComponent<{ headRow: TableRowInterface[] }> = ({
    headRow
}) => (
    <Table.Row>
        {headRow.map(({ text, Jsx, props }, i) => {
            if (text)
                return (
                    <HeaderCell key={i} title={text}>
                        {text}
                    </HeaderCell>
                )
            if (Jsx) return <Jsx key={i} {...props} />
            return null
        })}
    </Table.Row>
)

const BodyRow: React.StatelessComponent<{ bodyRow: TableRowInterface[] }> = ({
    bodyRow
}) => (
    <Table.Row>
        {bodyRow.map(({ text, Jsx, props }, i) => {
            if (text)
                return (
                    <Cell key={i} title={text}>
                        {text}
                    </Cell>
                )
            if (Jsx) return <Jsx key={i} {...props} />
            return null
        })}
    </Table.Row>
)

const TableComponent: React.StatelessComponent<{
    headRow?: TableRowInterface[]
    bodyRows?: Array<TableRowInterface[]>
}> = ({ headRow, bodyRows }) => (
    <TableWrap>
        <Table cellPadding={0} cellSpacing={0}>
            <Table.Head>
                <HeadRow headRow={headRow ? headRow : []} />
            </Table.Head>
            <Table.Body>
                {bodyRows?.map((bodyRow, i) => (
                    <BodyRow key={i} bodyRow={bodyRow} />
                ))}
            </Table.Body>
        </Table>
    </TableWrap>
)

export default TableComponent
