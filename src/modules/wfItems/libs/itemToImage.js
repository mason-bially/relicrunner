'use babel'

function itemToImage(itemShorthand)
{
  let index = 0;
  let sh_parts = itemShorthand.split('.');

  let is_prime = sh_parts[index] == 'prime';
  if (is_prime) index++;
  let is_bp = sh_parts[sh_parts.length - 1] == 'bp';

  let is_part = sh_parts.length > (index + 1 + (is_bp ? 1 : 0))

  if (is_prime && is_part) {
    return `avt/item/${result}.png`;
  }
  else {
    return `avt/item/default.png`;
  }
}

export default itemToImage;
