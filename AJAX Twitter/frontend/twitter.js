const FollowToggle = require("./follow_toggle");

$(function () {
    $("button.follow-toggle").each ((i, el) => new FollowToggle(el))
});