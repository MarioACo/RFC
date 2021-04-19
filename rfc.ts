//se declara el array que obtendra los datos de el usuario como nombre completo y fecha de nacimiento
let rfc = ["Luis", "Ich", "Plazuelos", "1/12/1995"];
//variable que guardara las primera letra del nombre
let nombre;
//variable que guardara las primeras dos letras del nombre
let apellidor ;
//variable que guardara la primera letra del nombre
let apellidom;
//variable que guardara la estructura de la fecha del rfc
let fechar;
//variable aux que marcara si el usuario tiene apellido compuesto 
let it;

//ciclo de repeticion para recorrer el array de datos
for (let i = 0; i < rfc.length; i++) {
    //esta condicion nos servira para identificar si el usuario tiene mas de un nombre
    if (rfc.length > 4) {
        //condicion en la que entrara si es igual al nombre para modificar sus datos
        if (rfc[i] == rfc[0]) {
            //variable que divide el nombre por seccion de letras
            let nombrep = rfc[0].split("", rfc[0].length);
            //variable que concatena la primera y segunda letra del nombre
            let nombrepC = nombrep[0].concat(nombrep[1]);
            //variable que guardara la primera letra del nombre
            let nombrepCo = nombrep[0];
            //aqui hacemos que los datos de la variable se hagan mayus
            nombrepCo = nombrepCo.toUpperCase();
            nombrepC = nombrepC.toUpperCase();
            //condicion que entra si el usuario tiene dos nombres y si empieza con MA o J 
            //se salta a su segundo nombre si no se queda normal
            if (nombrepC == "MA" || nombrepC == "J") {
                //guardamos la primera letra del nombre en la variable nombre
                nombre = rfc[1].split("", 1);
            } else {
                nombre = rfc[i].split("", 1);
            }



        }
        //condicion en la que entrara si es el apellido empieza en dos por que estamos en las condiciones de dos nombres
        if (rfc[i] == rfc[2]) {
            //declaramos la variable aux que dividira las primeras dos letras del apellido
            let apellido = rfc[i].split("", 2);
            //variable aux que nos permitira ver cuando hay un espacio para identificar si el apellido esta compuesto
            let espacio = rfc[1].split("", rfc[1].length);
            //ciclo de repeticion que recorrera el array de espacio en busca de un espacio
            for (let i = 0; i <= espacio.length; i++) {
                //condicional que nos permite encontrar si hay un espacio en el codigo
                if (espacio[i] == " ") {
                    //aqui guardamos las letras que sigue despues del apellido compuesto
                    apellidor = espacio[i + 1];
                    apellidor = apellidor + espacio[i + 2];
                    //variable aux que nos permitira entrar a una condicional
                    it = 1;


                }
            }
            //condicional que nos permite cambiar el dato si el apellido tiene caracteres especiales
            if (apellido[0] == '/' || apellido[0] == '-' || apellido[0] == '.') {
                //cambiamos el caracter especial por una X
                apellido[0] = "X";
                //concatenamos la primera letra con la segunda para formar un string
                apellidor = apellido[0].concat(apellido[1]);
                //condicional que nos permite cambiar el dato si el caracter aparece en la segunda letra del apellido
            } else if (apellido[1] == '/' || apellido[1] == '-' || apellido[1] == '.') {
                apellido[1] = "X";
                apellidor = apellido[0].concat(apellido[1]);
                //condicional que entra si el apellido en la primera letra tiene una Ñ
            } else if (apellido[0] == 'Ñ') {
                //variable que cambia la Ñ por una X
                apellido[0] = "X";
                apellidor = apellido[0].concat(apellido[1]);

                //aqui se usa la variable aux que obtuvimos al principio para ver si tenia un apellido compuesto
            } else if (it == 1) {
                apellidor;
                //else que nos permite entrar para concatenar si el apellido no tiene ninguna de las dificultades
            }else {
                apellidor = apellido[0].concat(apellido[1]);

            }


        }
        //condicional que nos permite entrar cuando estemos situados en el apellido materno
        if (rfc[i] == rfc[3]) {
            //separamos la primera letra del apellido materno
            apellidom = rfc[i].split("", 1);
            //condicional que nos permite entrar si el apellido tiene un caracter especial y cambiarlo por una X
            if (apellidom[0] == '/' || apellidom[0] == '-' || apellidom[0] == '.') {
                apellidom = "X";
                //condicional que nos permite entrar si el usuario no tiene apellido secundario
            } else if (apellidom[0] == undefined) {
                apellidom = "X";

            }
            // condicional que nos permite entrar si la primera letra del apellido es una Ñ y asi cambiarla por una X
            if (apellidom[0] == 'Ñ') {
                apellidom = "X";



            }

        }
        //condicional que nos permite entrar cuando estemos situados en la fecha
        if (rfc[i] == rfc[4]) {
            //variable que separa la fecha si encuentra una /
            let fecha = rfc[i].split("/", 10);
            //variable que guarda los ultimos dos digitos del año
            let año = fecha[2].split("", 4);
            //variable que guarda los dos ultimos numeros del año en un solo string 
            let añor = año[2].concat(año[3]);
            //variable que guarda el mes
            let mes = fecha[1];
            //variable que guarda el dia
            let dia = fecha[0];
            //hacemos una congugacion de los datos obtenidos para obtener la fecha en el rfc
            fechar = añor + mes + dia;

        }
    
        // else donde entra si el usuario solo tiene un nombre
    } else {
        //condicion para sacar la primera letra del nombre con split
        if (rfc[i] == rfc[0]) {
            nombre = rfc[i].split("", 1);


        }
        // condicion para sacar las primeras dos letras del apellido
        if (rfc[i] == rfc[1]) {
            let apellido = rfc[i].split("", 2);
            let espacio = rfc[1].split("", rfc[1].length);
            //variable aux que guarda la regexp de las vocales
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
                //condicional que entra si el apellido no tiene vocal interna
            }else if(!rg.test(apellido[1])){
                //cambiamos la segunda letra por una X
                apellido[1] = "X";
                //concatenamos los datos con el nuevo valor
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
//las hacemos mayus
rfcC = rfcC.toUpperCase()

//Por si junta palabras altisonantes el rfc
let rfcCA, rfcCa;
//condicional que entra si se encuentra palabras altisonantes
if (rfcC == "PEDO") {
    //dividimos el rfc 
    rfcCA = rfcC.split("", 4);
    //cambiamos la segunda letra por una X
    rfcCA[1] = "X";
    //juntamos de nuevo el nombre en base a la rfc
    rfcCa = rfcCA[0] + rfcCA[1] + rfcCA[2] + rfcCA[3];
    //le concatenamos la fecha
    rfcCa = rfcCa + fechar;
    //le pasamos el datos a la variable para sobreescribir
    rfcC = rfcCa;
    //else que entra si el rfc no hace palabras altisonantes
} else {
    rfcC = rfcC + fechar;
}

//imprimimos en consola el rfc

console.log(rfcC);