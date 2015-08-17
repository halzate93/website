/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function()
{
    $("#bird").hover(
        function()
        {
            $(this).attr("src", "img/bird/bird.gif");
        },
        function()
        {
            $(this).attr("src", "img/bird/bird-still.gif");
        });
});
