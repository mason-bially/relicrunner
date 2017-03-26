'use babel'

const relics = {
  'lith': {
    a1: {
      valuted: true,
      drops: [
        "vasto.rv",
        "braton.bl",
        "forma",
        "saryn.nc.bp",
        "vectis.bp",
        "akstiletto.bp",
      ],
    },
    c1: {
      valuted: true,
      drops: [
        "fang.bd",
        "nova.nc.bp",
        "nova.sm.bp",
        "kavasa.bn",
        "forma",
        "carrier.cm",
      ],
    },
    f1: {
      valuted: true,
      drops: [
        "fang.bd",
        "paris.bp",
        "forma",
        "odonata.bp",
        "scindo.bp",
        "fragor.bp",
      ],
    },
    f2: {
      valuted: true,
      drops: [
        "odonata.sm.bp",
        "hikou.sr",
        "paris.ub",
        "burston.bl",
        "fang.hl",
        "vauban.bp",
      ],
    },
    g1: {
      valuted: true,
      drops: [
        "latron.bp",
        "frost.ci.bp",
        "reaper.hl",
        "ember.sm.bp",
        "forma",
        "glaive.bp",
      ],
    },
    k1: {
      valuted: true,
      drops: [
        "burston.sk",
        "fang.bp",
        "odonata.hs.bp",
        "tigris.bl",
        "trinity.bp",
        "kavasa.bk",
      ],
    },
    m1: {
      vaulted: true,
      drops: [
        "boar.rv",
        "lex.rv",
        "forma",
        "dakra.bp",
        "soma.bp",
        "mag.bp"
      ],
    },
    n1: {
      valuted: true,
      drops: [
        "bronco.bp",
        "fang.bd",
        "nekros.ci.bp",
        "akbronco.lk",
        "forma",
        "nova.ci.bp"
      ],
    },
    n2: {
      drops: [
        "carrier.sm",
        "paris.ub",
        "spira.bp",
        "helios.bp",
        "kavasa.bn",
        "nekros.sm.bp"
      ],
    },
    s1: {
      valuted: true,
      drops: [
        "bronco.bp",
        "hikou.bp",
        "paris.sg",
        "paris.gp",
        "forma",
        "spira.pc"
      ],
    },
    s2: {
      vaulted: true,
      drops: [
        "akbronco.bp",
        "nyx.bp",
        "carrier.sm",
        "kavasa.bn",
        "forma",
        "soma.sk",
      ],
    },
    s3: {
      valuted: true,
      drops: [
        "akbronco.bp",
        "carrier.sm",
        "paris.sg",
        "ash.bp",
        "soma.rv",
        "spira.pc"
      ],
    },
    s4: {
      drops: [
        "lex.bp",
        "paris.bp",
        "forma",
        "kavasa.bp",
        "trinity.ci.bp",
        "saryn.bp"
      ],
    },
    s5: {
      drops: [
        "burston.rv",
        "carrier.ce",
        "fang.bd",
        "akbronco.lk",
        "galatine.hl",
        "spira.bd"
      ],
    },
    v1: {
      vaulted: true,
      drops: [
        "paris.lb",
        "burston.sk",
        "paris.ub",
        "volt.sm.bp",
        "forma",
        "fragor.hl"
      ],
    },
    v2: {
      drops: [
        "paris.lb",
        "fang.bp",
        "lex.bl",
        "paris.ub",
        "forma",
        "vauban.sm.bp"
      ],
    },
    v3: {
      drops: [
        "braton.bp",
        "cernos.ub",
        "paris.lb",
        "helios.sm",
        "tigris.bl",
        "valkyr.sm.bp"
      ],
    },
  },
  'meso': {
    b1: {
      vaulted: true,
      drops: [
        "dakra.hl",
        "orthos.hl",
        "forma",
        "mag.ci.bp",
        "orthos.bp",
        "boar.sk"
      ],
    },
    c1: {
      vaulted: true,
      drops: [
        "saryn.sm.bp",
        "nova.nc.bp",
        "forma",
        "scindo.hl",
        "ash.bp",
        "carrier.cm"
      ],
    },
    c2: {
      vaulted: true,
      drops: [
        "bronco.bp",
        "cernos.ub",
        "galatine.bd",
        "odonata.bp",
        "valkyr.nc.bp",
        "carrier.cm"
      ],
    },
    d1: {
      drops: [
        "orthos.hl",
        "lex.bp",
        "forma",
        "orthos.bd",
        "forma",
        "dual-kamas.bl"
      ],
    },
    f1: {
      drops: [
        "bronco.rv",
        "paris.lb",
        "saryn.sm.bp",
        "dual-kamas.hl",
        "nekros.nc.bp",
        "fragor.bp"
      ],
    },
    f2: {
      vaulted: true,
      drops: [
        "latron.sk",
        "ember.ci.bp",
        "sicarus.bl",
        "reaper.bd",
        "forma",
        "frost.bp"
      ],
    },
    n1: {
      vaulted: true,
      drops: [
        "fang.hl",
        "braton.sk",
        "fang.bp",
        "dual-kamas.hl",
        "forma",
        "nyx.nc.bp"
      ],
    },
    n2: {
      vaulted: true,
      drops: [
        "fang.hl",
        "bronco.bp",
        "hikou.bp",
        "ash.nc.bp",
        "forma",
        "vauban.nc.bp"
      ],
    },
    n3: {
      drops: [
        "braton.bl",
        "bronco.bp",
        "burston.sk",
        "carrier.cm",
        "euphona.bl",
        "nekros.bp"
      ],
    },
    s1: {
      vaulted: true,
      drops: [
        "nova.sm.bp",
        "paris.bp",
        "tigris.sk",
        "paris.ub",
        "odonata.bp",
        "soma.sk"
      ],
    },
    s2: {
      drops: [
        "bronco.bp",
        "galatine.bd",
        "paris.sg",
        "paris.gp",
        "forma",
        "saryn.ci.bp"
      ],
    },
    s3: {
      drops: [
        "akbronco.bp",
        "nekros.ci.bp",
        "valkyr.bp",
        "ash.bp",
        "forma",
        "spira.pc"
      ],
    },
    s4: {
      drops: [
        "banshee.nc.bp",
        "fang.bp",
        "galatine.bd",
        "fang.hl",
        "trinity.bp",
        "saryn.bp"
      ],
    },
    v1: {
      drops: [
        "burston.bp",
        "carrier.bp",
        "spira.bp",
        "braton.bp",
        "forma",
        "vectis.rv"
      ],
    },
    v2: {
      vaulted: true,
      drops: [
        "vasto.rv",
        "paris.bp",
        "ash.ci.bp",
        "volt.ci.bp",
        "forma",
        "nikana.bd"
      ],
    },
    v3: {
      vaulted: true,
      drops: [
        "carrier.bp",
        "spira.bp",
        "forma",
        "kavasa.bn",
        "volt.ci.bp",
        "valkyr.sm.bp"
      ],
    },
    v4: {
      drops: [
        "carrier.bp",
        "forma",
        "lex.bl",
        "ash.nc.bp",
        "valkyr.nc.bp",
        "vauban.ci.bp"
      ],
    },
  },
  'neo': {
    a1: {
      drops: [
        "carrier.sm",
        "braton.bl",
        "forma",
        "cernos.sg",
        "vectis.bp",
        "akstiletto.bp"
      ],
    },
    b1: {
      drops: [
        "bronco.rv",
        "paris.sg",
        "trinity.sm.bp",
        "burston.bl",
        "vectis.sk",
        "banshee.ci.bp"
      ],
    },
    d1: {
      vaulted: true,
      drops: [
        "vasto.bl",
        "boar.bp",
        "mag.sm.bp",
        "trinity.nc.bp",
        "forma",
        "dakra.bd"
      ],
    },
    n1: {
      vaulted: true,
      drops: [
        "hikou.sr",
        "vectis.bl",
        "forma",
        "kavasa.bp",
        "soma.rv",
        "nyx.ci.bp"
      ],
    },
    n2: {
      vaulted: true,
      drops: [
        "lex.bp",
        "vasto.bl",
        "fang.bp",
        "nova.bp",
        "forma",
        "vauban.sm.bp"
      ],
    },
    n3: {
      vaulted: true,
      drops: [
        "lex.bl",
        "odonata.sm.bp",
        "paris.sg",
        "ash.nc.bp",
        "fang.hl",
        "nekros.sm.bp"
      ],
    },
    n4: {
      drops: [
        "ash.ci.bp",
        "braton.sk",
        "paris.sg",
        "venka.bp",
        "forma",
        "nikana.bd"
      ],
    },
    n5: {
      drops: [
        "forma",
        "helios.ce",
        "saryn.sm.bp",
        "akstiletto.lk",
        "ash.sm.bp",
        "nikana.bp"
      ],
    },
    s1: {
      vaulted: true,
      drops: [
        "soma.bp",
        "carrier.ce",
        "lex.bl",
        "trinity.ci.bp",
        "forma",
        "saryn.bp"
      ],
    },
    s2: {
      vaulted: true,
      drops: [
        "burston.sk",
        "paris.lb",
        "nova.sm.bp",
        "nyx.sm.bp",
        "paris.ub",
        "saryn.ci.bp"
      ],
    },
    s3: {
      vaulted: true,
      drops: [
        "soma.bl",
        "carrier.bp",
        "burston.rv",
        "vasto.bp",
        "forma",
        "spira.bd"
      ],
    },
    s5: {
      vaulted: true,
      drops: [
        "ember.nc.bp",
        "latron.rv",
        "reaper.bp",
        "frost.sm.bp",
        "glaive.dk",
        "sicarus.rv"
      ],
    },
    t1: {
      drops: [
        "burston.bp",
        "dual-kamas.bp",
        "forma",
        "banshee.bp",
        "fragor.hl",
        "tigris.bp"
      ],
    },
    v1: {
      vaulted: true,
      drops: [
        "nyx.bp",
        "dual-kamas.bp",
        "forma",
        "volt.bp",
        "bronco.bl",
        "nova.ci.bp"
      ],
    },
    v2: {
      drops: [
        "braton.sk",
        "fang.hl",
        "galatine.bd",
        "galatine.hl",
        "forma",
        "vauban.bp"
      ],
    },
    v3: {
      drops: [
        "carrier.sm",
        "galatine.bd",
        "paris.sg",
        "tigris.rv",
        "forma",
        "vauban.nc.bp"
      ],
    },
    v4: {
      drops: [
        "bronco.rv",
        "cernos.gp",
        "tigris.sk",
        "ash.nc.bp",
        "saryn.nc.bp",
        "neka.gt"
      ],
    },
  },
  'axi': {
    a1: {
      drops: [
        "fragor.hd",
        "braton.sk",
        "trinity.sm.bp",
        "dual-kamas.hl",
        "akstiletto.bl",
        "nikana.bp"
      ],
    },
    a2: {
      drops: [
        "forma",
        "lex.bl",
        "lex.rv",
        "aklex.bp",
        "lex.bp",
        "aklex.lk"
      ],
    },
    b1: {
      drops: [
        "fang.bd",
        "euphona.bp",
        "ash.ci.bp",
        "kavasa.bk",
        "cernos.bp",
        "banshee.sm.bp"
      ],
    },
    c1: {
      drops: [
        "lex.rv",
        "trinity.nc.bp",
        "vectis.bl",
        "orthos.bp",
        "forma",
        "cernos.lb"
      ],
    },
    e1: {
      vaulted: true,
      drops: [
        "frost.nc.bp",
        "latron.bl",
        "sicarus.bp",
        "forma",
        "glaive.bd",
        "ember.bp"
      ],
    },
    e2: {
      drops: [
        "braton.sk",
        "lex.rv",
        "paris.bp",
        "bronco.bl",
        "forma",
        "euphona.rv"
      ],
    },
    g1: {
      drops: [
        "nekros.ci.bp",
        "paris.bp",
        "saryn.sm.bp",
        "kavasa.bp",
        "forma",
        "galatine.bp"
      ],
    },
    h1: {
      drops: [
        "forma",
        "fragor.hd",
        "vectis.bl",
        "akstiletto.rv",
        "trinity.ci.bp",
        "helios.cm"
      ],
    },
    k1: {
      vaulted: true,
      drops: [
        "lex.bl",
        "hikou.pc",
        "odonata.hs.bp",
        "akstiletto.rv",
        "forma",
        "kavasa.bk"
      ],
    },
    n1: {
      vaulted: true,
      drops: [
        "fang.bd",
        "braton.bp",
        "forma",
        "odonata.wg.bp",
        "akstiletto.lk",
        "ash.sm.bp"
      ],
    },
    n2: {
      drops: [
        "carrier.ce",
        "lex.rv",
        "bronco.bp",
        "ash.nc.bp",
        "forma",
        "nikana.ht"
      ],
    },
    n3: {
      vaulted: true,
      drops: [
        "dual-kamas.bp",
        "paris.ub",
        "forma",
        "bronco.bl",
        "volt.bp",
        "nekros.bp"
      ],
    },
    s1: {
      vaulted: true,
      drops: [
        "forma",
        "bronco.rv",
        "bronco.bp",
        "akbronco.lk",
        "trinity.bp",
        "scindo.bd"
      ],
    },
    t1: {
      vaulted: true,
      drops: [
        "odonata.hs.bp",
        "saryn.sm.bp",
        "vectis.bl",
        "akstiletto.rv",
        "burston.bl",
        "tigris.bp"
      ],
    },
    v1: {
      vaulted: true,
      drops: [
        "odonata.sm.bp",
        "dual-kamas.bp",
        "carrier.sm",
        "volt.nc.bp",
        "forma",
        "vauban.ci.bp"
      ],
    },
    v2: {
      vaulted: true,
      drops: [
        "trinity.sm.bp",
        "mag.nc.bp",
        "hikou.pc",
        "boar.bl",
        "braton.rv",
        "vectis.sk"
      ],
    },
    v3: {
      vaulted: true,
      drops: [
        "trinity.sm.bp",
        "trinity.nc.bp",
        "vasto.bl",
        "braton.rv",
        "orthos.bp",
        "vectis.sk"
      ],
    },
    v4: {
      vaulted: true,
      drops: [
        "odonata.hs.bp",
        "paris.bp",
        "trinity.sm.bp",
        "cernos.bp",
        "forma",
        "vectis.sk"
      ],
    },
    v5: {
      drops: [
        "dual-kamas.bp",
        "venka.bd",
        "forma",
        "braton.rv",
        "tigris.rv",
        "valkyr.ci.bp"
      ],
    },
  },
}

