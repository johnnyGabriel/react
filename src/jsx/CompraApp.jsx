var ProdutoListItem = React.createClass({
    render: function() {
        return (
            <option value={ this.props.id }>
                { this.props.nome }
            </option>
        );
    }
});

var FormProdutos = React.createClass({
    getInitialState: function() {
        return {
            selected: {},
            produto: 0,            
            qtt: 1
        };
    },
    componentDidMount: function() {
        this.carrinho = [];
    },
    render: function() {
        return (
            <form className="form-inline" onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <select
                        className="form-control"
                        placeholder="Selecione o produto"
                        value={ this.state.produto }
                        onChange={ this.handleProdChange }>
                        <option value="0" disabled> Selecione o produto </option>
                        { this.props.produtos.map(function(produto) {
                            return <ProdutoListItem
                                key={ produto.id }
                                id={ produto.id }
                                nome={ produto.nome } />;
                        }) }        
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        min="1"
                        max={ this.state.selected.qEstoque }
                        placeholder="quantidade"
                        value={ this.state.qtt }
                        onChange={ this.handleQttChange } />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-default"
                        value="Adicionar ao carrinho" />
                </div>
            </form>
        );
    },
    handleProdChange: function(ev) {

        var selectedVal = ev.target.options[ ev.target.selectedIndex ].value

        this.setState({
            selected: this.getProdutoById( selectedVal ),
            produto: selectedVal
        });
    },
    handleQttChange: function(ev) {

        var el = ev.target;

        this.setState({
            qtt: (el.value > el.max ? el.max : (el.value < 1 ? 1 : el.value))
        });

    },
    handleSubmit: function(ev) {

        ev.preventDefault();

        this.carrinho.push(
            Object.assign({ qtt: this.state.qtt }, this.state.selected)
        );

        this.props.onChange(this.carrinho);

        this.clearForm();

    },
    getProdutoById: function(id) {
        return this.props.produtos.find(function(produto) {
            return produto.id == id;
        });
    },
    clearForm: function() {
        this.setState({
            selected: {},
            produto: 0,
            qtt: 1
        });
    }
});

var ListaComprasListItem = React.createClass({
    render: function() {
        return (
            <tr>
                <td> { this.props.produto.id } </td>
                <td> { this.props.produto.nome } </td>
                <td> R$ { this.props.produto.valor.toFixed(2) } </td>
                <td> { this.props.produto.qtt } </td>
                <td> R$ { (this.props.produto.valor * this.props.produto.qtt).toFixed(2) } </td>
            </tr>
        );
    }
});

var ListaCompras = React.createClass({
    render: function() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Valor Unit.</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    { !this.props.carrinho.length ? (
                        <tr>
                            <td colSpan="5" className="text-center">
                                Carrinho vazio   
                            </td>
                        </tr>) : null }
                    { this.props.carrinho.map(function(produto, index) {
                        return <ListaComprasListItem key={ index } produto={ produto } />;
                    }) }
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td> R$ { this.calcTotal().toFixed(2) } </td>
                    </tr>
                </tbody>
            </table>
        );
    },
    calcTotal: function() {
        return this.props.carrinho.reduce(function(total, produto) {
            return total + (produto.valor * produto.qtt)
        }, 0);
    }
});

var CompraApp = React.createClass({
    getInitialState: function() {
        return {
            produtos: [
                { id: 1, nome: "Refrigerante", qEstoque: 5 , valor: 5.50 },
                { id: 2, nome: "Arroz", qEstoque: 3 , valor: 10 },
                { id: 3, nome: "Feijão", qEstoque: 1, valor: 25.90 },
                { id: 4, nome: "Açucar", qEstoque: 5, valor:  9.90 },
                { id: 5, nome: "Sal", qEstoque: 9 , valor: 8.70 },
            ],
            carrinho: []
        }
    },
    render: function() {
        return (
            <div>
                <FormProdutos produtos={ this.state.produtos } onChange={ this.handleFormChange } />
                <ListaCompras carrinho={ this.state.carrinho } />
            </div>
        );
    },
    handleFormChange: function(carrinho) {
        this.setState({ carrinho: carrinho });
    }
});