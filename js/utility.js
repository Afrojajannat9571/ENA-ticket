// Get Elements by id
function elementGetById(elementId) {
    let element = document.getElementById(elementId);
    return element;
  }
  
  // ------------Set Value------------//
  
  
  function elementGetByIdAndSetValue(elementId, value) {
    let element = document.getElementById(elementId);
    element.innerText = value;
  }
  
  function elementGetByIdAndInnerTextReturnToNumber(elementId) {
    let elemental = document.getElementById(elementId).innerText;
    let elementNumber = parseInt(elemental);
    return elementNumber;
  }
  