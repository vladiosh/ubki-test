document
  .querySelector('.dr_input-group-2 input[type="date"]')
  .addEventListener("click", function (event) {
    const inputWidth = this.offsetWidth;
    const clickX = event.offsetX;

    if (clickX > inputWidth - 40) {
      this.showPicker();
    }
  });



  
  
  