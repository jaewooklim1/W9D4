const APIUtil = {

    followUser: id => APIUtil.toggleFollow(id, 'POST'),        

    unfollowUser: id => APIUtil.toggleUnfollow(id, 'DELETE'),    
    

    toggleFollow: (id) => (
        $.ajax({
            method: "POST",
            url: `/users/${id}/follow`,
            dataType: "json"
        })
    ),

    toggleUnfollow: (id) => (
        $.ajax({
            method: "DELETE",
            url: `/users/${id}/follow`,
            dataType: "json"
        })
    ),
};

module.exports = APIUtil;