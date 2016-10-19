import React from 'react'
import CompraProduto from './CompraProduto'
import LiveSearch from './LiveSearch'

const { array, func } = React.PropTypes

export default React.createClass({
    propTypes: {
        produtos: array.isRequired,
        onChange: func
    },
    getDefaultProps() {
        return {
            onChange: () => 0
        }
    },
    getInitialState() {
        return {
            selected: {},
            produto: 0,        
            qtt: 1
        };
    },
    componentDidMount() {
        this.carrinho = [];
    },
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="row">
                    <div className="col-md-12">
                        <LiveSearch 
                            searchKey="nome"
                            viewKey="nome"
                            data={ this.props.produtos }
                            onSelect={ this.handleSelectSearch } />
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <select
                                className="form-control"
                                placeholder="Selecione o produto"
                                value={ this.state.produto }
                                onChange={ this.handleProdChange }>
                                <option value="0" disabled> Selecione o produto </option>
                                { this.mapProdutos(this.props.produtos) }        
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
    handleProdChange(ev) {

        var selectedVal = ev.target.options[ ev.target.selectedIndex ].value;

        this.setState(
            Object.assign( this.getInitialState(), {
                selected: this.getProdutoById( this.props.produtos, selectedVal ),
                produto: selectedVal
            })
        );
    },
    handleQttChange(ev) {

        var EventProps = (event) => {
            var el = event.target;
            return ( prop => parseInt(el[prop]) );
        }

        var input = EventProps(ev);

        this.setState({
            qtt: (input('value') > input('max') ? input('max')
                : input('value') < 1 ? 1
                : input('value'))
        });

    },
    handleSubmit(ev) {

        ev.preventDefault();

        this.carrinho.push(
            Object.assign( this.state.selected, { qtt: this.state.qtt } )
        );

        this.props.onChange(this.carrinho);

        this.setState( this.getInitialState() );

    },
    handleSelectSearch(selected) {
        
        this.setState({
            selected: selected,
            produto: selected.id
        });

    },
    mapProdutos(produtos) {
        return produtos.map( produto =>
            <CompraProduto
                key={ produto.id }
                id={ produto.id }
                nome={ produto.nome } />
        )
    },
    getProdutoById(produtos, id) {
        return produtos.find(produto => produto.id == id);
    }
})