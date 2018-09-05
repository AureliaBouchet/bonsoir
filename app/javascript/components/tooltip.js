
function changeTootltip(id) {
  const links = document.querySelector('.links');
  const button = document.querySelector('.btn-clip');
  console.log(links);
  console.log(button)
  if (links) {
    button.addEventListener('click', () => {
    console.log(`tooltip_${id}`)
    const tooltip = document.getElementById(`tooltip_${id}`);
    const tooltip2 = document.getElementById(`tooltip2_${id}`);
    console.log(tooltip2);
    tooltip.classList.add('hidden');
    console.log("1st step");
    tooltip2.classList.remove('hidden');
    console.log("2nd step");
    });
  }
}


export { DisplayTooltipOnClick };
