import $ from 'jquery';
import whatInput from 'what-input';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );

// initialize isotope
var $grid = $('.container').isotope({
  itemSelector: '.filterable',
  percentPosition: true,
//   filter: ['.junior', '.senior']
//   layoutMode: 'fitColumns',
//   masonry: {
    // columnWidth: '.grid-sizer',
    // gutter: 40,
//     // cornerStampSelector: '.corner-stamp'
//   }
});

// filter items on button click
$('.filter-button').on( 'click', function() {
    var filterValue = $(this).attr('data-filter');
    filterValue = filterValue.split(' ');
    console.log(filterValue);
    $grid.isotope({ filter: filterValue });
  });

$(document).foundation();


// // Isotope plugin
// Filter and search: https://codepen.io/desandro/pen/mCdbD
// var Isotope = require('isotope-layout');
// var iso = new Isotope( '.grid', {
//   // options...
// });

//http://www.wookmark.com/jquery-plugin

// Lighter alternative
// http://yiotis.net/filterizr/

// Another
// https://www.kunkalabs.com/mixitup/licenses/

// https://vestride.github.io/Shuffle/


// Star rating
$('[data-rating] .star').on('click', function() {
    var selectedCssClass = 'selected';
    var $this = $(this);
    console.log('hola');
    $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
    $this
      .addClass(selectedCssClass)
      .parent().addClass('is-voted');
  });
