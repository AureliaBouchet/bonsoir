import flatpickr from "flatpickr";
import "flatpickr/dist/themes/confetti.css";
import "flatpickr/dist/flatpickr.min.css";
import {French} from "flatpickr/dist/l10n/fr.js";



flatpickr("#date", {
 altInput: true,
 altFormat: "j F Y",
  // dateFormat: "d-m-Y", // It creates another hidden field in your form so that November 4, 2017 is displayed to the user while the server receives database-friendly format: 2017-11-14
 // dateFormat: "d.m.Y",
 time_24hr: true,
 minDate: 'today',
 locale: French
 // dateFormat: "d-m-Y"
 // defaultDate: Date.today
 // plugins: [new rangePlugin({ input: "#reservation_date_end"})]
})


