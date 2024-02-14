//dados do personagem
let nomeHeroi = "Devorador de Fundos"
let xp = 25314
let rankingHeroi
//rankings
if (xp < 1000) {
  rankingHeroi = "Ferro"
} else if (xp >=1001 && xp <=2000) {
  rankingHeroi = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
  rankingHeroi = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
  rankingHeroi = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
  rankingHeroi = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
  rankingHeroi = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
  rankingHeroi = "Imortal"
} else {
  rankingHeroi = "Radiante"
}
//output
 console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankingHeroi)