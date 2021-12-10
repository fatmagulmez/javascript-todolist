//HTML DOSYASINDAN GEREKLİ İD'LERİ ALDIK

let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ullength = document.getElementsByTagName("#li"); 


// LİSTEYİ SİLMEK İÇİN ÇARPI BUTONU YAPMA

for ( let i=0; i<ullength.length; i++){
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7" // çarpı işareti oluşturuldu
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;

}

//BUTONLARA DİNLEYİCİ TANIMLAMA

btnDOM.addEventListener('click' , elemanEkle)



//FOKSİYONLAR

function check(){
    this.classList.toggle("checked");
}

function removeButton(){
    this.parentElement.remove();
}


//EKLEME

function elemanEkle(){
    if (taskDOM.value == ""){
        $(".error").toast("show");
    } else{
        $(".success").toast("show");


    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";

    liDOM.onclick = check;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;

    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");


}
}