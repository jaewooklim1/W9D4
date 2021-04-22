
class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");

        this.render();
    }

    render(){
        if(this.followState === "unfollow") {
            this.$el.html("follow!");
        } else {
            this.$el.html("unfollow!");
        }
    }

    handleClick(event){ 
        debugger
        event.preventDefault();
        if(this.followState === "unfollow") {
            debugger 
            $.ajax({
                method: "POST",
                url:`/users/#{userId}/follow`,
                dataType: "json",
            }).then(() => {
                debugger 
                this.followState = "follow";
                this.render();
            })
        } else {
            if(this.followState === "follow") {
                debugger 
                $.ajax({
                    method: "DELETE",
                    url:`/users/#{userId}/follow`,
                    dataType: "json",
                }).then(() => {
                    debugger 
                    this.followState = "unfollow";
                    this.render();
                })
            }
       
        }
    }
}

module.exports = FollowToggle; 