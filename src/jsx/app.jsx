var json = [
    { id: 1, nome: "Refrigerante", qEstoque: 5 , valor: 5.50 },
    { id: 2, nome: "Arroz", qEstoque: 3 , valor: 10 },
    { id: 3, nome: "Feijão", qEstoque: 1, valor: 25.90 },
    { id: 4, nome: "Açucar", qEstoque: 5, valor:  9.90 },
    { id: 5, nome: "Sal", qEstoque: 9 , valor: 8.70 },
    { id: 6, nome: "Vinagre", qEstoque: 15 , valor: 3.99 },
    { id: 7, nome: "Leite", qEstoque: 10 , valor: 7.50 },
    { id: 8, nome: "Pão", qEstoque: 39 , valor: 5.90 },
    { id: 9, nome: "Laranja", qEstoque: 51 , valor: 1.99 },
    { id: 10, nome: "Banana", qEstoque: 7 , valor: 6.99 },
];

ReactDOM.render(
    // <CompraApp 
    //     titulo="Compras"
    //     subtitulo="Selecione os produtos que deseja levar"
    //     produtos={json} />,
    <LiveSearch 
        searchKey="nome"
        viewKey="nome"
        data={json} />,
    document.getElementById('content')
);