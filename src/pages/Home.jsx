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


    return (<>
        <div className={style.Header}>
            <h1>Lista de Produtos</h1>
        </div>


        <ListaProduto produtos={dados} />


        <div className={style.Footer}>
            <p>Trabalho Olavo Cesar Oliveira Maciel Goes, Todos os direitos reservados</p>
        </div>
    </>);
}