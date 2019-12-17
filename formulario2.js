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
        this.calculo = this.calculo.bind(this)
    }

    manipulador1(event){
        this.setState({num01: event.target.value})
    }

    manipulador2(event){
        this.setState({ num02: event.target.value })
    }

    calculo(){
        this.setState({ resultado: (parseFloat(this.state.num01) + parseFloat(this.state.num02)) })
    }

    render() {
        return (
            <div class="Formatacao">
                <form>
                    Valor 01:
                    <input type="text" onChange={this.manipulador1} />
                    <br/><br/>

                    Valor 02:
                    <input type="text" onChange={this.manipulador2} />
                    <br/><br/>

                    <input type="button" value="Somar" onClick={this.calculo} />
                    <br/><br/>                    


                    <p><b>Resultado: {this.state.resultado}</b></p>

                </form>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))