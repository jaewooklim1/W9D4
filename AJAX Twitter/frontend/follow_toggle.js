
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
        } else 
        if (this.followState === "follow") {
            this.$el.html("unfollow!");
        } else {
            this.$el.html("?");
        }
    }

    handleClick(event){ 
        
        // event.preventDefault();

    
        const followToggle = this;
    
        event.preventDefault();
    
        if (this.followState === 'followed') {
            this.followState = 'unfollowing';
            this.render();
            APIUtil.unfollowUser(this.userId).then(() => {
            followToggle.followState = 'unfollowed';
            followToggle.render();
            });
        } else if (this.followState === 'unfollowed') {
            this.followState = 'following';
            this.render();
            APIUtil.followUser(this.userId).then(() => {
            followToggle.followState = 'followed';
            followToggle.render();
            });
        
        }

        // if(this.followState === "unfollow") {
        //      this.render();
        //     $.ajax({
        //         method: "POST",
        //         url:`/users/${userId}/follow`,
        //         dataType: "json",
        //     }).then(() => {
                 
        //         this.followState = "follow";
        //         this.render();
        //     })
        // } else {
        //     if(this.followState === "follow") {
        //         this.render();
        //         $.ajax({
        //             method: "DELETE",
        //             url:`/users/${userId}/follow`,
        //             dataType: "json",
        //         }).then(() => {
                     
        //             this.followState = "unfollow";
        //             this.render();
        //         })
        //     }
       
        // }
    }
}

module.exports = FollowToggle; 