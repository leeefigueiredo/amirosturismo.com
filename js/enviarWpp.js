// function enviarWpp() {
//     let cidade = document.getElementById("cidadewpp").value;
//     let data = document.getElementById("datawapp").value;
//     let pessoas = document.getElementById("pessoaswpp").value;
//     let numerowpp = "5511999777564";

//     // let urlwpp = `https://api.whatsapp.com/send?phone=${numerowpp}&text=Olá, gostaria de realizer uma viagem para ${cidade} para ${pessoas} em ${data}.`; 

//     let urlwpp = `https://wa.me/5511999777564text=Tenho%20interesse%20em%20uma%20viagem%20para%20${cidade}%20com%20${pessoas}%20pessoas%20para%20o%20dia%20${data}`; 
//     window.open(urlwpp, '_blank');
// }

function enviarWhatsApp() {
    var select1 = document.getElementById("campo1").value;
    var select2 = document.getElementById("campo2").value;
    var select3 = document.getElementById("campo3").value;
    var texto = "Tenho interesse em uma viagem para " + select1 + ", com " + select2 + " por " + select3;
    var numeroWhatsApp = "5511999777564";  
    var url = "https://api.whatsapp.com/send?phone=" + numeroWhatsApp + "&text=" + encodeURIComponent(texto);
    window.open(url, "_blank");
}