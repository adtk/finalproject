$(document).ready(function() {

var isDropdownOpen = false;

  function hideDropdown() {
    isDropdownOpen = false;
    $(".dropdown").css("display", "none");
  }

  function showDropdown() {
    isDropdownOpen = true;
    $(".dropdown").css("display", "block");
  }

  function toggleDropdown() {
    if (isDropdownOpen) {
      hideDropdown();
    }
    else {
      showDropdown();
      }
    }

  $(".menu").click(toggleDropdown);

});
