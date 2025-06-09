document.getElementById("liveToastBtn").addEventListener("click", function () {
  var toastEl = document.getElementById("liveToast");
  var toast = new bootstrap.Toast(toastEl);
  toast.show();
});
