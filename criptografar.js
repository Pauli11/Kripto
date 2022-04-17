

/*********  tratamento de Criptografia **********/
function criptografar() {
  let textoDigitado= document.getElementById("input-texto").value;
  
  let arrayTexto = textoDigitado.split('');
  let textoCriptografado;

  for (var i = 0; i < arrayTexto.length; i++) {

      if (arrayTexto[i] == 'a') {
          arrayTexto[i] = 'ai'
      }
      if (arrayTexto[i] == 'e') {
          arrayTexto[i] = 'enter'
      }
      if (arrayTexto[i] == 'i') {
          arrayTexto[i] = 'imes'
      }
      if (arrayTexto[i] == 'o') {
          arrayTexto[i] = 'ober'
      }
      if (arrayTexto[i] == 'u') {
          arrayTexto[i] = 'ufat'
      }
  }

  textoCriptografado = arrayTexto.join('');
  //console.log(textoCriptografado);

  let exibeCripto = document.getElementById('msg');
  //console.log(exibeCripto)
  exibeCripto.value = textoCriptografado;
}

/* evento de click do botão criptografar */
 var btnCripto = document.getElementById("btn-cripto");

btnCripto.addEventListener('click', function (e) {
  e.preventDefault();

  criptografaTexto();
})
 


// ________________________________PRIMEIRA TENTATIVA__________________
/* function criptografar(textoDigitado){
  if (textoDigitado ="a"){
    document.write("ai");
 }

 if (textoDigitado ="e"){
     document.write("enter");
 }
 
 if (textoDigitado ="i"){
     document.write("imes");
 }

  if (textoDigitado ="o"){
    document.write("ober");
 }

 if (textoDigitado ="u"){
    document.write("ufat");
 }else{
        document.write (textoDigitado);
 }
 return textoCriptografado;
}

//______ passar o texto para a caixa de mensagem __________

var resultadoTexto;
resultadoTexto.value = textoCriptografado;

var resultadoTexto = document.getElementById('msg box');
 */


















// _____________________________Primeira tentativa, incompleta ________________
//const textoPermitido=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//let resultadoTexto ="";



//function criptografar (resultadoTexto) { 

 //   for( let index = 0;  index < textoPermitido.length; index++ ); {

 //       
 //       if (textoDigitado ="a"){
   //         console.log("ai");
     //   }

     //   if (textoDigitado ="e"){
     //       console.log("enter");
     //   }
        
     //   if (textoDigitado ="i"){
     //       console.log("imes");
     //   }

    // if (textoDigitado ="o"){
    //        console.log("ober");
    //    }

    //    if (textoDigitado ="u"){
    //        console.log("ufat");
    //    }else{
    //        console.log (textoDigitado);
    //    }
    //}
//}



    





    

// 17/4/22: criptografar seria:
// 1- capturar o texto digitado;
// 2-verificar se o textoDigitado corresponde aos parâmetros de letras minúsculas e sem acentuação; Se sim> faz a conversão. Se não: mostrar alert ou alguma outra mensagem de erro
//3- Criptografar o texto recebido.

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
    */