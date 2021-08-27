import React from "react";
import { Loader, Message } from "rsuite";
import { useWeek } from "./timetableApi";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

export const Timetable = () => {
  const { isPending, data: week, error } = useWeek();
  if (isPending || !week) return <Loader center size="lg" />;

  if (error) {
    return (
      <Message type="error">
        <h2>An error occured 😟</h2>
        <p>{error}</p>
      </Message>
    );
  }

  return (
    <div style={{ padding: 30 }}>
      <Table
        data={week}
        minHeight={400}
        headerHeight={50}
        rowHeight={50}
        hover={false}
        locale={{ emptyMessage: "no data", loading: "loading" }}
        autoHeight
      >
        <Column align="center" flexGrow={1}>
          <HeaderCell>Day</HeaderCell>
          <Cell dataKey="day" />
        </Column>
        <Column align="center" flexGrow={1}>
          <HeaderCell>morning</HeaderCell>
          <Cell dataKey="morning" />
        </Column>
        <Column align="center" flexGrow={1}>
          <HeaderCell>afternoon</HeaderCell>
          <Cell dataKey="afternoon" />
        </Column>
      </Table>
    </div>
  );
};
