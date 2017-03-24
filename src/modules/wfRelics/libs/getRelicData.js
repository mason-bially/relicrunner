'use babel'

import constants from './constants.js';

function getRelicData(relic)
{
  const relic_part = relic.split('.');
  if (relic_part.length != 2) return null;
  return constants.relics[relic_part[0]][relic_part[1]];
}

export default getRelicData;
