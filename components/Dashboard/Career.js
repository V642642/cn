import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import authService from '../../src/services';

export default function Career() {
      const [perPage, setperPage] = useState(10);
      const [page, setPage] = useState(1);
    
      const [data, setData] = useState(null);
      const [isLoading, setLoading] = useState(false);

      let columns = [
            {
          name: "Name",
          selector: "firstname",
          cell: (row) => <p>{row?.firstname} {row?.lastname}</p>,
        },
        {
          name: "Email",
          selector: "email",
          cell: (row) => <p>{row?.email}</p>,
        },
        {
          name: "Number",
          selector: "phone",
          cell: (row) => <p>{row?.phone}</p>,
        },
        {
          name: "Qualification",
          selector: "qualification",
          cell: (row) => <p>{row?.qualification}</p>,
        },
             
        {
          name: "CV LINK",
          selector: "resume",
          cell: (row) => <p>{row?.resume}</p>,
        }
  
      ]
    useEffect(() => {
      setLoading(true);
      let endpoints = `manage-web-service/v1/show-all-career?perPage=${perPage}&page=${page}&paginate=1`;
      authService()
        .get(endpoints)
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, [page,perPage]);


  return (
      <div className="w-11/12">
      {/* <DataTableExtensions  exportHeaders columns={columns} {...tableData}> */}
        <DataTable
          title={"Demo Requests"}
          data={data?.data}
          columns={columns}
          progressPending={isLoading}
          onChangePage={(page) => setPage(page)}
          pagination
          filterAll={true}
          paginationServer
          onChangeRowsPerPage={(e) => setperPage(e)}
          selectableRows
          highlightOnHover
          selectableRowsHighlight
          paginationRowsPerPageOptions={[10, 25, 50, 100, 500, 1000]}
        />
        {/* </DataTableExtensions> */}
      </div>
  )
}
