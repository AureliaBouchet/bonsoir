import flatpickr from "flatpickr";
import "flatpickr/dist/themes/confetti.css";
import "flatpickr/dist/flatpickr.min.css";

flatpickr("#date", {
 altInput: true, // It creates another hidden field in your form so that November 4, 2017 is displayed to the user while the server receives database-friendly format: 2017-11-14
 // dateFormat: "d.m.Y",
 time_24hr: true
 // defaultDate: Date.today
 // plugins: [new rangePlugin({ input: "#reservation_date_end"})]
});
