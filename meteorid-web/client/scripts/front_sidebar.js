/**
 * Created by yozawiratama on 1/3/14.
 */
Template.tmp_front_sidebar.events({
    'click #hplCaraInstall' : function(){
        Session.set("currPage", "tmp_blog_post");
    },
    'click #hplKomentar' : function(){
        Session.set("currPage", "tmp_fb_comment");
    }
});