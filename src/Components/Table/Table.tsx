import { TableInstance } from 'react-table';
import * as T from './Table.styles';
import NoData from '../NoData/NoData';
import { transparentize } from 'polished';


export default function Table({ instance }: { instance: TableInstance<any> }) {

    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows,
    } = instance

    return (
        <>
            <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
                <T.Heading>
                    {
                        headerGroups.map(headerGroup => (
                            <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <T.HeadingCell {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </T.HeadingCell>
                                    ))
                                }
                            </T.HeadingRow>
                        ))
                    }
                    <tr>
                        <th></th>
                    </tr>
                </T.Heading>
                <T.Body {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return <T.BodyRow {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <T.BodyCell {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </T.BodyCell>
                                    })
                                }

                            </T.BodyRow>
                        })
                    }
                </T.Body>
            </T.Wrapper>

            {
                !rows.length &&
                <div style={{ backgroundColor: transparentize(0.95, '#274060')}}>
                    <NoData height={360}></NoData>
                </div>
            }
        </>
    )
}
