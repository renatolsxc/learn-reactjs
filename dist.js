const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
  const mNome = 'Renato direto jsx';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, {
    accclickCount: props.accclickCount
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, props.children)));
}

function MeuComponente3(props) {
  const [tel, setTel] = React.useState('92208514');
  setTimeout(function () {
    setTel('85883839');
  }, 1500);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: tel,
    accclickCount: props.accclickCount
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(function () {
    setIdade(29);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.accclickCount
  }, "Incrementar"), /*#__PURE__*/React.createElement("p", null, "componente4-como string : ", props.telefone, " ", idade));
}

function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement("p", null, "Principal"), /*#__PURE__*/React.createElement(MeuComponente1, {
    accclickCount: props.accclickCount
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "meucomponenteirmao"
  }, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    count: props.count
  }));
}

function MeuComponenteIrmao2(props) {
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.count);
}

function AppComponente() {
  // mais alto nivel. portanto ele de ter o contador
  const [count, setCount] = React.useState(0);

  const clickCount = function () {
    setCount(count + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
    accclickCount: clickCount
  }), /*#__PURE__*/React.createElement(MeuComponenteIrmao, {
    count: count
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('app'));
