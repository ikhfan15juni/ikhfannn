import React from "react";
import Case from "../component/Case";
import axios from "axios";
import Table from "../component/Table";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TrashStuff() {
    const [stuffsTrush, setStuffsTrush] = useState([]);
            
    useEffect(()=> {
        axios.get('http://localhost:8000/stuff/trash',{
            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('token'),
            }
        })
        .then(res => {
            setStuffsTrush(res.data.data);
        })
        .catch(err => {
            console.log(err)
            if(err.response.status == 401){
                navigate('/login?message=' + encodeURIComponent('anda belum login'));
            }
        })
    },[]);

    const headers = [
        "#",
        "Name",
        "Category",
    ]

    const endpointModal = {
        "restore": "http://localhost:8000/stuff/restore/{id}",
        "delete_permanent": "http://localhost:8000/stuff/permanent/{id}"
    }

    const inputData = {}

    const title = 'Stuff'

    const columnIdentitasDelete = 'name'

    const buttons = [
        "restore",
        "delete_permanent"
    ]

    const tdColumn = {
        "name": null,
        "category": null,
    }
    return (
        <Case>
            <Table headers={headers} data={stuffsTrush} endpoint={endpointModal} inputData={inputData} titleModal={title} identitasColumn={columnIdentitasDelete} opsiButton={buttons} columnForTd={tdColumn}></Table>
        </Case>
    )
}