/**
 * Created by yozawiratama on 1/3/14.
 */
Meteor.startup(function(){
    if(BlogPost.find().count() === 0){
        BlogPost.insert({
            content : "<h1>hore</h1>"
        });
    }
});
