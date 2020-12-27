const NomeContext = React.createContext('nome');

function MeuComponente1() {
  const mNome = 'Renato direto jsx';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, null)));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, props.children)));
}

function MeuComponente3() {
  const [tel, setTel] = React.useState('92208514');
  setTimeout(function () {
    setTel('85883839');
  }, 1500);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: tel
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(function () {
    setIdade(29);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, "componente4-como string : ", props.telefone, " ", idade));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement("p", null, "Principal"), /*#__PURE__*/React.createElement(MeuComponente1, null));
}

function MeuComponenteIrmao() {
  return /*#__PURE__*/React.createElement("h1", null, "Componente Irmao");
}

function AppComponente() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, null), /*#__PURE__*/React.createElement(MeuComponenteIrmao, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('app'));
