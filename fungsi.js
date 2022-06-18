function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "bimasena" && password == "123") {
        alert("login berhasil");
    } 
    else if (username == "" && password == "") {
        alert("username dan password tidak boleh kosong");
    } 
    else {
        alert("username dan password salah");

    }

}