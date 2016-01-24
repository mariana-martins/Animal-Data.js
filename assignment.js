

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled
// templates many times
var detail_template, animals_template, categories_template, breadcrumb_template;

// variables to store the current displayed album and photo
var current_category, details;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
    var html    = breadcrumb_template({current_category: current_category, details: details}) + template(data);
    $('#content').html(html);
}

// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

    //
    // compile all of our templates ready for use
    //
    var source   = $("#categories-template").html();
    categories_template = Handlebars.compile(source);

    source   = $("#animals-template").html();
    animals_template = Handlebars.compile(source);

    source   = $("#detail-template").html();
    detail_template = Handlebars.compile(source);

    source   = $("#breadcrumb-template").html();
    breadcrumb_template = Handlebars.compile(source);


    showTemplate(categories_template, animals_data);

});

function onclick_category(position){
    current_category = animals_data.category[position];
    showTemplate(animals_template,current_category);
}

function onclick_animal(position){
    details = current_category.animals[position];
    showTemplate(detail_template, details)
}

function onclick_breadcrumbs(){
    details = null;
    showTemplate(animals_template, current_category)
}