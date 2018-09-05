function displayDetails(id) {
  const eventDescription = document.querySelector(`[data-panel-id="${id}"]`);
  if (eventDescription) {
    const events = document.querySelectorAll('#panels .event-card');
    events.forEach((e) => { e.classList.add('hidden')});
    const panels = document.getElementById("panels");
    panels.classList.add("show");
    eventDescription.classList.remove("hidden");
  }
}

function hideDetails() {
  const button = document.getElementById('close-panel');
  if (button) {
    button.addEventListener('click', () => {
      const panels = document.getElementById("panels");
      panels.classList.remove("show");
    })
  }
}

export {displayDetails, hideDetails};
