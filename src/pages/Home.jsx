import { useEffect, useState } from "react";
import ListaProduto from "../Components/listaProduto";
import style from '../style/listaProduto.module.css';

export default function Home(){

const [dados, setDados] = useState([])


    useEffect(() => {


        const receberDados = async () => {
            try{
            const resp = await fetch ('https://fakestoreapi.com/products');
            const dados = await resp.json();
            setDados(dados)}

            catch(erro){
                alert("erro")
            }
            
        }
        receberDados();
    }, [])



    if(dados.length == 0){
        return(<h1>Carregando...</h1>)
    }


    const orderAZ = () => {
        const listaOrdenada = [...dados].sort((a, b) => a.title.localeCompare(b.title))
        setDados(listaOrdenada)
    }



    const reverseOrder = () => {
        const listaReversa = [...dados].reverse((a, b) => a.title.localeCompare(b.title))
        setDados(listaReversa)
    }


    const orderPrice = () => {
        const ListaPreco = [...dados].sort((a, b) => a.price.orderPrice(b.price))
        setDados(ListaPreco)
    }




    return (<>
        <div className={style.Header}>
            <h1>Lista de Produtos</h1>
        </div>

        <button onClick={() => orderAZ()}>
        AZ
        </button>


        <button onClick={() => reverseOrder()}>
        reverse
        </button>

        <button onClick={() => orderPrice()}>
        Price
        </button>

        <input></input>
        <ListaProduto produtos={dados} />


        <div className={style.Footer}>
            <p>Trabalho Olavo Cesar Oliveira Maciel Goes, Todos os direitos reservados</p>
        </div>
    </>);
}