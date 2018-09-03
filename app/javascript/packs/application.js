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
