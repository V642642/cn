import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useLogout } from "../../src/auth/useLogout";
import authService from "../../src/services/index";
import Career from "./Career";
// import DataTableExtensions from "react-data-table-component-extensions";
// import 'react-data-table-component-extensions/dist/index.css';

export default function Dashboard() {
  const [perPage, setperPage] = useState(10);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState(1);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { logout } = useLogout();
  let router = useRouter();

  let columns = [
    {
      name: "Name",
      selector: "fullname",
      cell: (row) => (
        <p>
          {row?.fullname} {row.lastname}
        </p>
      ),
    },
    {
      name: "Email",
      selector: "email",
      cell: (row) => <p>{row?.email}</p>,
    },
    {
      name: "Type",
      selector: "type",
      cell: (row) => <p>{row?.type}</p>,
    },
    {
      name: "Mobile No",
      selector: "phone",
      cell: (row) => <p>{row?.phone}</p>,
    },
    {
      name: "Companyname",
      selector: "companyname",
      cell: (row) => <p>{row?.companyname}</p>,
    },
    {
      name: "Location",
      selector: "location",
      cell: (row) => <p>{row?.location}</p>,
    },
    {
      name: "Query",
      selector: "enquiry",
      cell: (row) => <p>{row?.enquiry}</p>,
    },
    {
      name: "Ip address",
      selector: "ipaddress",
    },
    {
      name: "Source",
      selector: "source",
    },
  ];

  useEffect(() => {
    setLoading(true);
    let endpoints = `manage-web-service/v1/show-all-demo?perPage=${perPage}&page=${page}&paginate=1&keyword=${search}`;
    authService()
      .get(endpoints)
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page, perPage , search]);



  const Logout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="w-full flex items-center font-primary justify-center flex-col">
      <header className="h-[70px] w-full px-20 py-10 flex items-center justify-between bg-blue-600 p-3">
        <Link href={`/admin-dashboard`}>
          <img
            src="images/logo-admin.png"
            alt="..."
            className="sm:w-[200px] w-[100px]"
          />
        </Link>
        <div className="sm:pr-20">
          <button
            onClick={Logout}
            className="px-10 py-2  border-white border text-white text-[15px] font-primary rounded-md"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex items-start gap-1 w-11/12 mt-10 justify-start border-b border-gray-300">
        <button
          onClick={() => setTab(1)}
          className={`${
            tab === 1 ? "bg-blue-600" : "bg-gray-800"
          }  text-white rounded-tl-[10px] rounded-tr-[10px] px-8 py-3`}
        >
          Demo
        </button>
        <button
          onClick={() => setTab(2)}
          className={`${
            tab === 2 ? "bg-blue-600" : "bg-gray-800"
          }  text-white rounded-tl-[10px] rounded-tr-[10px] px-8 py-3`}
        >
          Careers
        </button>
      </div>

      {tab === 1 ? (
        <div className="w-11/12">
          <div className="bg-white sm:px-20 px-2 flex items-center justify-between w-full py-10">
            <select onChange={e => setperPage(e.target.value)} className="bg-white px-4 border border-gray-300 h-[30px] rounded-[4px]">
              {[10,20,50,100,500,1000,2000].map(data=>(
                <option value={data} key={data}>{data}</option>
              ))}
            </select>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="border border-gray-400 outline-blue-500 outline-1  rounded-sm px-4 h-[30px]" />
          </div>
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
        </div>
      ) : (
        <Career />
      )}
    </div>
  );
}
