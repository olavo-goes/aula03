import { useEffect, useState } from "react";
import ListaProduto from "../Components/ListaProduto";

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


    return(
        <ListaProduto produto1={dados}/>
    )
}