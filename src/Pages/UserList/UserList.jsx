import React, { useState } from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid/';
import { userRows } from '../../Data';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom'
const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} className="userListImg" alt={params.row.username} />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150
    },
    {
      field: "action",
      headerName: "Action",
      with: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/users/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <MdDeleteOutline className='userListDelete' onClick={() => { handleDelete(params.row.id) }} />
          </>
        )
      }
    }
  ];
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default UserList