var spinner;
var SpinKit = require('HL_SpinKit'),
    utils = require('utils');

function createSpinner(style) {
    // Avoid sending the click event parameters to the module.
    if (style && style.type) {
        style = null;
    }

    if (!spinner) {
        spinner = SpinKit.createSpinner(style, utils.colorValue(getRandomColor()));

        $.vwSpin.add(spinner);
    }
}

function changeSpinnerStyle(e) {
    if (spinner) {
        spinner.setStyle(SpinKit.style[e.row.style]);
    } else {
        createSpinner(SpinKit.style[e.row.style]);
    }
}

function stopAnimating() {
    if (spinner && spinner.isAnimating()) {
        spinner.stopAnimating();
    }
}

function startAnimating() {
    if (spinner && !spinner.isAnimating()) {
        spinner.startAnimating();
    }
}

function changeSize() {
    if (spinner) {
        spinner.setSpinnerSize(Math.floor(Math.random() * (130 - 50 + 1)) + 50);
    } else {
        createSpinner();
    }
}

function changeColor() {
    if (spinner) {
        spinner.setColor(utils.colorValue(getRandomColor()));
    } else {
        createSpinner();
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$.navWindow.open();
