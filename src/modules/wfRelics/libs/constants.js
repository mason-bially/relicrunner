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
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    c1: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    c2: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    d1: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    f1: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    f2: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    n1: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    n2: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    n3: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    s1: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    s2: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    s3: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    s4: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    v1: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    v2: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    v3: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
    v4: {
      drops: [
        "",
        "",
        "",
        "",
        "",
        ""
      ],
    },
  },
  'neo': {

  },
  'axi': {

  },
}

const items = {
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

export default {
  relics,
  items,
};
