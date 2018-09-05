function displayDetails(id) {
  const events = document.querySelectorAll('#panels .event-card');
  events.forEach((e) => { e.classList.add('hidden')});
  const panels = document.getElementById("panels");
  panels.classList.add("show");
  const eventDescription = document.querySelector(`[data-panel-id="${id}"]`);
  eventDescription.classList.remove("hidden");
}

export {displayDetails};
