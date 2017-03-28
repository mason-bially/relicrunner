'use babel'

import constants from './constants.js';

const default_relic = {
  vaulted: false,
  special: false,
};

function getRelicData(relic)
{
  const relic_parts = relic.split('.');
  if (relic_parts.length != 2) return null;
  return {
    ...default_relic,
    ...constants.relics[relic_parts[0]][relic_parts[1]]
  };
}

export default getRelicData;
