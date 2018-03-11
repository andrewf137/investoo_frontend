import $ from 'jquery';
//import whatInput from 'what-input';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
window.$ = $;


// import Foundation from 'foundation-sites';
import './lib/foundation-explicit-pieces';


// import fontawesome icons;
import './lib/fontawesome';


// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );


// initialize isotope
var $grid = $('.isotope-container').isotope({
    itemSelector: '.filterable',
    percentPosition: true,
});


// foundation initialization
$(document).foundation();


// filter items on button click
$('.filter-button').on( 'click', function() {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterValue.split(' ');
    $grid.isotope({ filter: filterValue });
});


// Star rating
$('[data-rating] .star').on('click', function() {
    var selectedCssClass = 'selected';
    var $this = $(this);
    $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
    $this
        .addClass(selectedCssClass)
        .parent().addClass('is-voted');
});


// Set options for every card dropdown
var options = {
    parentClass:        null,    //  Class that designates bounding container of Dropdown (default: window)
    hoverDelay:         250,     //  Amount of time to delay opening a submenu on hover event.
    hover:              false,   //  Allow submenus to open on hover events
    hoverPane:          false,   //  Don't close dropdown when hovering over dropdown pane
    vOffset:            -464,        //  Number of pixels between the dropdown pane and the triggering element on open.
    hOffset:            40,       //  Number of pixels between the dropdown pane and the triggering element on open.
    position:           'bottom',  //  Position of dropdown. Can be left, right, bottom, top, or auto.
    alignment:          'left',  //  Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
    allowOverlap:       true,   //  Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
    allowBottomOverlap: true,    //  Allow overlap of only the bottom of the container. This is the most common behavior for dropdowns, allowing the dropdown to extend the bottom of the screen but not otherwise influence or break out of the container.
    trapFocus:          false,   //  Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
    autoFocus:          false,   //  Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
    closeOnClick:       true    //  Allows a click on the body to close the dropdown.
}
$('.course-details').each(function(i, val){
    var cardId = $(this).attr('data-card-id');
    var $dropdown = new Foundation.Dropdown($(this), options);
    $('#'+cardId).on('click', function() {
        $dropdown.toggle();
    });
});