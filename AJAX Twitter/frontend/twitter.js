const FollowToggle = require("./follow_toggle.js");

$(function () {
    $("button.follow-toggle").each ((i, el) => 
    {   
        // debugger
        new FollowToggle(el)
    })
});