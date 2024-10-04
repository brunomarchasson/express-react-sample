import React, { ReactElement, ReactNode, useContext } from 'react';

interface contextType<T extends Record<string, unknown>> {
  data: T[];
  columns: ColumnProps[];
}

const context = React.createContext<contextType<Record<string, unknown>>>({
  data: [],
  columns: [],
});

interface Props<T extends Record<string, unknown>> {
  data?: T[];
  children: JSX.Element[];
}

function DataTable<T extends Record<string, unknown>>({
  children,
  data,
}: Props<T>): ReactElement {
  const columns = children
    .filter((c) => c?.type?.name === TableColumn.name)
    .map((c) => c.props);
  return (
    <context.Provider value={{ data: data || [], columns }}>
      <table className="table w-full">
        <TableHead></TableHead>
        <TableBody></TableBody>
      </table>
    </context.Provider>
  );
}
interface CellProps {
  //extends React.PropsWithChildren {
  row?: Record<string, unknown>;
  column: ColumnProps;
  isHeader?: boolean;
}
export interface CellRendererPropsProps {
  data?: unknown;
  row?: Record<string, unknown>;
  column: ColumnProps;
  isHeader?: boolean;
}
function TableCell({ column, row, isHeader }: CellProps) {
  console.log('c', column);
  if (isHeader) return column.title;
  if (column.children && React.isValidElement(column.children))
    return React.cloneElement<CellRendererPropsProps>(
      column.children as React.ReactElement<CellRendererPropsProps>,
      {
        data: row?.[column.dataKey],
        row,
        column,
      },
    );
  return <span>{row?.[column.dataKey] as ReactNode} </span>;
}

interface RowProps {
  data: Record<string, unknown>;
}
function TableRow({ data }: RowProps): ReactElement {
  const ctx = useContext(context);
  return (
    <tr>
      {ctx.columns.map((c) => (
        <td key={c.dataKey}>
          <TableCell row={data} column={c}></TableCell>
        </td>
      ))}
    </tr>
  );
}

function TableBody<T extends Record<string, unknown>>() {
  const ctx = useContext(context);
  if (!ctx.data) return;
  return (
    <tbody>
      {ctx.data.map((r) => (
        <TableRow key={r.id as string} data={r as T} />
      ))}
    </tbody>
  );
}
const TableHead = () => {
  const ctx = useContext(context);
  return (
    <thead>
      <tr>
        {ctx.columns.map((c) => (
          <th key={c.dataKey}>
            <TableCell column={c} isHeader></TableCell>
          </th>
        ))}
      </tr>
    </thead>
  );
};
interface ColumnProps extends React.PropsWithChildren {
  dataKey: string;
  title: string;
}
function TableColumn({ dataKey }: ColumnProps) {
  const ctx = useContext(context);
  console.log(dataKey, ctx);
  return <></>;
}

DataTable.Column = TableColumn;

export default DataTable;
