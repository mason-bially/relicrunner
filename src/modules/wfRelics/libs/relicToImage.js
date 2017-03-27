'use babel'

function relicToImage(relic)
{
  const relic_parts = relic.split('.');
  return `avt/relics/${relic_parts[0]}.png`;
}

export default relicToImage;
