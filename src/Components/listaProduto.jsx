

export default function ListaProduto({produtos}) {
    return(
        <div>
            {
                produtos.map((produto1) => <div key={produto1.id}>
                    <h2>{produto1.title}</h2>
                    <p>{produto1.description}</p>
                    <p>preço: {produto1.price}</p>
                    <img src={produto1.image}/>
                </div>)
            }
        </div>
    )
}