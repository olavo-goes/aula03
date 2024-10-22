

export default function ListaProduto({produtos}) {
    return(
        <div>
            {
                produtos.map((produto1) => <div key={produto1.id}>
                    <p>{produto1.title}</p>
                </div>)
            }
        </div>
    )
}