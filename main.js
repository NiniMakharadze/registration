const form = document.getElementById('formElement')
const submit = document.getElementById("submitBtn")
let select = document.getElementById('options');
let text = select.options[select.selectedIndex].text;
const getObj = function(event){
    event.preventDefault()
    let obj = {
        firstName : form.elements.firstName.value,
        lastName : form.elements.lastName.value,
        date : form.elements.date.value,
        age : form.elements.age.value,
        gender: text
    }
    console.log(obj)
}
submit.addEventListener("click", getObj)