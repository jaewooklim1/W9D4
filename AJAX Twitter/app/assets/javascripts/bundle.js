/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {


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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(function () {
    $("button.follow-toggle").each ((i, el) => 
    {   
        // debugger
        new FollowToggle(el)
    })
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map