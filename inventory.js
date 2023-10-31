function inventory(arr) {
  let heroes = [];

  for (let els of arr) {
    let tokens = els.split(` / `);
    let heroesObj = {
      name: tokens[0],
      level: Number(tokens[1]),
      items: tokens[2]
    }
    heroes.push(heroesObj)

  }
  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
  }
}
inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
]);