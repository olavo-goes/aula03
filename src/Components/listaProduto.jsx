import style from '../style/listaProduto.module.css';
import Loading from '../Components/Loading';

export default function ListaProduto({produtos}) {
    if(produtos.length == 0){
        return <Loading/>
    }
    return(
        <ul className={style.blocoprodutos}>
            {
                produtos.map((produto1) => (<li key={produto1.id} className={style.produtos}>
                    <h2 className={style.title}>{produto1.title}</h2>
                    <p className={style.description}>{produto1.description}</p>
                    <p className={style.price}>preço: {produto1.price}</p>
                    <img src={produto1.image} className={style.image}/>
                </li>))
            }
        </ul>
    )
}