class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num01: 0,
            num02: 0,
            resultado: 0
        }

        this.manipulador1 = this.manipulador1.bind(this)
        this.manipulador2 = this.manipulador2.bind(this)

        this.Soma = this.Soma.bind(this)
        this.Subtracao = this.Subtracao.bind(this)
        this.Multiplicacao = this.Multiplicacao.bind(this)
        this.Divisao = this.Divisao.bind(this)

    }

    manipulador1(event) {
        this.setState({ num01: event.target.value })
    }

    manipulador2(event) {
        this.setState({ num02: event.target.value })
    }

    Soma() {
        this.setState({ resultado: (parseFloat(this.state.num01) + parseFloat(this.state.num02)) })
    }
    Subtracao() {
        this.setState({ resultado: (parseFloat(this.state.num01) - parseFloat(this.state.num02)) })
    }

    Multiplicacao() {
        this.setState({ resultado: (parseFloat(this.state.num01) * parseFloat(this.state.num02)) })
    }

    Divisao() {
        this.setState({ resultado: (parseFloat(this.state.num01) / parseFloat(this.state.num02)) })
    }

    render() {
        return (
            <div class="Formatacao">
                <form>

                    Valor 01:
                    <input type="text" onChange={this.manipulador1} />

                    Valor 02:
                    <input type="text" onChange={this.manipulador2} />

                    <label>
                        Selecione a operação:
                    <select>
                            <option value="Somar" onClick={this.Soma}>Somar</option>
                            <option value="Subtracao" onClick={this.Subtracao}>Subtrair</option>
                            <option value="Multiplicacao" onClick={this.Multiplicacao}>Multiplicar</option>
                            <option value="Divisao" onClick={this.Divisao}>Dividir</option>
                    </select>
                    </label>

                    <p><b>Resultado: {this.state.resultado}</b></p>

                </form>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))