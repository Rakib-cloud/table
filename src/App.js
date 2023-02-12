
import './App.css';

import React, {useRef} from 'react';

import { useReactToPrint } from "react-to-print";
import DataTable from 'react-data-table-component';
import * as XLSX from "xlsx";
function App() {
  const editorRef = useRef(null);
  const tableRef = useRef();


  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,

    },
    {
      name: 'Year',
      selector: row => row.year,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      status: "active"
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      status: "active"
    },
    {
      id: 3,
      title: 'Beetlejuice',
      year: '1988',
      status: "active"
    },
    {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      status: "active"
    },
    {
      id: 5,
      title: 'Beetlejuice',
      year: '1988',
      status: "active"
    },
    {
      id: 6,
      title: 'Ghostbusters',
      year: '1984',
      status: "active"
    },
    {
      id: 7,
      title: 'Beetlejuice',
      year: '1988',
      status: "active"
    },
    {
      id: 8,
      title: 'Ghostbusters',
      year: '1984',
      status: "active"
    },
    {
      id: 9,
      title: 'Beetlejuice',
      year: '1988',
      status: "active"
    },
    {
      id: 10,
      title: 'Ghostbusters',
      year: '1984',
      status: "active"
    },
    {
      id: 11,
      title: 'Beetlejuice',
      year: '1988',
      status: "active"
    },
    {
      id: 12,
      title: 'Ghostbusters',
      year: '1984',
      status: "active"
    },
  ]
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Table Data");
    XLSX.writeFile(workbook, "table-data.xlsx");
  };
  const handlePrint =()=>{


  }
  const text = localStorage.getItem("editedText")
  return (
      <div id="table" id="printTable">
        <DataTable
            ref={tableRef}
            title="Data Table"
            columns={columns}
            data={data}
            // selectableRows
            pagination
            fixedHeader
            fixedHeaderScrollHeight="600px"
            selectableRowsHighlight
            highlightOnHover
            actions={<button className="btn btn-sm">Export</button>}
            subHeader
            subHeaderComponent={<div className="flex justify-between w-full">
              <div>
                <button className="btn btn-sm mx-2">Pdf</button>
                <button className="btn btn-sm mx-2" onClick={handleExport}>Excel</button>
                <button className="btn btn-sm mx-2">Copy</button>
                <button onClick={handlePrint} className="btn btn-sm mx-2">Print</button>

              </div>
              <input type="text" className="w-1/3  border px-2 py-1" placeholder="search..."/>

            </div>}


        />
      </div>
  );
}

export default App;
