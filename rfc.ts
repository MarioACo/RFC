//se declaran las variables que se usaran en todo el codigo
let rfc = ["Luis", "Ich", "Plazuelos", "1/12/1995"];
let nombre;
let apellidor ;
let apellidom;
let fechar;
let it;

//ciclo de repeticion para recorrer el array de datos

for (let i = 0; i < rfc.length; i++) {
    //condicion por si el usuario tiene dos nombres
    if (rfc.length > 4) {
        if (rfc[i] == rfc[0]) {

            let nombrep = rfc[0].split("", rfc[0].length);
            let nombrepC = nombrep[0].concat(nombrep[1]);
            let nombrepCo = nombrep[0];
            nombrepCo = nombrepCo.toUpperCase();
            nombrepC = nombrepC.toUpperCase();
            if (nombrepC == "MA" || nombrepC == "J") {
                nombre = rfc[1].split("", 1);
            } else {
                nombre = rfc[i].split("", 1);
            }



        }
        if (rfc[i] == rfc[2]) {
            let apellido = rfc[i].split("", 2);
            let espacio = rfc[1].split("", rfc[1].length);

            for (let i = 0; i <= espacio.length; i++) {
                if (espacio[i] == " ") {
                    apellidor = espacio[i + 1];
                    apellidor = apellidor + espacio[i + 2];
                    it = 1;
                    console.log(apellidor);

                }
            }
            if (apellido[0] == '/' || apellido[0] == '-' || apellido[0] == '.') {
                apellido[0] = "X";
                apellidor = apellido[0].concat(apellido[1]);
            } else if (apellido[1] == '/' || apellido[1] == '-' || apellido[1] == '.') {
                apellido[1] = "X";
                apellidor = apellido[0].concat(apellido[1]);
            } else if (apellido[0] == 'Ñ') {
                apellido[0] = "X";
                apellidor = apellido[0].concat(apellido[1]);


            } else if (it == 1) {
                apellidor;

            }else {
                apellidor = apellido[0].concat(apellido[1]);

            }


        }
        if (rfc[i] == rfc[3]) {
            apellidom = rfc[i].split("", 1);

            if (apellidom[0] == '/' || apellidom[0] == '-' || apellidom[0] == '.') {
                apellidom = "X";
            } else if (apellidom[0] == undefined) {
                apellidom = "X";

            }
            if (apellidom[0] == 'Ñ') {
                apellidom = "X";



            }

        }
        if (rfc[i] == rfc[4]) {
            let fecha = rfc[i].split("/", 10);
            let año = fecha[2].split("", 4);
            let añor = año[2].concat(año[3]);
            let mes = fecha[1];
            let dia = fecha[0];
            fechar = añor + mes + dia;

        }

    } else {
        //condicion para sacar la primera letra del nombre con split
        if (rfc[i] == rfc[0]) {
            nombre = rfc[i].split("", 1);


        }
        // condicion para sacar las primeras dos letras del apellido
        if (rfc[i] == rfc[1]) {
            let apellido = rfc[i].split("", 2);
            let espacio = rfc[1].split("", rfc[1].length);
            let rg = /[aeiou]/;

            for (let i = 0; i <= 3; i++) {
                if (espacio[i] == " ") {
                    apellidor = espacio[i + 1];
                    apellidor = apellidor + espacio[i + 2];
                    it = 1;
                    console.log(apellidor);

                }
            }
            //condicion por si el apellido tiene simbolos en su apellido
            if (apellido[0] == '/' || apellido[0] == '-' || apellido[0] == '.') {
                apellido[0] = "X";
                apellidor = apellido[0].concat(apellido[1]);
            } else if (apellido[1] == '/' || apellido[1] == '-' || apellido[1] == '.') {
                apellido[1] = "X";
                apellidor = apellido[0].concat(apellido[1]);
                //condicion por si el nombre tiene una ñ para cambiarla por una x
            } else if (apellido[0] == 'Ñ') {
                apellido[0] = "X";
                apellidor = apellido[0].concat(apellido[1]);


            } else if (it == 1) {
                apellidor;
                
            }else if(!rg.test(apellido[1])){
                apellido[1] = "X";
                apellidor = apellido[0].concat(apellido[1]);

            } else {
                apellidor = apellido[0].concat(apellido[1]);

            }


        }
        //condicion para sacar la primera letra del segundo apellido
        if (rfc[i] == rfc[2]) {
            apellidom = rfc[i].split("", 1);

            if (apellidom[0] == '/' || apellidom[0] == '-' || apellidom[0] == '.') {
                apellidom = "X";
                //condicion por si no tiene segundo apellido
            } else if (apellidom[0] == undefined) {
                apellidom = "X";

            } else if (apellidom[0] == 'Ñ') {
                apellidom = "X";



            }

        }
        //condicion para sacar la fecha 
        if (rfc[i] == rfc[3]) {
            let fecha = rfc[i].split("/", 10);
            let año = fecha[2].split("", 4);
            let añor = año[2].concat(año[3]);
            let mes = fecha[1];
            let dia = fecha[0];
            fechar = añor + mes + dia;

        }
    }


}

//unimos todas las variables que se sacaron en las condiciones
let rfcC = apellidor + apellidom + nombre;
rfcC = rfcC.toUpperCase()

//Por si junta palabras altisonantes el rfc
let rfcCA, rfcCa;
if (rfcC == "PEDO") {
    rfcCA = rfcC.split("", 4);
    rfcCA[1] = "X";
    rfcCa = rfcCA[0] + rfcCA[1] + rfcCA[2] + rfcCA[3];
    rfcCa = rfcCa + fechar;
    rfcC = rfcCa;
} else {
    rfcC = rfcC + fechar;
}

console.log(rfcC);