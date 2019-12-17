class Lampada extends React.Component {

    constructor(props) {
        super(props);
        this.ligarluz = this.ligarluz.bind(this)
        this.desligaluz = this.desligaluz.bind(this)
        this.state = {
            estado: false
        };
    }
    ligarluz() {
        this.setState({ estado: true })
    }

    desligaluz() {
        this.setState({ estado: false })
    }

    render() {

        let luz = this.state.estado;
        let liga = <button onClick={this.ligarluz}>ligar </button>
        let imagem
        let desliga = <button onClick={this.desligaluz}> desliga </button>


        if (luz) {
            imagem = <img src="https://www.w3schools.com/js/pic_bulbon.gif" />

        } else {
            imagem = <img src="https://www.w3schools.com/js/pic_bulboff.gif" />

        }

        return (
            <div>
                {liga}
                {imagem}
                {desliga}
            </div>
        );

    }
}
ReactDOM.render(<Lampada />, document.getElementById('root'));