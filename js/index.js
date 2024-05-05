// function showForm(formNumber) {
//   const form1 = document.getElementById('form1');
//   const form2 = document.getElementById('form2');

//   if (formNumber === 1) {
//       form1.style.display = 'block';
//       form2.style.display = 'none';
//   } else if (formNumber === 2) {
//       form1.style.display = 'none';
//       form2.style.display = 'block';
//   }
// }

// function showForm(formNumber) {
//   const form1 = document.getElementById("form1");
//   const form2 = document.getElementById("form2");
//   const img1 = document.getElementById("activeImg1");
//   const img2 = document.getElementById("activeImg2");

//   if (formNumber === 1) {
//     form1.style.display = "block";
//     form2.style.display = "none";
//     img1.style.display = "inline"; // Показати іконку для форми 1
//     img2.style.display = "none"; // Сховати іконку для форми 2
//   } else if (formNumber === 2) {
//     form1.style.display = "none";
//     form2.style.display = "block";
//     img1.style.display = "none"; // Сховати іконку для форми 1
//     img2.style.display = "inline"; // Показати іконку для форми 2
//   }
// }


function showForm(formNumber) {
  var form1 = document.getElementById('form1');
  var form2 = document.getElementById('form2');
  var img1 = document.getElementById('activeImg1');
  var img2 = document.getElementById('activeImg2');
  var link1 = document.querySelector('.link1');
  var link2 = document.querySelector('.link2');

  if (formNumber === 1) {
      form1.style.display = 'block';
      form2.style.display = 'none';
      img1.style.display = 'inline'; // Показати іконку для форми 1
      img2.style.display = 'none';   // Сховати іконку для форми 2
      link1.classList.add('dr_active-link');
      link2.classList.remove('dr_active-link');
  } else if (formNumber === 2) {
      form1.style.display = 'none';
      form2.style.display = 'block';
      img1.style.display = 'none';   // Сховати іконку для форми 1
      img2.style.display = 'inline'; // Показати іконку для форми 2
      link1.classList.remove('dr_active-link');
      link2.classList.add('dr_active-link');
  }
}
