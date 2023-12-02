/* import axios from "axios";
import Swal from "sweetalert2"; */

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelector(".lista-conocimientos");

  // Limpiar las alertas
/*   let alerts = document.querySelector(".alertas");

  if (alerts) {
    clearAlerts();
  } */

  if (skills) {
    skills.addEventListener("click", addSkills);
    // una vez que estamos en editar, llamar la función
    skillsSelected();
  }

/*   const vacanciesListing = document.querySelector(".panel-administracion");

  if (vacanciesListing) {
    vacanciesListing.addEventListener("click", actionsList);
  } */
});

const skills = new Set();
const addSkills = (event) => {
  if (event.target.tagName === "LI") {
    if (event.target.classList.contains("activo")) {
      // quitarlo del set y quitar la clase
      skills.delete(event.target.textContent);
      event.target.classList.remove("activo");
    } else {
      // agregarlo al set y agregar la clase
      skills.add(event.target.textContent);
      event.target.classList.add("activo");
    }
  }
  const skillsArray = [...skills];
  document.querySelector("#skills").value = skillsArray;
};

const skillsSelected = () => {
  const selected = Array.from(
    document.querySelectorAll(".lista-conocimientos .activo"),
  );

  selected.forEach((selected) => {
    skills.add(selected.textContent);
  });

  // inyectarlo en el hidden
  const skillsArray = [...skills];
  document.querySelector("#skills").value = skillsArray;
};

/* const clearAlerts = () => {
  const alerts = document.querySelector(".alertas");
  const interval = setInterval(() => {
    if (alerts.children.length > 0) {
      alerts.removeChild(alerts.children[0]);
    } else if (alerts.children.length === 0) {
      alerts.parentElement.removeChild(alerts);
      clearInterval(interval);
    }
  }, 2000);
};

// Eliminar vacantes
const actionsList = (e) => {
  e.preventDefault();

  if (e.target.dataset.eliminar) {
    // eliminar por axios
    Swal.fire({
      title: "¿Confirmar Eliminación?",
      text: "Una vez eliminada, no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar",
    }).then((result) => {
      if (result.value) {
        // enviar la petición con axios
        const url = `${location.origin}/vacancies/remove/${e.target.dataset.eliminar}`;

        // Axios para eliminar el registro
        axios
          .delete(url, { params: { url } })
          .then(function (response) {
            if (response.status === 200) {
              Swal.fire("Eliminado", response.data, "success");

              //Eliminar del DOM
              e.target.parentElement.parentElement.parentElement.removeChild(
                e.target.parentElement.parentElement,
              );
            }
          })
          .catch(() => {
            Swal.fire({
              type: "error",
              title: "Hubo un error",
              text: "No Se pudo eliminar",
            });
          });
      }
    });
  } else if (e.target.tagName === "A") {
    window.location.href = e.target.href;
  } 
};*/
