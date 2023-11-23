
import Table from '../components/Table';



import React, {useEffect, useMemo, useState } from 'react';
import axios from 'axios';
// import {columns} from './OrderCulomn';


function OrderTable() {


  const baseUrl = 'https://spiky-crater-dep2vxlep8.ploi.online';

  const columns = useMemo(
    () => [
      {
        header: 'No',
        accessorKey: 'id',
      },
      {
        header: 'Description',
        accessorKey: 'description',
      
      },
      {
        header: 'Status',
        accessorKey: 'status_label',
      
      },
      {
        header: 'Product',
        accessorKey: 'product.name',

      },
      {
          header: 'Customer',
          accessorKey: 'customer',
          
        },
        {
          header: 'Agent',
          accessorKey: 'agent',
        
        },
      {
        header: 'Amount',
        accessorKey: 'product_price.price',
      },
  
      
      
        {
          header: 'Action',
          accessorKey: 'action',
        
        },
    ],
    []
  );
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token')
     
      const result = await axios(`${baseUrl}/api/v1/orders`, {headers: {"Authorization": "Bearer " + token}});
      setData(result.data.data);
      console.log(result.data.data);
    })();
  }, []);






return (
<div className="mt-28 ml-[300px]  grid columns-6 items-start  bg-white shadow-md">
      <h1 className='my-8 pl-20 text-2xl font-bold'>Orders</h1>
 
    <Table data={data} columns={columns}/>

</div>
)
}

export default OrderTable