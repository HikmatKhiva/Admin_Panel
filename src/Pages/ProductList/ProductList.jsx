import React,{useState} from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid/';
import { productRows } from '../../Data';
import { Link } from 'react-router-dom';
import {MdDeleteOutline} from 'react-icons/md'
const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id)=>{
      setData(data.filter(item=>item.id !== id))
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
          field: 'name', headerName: 'Name', width: 200, renderCell: (params) => {
            return (
              <div className='productListItem'>
                <img src={params.row.img} className="productListImg" alt={params.row.name} />
                {params.row.name}
              </div>
            )
          }
        },
        { field: 'stock', headerName: 'Stock', width: 150 },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 150
        },
        {
          field: "action",
          headerName: "Action",
          with: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={'/product/' + params.row.id}>
                  <button className='productListEdit'>Edit</button>
                </Link>
                <MdDeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)}  />
              </>
            )
          }
        }
      ];
    return (
        <div className='productList'>
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

export default ProductList