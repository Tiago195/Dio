"use strict";
let anydeVorta;
anydeVorta = 'string';
anydeVorta = 2;
anydeVorta = true;
let stringTest = 'testando Any';
stringTest = anydeVorta;
let unknownBAO;
unknownBAO = 'testei';
unknownBAO = 2;
unknownBAO = true;
unknownBAO = 'testado rapaz';
// stringTest = unknownBAO;
if (typeof unknownBAO === 'string') {
    stringTest = unknownBAO;
}
function daErro(message, status) {
    throw { message, status };
}
daErro('Internal server error', 500);
