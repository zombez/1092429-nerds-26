
         var link = document.querySelector(".maps-button");
         var popup = document.querySelector(".catalog-window");
         var close = popup.querySelector(".cross");
         var form = popup.querySelector("form");
         var fullname = popup.querySelector("[name=fullname]");
         var email = popup.querySelector("[name=email]");
         var isStorageSupport = true;
         var storage = "";

         // try {
         // storage = localStorage.getItem("fullname");
         // } catch (err) {
         // isStorageSupport = false;
         // }

         link.addEventListener("click", function (evt) {
         evt.preventDefault();
         popup.classList.add("modal-show");

         // if (storage) {
         // fullname.value = storage;
         // email.focus();
         // } else {
         // fullname.focus();
         // }
          });

         close.addEventListener("click", function (evt) {
         evt.preventDefault();
         popup.classList.remove("modal-show");
         popup.classList.remove("modal-error");
         });

         // form.addEventListener("submit", function (evt) {
         // if (!fullname.value || !email.value) {
         // evt.preventDefault();
         // popup.classList.add("modal-error");
         // console.log("Нужно ввести Имя Фамилия и email");
         // }
         // else {
         // if (isStorageSupport) {
         // localStorage.setItem("login", fullname.value);
         //   }
         // }
         // });

         window.addEventListener("keydown", function (evt) {
         if (evt.keyCode === 27) {
         evt.preventDefault();
         if (popup.classList.contains("modal-show")) {
         popup.classList.remove("modal-show");
         popup.classList.remove("modal-error");
         }
          }
          });
