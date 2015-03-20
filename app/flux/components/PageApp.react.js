var React = require('react');

var PageApp = React.createClass({
  getInitialState: function() {
    return {
      backgroundImageStyle: {
        backgroundImage: 'url(img/logo.png)'
      }
    };
  },

  render: function() {
    return (
      <div className="pages-index">
        <div className="gradient"></div>
        <div className="pattern"></div>
        <div className="logo"></div>
        <div className="name">
          <h1>Firebot</h1>
          <p>Starts you up</p>
        </div>
        <div className="coming">
          <p>{"Coming soon in 2015"}</p>
        </div>
      </div>
    );
  }
});

module.exports = PageApp;
