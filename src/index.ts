let calculo1: number = 0;
let calculo2: number = 0;
let calculo3: number = 0;
let calculo4: number = 0;
let calculo5: number = 0;
let calculo6: number = 0;
let calculo7: number = 0;

function calcularAreaTriangulo(base: number, altura: number): number {
  let calculo: number = 0;
  calculo = base * altura;
  console.log(
    `El àrea del triàngulo con una base ${base} y una altura de ${altura} es ${calculo}`
  );

  return;
}

let calculodeArea: number = calcularAreaTriangulo(1, 2);

calculo1 = calculodeArea;
console.log(calculo1);
calculodeArea = calcularAreaTriangulo(2, 4);

calculo2 = calculodeArea;
console.log(calculo2);

calculodeArea = calcularAreaTriangulo(3, 6);

calculo3 = calculodeArea;
console.log(calculo3);

calculodeArea = calcularAreaTriangulo(4, 8);

calculo4 = calculodeArea;
console.log(calculo4);
calculodeArea = calcularAreaTriangulo(5, 10);

calculo5 = calculodeArea;
console.log(calculo5);

calculodeArea = calcularAreaTriangulo(6, 12);

calculo6 = calculodeArea;
console.log(calculo6);

calculodeArea = calcularAreaTriangulo(7, 14);

calculo7 = calculodeArea;
console.log(calculo7);
