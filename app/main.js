var React = require('react');

var PageApp = require('./flux/components/PageApp.react');

var $ = require('jquery');

React.render(
  <PageApp />,
  document.getElementById('page-app')
);

var logoOpacity = function(event) {
  var height = $(window).height();
  var logo   = $('.logo');
  if (height < 380) {
    logo.removeClass('opacity-1');
    logo.addClass('opacity-2');
  } else if (height < 480) {
    logo.addClass('opacity-1');
    logo.removeClass('opacity-2');
  } else {
    logo.removeClass('opacity-1');
    logo.removeClass('opacity-2');
  }
};

logoOpacity();
window.onresize = logoOpacity;
