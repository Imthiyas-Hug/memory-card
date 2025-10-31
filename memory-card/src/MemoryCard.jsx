import { useState } from "react";

function MemoryCard() {
  const [data, setData] = useState([]);

let images =[
  {
    "id": 1,
    "name": "Goku",
    "ki": "60.000.000",
    "maxKi": "90 Septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
    "image": "https://dragonball-api.com/characters/goku_normal.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 2,
    "name": "Vegeta",
    "ki": "54.000.000",
    "maxKi": "19.84 Septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
    "image": "https://dragonball-api.com/characters/vegeta_normal.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 3,
    "name": "Piccolo",
    "ki": "2.000.000",
    "maxKi": "500.000.000",
    "race": "Namekian",
    "gender": "Male",
    "description": "Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A través del tiempo, también comenzó a tomarle cariño a su discípulo Son Gohan, a quien veía como una especie de \"vástago\" y formando un lazo de amistad con este.",
    "image": "https://dragonball-api.com/characters/picolo_normal.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 5,
    "name": "Freezer",
    "ki": "530.000",
    "maxKi": "52.71 Septillion",
    "race": "Frieza Race",
    "gender": "Male",
    "description": "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
    "image": "https://dragonball-api.com/characters/Freezer.webp",
    "affiliation": "Army of Frieza",
    "deletedAt": null
  },
  {
    "id": 6,
    "name": "Zarbon",
    "ki": "20.000",
    "maxKi": "30.000",
    "race": "Frieza Race",
    "gender": "Male",
    "description": "Zarbon es uno de los secuaces de Freezer y un luchador poderoso.",
    "image": "https://dragonball-api.com/characters/zarbon.webp",
    "affiliation": "Army of Frieza",
    "deletedAt": null
  },
  {
    "id": 7,
    "name": "Dodoria",
    "ki": "18.000",
    "maxKi": "20.000",
    "race": "Frieza Race",
    "gender": "Male",
    "description": "Dodoria es otro secuaz de Freezer conocido por su brutalidad.",
    "image": "https://dragonball-api.com/characters/dodoria.webp",
    "affiliation": "Army of Frieza",
    "deletedAt": null
  },
  {
    "id": 8,
    "name": "Ginyu",
    "ki": "9.000",
    "maxKi": "25.000",
    "race": "Frieza Race",
    "gender": "Male",
    "description": "Ginyu es el líder del la élite de mercenarios de mayor prestigio del Ejército de Freeza, la cual lleva el nombre de Fuerzas Especiales Ginew en su honor[9].",
    "image": "https://dragonball-api.com/characters/ginyu.webp",
    "affiliation": "Army of Frieza",
    "deletedAt": null
  },
  {
    "id": 9,
    "name": "Celula",
    "ki": "250.000.000",
    "maxKi": "5 Billion",
    "race": "Android",
    "gender": "Male",
    "description": "Cell conocido como Célula en España, es un bioandroide creado por la computadora del Dr. Gero, quien vino del futuro de la línea 3 con la intención de vengarse de Goku por haber acabado con el Ejército del Listón Rojo, y con ello el sueño de todo villano: dominar el mundo. Es el antagonista principal del Arco de los Androides y Cell.",
    "image": "https://dragonball-api.com/characters/celula.webp",
    "affiliation": "Freelancer",
    "deletedAt": null
  },
  {
    "id": 10,
    "name": "Gohan",
    "ki": "45.000.000",
    "maxKi": "40 septillion",
    "race": "Saiyan",
    "gender": "Male",
    "description": "Son Gohanda en su tiempo en España, o simplemente Gohan en Hispanoamérica, es uno de los personajes principales de los arcos argumentales de Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es un mestizo entre saiyano y humano terrícola. Es el primer hijo de Son Goku y Chi-Chi, hermano mayor de Son Goten, esposo de Videl y padre de Pan.",
    "image": "https://dragonball-api.com/characters/gohan.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 11,
    "name": "Krillin",
    "ki": "1.000.000",
    "maxKi": "1 Billion",
    "race": "Human",
    "gender": "Male",
    "description": "Amigo cercano de Goku y guerrero valiente, es un personaje del manga y anime de Dragon Ball. Es uno de los principales discípulos de Kame-Sen'nin, Guerrero Z, y el mejor amigo de Son Goku. Es junto a Bulma uno de los personajes de apoyo principales de Dragon Ball, Dragon Ball Z y Dragon Ball Super. Aparece en Dragon Ball GT como personaje secundario. En el Arco de Majin Boo, se retira de las artes marciales, optando por formar una familia, como el esposo de la Androide Número 18 y el padre de Marron.",
    "image": "https://dragonball-api.com/characters/Krilin_Universo7.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 12,
    "name": "Tenshinhan",
    "ki": "2.400.000",
    "maxKi": "80.000.000",
    "race": "Human",
    "gender": "Male",
    "description": "Maestro de las artes marciales y miembro de los Z Fighters.  Es un personaje que aparece en el manga y en el anime de Dragon Ball, Dragon Ball Z, Dragon Ball GT y posteriormente en Dragon Ball Super.",
    "image": "https://dragonball-api.com/characters/Tenshinhan_Universo7.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 13,
    "name": "Yamcha",
    "ki": "1.980.000",
    "maxKi": "4.000.000",
    "race": "Human",
    "gender": "Male",
    "description": "Luchador que solía ser un bandido del desierto.",
    "image": "https://dragonball-api.com/characters/Final_Yamcha.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  },
  {
    "id": 15,
    "name": "Gotenks",
    "ki": "65.600.000",
    "maxKi": "34.8 Billion",
    "race": "Saiyan",
    "gender": "Male",
    "description": " Gotenks también conocido inicialmente como Gotrunk en el doblaje al español de España, es el resultado de la Danza de la Fusión llevada a cabo correctamente por Goten y Trunks.",
    "image": "https://dragonball-api.com/characters/Gotenks_Artwork.webp",
    "affiliation": "Z Fighter",
    "deletedAt": null
  }]

  return <>
        {data.map(gif => console.log(gif)
        )}
    </>;
}
export default MemoryCard;
