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



    const orderAZ = () => {
        const listaOrdenada = [...dados].sort((a, b) => a.title.localeCompare(b.title))
        setDados(listaOrdenada)
    }



    const reverseOrder = () => {
        const listaReversa = [...dados].reverse((a, b) => a.title.localeCompare(b.title))
        setDados(listaReversa)
    }


    const Decrescente = () => {
        const MaiorMenor = [...dados].sort((a, b) => b.price - a.price)
        setDados(MaiorMenor)
    }

    const Crescente = () => {
        const MenorMaior = [...dados].sort((a, b) => a.price - b.price)
        setDados(MenorMaior)
    }


    const Consultar = (valorPesquisar) => {
        const pesquisa = [...dados].filter(product => 
            product.title.toLowerCase().includes(valorPesquisar.toLowerCase())
        );
        setDados(pesquisa)
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

        <button onClick={() => Decrescente()}>
        Maior para Menor
        </button>

        <button onClick={() => Crescente()}>
        Menor para maior
        </button>


        <input
            type="text"
            placeholder="search"
            onChange={(event) => Consultar(event.target.value)}
        />


        <ListaProduto produtos={dados} />


        <div className={style.Footer}>
            <p>Trabalho Olavo Cesar Oliveira Maciel Goes, Todos os direitos reservados</p>
        </div>
    </>);
}