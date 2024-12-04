var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "FRENTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.052972393375750215,
          "pitch": 0.029406850280192742,
          "rotation": 0,
          "target": "1-living--comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living--comedor",
      "name": "LIVING / COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.576087336104524,
          "pitch": 0.12973427208805788,
          "rotation": 0,
          "target": "0-frente"
        },
        {
          "yaw": -1.7063132071793703,
          "pitch": 0.09120942880597482,
          "rotation": 0,
          "target": "2-ingreso-toilet---habitacion-principal"
        },
        {
          "yaw": -0.1035634256316591,
          "pitch": 0.11161753184517664,
          "rotation": 0,
          "target": "12-acceso-al-parque"
        },
        {
          "yaw": 0.494392069317124,
          "pitch": 0.13242506568403556,
          "rotation": 0.7853981633974483,
          "target": "6-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingreso-toilet---habitacion-principal",
      "name": "INGRESO TOILET - HABITACION PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.09519875467919,
          "pitch": 0.06077342408002551,
          "rotation": 0,
          "target": "1-living--comedor"
        },
        {
          "yaw": -1.5182893109168418,
          "pitch": 0.12359109729147022,
          "rotation": 0,
          "target": "3-toilet"
        },
        {
          "yaw": 1.4551491967932613,
          "pitch": 0.04304895090376348,
          "rotation": 0,
          "target": "4-habitacion-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-toilet",
      "name": "TOILET",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0616217443122693,
          "pitch": 0.26211958359506227,
          "rotation": 5.497787143782138,
          "target": "2-ingreso-toilet---habitacion-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-habitacion-principal",
      "name": "HABITACION PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.528983688898224,
          "pitch": 0.06854912324152096,
          "rotation": 0,
          "target": "2-ingreso-toilet---habitacion-principal"
        },
        {
          "yaw": -1.1796642270649151,
          "pitch": 0.0745985860846119,
          "rotation": 0,
          "target": "5-bao-en-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao-en-suite",
      "name": "BAÑO EN SUITE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.991768716332796,
          "pitch": 0.061923516065604645,
          "rotation": 0,
          "target": "4-habitacion-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7494883595119353,
          "pitch": 0.0637644519852767,
          "rotation": 5.497787143782138,
          "target": "1-living--comedor"
        },
        {
          "yaw": 0.48428630667061157,
          "pitch": 0.1226535014321648,
          "rotation": 0,
          "target": "7-pasillo-de-distribucion-cuartos---bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pasillo-de-distribucion-cuartos---bao",
      "name": "PASILLO DE DISTRIBUCION CUARTOS - BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14683704773791817,
          "pitch": 0.13962557085990213,
          "rotation": 0,
          "target": "10-bao"
        },
        {
          "yaw": 0.6327229659275773,
          "pitch": 0.19356421649232303,
          "rotation": 0.7853981633974483,
          "target": "9-cuarto-ii"
        },
        {
          "yaw": 2.0747086717026075,
          "pitch": 0.24520622923402868,
          "rotation": 0,
          "target": "8-cuarto-i"
        },
        {
          "yaw": -2.709352645210309,
          "pitch": 0.08702956648054894,
          "rotation": 0,
          "target": "6-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cuarto-i",
      "name": "CUARTO I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.643044761515582,
          "pitch": 0.19741231862688124,
          "rotation": 0,
          "target": "7-pasillo-de-distribucion-cuartos---bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cuarto-ii",
      "name": "cuarto II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.12110447870981744,
        "pitch": 0.3041062425278298,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.1178658427163057,
          "pitch": 0.07685641670378374,
          "rotation": 0,
          "target": "7-pasillo-de-distribucion-cuartos---bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.836875546820112,
          "pitch": -0.041054103662970576,
          "rotation": 0,
          "target": "7-pasillo-de-distribucion-cuartos---bao"
        },
        {
          "yaw": -1.7929123968588954,
          "pitch": 0.09285077578483936,
          "rotation": 0,
          "target": "11-bao-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bao-ii",
      "name": "BAÑO II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.09115216779895619,
        "pitch": 0.6955278380238923,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.8032973482424737,
          "pitch": 0.1602390956185502,
          "rotation": 0,
          "target": "10-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-acceso-al-parque",
      "name": "ACCESO AL PARQUE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32760554334164915,
          "pitch": 0.1906753565919601,
          "rotation": 0,
          "target": "13-pileta-"
        },
        {
          "yaw": -0.7431407203456235,
          "pitch": 0.05458769602441649,
          "rotation": 0,
          "target": "14-parque-i"
        },
        {
          "yaw": -2.3423046609783604,
          "pitch": 0.1183547342035709,
          "rotation": 0,
          "target": "1-living--comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pileta-",
      "name": "PILETA ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.195904303795281,
        "pitch": 0.3978741404329753,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.6109328634859477,
          "pitch": 0.1542890539695705,
          "rotation": 0,
          "target": "12-acceso-al-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-parque-i",
      "name": "PARQUE I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7278394824427874,
          "pitch": 0.11445790827174207,
          "rotation": 0,
          "target": "12-acceso-al-parque"
        },
        {
          "yaw": 0.17976274137657633,
          "pitch": 0.039267797003633476,
          "rotation": 0,
          "target": "15-parque-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-parque-ii",
      "name": "PARQUE II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9661461317091877,
          "pitch": 0.12513263815034925,
          "rotation": 0,
          "target": "14-parque-i"
        },
        {
          "yaw": 1.1540464988324466,
          "pitch": 0.1519360636838556,
          "rotation": 0,
          "target": "16-ingreso-al-galpon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ingreso-al-galpon",
      "name": "INGRESO AL GALPON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3648765189997043,
          "pitch": 0.16434298237541256,
          "rotation": 0,
          "target": "17-galpon"
        },
        {
          "yaw": -2.8697789904251376,
          "pitch": 0.15044685853862916,
          "rotation": 0,
          "target": "15-parque-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-galpon",
      "name": "GALPON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.227501122162167,
          "pitch": 0.1363209513911876,
          "rotation": 0,
          "target": "16-ingreso-al-galpon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ZAPIOLA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
