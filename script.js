let notas = [];


        function obtermedia(){   
            
            number = NaN;
            
            
            notas.push(parseInt(document.getElementById("a").value));
            notas.push(parseInt(document.getElementById("b").value));
            notas.push(parseInt(document.getElementById("c").value)); 

            let length = notas.length;


                for(let i=0; i < length; i++){
                    if(notas[i] < 0){
                        let camposNegativos = true;
                    } else if(isNaN(number) == true){
                        let camposBranco = true;
                    }
                }

                if(camposBranco || camposBranco == false){
                    window.alert("Não é permitido o envio de Campos em branco e/ou Campos com valores negativos.")
                }
            

            var m    = (a+b+c) /3;

            document.getElementById("result").innerHTML = "Resultado:" + m;
        }