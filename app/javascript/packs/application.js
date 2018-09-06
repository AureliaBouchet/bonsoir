import "bootstrap";
import ClipboardJS from "clipboard";

new ClipboardJS('.btn-clip');

import "../components/flatpickr";
import { loadDynamicLogoText } from '../components/logo';
loadDynamicLogoText();
import { loadDynamicLogoTextNavbar } from '../components/logo';
loadDynamicLogoTextNavbar();

import { formGeoloc } from '../components/form_geoloc';
formGeoloc();

import { DisplayingSearchWhenClick } from  '../components/button';
DisplayingSearchWhenClick();

import { scrollToAnchor, clickDownToAnchor, clickUpToAnchor } from '../components/transition-home';
scrollToAnchor();
clickDownToAnchor();
clickUpToAnchor();

// carousel

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.slick-caroussel').slick({
 slidesToShow: 1,
 // slidesToScroll: 2,
 focusOnSelect: true,
 dots: true,
 centerMode: true,
 speed:500,
 centerPadding: '300px',
 prevArrow: '<i class="fas fa-angle-left"></i>',
 nextArrow: '<i class="fas fa-angle-right"></i>',
 arrows: true,
 infinite:true,

 responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        // // centerMode: true,
        // // centerPadding: '300px',
        slidesToShow: 1,
        // height: 600

      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        // // centerMode: true,
        // // centerPadding: '300px',
        slidesToShow: 1,
        //  height: 600

      }
    }
  ]
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

import { displayDetails, hideDetails } from '../components/small-event';
global.displayDetails = displayDetails;

hideDetails();
