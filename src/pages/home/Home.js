import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseAPI } from '../../environments'
import ListaProdutos from '../../components/listaProdutos/ListaProdutos'

function Home() {

    const [produtos, setProdutos] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3001/produtos/')
            .then((response)=> {
            setProdutos(response.data)
            })
            .catch((err)=> {
            console.error("Ops! ocorreu um erro" + err)
            })
            }, [])
            

            return (
                <div>
                <h1>Home</h1>
                <ListaProdutos produtos={produtos} />
                </div>
                )
}

export default Home