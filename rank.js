const nome = 'Diego';
const xp = 0;

switch(true) {
    case xp <= 1000:
        console.log("Ferro");
        break;

    case xp > 1000 && xp <= 2000:
        console.log("Bronze");
        break;

    case xp > 2000 && xp <= 5000:
        console.log("Prata");
        break;

    case xp > 5000 && xp <= 7000:
        console.log("Ouro");
        break;

    case xp > 7000 && xp <= 8000:
        console.log("Platina");
        break;

    case xp > 8000 && xp <= 9000:
        console.log("Ascendente");
        break;

    case xp > 9000 && xp <= 10000:
        console.log("Imortal");
        break;

    case xp > 10000:
        console.log("Radiante");
        break;
}