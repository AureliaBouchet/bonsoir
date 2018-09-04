import "bootstrap";

import "../components/flatpickr";
import { loadDynamicLogoText } from '../components/logo';
loadDynamicLogoText();
import { loadDynamicLogoTextNavbar } from '../components/logo';
loadDynamicLogoTextNavbar();

import { formGeoloc } from '../components/form_geoloc';
formGeoloc();

import { DisplayingSearchWhenClick } from  '../components/button';
DisplayingSearchWhenClick();

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
 // infinite:true,

 responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
