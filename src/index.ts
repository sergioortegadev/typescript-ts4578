console.log();
let Reset = "\x1b[0m",
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Underscore = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
  FgBlack = "\x1b[30m",
  FgRed = "\x1b[31m",
  FgGreen = "\x1b[32m",
  FgYellow = "\x1b[33m",
  FgBlue = "\x1b[34m",
  FgMagenta = "\x1b[35m",
  FgCyan = "\x1b[36m",
  FgWhite = "\x1b[37m",
  FgGray = "\x1b[90m",
  BgBlack = "\x1b[40m",
  BgRed = "\x1b[41m",
  BgGreen = "\x1b[42m",
  BgYellow = "\x1b[43m",
  BgBlue = "\x1b[44m",
  BgMagenta = "\x1b[45m",
  BgCyan = "\x1b[46m",
  BgWhite = "\x1b[47m",
  BgGray = "\x1b[100m";

//Usar FgColor + "%s" + BgColor una coma "," y el resto del console log

let mensaje: string = "▒▓▒ ☺ ☻ ☺ ☻ Hola Mundillo ☺ ☻ ☺ ☻ ▒▓▒";
console.log(FgGreen + "line 31 - variable mensaje: " + mensaje);

mensaje = "locaso";
console.log(Reset + "line 34 - variable reasignada: " + mensaje);

mensaje = "Chau Cocodrilo";
console.log(FgYellow + "line 37 - variable reasignada: " + mensaje);

mensaje = "nuevo";
console.log(
  Reverse + "line 40 - variable reasignada: " + Underscore + mensaje + Reset
);

let tiposNativosJS = [
  "Number",
  "String",
  "Boolean",
  "Null",
  "Undefinend",
  "Object",
  "Function",
  5,
];
let tiposTS = [
  "any (No Usar)",
  "tuplas",
  "unknown",
  "never",
  "arrays",
  "Enums",
];
let tiposInferidos =
  "Al declarar una variable podemos colocar el tipado y no inicializarla\nlet variable : number;\nTambién podemos declararla e inicializarla sin poner el tipado\nlet variable = 23;\nEn ambos casos el tipo queda fijo (detectado e inferido por TS en el segundo caso)\nEn cambio si declaramos y no la inicializamos ni ponemos el tipado se asigna 'any'. La cual NO es recomendable para trabajar en TS\nlet variable;\nconsole.log(typeof variable);   // 'any'";

console.log();

console.log(FgCyan + "line 63 - type of  " + typeof tiposNativosJS);

console.log();

console.log(Reset + "Tipos de datos Nativos JS" + BgGray);

console.table(tiposNativosJS);

console.log();

console.log(Reset + "Tipos de datos agregados por TS" + BgGray);

console.table(tiposTS);

console.log();

console.log(Reset + "Tipos Inferidos" + FgYellow);

console.log(tiposInferidos);

console.log();

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos: boolean = true;
let variableAny;

console.log(
  Reset + "Numero separado por guiones bajos: " + FgRed + extincionDinosaurios
);

console.log(Reset + "typeof de variable: " + typeof variableAny);

function chanchitoFeliz(config: any) {
  return config;
}

console.log(FgCyan);
let tupla = [3, "Sergio", true];
console.log("line106 - log de tupla: " + tupla);

tupla = [27, "hola", false];
console.log("line109 - log de tupla reasign: " + tupla);

tupla = [27, "hola"];
console.log("line112 - log de tupla reasing: " + tupla);

tupla = [31];
console.log("line115 - log de tupla reasign: " + tupla);

tupla.push(false);
console.log("line118 - log de tupla pushed: " + tupla + " ERROR no detected!");

console.log(Reset);

enum TablaDeTalles {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}
console.log("Table del 'enum' TablaDeTalles");
console.table(TablaDeTalles);
console.log("TablaDeTalles.Mediana: " + FgYellow + TablaDeTalles.Mediana);

console.log(Reset);

//  ENUM

enum ListadoEstudiantes {
  Sergio = "Ortega",
  "Juan" = "Pérez",
  "Noe" = "Arce",
  Joaquín = "Ortega Arce",
  Ernesto4 = 5,
  var = "algo",
  º123 = 12_134_156,
  _1áaÑalgo = `¿qué decís? │▒`,
}
console.table(ListadoEstudiantes);
console.log(
  "ListadoEstudiantes.Joaquín: " + FgYellow + ListadoEstudiantes.Joaquín
);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

console.log(Reset);

console.log("Loading State");
console.log(LoadingState.Idle);
console.log();

// OBJETOS

let objetoLet: {
  id: number;
  nombre: string;
};

let objetoLetInit = { id: 1, nombre: "Sergio" };

const objetoConst: {
  readonly id: number;
  nombre?: string;
} = {
  id: 2,
};

console.log("ObjetoLetInit");
console.table(objetoLetInit);
console.log();

console.log("ObjetoConst");
console.table(objetoConst);
console.log();

console.log(
  FgYellow + 'objetoConst.nombre = "Noe" ' + Reset + "  // Añadimos nombre"
);
objetoConst.nombre = "Noe";
console.table(objetoConst);
console.log();

type Dirección = {
  calle: string;
  número: number;
  ciudad: string;
};

type Persona = {
  readonly id: number;
  name: string;
  talla?: TablaDeTalles;
  dirección?: Dirección;
};

const objetoConstEnum: Persona = {
  id: 1,
  name: "Sergio",
  talla: TablaDeTalles.Grande,
  dirección: {
    calle: "Siempre viva",
    número: 123,
    ciudad: "Springfield",
  },
};

console.table(objetoConstEnum);

let objetoPersona2: Persona = {
  id: 2,
  name: "Joaquin",
  talla: TablaDeTalles.Chica,
};

const arregloPersonas: Persona[] = [
  {
    id: 1,
    name: "Joaquín",
    talla: TablaDeTalles.Chica,
    dirección: {
      calle: "Siempre Viva",
      número: 321,
      ciudad: "Springfield",
    },
  },
  {
    id: 2,
    name: "Noe",
    talla: TablaDeTalles.Mediana,
    dirección: {
      calle: "Siempre Viva",
      número: 321,
      ciudad: "Springfield",
    },
  },
  {
    id: 3,
    name: "Sergio",
    talla: TablaDeTalles.Grande,
    dirección: {
      calle: "Siempre Viva",
      número: 321,
      ciudad: "Springfield",
    },
  },
];

console.log();

console.log("Persona 2 en objeto");
console.table(objetoPersona2);
console.log("Varias Personas en arreglo nº3");
console.table(arregloPersonas);
console.log("La Dirección del Primer elemento");
console.table(arregloPersonas[0].dirección);
