const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
    const mNome = 'Renato direto jsx';
   
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente3 accclickCount={props.accclickCount}/>
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

function MeuComponente3(props) {
    const [ tel, setTel ] = React.useState('92208514');

    setTimeout(function(){
        setTel('85883839')
    }, 1500)

    return (
        <div className="componente-3">
            <MeuComponente4 telefone={tel} accclickCount={props.accclickCount}/>
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
            <button type="button" onClick={props.accclickCount}>Incrementar</button>
            <p>componente4-como string : {props.telefone} {idade}</p>
        </div>

    )
}

function MeuComponente(props) {
    return (
        <div id="componentes">
            <p>Principal</p>
            <MeuComponente1 accclickCount={props.accclickCount} />
        </div>
    )
}

function MeuComponenteIrmao(props) {
    return (
        <div id="meucomponenteirmao">
            <MeuComponenteIrmao2 count={props.count}/>            
        </div>
    )
}

function MeuComponenteIrmao2(props) {

    React.useEffect(function() {
        console.log('criou ou alterou')
    });

    return (
        <h2>Contador: {props.count}</h2>
    )
}

function AppComponente() {
    // mais alto nivel. portanto ele de ter o contador
    const [ count, setCount ] = React.useState(0);
    const clickCount = function() {
        setCount(count + 1)
    }

    return (
        <React.Fragment>
            <MeuComponente accclickCount={clickCount}/>
            <MeuComponenteIrmao count={count}/>
        </React.Fragment>
    )
}

ReactDOM.render(
    <AppComponente />,
    document.getElementById('app')
)