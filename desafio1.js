class CursoHeader extends React.Component {
    render() {
        return (
            <h1>{this.props.titulo}</h1>
        )
    }
}

class CursoContent extends React.Component{
    render() {
        return (
            <p><b>{this.props.nome}</b>{this.props.texto}</p>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <CursoHeader titulo="Desenvolvedor Full Stack" />
                <CursoContent nome="Objetivos: " texto="Aprender tecnologias incriveis para construir coisas magnificas" />
                <CursoContent nome="Tecnologias: " texto="JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS entre outras" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('conteudo'))