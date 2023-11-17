"use client"
import React,{useEffect,useState} from 'react'
import axios, {isCancel, AxiosError} from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {InputText} from 'primereact/inputtext';

import 'primeicons/primeicons.css';
        
export default function Home() {
  const [dataForTable, setDataForTable] = useState([]);
useEffect(() => {
try {
  axios.get('localhost:3010/student/api').then((res) => {
    const data = res.data;
    setDataForTable(data);
  }
  );
} catch (error) {
  console.log(error);
}
},[]);
  return (
    <>
    <div>
      <h1>Home</h1>
    </div>
    <div>
    <span className="">
    <i className="" />
    <InputText placeholder="Search" />
</span>
    </div>
      <div>
      <DataTable value={dataForTable} tableStyle={{ minWidth: '50rem' }}>
        <Column field="userId" header="Name"></Column>
        <Column field="id" header="Category"></Column>
        <Column field="title" header="Quantity"></Column>
      </DataTable>
      </div>
    </>
  )
}
