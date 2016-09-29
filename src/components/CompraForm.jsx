import React from 'react'
import CompraProduto from './CompraProduto'

export default React.createClass({
    propTypes: {
        produtos: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            onChange: function() {}
        }
    },
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
            <form onSubmit={ this.handleSubmit }>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select
                                className="form-control"
                                placeholder="Selecione o produto"
                                value={ this.state.produto }
                                onChange={ this.handleProdChange }>
                                <option value="0" disabled> Selecione o produto </option>
                                { this.props.produtos.map(function(produto) {
                                    return <CompraProduto
                                        key={ produto.id }
                                        id={ produto.id }
                                        nome={ produto.nome } />;
                                }) }        
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                min={1}
                                max={ this.state.selected.qEstoque || 1 }
                                step={1}
                                placeholder="quantidade"
                                value={ this.state.qtt }
                                onChange={ this.handleQttChange } />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-block btn-primary"
                                disabled={ !this.state.produto }>
                                Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    },
    handleProdChange: function(ev) {

        var selectedVal = ev.target.options[ ev.target.selectedIndex ].value;

        this.setState(
            Object.assign( this.getInitialState(), {
                selected: this.getProdutoById( selectedVal ),
                produto: selectedVal
            })
        );
    },
    handleQttChange: function(ev) {

        var input = function(prop) {
            return parseInt(ev.target[prop]);
        }

        this.setState({
            qtt: (input('value') > input('max') ? input('max')
                : input('value') < 1 ? 1
                : input('value'))
        });

    },
    handleSubmit: function(ev) {

        ev.preventDefault();

        this.carrinho.push(
            Object.assign( this.state.selected, { qtt: this.state.qtt } )
        );

        this.props.onChange(this.carrinho);

        this.setState(
            this.getInitialState()
        );

    },
    getProdutoById: function(id) {

        return this.props.produtos.find(function(produto) {
            return produto.id == id;
        });

    }
})