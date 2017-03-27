'use babel'

import constants from './constants.js';

const default_relic = {
  vaulted: false,
  special: false,
};

function getRelicData(relic)
{
  const relic_part = relic.split('.');
  if (relic_part.length != 2) return null;
  return {
    ...default_relic,
    ...constants.relics[relic_part[0]][relic_part[1]]
  };
}

export default getRelicData;
