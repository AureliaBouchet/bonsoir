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

  const buttons = document.querySelectorAll('#close-panel, #list-view, #map-view');
  if (buttons) {
    buttons.forEach((button)=>{
      button.addEventListener('click', () => {
        const panels = document.getElementById("panels");
        panels.classList.remove("show");
        console.log("test bouton");
      })
    })
  }
}

export {displayDetails, hideDetails};
