const NomeContext = React.createContext('nome');

function MeuComponente1() {
  const mNome = 'Renato direto jsx';
  return React.createElement(NomeContext.Provider, {
    value: mNome
  }, React.createElement('div', null, React.createElement(MeuComponente2)));
  return /*#__PURE__*/React.createElement(NomeContext.Provider, {
    value: mNome
  }, /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null)));
}

function MeuComponente2() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement(MeuComponente3, null));
}

function MeuComponente3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null));
}

function MeuComponente4() {
  return /*#__PURE__*/React.createElement(NomeContext.Consumer, null, nomeContxt => /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, nomeContxt)));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById('app'));