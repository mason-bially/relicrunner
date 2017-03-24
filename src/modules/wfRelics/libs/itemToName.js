'use babel'

const shorthandNames = {
  bp: 'Blueprint',
  bd: 'Blade',
  bn: 'Band',
  bl: 'Barrel',
  bk: 'Buckle',
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
  sg: 'String',
  sk: 'Stock',
  sm: 'Systems',
  sr: 'Stars',
  rv: 'Receiver',
  ub: 'Upper Limb',
  wg: 'Wings',
}

function itemToName(itemShorthand, upperCase=true, specialName="")
{
  let sh_parts = itemShorthand.split('.');

  const primaryNameParts = sh_parts[0]
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1));
  let primaryName = Array.from(primaryNameParts).concat([ "Prime" ]);
  if (specialName != "") primaryName = specialName.split(" ");

  sh_parts = primaryName.concat(sh_parts.slice(1).map(
    p => (p in shorthandNames) ? shorthandNames[p] : "???")
  );

  if (upperCase) sh_parts = sh_parts.map(s => s.toUpperCase());

  return sh_parts.join(" ");
}

export default itemToName;
