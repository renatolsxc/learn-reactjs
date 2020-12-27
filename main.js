const NomeContext = React.createContext('nome');

function MeuComponente1() {
    const mNome = 'Renato direto jsx';
   
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente3/>
            </MeuComponente2>
        </div>
    )
}

function MeuComponente2(props) {
    
    return (
        <div className="componente-2">
            <div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

function MeuComponente3() {
    const [ tel, setTel ] = React.useState('92208514');

    setTimeout(function(){
        setTel('85883839')
    }, 1500)

    return (
        <div className="componente-3">
            <MeuComponente4 telefone={tel}/>
        </div>
    )
}

function MeuComponente4(props) {
    const [ idade, setIdade ] = React.useState(28);

    setTimeout(function(){
        setIdade(29)
    }, 1000)

    return (
        <div className="componentes-4">
            <p>componente4-como string : {props.telefone} {idade}</p>
        </div>

    )
}

function MeuComponente() {
    return (
        <div id="componentes">
            <MeuComponente1 />
        </div>
    )
}

ReactDOM.render(
    <MeuComponente />,
    document.getElementById('app')
)