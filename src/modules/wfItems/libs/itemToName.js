'use babel'

const shorthandNames = {
  as: 'Systems', // Archwing
  bp: 'Blueprint',
  bd: 'Blade',
  bk: 'Buckle',
  bl: 'Barrel',
  bn: 'Band',
  ce: 'Carapace',
  ci: 'Chassis',
  cm: 'Cerebrum',
  dk: 'Disc',
  gp: 'Grip',
  gt: 'Gauntlet',
  hd: 'Head',
  hl: 'Handle',
  ht: 'Hilt',
  hs: 'Harness',
  lb: 'Lower Limb',
  lk: 'Link',
  nc: 'Neuroptics',
  pc: 'Pouch',
  rv: 'Receiver',
  sg: 'String',
  sk: 'Stock',
  sm: 'Systems', // Warframe
  sr: 'Stars',
  ss: 'Systems', // Sentinal
  ub: 'Upper Limb',
  wg: 'Wings',
}

function itemToName(itemShorthand, upperCase=true, specialName="")
{
  let index = 0;
  let sh_parts = itemShorthand.split('.');

  let res_parts = [];
  if (sh_parts[index] == "prime") {
    res_parts = res_parts.concat([ "Prime" ]);
    index++;
  }

  res_parts = Array.from(sh_parts[index]
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))).concat(res_parts);
  index++;

  if (specialName != "") res_parts = specialName.split(" ");

  sh_parts = res_parts.concat(sh_parts.slice(index).map(
    p => (p in shorthandNames) ? shorthandNames[p] : "???")
  );

  if (upperCase) sh_parts = sh_parts.map(s => s.toUpperCase());

  return sh_parts.join(" ");
}

export default itemToName;
