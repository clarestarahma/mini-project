function showData(event){
    event.preventDefault();

    const name = " " + document.getElementById("input-nama").value;
    const birthdate = document.getElementById("input-birthdate").value;
    const message = document.getElementById("input-message").value;

    const gender = document.querySelector("input[name=gender]:checked");
    const genderValue = gender ? gender.value:"-";

    if(name === "" || birthdate === "" || message=== "") {
        alert("Semua formulis harus diisi!");
        return;
    }

    document.getElementById("welcome-name").innerText = name;

    const timeNow = new Date();
    document.getElementById("time").innerText = timeNow.toString();

    document.getElementById("res-nama").innerText = name;
    document.getElementById("birthdate").innerText = birthdate;
    document.getElementById("gender").innerText = genderValue;
    document.getElementById("message").innerText = message;

    document.getElementById("result-container").style.display = "block";
}