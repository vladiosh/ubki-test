function showForm(formNumber) {
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');

  if (formNumber === 1) {
      form1.style.display = 'block';
      form2.style.display = 'none';
  } else if (formNumber === 2) {
      form1.style.display = 'none';
      form2.style.display = 'block';
  }
}
