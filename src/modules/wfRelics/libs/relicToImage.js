'use babel'

function relicToImage(relic)
{
  const relic_parts = relic.split('.');
  return `avt/${relic_parts[0]}.png`;
}

export default relicToImage;
