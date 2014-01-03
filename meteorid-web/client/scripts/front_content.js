/**
 * Created by yozawiratama on 1/3/14.
 */
Template.tmp_front_content.content = function(){
    return Meteor.render(Template[Session.get("currPage")]);
}