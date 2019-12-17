class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {texto: ''}

        this.pegaTexto = this.pegaTexto.bind(this)
        this.mostraTexto = this.mostraTexto.bind(this)
    }

    pegaTexto(event){
        this.setState({texto: event.target.value})
    }

    mostraTexto(){
        alert(this.state.texto)
    }

    render() {
        return (
            <form>
                    Nome:
                    <input type="text" onChange={this.pegaTexto} />

                    <input type="button" value="Pegar Nome" onClick={this.mostraTexto}/>
            </form>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))