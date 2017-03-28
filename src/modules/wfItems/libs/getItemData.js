'use babel'

import constants from './constants.js';

const default_item = {
  vaulted: false
};

function getItemData(item)
{
  const item_parts = item.split('.');

  if (item_parts[0] == 'forma')
    return {
      is_bp: (item_parts.length > 1 && item_parts[1] == 'bp')
    };

  const item_data = constants.items[item_parts[0]][item_parts[1]];
  const part_data = (item_parts.length > 2 && item_parts[2] != 'bp')
    ? { part: item_data.parts[item_parts[2]], is_part: true }
    : { is_part: false };
  const bp_data = (item_parts[item_parts.length - 1])
    ? { is_bp: true }
    : { is_bp: false };

  return {
    ...default_item,
    ...item_data,
    ...part_data,
    ...bp_data
  };
}

export default getItemData;
