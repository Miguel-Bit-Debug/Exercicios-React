class MyButton extends React.Component{
    render(){
        return(
        <button>{this.props.nome}</button>
        )
    }
}

class MyLabel extends React.Component {
    render(){
        return(
            <p>{this.props.texto}</p>
        )
    }
}

class App extends React.Component {
    render(){
        return(
            <div>
                <MyLabel texto='Recode Pro 2019'/>
                <MyButton nome="Botão 01"/>
                <MyButton nome="Botão 02"/>
                <MyButton nome="Botão 03"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('conteudo'))