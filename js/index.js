function showForm(formNumber) {
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const img1 = document.getElementById("activeImg1");
  const img2 = document.getElementById("activeImg2");
  const link1 = document.querySelector(".dr_link1");
  const link2 = document.querySelector(".dr_link2");

  if (formNumber === 1) {
    toggleForms(form1, form2, img1, img2, link1, link2);
  } else {
    toggleForms(form2, form1, img2, img1, link2, link1);
  }
}

function toggleForms(
  activeForm,
  inactiveForm,
  activeImg,
  inactiveImg,
  activeLink,
  inactiveLink
) {
  activeForm.style.display = "block";
  inactiveForm.style.display = "none";
  activeImg.style.display = "inline";
  inactiveImg.style.display = "none";
  activeLink.classList.add("dr_active-link");
  activeLink.classList.remove("dr_form-link");
  inactiveLink.classList.remove("dr_active-link");
  inactiveLink.classList.add("dr_form-link");
}


// Припустимо, що у вас є елемент <input> з класом 'date-input'
document.querySelector('.dr_input-group-2 input[type="date"]').addEventListener('click', function(event) {
 const inputWidth = this.offsetWidth;
 const clickX = event.offsetX;

  // Перевіряємо, чи клік був у області іконки (припустимо, іконка на 40px від правого краю)
  if (clickX > inputWidth - 40) {
      // Відкриваємо календар
      this.showPicker(); // це новий метод у деяких браузерах
  }
});
