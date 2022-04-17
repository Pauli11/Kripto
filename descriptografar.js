/******** Tratamendo de Descriptografia *********/
function converteTexto(textoCapturado){
  
    return textoCapturado.replaceAll('ai','a').replaceAll('enter','e').replaceAll('ims','i').replaceAll('ober','o').replaceAll('ufat','u');
  /*
   return textoCapturado.replace(/ai/g,'a').replace(/enter/g,'e').replace(/ims/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');*/  
    
  }
  
  /* evento de click do botão descriptografar */
  var btnDescripografar = document.getElementById('btn-descripto');
  
  btnDescripografar.addEventListener('click', function(e){
    e.preventDefault();
  
    let textoCapturado = document.getElementById('input-texto').value;
    
    let exibeDesCripto = document.getElementById('msg');
    //console.log(exibeDesCripto)
    exibeDesCripto.value = converteTexto(textoCapturado);
  })
  
  /*****  função copiar ******/
  var btnCopy = document.getElementById('copiar');
  
  btnCopy.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('msg').select();
    document.execCommand('copy');
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  