const items = {
  "prime": {
    // Warframes
    "ash": {
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "banshee": {
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "ember": {
      vaulted: true,
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "frost": {
      vaulted: true,
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "mag": {
      vaulted: true,
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "nekros": {
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "nova": {
      vaulted: true,
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "nyx": {
      vaulted: true,
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "saryn": {
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "trinity": {
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "valkyr": {
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "vauban": {
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    "volt": {
      vaulted: true,
      parts: {
        ci: { count: 1 },
        nc: { count: 1 },
        sm: { count: 1 },
      }
    },
    // Arch-Wing
    "odonata": {
      vaulted: true,
      parts: {
        hs: { count: 1 },
        sm: { count: 1 },
        wg: { count: 1 },
      },
    },
    // Sentinels
    "carrier": {
      parts: {
        ce: { count: 1 },
        cm: { count: 1 },
        sm: { count: 1 },
      }
    },
    "helios": {
      parts: {
        ce: { count: 1 },
        cm: { count: 1 },
        sm: { count: 1 },
      }
    },
    // Primaries
    "boar": {
      valuted: true,
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
        sk: { count: 1 },
      }
    },
    "braton": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
        sk: { count: 1 },
      }
    },
    "burston": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
        sk: { count: 1 },
      }
    },
    "cernos": {
      parts: {
        gp: { count: 1 },
        sg: { count: 1 },
        lb: { count: 1 },
        ul: { count: 1 },
      }
    },
    "latron": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
        sk: { count: 1 },
      }
    },
    "paris": {
      parts: {
        gp: { count: 1 },
        sg: { count: 1 },
        lb: { count: 1 },
        ul: { count: 1 },
      }
    },
    "tigris": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
        sk: { count: 1 },
      }
    },
    "soma": {
      valuted: true,
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
        sk: { count: 1 },
      }
    },
    "vectis": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
        sk: { count: 1 },
      }
    },
    // Secondaries
    "bronco": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
      }
    },
    "euphona": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
      }
    },
    "lex": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
      }
    },
    "hikou": {
      vaulted: true,
      parts: {
        sr: { count: 2 },
        pc: { count: 2 },
      }
    },
    "sicarus": {
      vaulted: true,
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
      }
    },
    "spira": {
      vaulted: true,
      parts: {
        bd: { count: 2 },
        pc: { count: 2 },
      }
    },
    "vasto": {
      parts: {
        bl: { count: 1 },
        rv: { count: 1 },
      }
    },
    // Secondaries - AK
    "akstiletto": {
      parts: {
        lk: { count: 1 },
        bl: { count: 2 },
        rv: { count: 2 },
      }
    },
    // Secondaries - AK - Sub Items
    "akbronco": {
      parts: {
        lk: { count: 1 },
        'item.bronco': { count: 2 },
      }
    },
    "aklex": {
      parts: {
        lk: { count: 1 },
        'item.lex': { count: 2 },
      }
    },
    // Melee
    "dakra": {
      valuted: true,
      parts: {
        bd: { count: 1 },
        hl: { count: 1 },
      }
    },
    "fragor": {
      parts: {
        hd: { count: 1 },
        hl: { count: 1 },
      }
    },
    "galatine": {
      parts: {
        hd: { count: 1 },
        hl: { count: 1 },
      }
    },
    "glaive": {
      valuted: true,
      parts: {
        bd: { count: 2 },
        dk: { count: 1 },
      }
    },
    "dual-kamas": {
      parts: {
        bd: { count: 2 },
        hl: { count: 2 },
      },
    },
    "fang": {
      parts: {
        bd: { count: 2 },
        hl: { count: 2 },
      },
    },
    "nikana": {
      parts: {
        bd: { count: 1 },
        ht: { count: 1 },
      }
    },
    "orthos": {
      parts: {
        bd: { count: 2 },
        hl: { count: 1 },
      }
    },
    "reaper": {
      valuted: true,
      parts: {
        bd: { count: 2 },
        hl: { count: 1 },
      }
    },
    "scindo": {
      parts: {
        bd: { count: 2 },
        hl: { count: 1 },
      }
    },
    "venka": {
      parts: {
        bd: { count: 2 },
        gt: { count: 2 },
      },
    },
    // Misc
    "kavasa": {
      name: "Kavasa Prime Kubrow Collar",
      parts: {
        bn: { count: 1 },
        bk: { count: 1 },
      }
    }
  }
}

export default {
  relics,
  items,
};
