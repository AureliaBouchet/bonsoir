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
 slidesToShow: 3,
 dots: true,
 centerMode: true,
 speed:500,
 // centerPadding: '40px',
 // arrows: true,
 // infinite:true,

 responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        //centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
