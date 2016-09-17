ReactDOM.render(
    <CompraApp 
        titulo="Compras"
        subtitulo="Selecione os produtos que deseja levar"
        produtos={[
            { id: 1, nome: "Refrigerante", qEstoque: 5 , valor: 5.50 },
            { id: 2, nome: "Arroz", qEstoque: 3 , valor: 10 },
            { id: 3, nome: "Feijão", qEstoque: 1, valor: 25.90 },
            { id: 4, nome: "Açucar", qEstoque: 5, valor:  9.90 },
            { id: 5, nome: "Sal", qEstoque: 9 , valor: 8.70 },
        ]} />,
    document.getElementById('content')
);