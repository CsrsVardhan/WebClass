import c4, { c5 } from "./austraila.js";
import { c1, c2, c3 } from "./india.js";
import c6, { Cadbu, c7 } from "./singapore.js";

console.log(c1,c2,c3,c5,c7,c4,c6)
Cadbu()

//! THERE ARE TWO WAYS IN EXPORTING THE ITEMS IN MODULES,THEY ARE

//? 1) NAMED EXPORT
//? 2) DEFAULT EXPORT

//? 1) NAMED EXPORT
//* IT SHOULD BE MENTIONED IN THE CURLY BRACES.

//? 2) DEFAULT EXPORT
//* WE CAN EXPORT ONLY ONE ITEM AND THAT SHOULD BE MENTIONED IN THE LAST LINE OF THE FILE. AND WHILE IMPORTING THE ITEM WE SHOULD MENTION IT AT THE FRONT OF THE REMAINIG ITEMS OR AFTER THE IMPORT STATEMENT.