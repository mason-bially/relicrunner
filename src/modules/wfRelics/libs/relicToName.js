'use babel'

function relicToName(relic)
{
  return relic.split('.').map(s => s.toUpperCase()).join(' ');
}

export default relicToName;
