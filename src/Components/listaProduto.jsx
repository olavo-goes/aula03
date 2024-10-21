export default function (produtos) {
    {
        produtos.map((produto) => <div key={produto.id}>
        <h1>{produto.title}</h1>
        <h1>{produto.description}</h1>
        <h1>Preco: R${produto.price}</h1>
        </div>)
    }
}