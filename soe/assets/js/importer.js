var path =  '/soe/content/'

$(function(){
    $("#welcome").load(path + "/welcome/welcome.html");
    $("#events").load(path + "/events/events.html");
});

$(function(){
    $("#staff_directory1").load(path + "/staff_directory/floor_1.html");
    $("#staff_directory2").load(path + "/staff_directory/floor_2.html");
    $("#staff_directory3").load(path + "/staff_directory/floor_3.html");
});