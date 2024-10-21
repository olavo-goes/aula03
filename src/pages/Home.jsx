import { useEffect, useState } from "react";
import listaProduto from "../Components/listaProduto";

export default function Home(){

const [dado, setDados] = useState([])



    useEffect(() => {

        const receberDados = async () => {
            try{
            const dados = await fetch ('https://fakestoreapi.com/products');
            const resp = await dados.json();
            setDados(dados)}
            catch{
                alert("erro")
            }
        }
        receberDados();
    }, [])}



    return(
    <>
    
    </>
    )