const NomeContext = React.createContext('nome');

function MeuComponente1() {
    const mNome = 'Renato direto jsx';
   
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente4 nome={mNome}/>
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
    return (
        <div className="componente-3">
            <MeuComponente4 />
        </div>
    )
}

function MeuComponente4(props) {
    return (
        <div className="componentes-4">
            <p>componente4-como string : {props.nome}</p>
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