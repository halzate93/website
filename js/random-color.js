/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var colors = ['brown', 'red', 'yellow'];

$(document).ready(function() {
    var index = Math.floor((Math.random() * colors.length-1) + 1);
    var style = 'css/color/' + colors[index] + '.css';
    $.get(style, function(css)
    {
        $('<style type="text/css"></style>')
                .html(css)
                .appendTo("head");
    });
});
