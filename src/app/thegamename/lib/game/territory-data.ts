import { Point2D, Rectangle2D, Polygon2D } from '@packageforge/geometry2d';
import { TeamId } from './team-id';

export interface ITerritoryData {
  title: string;
  abbreviation: string;
  otherTitle?: string;
  titles?: {
    text: string,
    point: {
      x: number,
      y: number
    },
    anchor?: 'start' | 'middle' | 'end',
    baseline?: 'top' | 'central' | 'bottom'
  }[],
  originalPowerId: TeamId;
  polygon: Polygon2D;
  hiliteOffset: Point2D;
  hiliteSize: Point2D;
  isCapital?: boolean,
  originalIndustrialComplex?: boolean;
  isLandLocked?: boolean;
  overlaySize?: Point2D;
  overlayOffset?: Point2D;
  adjacentIndices: number[];
  detailRectangle?: Rectangle2D;
  ipcValue?: number,
  ipcPoint?: Point2D,
  straits?: {
    toIndexes: number[],
    checkIndices: number[]
  },
  canal?: {
    toIndex: number,
    checkIndices: number[]
  },
  musters: {
    F?: Point2D,
    A: Point2D,
    i: Point2D,
    i_?: Point2D,
    a: Point2D,
    a_?: Point2D,
    f: Point2D,
    f_?: Point2D,
    b: Point2D,
    b_?: Point2D
  } | {
    T: Point2D,
    T_?: Point2D,
    i: Point2D,
    i_?: Point2D,
    a: Point2D,
    a_?: Point2D,
    A: Point2D,
    A_?: Point2D,
    C: Point2D,
    C_?: Point2D,
    f: Point2D,
    f_?: Point2D,
    b: Point2D,
    b_?: Point2D,
    S: Point2D,
    S_?: Point2D,
    B: Point2D,
    B_?: Point2D
  };
}
export const territoryData: ITerritoryData[] = [
  {
    "title": "Northwest Australia Sea Zone",
    "abbreviation": "TIM",
    "otherTitle": "Timor Sea",
    "polygon": new Polygon2D(548, 528, 548, 425, 602, 425, 602, 433, 634, 510, 569, 528, 548, 528),
    "hiliteOffset": new Point2D(549, 426),
    "hiliteSize": new Point2D(53, 102),
    "adjacentIndices": [
      121,
      53,
      49,
      29,
      13
    ],
    "musters": {
      "T": new Point2D(564, 450),
      "T_": new Point2D(-1, -5),
      "i": new Point2D(555, 442),
      "i_": new Point2D(-1, -5),
      "a": new Point2D(563, 442),
      "a_": new Point2D(-1, -5),
      "A": new Point2D(571, 442),
      "A_": new Point2D(-1, -5),
      "C": new Point2D(560, 522),
      "C_": new Point2D(0, -5),
      "f": new Point2D(560, 512),
      "f_": new Point2D(0, -5),
      "b": new Point2D(557, 463),
      "S": new Point2D(585, 433),
      "S_": new Point2D(-1, 6),
      "B": new Point2D(560, 491),
      "B_": new Point2D(-1, -7)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Caspian Sea Zone",
    "abbreviation": "CAS",
    "otherTitle": "Caspian Sea",
    "polygon": new Polygon2D(406, 174, 401, 178, 399, 188, 410, 204, 408, 210, 415, 224, 419, 224, 425, 217, 421, 191, 414, 187, 414, 182, 422, 181, 420, 170, 406, 174),
    "hiliteOffset": new Point2D(400, 172),
    "hiliteSize": new Point2D(24, 52),
    "adjacentIndices": [
      116,
      96,
      82,
      78
    ],
    "isLandLocked": true,
    "musters": {
      "T": new Point2D(416, 216),
      "i": new Point2D(414, 206),
      "a": new Point2D(414, 206),
      "A": new Point2D(414, 206),
      "C": new Point2D(414, 196),
      "f": new Point2D(414, 186),
      "b": new Point2D(412, 190),
      "S": new Point2D(414, 176),
      "B": new Point2D(408, 186)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Western Panama Sea Zone",
    "abbreviation": "GLP",
    "otherTitle": "Galapagos Islands",
    "canal": {
      "toIndex": 23,
      "checkIndices": [
        83
      ]
    },
    "polygon": new Polygon2D(3, 380, 3, 314, 17, 320, 39, 336, 21, 380, 3, 380),
    "hiliteOffset": new Point2D(4, 315),
    "hiliteSize": new Point2D(32, 65),
    "adjacentIndices": [
      83,
      64,
      34,
      23,
      6
    ],
    "musters": {
      "T": new Point2D(11, 376),
      "T_": new Point2D(1, -4),
      "i": new Point2D(6, 369),
      "i_": new Point2D(1, -4),
      "a": new Point2D(13, 370),
      "a_": new Point2D(1, -4),
      "A": new Point2D(19, 369),
      "A_": new Point2D(1, -4),
      "C": new Point2D(14, 359),
      "C_": new Point2D(3, -3),
      "f": new Point2D(20, 352),
      "f_": new Point2D(3, -3),
      "b": new Point2D(11, 346),
      "b_": new Point2D(3, -4),
      "S": new Point2D(13, 335),
      "S_": new Point2D(5, 0),
      "B": new Point2D(12, 327),
      "B_": new Point2D(-2, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Western U.S.A. Sea Zone",
    "abbreviation": "WCO",
    "otherTitle": "West Coast of America",
    "polygon": new Polygon2D(815, 262, 815, 157, 834, 157, 852, 176, 863, 245, 863, 262, 815, 262),
    "hiliteOffset": new Point2D(816, 158),
    "hiliteSize": new Point2D(47, 104),
    "adjacentIndices": [
      61,
      59,
      51,
      40,
      34,
      33
    ],
    "musters": {
      "T": new Point2D(830, 218),
      "T_": new Point2D(0, -6),
      "i": new Point2D(821, 209),
      "i_": new Point2D(0, -6),
      "a": new Point2D(829, 210),
      "a_": new Point2D(0, -6),
      "A": new Point2D(840, 209),
      "A_": new Point2D(0, -6),
      "C": new Point2D(831, 244),
      "C_": new Point2D(0, -4),
      "f": new Point2D(839, 236),
      "f_": new Point2D(0, -4),
      "b": new Point2D(829, 187),
      "S": new Point2D(827, 256),
      "S_": new Point2D(7, -1),
      "B": new Point2D(828, 173),
      "B_": new Point2D(-1, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Western Mediterranean Sea Zone",
    "straits": {
      "toIndexes": [
        10
      ],
      "checkIndices": [
        102,
        125
      ]
    },
    "abbreviation": "WMD",
    "otherTitle": "Western Mediterranean",
    "polygon": new Polygon2D(199, 263, 199, 235, 246, 205, 251, 206, 249, 211, 276, 237, 279, 262, 199, 263),
    "hiliteOffset": new Point2D(200, 207),
    "hiliteSize": new Point2D(80, 56),
    "adjacentIndices": [
      125,
      102,
      72,
      60,
      52,
      10
    ],
    "musters": {
      "T": new Point2D(240, 244),
      "T_": new Point2D(0, -3),
      "i": new Point2D(231, 237),
      "i_": new Point2D(0, -3),
      "a": new Point2D(238, 237),
      "a_": new Point2D(0, -3),
      "A": new Point2D(245, 237),
      "A_": new Point2D(0, -3),
      "C": new Point2D(244, 225),
      "C_": new Point2D(3, -3),
      "f": new Point2D(248, 219),
      "f_": new Point2D(3, -3),
      "b": new Point2D(205, 249),
      "S": new Point2D(228, 247),
      "S_": new Point2D(-1, -2),
      "B": new Point2D(260, 236),
      "B_": new Point2D(0, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "West South Africa Sea Zone",
    "abbreviation": "CGH",
    "otherTitle": "Cape of Good Hope",
    "polygon": new Polygon2D(248, 550, 248, 436, 280, 436, 287, 447, 317, 546, 316, 550, 248, 550),
    "hiliteOffset": new Point2D(249, 437),
    "hiliteSize": new Point2D(67, 113),
    "adjacentIndices": [
      123,
      66,
      56,
      48,
      44,
      18
    ],
    "musters": {
      "T": new Point2D(295, 545),
      "T_": new Point2D(-6, -7),
      "i": new Point2D(288, 536),
      "i_": new Point2D(-6, -7),
      "a": new Point2D(296, 537),
      "a_": new Point2D(-6, -7),
      "A": new Point2D(304, 536),
      "A_": new Point2D(-6, -7),
      "C": new Point2D(264, 487),
      "C_": new Point2D(-1, -8),
      "f": new Point2D(272, 477),
      "f_": new Point2D(-1, -8),
      "b": new Point2D(261, 535),
      "S": new Point2D(261, 448),
      "S_": new Point2D(5, -3),
      "B": new Point2D(277, 512),
      "B_": new Point2D(-7, -6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "West Argentina/Chile Sea Zone",
    "abbreviation": "JFI",
    "otherTitle": "Juan Fernandez Archipelago",
    "polygon": new Polygon2D(3, 505, 3, 380, 21, 380, 53, 419, 55, 430, 56, 462, 54, 505, 3, 505),
    "hiliteOffset": new Point2D(4, 381),
    "hiliteSize": new Point2D(51, 124),
    "adjacentIndices": [
      122,
      81,
      31,
      19,
      16,
      2
    ],
    "musters": {
      "T": new Point2D(15, 424),
      "T_": new Point2D(-1, -14),
      "i": new Point2D(9, 417),
      "i_": new Point2D(-1, -14),
      "a": new Point2D(16, 417),
      "a_": new Point2D(-1, -14),
      "A": new Point2D(25, 416),
      "A_": new Point2D(-1, -14),
      "C": new Point2D(25, 442),
      "C_": new Point2D(5, -6),
      "f": new Point2D(34, 433),
      "f_": new Point2D(5, -6),
      "b": new Point2D(37, 495),
      "S": new Point2D(23, 474),
      "S_": new Point2D(-4, 7),
      "B": new Point2D(34, 457),
      "B_": new Point2D(-9, -2)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "West Alaska Sea Zone",
    "abbreviation": "BER",
    "otherTitle": "Bering Sea",
    "polygon": new Polygon2D(737, 157, 737, 113, 770, 63, 783, 63, 799, 128, 799, 157, 737, 157),
    "hiliteOffset": new Point2D(738, 64),
    "hiliteSize": new Point2D(61, 93),
    "adjacentIndices": [
      126,
      51,
      33,
      27,
      11
    ],
    "musters": {
      "T": new Point2D(752, 154),
      "T_": new Point2D(-3, 0),
      "i": new Point2D(744, 147),
      "i_": new Point2D(-3, 0),
      "a": new Point2D(752, 148),
      "a_": new Point2D(-3, 0),
      "A": new Point2D(756, 148),
      "A_": new Point2D(-3, 0),
      "C": new Point2D(775, 153),
      "C_": new Point2D(5, 0),
      "f": new Point2D(772, 144),
      "f_": new Point2D(5, 0),
      "b": new Point2D(789, 141),
      "S": new Point2D(750, 107),
      "S_": new Point2D(3, -5),
      "B": new Point2D(751, 127),
      "B_": new Point2D(-2, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Wake Island Sea Zone",
    "abbreviation": "WPO",
    "otherTitle": "Western Pacific Ocean",
    "polygon": new Polygon2D(710, 304, 710, 262, 767, 262, 767, 335, 731, 335, 731, 304, 710, 304),
    "hiliteOffset": new Point2D(711, 263),
    "hiliteSize": new Point2D(56, 72),
    "adjacentIndices": [
      63,
      54,
      40,
      38,
      27,
      24,
      20
    ],
    "musters": {
      "T": new Point2D(754, 283),
      "T_": new Point2D(0, -4),
      "i": new Point2D(746, 276),
      "i_": new Point2D(0, -4),
      "a": new Point2D(752, 276),
      "a_": new Point2D(0, -4),
      "A": new Point2D(762, 275),
      "A_": new Point2D(0, -4),
      "C": new Point2D(751, 330),
      "C_": new Point2D(0, -6),
      "f": new Point2D(760, 322),
      "f_": new Point2D(0, -6),
      "b": new Point2D(751, 296),
      "S": new Point2D(721, 297),
      "S_": new Point2D(0, -5),
      "B": new Point2D(725, 273),
      "B_": new Point2D(-2, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "United Kingdom Sea Zone",
    "straits": {
      "toIndexes": [
        57
      ],
      "checkIndices": [
        71,
        60
      ]
    },
    "abbreviation": "NOR",
    "otherTitle": "North Sea",
    "polygon": new Polygon2D(154, 161, 154, 64, 226, 64, 226, 3, 311, 3, 311, 36, 268, 101, 269, 115, 266, 128, 218, 161, 154, 161),
    "hiliteOffset": new Point2D(155, 4),
    "hiliteSize": new Point2D(156, 157),
    "adjacentIndices": [
      110,
      108,
      65,
      60,
      57,
      47,
      37,
      10
    ],
    "musters": {
      "T": new Point2D(196, 79),
      "T_": new Point2D(-15, 0),
      "i": new Point2D(187, 71),
      "i_": new Point2D(-15, 0),
      "a": new Point2D(194, 72),
      "a_": new Point2D(-15, 0),
      "A": new Point2D(205, 71),
      "A_": new Point2D(-15, 0),
      "C": new Point2D(246, 69),
      "C_": new Point2D(6, -9),
      "f": new Point2D(253, 59),
      "f_": new Point2D(6, -9),
      "b": new Point2D(242, 26),
      "S": new Point2D(169, 91),
      "S_": new Point2D(8, -1),
      "B": new Point2D(168, 124),
      "B_": new Point2D(-2, -9)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Spain Sea Zone",
    "straits": {
      "toIndexes": [
        4
      ],
      "checkIndices": [
        102,
        125
      ]
    },
    "abbreviation": "AZO",
    "otherTitle": "Azores",
    "polygon": new Polygon2D(154, 275, 154, 161, 218, 161, 225, 164, 226, 172, 222, 184, 199, 235, 199, 263, 196, 275, 154, 275),
    "hiliteOffset": new Point2D(155, 162),
    "hiliteSize": new Point2D(70, 113),
    "adjacentIndices": [
      125,
      72,
      60,
      47,
      42,
      30,
      9,
      4
    ],
    "musters": {
      "T": new Point2D(168, 176),
      "T_": new Point2D(10, 0),
      "i": new Point2D(161, 168),
      "i_": new Point2D(10, 0),
      "a": new Point2D(170, 169),
      "a_": new Point2D(10, 0),
      "A": new Point2D(178, 168),
      "A_": new Point2D(10, 0),
      "C": new Point2D(168, 209),
      "C_": new Point2D(5, -7),
      "f": new Point2D(175, 200),
      "f_": new Point2D(5, -7),
      "b": new Point2D(183, 245),
      "S": new Point2D(167, 220),
      "S_": new Point2D(0, 7),
      "B": new Point2D(175, 267),
      "B_": new Point2D(-4, -6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Soviet Far East Sea Zone",
    "abbreviation": "SOK",
    "otherTitle": "Sea of Okhotsk",
    "polygon": new Polygon2D(664, 122, 681, 106, 746, 63, 770, 63, 737, 113, 737, 157, 707, 157, 707, 151, 688, 151, 680, 170, 676, 168, 664, 122),
    "hiliteOffset": new Point2D(666, 64),
    "hiliteSize": new Point2D(104, 106),
    "adjacentIndices": [
      73,
      38,
      27,
      7
    ],
    "musters": {
      "T": new Point2D(684, 127),
      "T_": new Point2D(6, 0),
      "i": new Point2D(675, 119),
      "i_": new Point2D(6, 0),
      "a": new Point2D(683, 119),
      "a_": new Point2D(6, 0),
      "A": new Point2D(692, 119),
      "A_": new Point2D(6, 0),
      "C": new Point2D(724, 153),
      "C_": new Point2D(0, -5),
      "f": new Point2D(730, 144),
      "f_": new Point2D(0, -5),
      "b": new Point2D(733, 117),
      "S": new Point2D(692, 147),
      "S_": new Point2D(5, 0),
      "B": new Point2D(702, 136),
      "B_": new Point2D(-6, 0)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Southeast Madagascar Sea Zone",
    "abbreviation": "SWI",
    "otherTitle": "Southwest Indian Ocean",
    "polygon": new Polygon2D(389, 550, 389, 538, 403, 528, 464, 528, 464, 550, 389, 550),
    "hiliteOffset": new Point2D(390, 529),
    "hiliteSize": new Point2D(74, 21),
    "adjacentIndices": [
      105,
      48,
      25,
      15
    ],
    "musters": {
      "T": new Point2D(410, 547),
      "T_": new Point2D(-4, 0),
      "i": new Point2D(400, 539),
      "i_": new Point2D(-4, 0),
      "a": new Point2D(409, 539),
      "a_": new Point2D(-4, 0),
      "A": new Point2D(419, 539),
      "A_": new Point2D(-4, 0),
      "C": new Point2D(433, 548),
      "C_": new Point2D(0, -3),
      "f": new Point2D(441, 542),
      "f_": new Point2D(0, -3),
      "b": new Point2D(454, 546),
      "S": new Point2D(429, 532),
      "S_": new Point2D(-5, -1),
      "B": new Point2D(454, 535),
      "B_": new Point2D(-3, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "South Australia Sea Zone",
    "abbreviation": "GAB",
    "otherTitle": "Great Australian Bight",
    "polygon": new Polygon2D(539, 550, 539, 528, 569, 528, 634, 510, 695, 528, 715, 528, 715, 550, 539, 550),
    "hiliteOffset": new Point2D(540, 520),
    "hiliteSize": new Point2D(175, 30),
    "adjacentIndices": [
      121,
      53,
      31,
      29,
      15,
      0
    ],
    "musters": {
      "T": new Point2D(619, 536),
      "T_": new Point2D(-8, 0),
      "i": new Point2D(611, 528),
      "i_": new Point2D(-8, 0),
      "a": new Point2D(620, 528),
      "a_": new Point2D(-8, 0),
      "A": new Point2D(629, 528),
      "A_": new Point2D(-8, 0),
      "C": new Point2D(568, 546),
      "C_": new Point2D(6, 0),
      "f": new Point2D(578, 538),
      "f_": new Point2D(6, 0),
      "b": new Point2D(615, 546),
      "S": new Point2D(550, 537),
      "S_": new Point2D(4, -3),
      "B": new Point2D(642, 544),
      "B_": new Point2D(-3, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "South Pacific Sea Zone",
    "abbreviation": "French Polynesia",
    "otherTitle": "POL",
    "polygon": new Polygon2D(779, 434, 779, 335, 863, 335, 863, 432, 779, 434),
    "hiliteOffset": new Point2D(780, 336),
    "hiliteSize": new Point2D(83, 98),
    "adjacentIndices": [
      40,
      34,
      31,
      20,
      16
    ],
    "musters": {
      "T": new Point2D(818, 392),
      "T_": new Point2D(3, -16),
      "i": new Point2D(808, 385),
      "i_": new Point2D(3, -16),
      "a": new Point2D(818, 385),
      "a_": new Point2D(3, -16),
      "A": new Point2D(827, 384),
      "A_": new Point2D(3, -16),
      "C": new Point2D(844, 419),
      "C_": new Point2D(0, -20),
      "f": new Point2D(853, 410),
      "f_": new Point2D(0, -20),
      "b": new Point2D(793, 370),
      "S": new Point2D(799, 421),
      "S_": new Point2D(-2, -7),
      "B": new Point2D(797, 350),
      "B_": new Point2D(-3, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "South Indian Sea Zone",
    "abbreviation": "SEI",
    "otherTitle": "Southeast Indian Ocean",
    "polygon": new Polygon2D(464, 550, 464, 528, 539, 528, 539, 550, 464, 550),
    "hiliteOffset": new Point2D(465, 529),
    "hiliteSize": new Point2D(74, 21),
    "adjacentIndices": [
      53,
      25,
      13,
      12
    ],
    "musters": {
      "T": new Point2D(476, 549),
      "T_": new Point2D(0, -4),
      "i": new Point2D(468, 541),
      "i_": new Point2D(0, -4),
      "a": new Point2D(476, 542),
      "a_": new Point2D(0, -4),
      "A": new Point2D(484, 541),
      "A_": new Point2D(0, -4),
      "C": new Point2D(500, 547),
      "C_": new Point2D(0, -3),
      "f": new Point2D(506, 540),
      "f_": new Point2D(0, -3),
      "b": new Point2D(520, 535),
      "S": new Point2D(491, 532),
      "S_": new Point2D(-4, -1),
      "B": new Point2D(527, 545),
      "B_": new Point2D(0, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "South East Pacific Sea Zone",
    "abbreviation": "SPO",
    "otherTitle": "South Pacific Ocean",
    "polygon": new Polygon2D(863, 432, 863, 379, 942, 379, 942, 432, 863, 432),
    "hiliteOffset": new Point2D(864, 380),
    "hiliteSize": new Point2D(78, 52),
    "adjacentIndices": [
      34,
      14,
      6
    ],
    "musters": {
      "T": new Point2D(929, 406),
      "T_": new Point2D(0, -6),
      "i": new Point2D(917, 397),
      "i_": new Point2D(1, -6),
      "a": new Point2D(927, 398),
      "a_": new Point2D(0, -6),
      "A": new Point2D(938, 397),
      "A_": new Point2D(0, -6),
      "C": new Point2D(883, 401),
      "C_": new Point2D(0, -4),
      "f": new Point2D(890, 393),
      "f_": new Point2D(0, -4),
      "b": new Point2D(929, 423),
      "S": new Point2D(884, 422),
      "S_": new Point2D(-4, -4),
      "B": new Point2D(909, 414),
      "B_": new Point2D(-1, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "South Brazil Sea Zone",
    "abbreviation": "RDJ",
    "otherTitle": "Rio de Janeiro",
    "polygon": new Polygon2D(111, 439, 146, 382, 176, 382, 176, 457, 130, 457, 111, 439),
    "hiliteOffset": new Point2D(113, 383),
    "hiliteSize": new Point2D(63, 74),
    "adjacentIndices": [
      118,
      56,
      50,
      42,
      28,
      18
    ],
    "musters": {
      "T": new Point2D(154, 417),
      "T_": new Point2D(-1, -5),
      "i": new Point2D(146, 409),
      "i_": new Point2D(0, -4),
      "a": new Point2D(156, 409),
      "a_": new Point2D(0, -4),
      "A": new Point2D(165, 409),
      "A_": new Point2D(0, -4),
      "C": new Point2D(157, 451),
      "C_": new Point2D(2, -5),
      "f": new Point2D(165, 442),
      "f_": new Point2D(2, -5),
      "b": new Point2D(142, 431),
      "b_": new Point2D(6, -2),
      "S": new Point2D(132, 445),
      "S_": new Point2D(-3, -3),
      "B": new Point2D(165, 393),
      "B_": new Point2D(-2, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "South Atlantic Sea Zone",
    "abbreviation": "TDC",
    "otherTitle": "Tristan da Cunha Island",
    "polygon": new Polygon2D(154, 514, 154, 457, 248, 457, 248, 514, 154, 514),
    "hiliteOffset": new Point2D(155, 458),
    "hiliteSize": new Point2D(93, 56),
    "adjacentIndices": [
      56,
      50,
      44,
      19,
      17,
      5
    ],
    "musters": {
      "T": new Point2D(167, 510),
      "T_": new Point2D(0, -11),
      "i": new Point2D(159, 502),
      "i_": new Point2D(0, -11),
      "a": new Point2D(166, 502),
      "a_": new Point2D(0, -11),
      "A": new Point2D(177, 502),
      "A_": new Point2D(0, -11),
      "C": new Point2D(232, 509),
      "C_": new Point2D(0, -11),
      "f": new Point2D(239, 500),
      "f_": new Point2D(0, -11),
      "b": new Point2D(223, 466),
      "S": new Point2D(164, 462),
      "S_": new Point2D(19, 0),
      "B": new Point2D(200, 505),
      "B_": new Point2D(0, -11)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "South Argentina/Chile Sea Zone",
    "abbreviation": "SCO",
    "otherTitle": "Scotia Sea",
    "polygon": new Polygon2D(3, 550, 3, 505, 154, 505, 154, 550, 3, 550),
    "hiliteOffset": new Point2D(4, 506),
    "hiliteSize": new Point2D(150, 44),
    "adjacentIndices": [
      122,
      50,
      44,
      31,
      18,
      6
    ],
    "musters": {
      "T": new Point2D(83, 529),
      "T_": new Point2D(13, -5),
      "i": new Point2D(80, 522),
      "i_": new Point2D(13, -5),
      "a": new Point2D(86, 522),
      "a_": new Point2D(13, -5),
      "A": new Point2D(94, 522),
      "A_": new Point2D(13, -5),
      "C": new Point2D(118, 539),
      "C_": new Point2D(8, -6),
      "f": new Point2D(127, 530),
      "f_": new Point2D(8, -6),
      "b": new Point2D(66, 542),
      "S": new Point2D(20, 516),
      "S_": new Point2D(-3, 7),
      "B": new Point2D(45, 525),
      "B_": new Point2D(-7, 8)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Solomon Islands Sea Zone",
    "abbreviation": "SOS",
    "otherTitle": "Solomon Sea",
    "polygon": new Polygon2D(715, 434, 715, 367, 731, 367, 731, 335, 779, 335, 779, 434, 715, 434),
    "hiliteOffset": new Point2D(716, 336),
    "hiliteSize": new Point2D(63, 98),
    "adjacentIndices": [
      75,
      54,
      40,
      32,
      31,
      29,
      14,
      8
    ],
    "musters": {
      "T": new Point2D(745, 377),
      "T_": new Point2D(6, -4),
      "i": new Point2D(737, 369),
      "i_": new Point2D(6, -4),
      "a": new Point2D(746, 369),
      "a_": new Point2D(6, -4),
      "A": new Point2D(755, 369),
      "A_": new Point2D(6, -4),
      "C": new Point2D(766, 400),
      "C_": new Point2D(0, -6),
      "f": new Point2D(771, 391),
      "f_": new Point2D(0, -6),
      "b": new Point2D(769, 426),
      "S": new Point2D(747, 348),
      "S_": new Point2D(5, -3),
      "B": new Point2D(733, 424),
      "B_": new Point2D(-3, -6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Saudi Arabia Sea Zone",
    "abbreviation": "RED",
    "otherTitle": "Red Sea",
    "canal": {
      "toIndex": 46,
      "checkIndices": [
        124,
        69
      ]
    },
    "polygon": new Polygon2D(386, 399, 347, 269, 419, 248, 436, 265, 443, 276, 443, 399, 386, 399),
    "hiliteOffset": new Point2D(348, 249),
    "hiliteSize": new Point2D(95, 150),
    "adjacentIndices": [
      124,
      99,
      82,
      77,
      69,
      46,
      39,
      35,
      25
    ],
    "musters": {
      "T": new Point2D(430, 348),
      "T_": new Point2D(0, -7),
      "i": new Point2D(425, 341),
      "i_": new Point2D(0, -7),
      "a": new Point2D(430, 341),
      "a_": new Point2D(0, -7),
      "A": new Point2D(438, 341),
      "A_": new Point2D(0, -7),
      "C": new Point2D(426, 394),
      "C_": new Point2D(0, -5),
      "f": new Point2D(433, 385),
      "f_": new Point2D(0, -5),
      "b": new Point2D(407, 393),
      "S": new Point2D(368, 297),
      "S_": new Point2D(4, 7),
      "B": new Point2D(427, 364),
      "B_": new Point2D(2, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Philippine Islands Sea Zone",
    "abbreviation": "SUL",
    "otherTitle": "Sulu Sea",
    "polygon": new Polygon2D(600, 345, 600, 310, 629, 280, 644, 255, 651, 262, 657, 262, 657, 304, 657, 345, 600, 345),
    "hiliteOffset": new Point2D(601, 255),
    "hiliteSize": new Point2D(56, 90),
    "adjacentIndices": [
      80,
      55,
      54,
      43,
      38,
      36,
      24
    ],
    "musters": {
      "T": new Point2D(645, 342),
      "T_": new Point2D(-13, 0),
      "i": new Point2D(636, 335),
      "i_": new Point2D(-13, 0),
      "a": new Point2D(644, 335),
      "a_": new Point2D(-13, 0),
      "A": new Point2D(652, 333),
      "A_": new Point2D(-13, 0),
      "C": new Point2D(643, 285),
      "C_": new Point2D(0, -4),
      "f": new Point2D(649, 276),
      "f_": new Point2D(0, -4),
      "b": new Point2D(649, 302),
      "S": new Point2D(610, 320),
      "S_": new Point2D(4, -2),
      "B": new Point2D(616, 307),
      "B_": new Point2D(3, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Eastern Panama Sea Zone",
    "abbreviation": "CAR",
    "otherTitle": "Caribbean Sea",
    "canal": {
      "toIndex": 2,
      "checkIndices": [
        83
      ]
    },
    "polygon": new Polygon2D(3, 299, 3, 281, 106, 281, 106, 355, 48, 335, 37, 331, 3, 299),
    "hiliteOffset": new Point2D(4, 282),
    "hiliteSize": new Point2D(102, 73),
    "adjacentIndices": [
      83,
      64,
      62,
      45,
      41,
      30,
      28,
      2
    ],
    "musters": {
      "T": new Point2D(93, 340),
      "T_": new Point2D(0, -6),
      "i": new Point2D(83, 332),
      "i_": new Point2D(0, -6),
      "a": new Point2D(91, 332),
      "a_": new Point2D(0, -6),
      "A": new Point2D(99, 331),
      "A_": new Point2D(0, -6),
      "C": new Point2D(64, 330),
      "C_": new Point2D(0, -5),
      "f": new Point2D(71, 321),
      "f_": new Point2D(0, -5),
      "b": new Point2D(95, 290),
      "S": new Point2D(40, 298),
      "S_": new Point2D(-1, -5),
      "B": new Point2D(48, 318),
      "B_": new Point2D(0, -6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Okinawa Sea Zone",
    "abbreviation": "RYU",
    "otherTitle": "Ryuku Islands",
    "polygon": new Polygon2D(657, 304, 657, 262, 710, 262, 710, 304, 657, 304),
    "hiliteOffset": new Point2D(658, 263),
    "hiliteSize": new Point2D(52, 41),
    "adjacentIndices": [
      84,
      54,
      38,
      22,
      8
    ],
    "musters": {
      "T": new Point2D(696, 300),
      "T_": new Point2D(0, -4),
      "i": new Point2D(689, 293),
      "i_": new Point2D(0, -4),
      "a": new Point2D(696, 293),
      "a_": new Point2D(0, -4),
      "A": new Point2D(706, 293),
      "A_": new Point2D(0, -4),
      "C": new Point2D(668, 298),
      "C_": new Point2D(0, -4),
      "f": new Point2D(663, 290),
      "f_": new Point2D(0, -4),
      "b": new Point2D(703, 268),
      "S": new Point2D(665, 270),
      "S_": new Point2D(3, -2),
      "B": new Point2D(692, 277),
      "B_": new Point2D(-3, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Northeast Madagascar Sea Zone",
    "abbreviation": "WIO",
    "otherTitle": "Western Indian Ocean",
    "polygon": new Polygon2D(403, 528, 399, 517, 406, 468, 411, 464, 411, 399, 443, 399, 443, 371, 475, 371, 475, 528, 403, 528),
    "hiliteOffset": new Point2D(400, 372),
    "hiliteSize": new Point2D(75, 156),
    "adjacentIndices": [
      105,
      53,
      39,
      35,
      21,
      15,
      12
    ],
    "musters": {
      "T": new Point2D(423, 499),
      "T_": new Point2D(0, -10),
      "i": new Point2D(416, 491),
      "i_": new Point2D(0, -10),
      "a": new Point2D(424, 492),
      "a_": new Point2D(0, -10),
      "A": new Point2D(433, 492),
      "A_": new Point2D(0, -10),
      "C": new Point2D(455, 404),
      "C_": new Point2D(2, -7),
      "f": new Point2D(463, 395),
      "f_": new Point2D(2, -7),
      "b": new Point2D(423, 436),
      "S": new Point2D(463, 515),
      "S_": new Point2D(-6, -8),
      "B": new Point2D(434, 417),
      "B_": new Point2D(-5, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Northern Mediterranean Sea Zone",
    "abbreviation": "BLA",
    "straits": {
      "toIndexes": [
        52,
        46
      ],
      "checkIndices": [
        68
      ]
    },
    "otherTitle": "Black Sea",
    "polygon": new Polygon2D(328, 213, 353, 180, 380, 172, 389, 205, 389, 208, 385, 211, 341, 236, 331, 241, 328, 213),
    "hiliteOffset": new Point2D(330, 174),
    "hiliteSize": new Point2D(58, 67),
    "adjacentIndices": [
      116,
      112,
      68,
      67,
      52,
      46
    ],
    "musters": {
      "T": new Point2D(375, 201),
      "T_": new Point2D(0, -2),
      "i": new Point2D(366, 194),
      "i_": new Point2D(0, -2),
      "a": new Point2D(373, 194),
      "a_": new Point2D(0, -2),
      "A": new Point2D(380, 194),
      "A_": new Point2D(0, -2),
      "C": new Point2D(350, 205),
      "C_": new Point2D(0, -2),
      "f": new Point2D(357, 199),
      "f_": new Point2D(0, -2),
      "b": new Point2D(351, 195),
      "S": new Point2D(339, 215),
      "S_": new Point2D(2, -2),
      "B": new Point2D(353, 187),
      "B_": new Point2D(2, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "North Pacific Sea Zone",
    "abbreviation": "NPO",
    "otherTitle": "North Pacific Ocean",
    "polygon": new Polygon2D(730, 262, 730, 157, 774, 157, 774, 262, 730, 262),
    "hiliteOffset": new Point2D(731, 158),
    "hiliteSize": new Point2D(43, 104),
    "adjacentIndices": [
      40,
      38,
      33,
      11,
      8,
      7
    ],
    "musters": {
      "T": new Point2D(745, 229),
      "T_": new Point2D(5, -6),
      "i": new Point2D(736, 220),
      "i_": new Point2D(5, -6),
      "a": new Point2D(745, 221),
      "a_": new Point2D(5, -6),
      "A": new Point2D(756, 220),
      "A_": new Point2D(5, -6),
      "C": new Point2D(749, 198),
      "C_": new Point2D(4, -8),
      "f": new Point2D(755, 190),
      "f_": new Point2D(4, -8),
      "b": new Point2D(742, 254),
      "S": new Point2D(742, 170),
      "S_": new Point2D(2, -4),
      "B": new Point2D(762, 244),
      "B_": new Point2D(-9, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "North Brazil Sea Zone",
    "abbreviation": "FDN",
    "otherTitle": "Fernando de Noronha Archipelago",
    "polygon": new Polygon2D(106, 355, 106, 316, 154, 316, 154, 382, 146, 382, 130, 374, 112, 365, 106, 355),
    "hiliteOffset": new Point2D(107, 317),
    "hiliteSize": new Point2D(47, 65),
    "adjacentIndices": [
      118,
      42,
      30,
      23,
      17
    ],
    "musters": {
      "T": new Point2D(127, 366),
      "T_": new Point2D(-4, -5),
      "i": new Point2D(117, 359),
      "i_": new Point2D(-2, -4),
      "a": new Point2D(127, 359),
      "a_": new Point2D(-2, -4),
      "A": new Point2D(138, 359),
      "A_": new Point2D(-3, -5),
      "C": new Point2D(121, 345),
      "C_": new Point2D(10, 0),
      "f": new Point2D(128, 337),
      "f_": new Point2D(10, 0),
      "b": new Point2D(139, 324),
      "S": new Point2D(117, 327),
      "S_": new Point2D(0, -4),
      "B": new Point2D(143, 370),
      "B_": new Point2D(1, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Northeast Australia Sea Zone",
    "abbreviation": "COR",
    "otherTitle": "Coral Sea",
    "polygon": new Polygon2D(602, 433, 602, 425, 619, 413, 642, 413, 654, 413, 654, 422, 715, 422, 715, 528, 695, 528, 634, 510, 602, 433),
    "hiliteOffset": new Point2D(603, 414),
    "hiliteSize": new Point2D(112, 114),
    "adjacentIndices": [
      121,
      55,
      49,
      32,
      31,
      20,
      13,
      0
    ],
    "musters": {
      "T": new Point2D(655, 438),
      "T_": new Point2D(0, -2),
      "i": new Point2D(651, 431),
      "i_": new Point2D(0, -2),
      "a": new Point2D(657, 431),
      "a_": new Point2D(0, -2),
      "A": new Point2D(662, 431),
      "A_": new Point2D(0, -2),
      "C": new Point2D(701, 451),
      "C_": new Point2D(0, -6),
      "f": new Point2D(707, 442),
      "f_": new Point2D(0, -6),
      "b": new Point2D(711, 472),
      "S": new Point2D(688, 430),
      "S_": new Point2D(-2, -2),
      "B": new Point2D(707, 521),
      "B_": new Point2D(1, -6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "North Atlantic Sea Zone",
    "abbreviation": "NAO",
    "otherTitle": "North Atlantic",
    "polygon": new Polygon2D(106, 316, 106, 220, 154, 220, 154, 316, 106, 316),
    "hiliteOffset": new Point2D(107, 221),
    "hiliteSize": new Point2D(47, 95),
    "adjacentIndices": [
      47,
      45,
      42,
      28,
      23,
      10
    ],
    "musters": {
      "T": new Point2D(122, 261),
      "T_": new Point2D(10, 0),
      "i": new Point2D(114, 253),
      "i_": new Point2D(10, 0),
      "a": new Point2D(121, 253),
      "a_": new Point2D(10, 0),
      "A": new Point2D(132, 253),
      "A_": new Point2D(10, 0),
      "C": new Point2D(123, 236),
      "C_": new Point2D(9, 0),
      "f": new Point2D(130, 228),
      "f_": new Point2D(9, 0),
      "b": new Point2D(121, 306),
      "S": new Point2D(120, 275),
      "S_": new Point2D(12, -3),
      "B": new Point2D(139, 291),
      "B_": new Point2D(-10, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "New Zealand Sea Zone",
    "abbreviation": "TAS",
    "otherTitle": "Tasman Sea",
    "polygon": new Polygon2D(715, 550, 715, 434, 783, 432, 783, 550, 715, 550),
    "hiliteOffset": new Point2D(716, 435),
    "hiliteSize": new Point2D(67, 115),
    "adjacentIndices": [
      86,
      29,
      20,
      19,
      14,
      13,
      6
    ],
    "musters": {
      "T": new Point2D(730, 509),
      "T_": new Point2D(0, -9),
      "i": new Point2D(721, 500),
      "i_": new Point2D(0, -9),
      "a": new Point2D(730, 501),
      "a_": new Point2D(0, -9),
      "A": new Point2D(737, 500),
      "A_": new Point2D(0, -9),
      "C": new Point2D(768, 543),
      "C_": new Point2D(0, -9),
      "f": new Point2D(774, 534),
      "f_": new Point2D(0, -8),
      "b": new Point2D(772, 475),
      "S": new Point2D(732, 453),
      "S_": new Point2D(3, -4),
      "B": new Point2D(763, 452),
      "B_": new Point2D(0, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "New Guinea Sea Zone",
    "abbreviation": "MEL",
    "otherTitle": "Melanesia",
    "polygon": new Polygon2D(642, 413, 642, 367, 715, 367, 715, 422, 654, 422, 654, 413, 642, 413),
    "hiliteOffset": new Point2D(643, 368),
    "hiliteSize": new Point2D(72, 54),
    "adjacentIndices": [
      87,
      55,
      54,
      29,
      20
    ],
    "musters": {
      "T": new Point2D(663, 421),
      "T_": new Point2D(-2, -5),
      "i": new Point2D(655, 415),
      "i_": new Point2D(-2, -5),
      "a": new Point2D(662, 415),
      "a_": new Point2D(-2, -5),
      "A": new Point2D(673, 415),
      "A_": new Point2D(-2, -5),
      "C": new Point2D(701, 388),
      "C_": new Point2D(0, -3),
      "f": new Point2D(707, 380),
      "f_": new Point2D(0, -3),
      "b": new Point2D(684, 373),
      "S": new Point2D(700, 417),
      "S_": new Point2D(-5, -2),
      "B": new Point2D(667, 377),
      "B_": new Point2D(-7, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Midway Island Sea Zone",
    "abbreviation": "TOC",
    "otherTitle": "Tropic of Cancer (Midway Islands)",
    "polygon": new Polygon2D(774, 262, 774, 157, 815, 157, 815, 262, 774, 262),
    "hiliteOffset": new Point2D(775, 158),
    "hiliteSize": new Point2D(40, 104),
    "adjacentIndices": [
      89,
      51,
      40,
      27,
      7,
      3
    ],
    "musters": {
      "T": new Point2D(804, 218),
      "T_": new Point2D(0, -5),
      "i": new Point2D(795, 209),
      "i_": new Point2D(0, -5),
      "a": new Point2D(802, 210),
      "a_": new Point2D(0, -5),
      "A": new Point2D(810, 209),
      "A_": new Point2D(0, -5),
      "C": new Point2D(796, 256),
      "C_": new Point2D(-3, -5),
      "f": new Point2D(805, 247),
      "f_": new Point2D(-3, -5),
      "b": new Point2D(803, 178),
      "S": new Point2D(786, 166),
      "S_": new Point2D(7, -2),
      "B": new Point2D(786, 188),
      "B_": new Point2D(0, -5)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Mexico Sea Zone",
    "abbreviation": "GOC",
    "otherTitle": "Gulf of California",
    "polygon": new Polygon2D(863, 379, 863, 245, 885, 249, 942, 311, 942, 379, 863, 379),
    "hiliteOffset": new Point2D(864, 247),
    "hiliteSize": new Point2D(78, 132),
    "adjacentIndices": [
      90,
      40,
      16,
      14,
      3,
      2
    ],
    "musters": {
      "T": new Point2D(876, 313),
      "T_": new Point2D(0, -8),
      "i": new Point2D(869, 306),
      "i_": new Point2D(0, -8),
      "a": new Point2D(877, 306),
      "a_": new Point2D(0, -8),
      "A": new Point2D(886, 306),
      "A_": new Point2D(0, -8),
      "C": new Point2D(899, 344),
      "C_": new Point2D(0, -10),
      "f": new Point2D(906, 336),
      "f_": new Point2D(0, -10),
      "b": new Point2D(903, 363),
      "S": new Point2D(876, 370),
      "S_": new Point2D(0, -7),
      "B": new Point2D(927, 361),
      "B_": new Point2D(1, -10)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Mozambique Sea Zone",
    "abbreviation": "MCH",
    "otherTitle": "Mozambique Channel",
    "polygon": new Polygon2D(359, 507, 358, 499, 372, 421, 386, 399, 411, 399, 411, 464, 406, 468, 384, 528, 370, 528, 359, 507),
    "hiliteOffset": new Point2D(360, 400),
    "hiliteSize": new Point2D(51, 128),
    "adjacentIndices": [
      105,
      95,
      91,
      66,
      48,
      25,
      21
    ],
    "musters": {
      "T": new Point2D(395, 443),
      "T_": new Point2D(0, -3),
      "i": new Point2D(387, 436),
      "i_": new Point2D(0, -3),
      "a": new Point2D(395, 436),
      "a_": new Point2D(0, -3),
      "A": new Point2D(404, 436),
      "A_": new Point2D(0, -3),
      "C": new Point2D(390, 421),
      "C_": new Point2D(3, -3),
      "f": new Point2D(398, 413),
      "f_": new Point2D(3, -3),
      "b": new Point2D(404, 454),
      "S": new Point2D(371, 493),
      "S_": new Point2D(3, -6),
      "B": new Point2D(390, 463),
      "B_": new Point2D(0, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Kwangtung Sea Zone",
    "abbreviation": "ECH",
    "otherTitle": "East China Sea",
    "polygon": new Polygon2D(590, 285, 616, 203, 625, 211, 632, 239, 644, 255, 629, 280, 600, 310, 600, 297, 590, 285),
    "hiliteOffset": new Point2D(591, 205),
    "hiliteSize": new Point2D(53, 105),
    "adjacentIndices": [
      94,
      43,
      38,
      22
    ],
    "musters": {
      "T": new Point2D(634, 262),
      "T_": new Point2D(0, -3),
      "i": new Point2D(631, 256),
      "i_": new Point2D(0, -3),
      "a": new Point2D(636, 256),
      "a_": new Point2D(0, -3),
      "A": new Point2D(641, 255),
      "A_": new Point2D(0, -3),
      "C": new Point2D(606, 296),
      "C_": new Point2D(3, -3),
      "f": new Point2D(610, 290),
      "f_": new Point2D(3, -3),
      "b": new Point2D(627, 272),
      "S": new Point2D(622, 282),
      "S_": new Point2D(2, -3),
      "B": new Point2D(631, 240),
      "B_": new Point2D(-2, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Karelia S.S.R. Sea Zone",
    "abbreviation": "BAR",
    "otherTitle": "Barents Sea",
    "polygon": new Polygon2D(311, 36, 311, 3, 436, 3, 422, 30, 367, 100, 311, 36),
    "hiliteOffset": new Point2D(312, 4),
    "hiliteSize": new Point2D(125, 62),
    "adjacentIndices": [
      97,
      9
    ],
    "musters": {
      "T": new Point2D(350, 43),
      "T_": new Point2D(0, -8),
      "i": new Point2D(342, 33),
      "i_": new Point2D(0, -8),
      "a": new Point2D(351, 34),
      "a_": new Point2D(0, -8),
      "A": new Point2D(359, 34),
      "A_": new Point2D(0, -8),
      "C": new Point2D(382, 39),
      "C_": new Point2D(1, -7),
      "f": new Point2D(390, 30),
      "f_": new Point2D(1, -7),
      "b": new Point2D(413, 14),
      "S": new Point2D(324, 9),
      "S_": new Point2D(-1, 7),
      "B": new Point2D(367, 9),
      "B_": new Point2D(-11, 0)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Japan Sea Zone",
    "abbreviation": "SJA",
    "otherTitle": "Sea of Japan",
    "polygon": new Polygon2D(616, 203, 676, 168, 680, 170, 688, 151, 707, 151, 707, 157, 730, 157, 730, 262, 651, 262, 644, 255, 632, 239, 625, 211, 616, 203),
    "hiliteOffset": new Point2D(618, 152),
    "hiliteSize": new Point2D(112, 110),
    "adjacentIndices": [
      98,
      92,
      36,
      27,
      24,
      22,
      11,
      8
    ],
    "musters": {
      "T": new Point2D(662, 208),
      "T_": new Point2D(4, -5),
      "i": new Point2D(654, 200),
      "i_": new Point2D(4, -5),
      "a": new Point2D(663, 201),
      "a_": new Point2D(4, -5),
      "A": new Point2D(670, 200),
      "A_": new Point2D(4, -5),
      "C": new Point2D(717, 218),
      "C_": new Point2D(0, -7),
      "f": new Point2D(720, 210),
      "f_": new Point2D(0, -7),
      "b": new Point2D(675, 254),
      "S": new Point2D(717, 185),
      "S_": new Point2D(1, -4),
      "B": new Point2D(717, 254),
      "B_": new Point2D(0, -6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "India Sea Zone",
    "abbreviation": "BEN",
    "otherTitle": "Bay of Bengal",
    "polygon": new Polygon2D(443, 371, 443, 276, 526, 296, 526, 342, 530, 342, 530, 371, 443, 371),
    "hiliteOffset": new Point2D(444, 277),
    "hiliteSize": new Point2D(86, 94),
    "adjacentIndices": [
      100,
      53,
      49,
      43,
      25,
      21
    ],
    "musters": {
      "T": new Point2D(460, 360),
      "T_": new Point2D(0, -14),
      "i": new Point2D(450, 352),
      "i_": new Point2D(0, -14),
      "a": new Point2D(461, 352),
      "a_": new Point2D(0, -14),
      "A": new Point2D(471, 352),
      "A_": new Point2D(0, -14),
      "C": new Point2D(513, 365),
      "C_": new Point2D(0, -7),
      "f": new Point2D(518, 356),
      "f_": new Point2D(0, -7),
      "b": new Point2D(486, 363),
      "S": new Point2D(455, 310),
      "S_": new Point2D(-1, -7),
      "B": new Point2D(514, 330),
      "B_": new Point2D(1, -7)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Hawaiian Islands Sea Zone",
    "abbreviation": "EPO",
    "otherTitle": "Eastern Pacific Ocean",
    "polygon": new Polygon2D(767, 335, 767, 262, 863, 262, 863, 335, 767, 335),
    "hiliteOffset": new Point2D(768, 263),
    "hiliteSize": new Point2D(95, 72),
    "adjacentIndices": [
      101,
      34,
      33,
      27,
      20,
      14,
      8,
      3
    ],
    "musters": {
      "T": new Point2D(827, 299),
      "T_": new Point2D(10, 0),
      "i": new Point2D(821, 292),
      "i_": new Point2D(10, 0),
      "a": new Point2D(830, 292),
      "a_": new Point2D(10, 0),
      "A": new Point2D(838, 291),
      "A_": new Point2D(10, 0),
      "C": new Point2D(846, 327),
      "C_": new Point2D(-5, -4),
      "f": new Point2D(851, 318),
      "f_": new Point2D(-5, -4),
      "b": new Point2D(809, 277),
      "S": new Point2D(779, 274),
      "S_": new Point2D(6, -3),
      "B": new Point2D(845, 274),
      "B_": new Point2D(-7, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Gulf Of Mexico Sea Zone",
    "abbreviation": "GOM",
    "otherTitle": "Gulf of Mexico",
    "polygon": new Polygon2D(923, 269, 924, 262, 942, 253, 942, 296, 932, 297, 928, 294, 923, 269),
    "hiliteOffset": new Point2D(925, 253),
    "hiliteSize": new Point2D(17, 44),
    "adjacentIndices": [
      90,
      59,
      45,
      23
    ],
    "musters": {
      "T": new Point2D(936, 295),
      "i": new Point2D(930, 289),
      "a": new Point2D(936, 289),
      "A": new Point2D(940, 289),
      "C": new Point2D(934, 281),
      "f": new Point2D(939, 279),
      "b": new Point2D(934, 270),
      "S": new Point2D(933, 276),
      "B": new Point2D(935, 264)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "French West Africa Sea Zone",
    "abbreviation": "CAN",
    "otherTitle": "Canary Islands",
    "polygon": new Polygon2D(154, 382, 154, 275, 196, 275, 219, 383, 219, 399, 176, 399, 176, 382, 154, 382),
    "hiliteOffset": new Point2D(155, 276),
    "hiliteSize": new Point2D(64, 123),
    "adjacentIndices": [
      104,
      79,
      56,
      30,
      28,
      17,
      10
    ],
    "musters": {
      "T": new Point2D(199, 395),
      "T_": new Point2D(-4, -4),
      "i": new Point2D(192, 386),
      "i_": new Point2D(-4, -4),
      "a": new Point2D(199, 387),
      "a_": new Point2D(-4, -4),
      "A": new Point2D(208, 386),
      "A_": new Point2D(-4, -4),
      "C": new Point2D(169, 374),
      "C_": new Point2D(2, -5),
      "f": new Point2D(175, 364),
      "f_": new Point2D(2, -5),
      "b": new Point2D(165, 314),
      "S": new Point2D(170, 282),
      "S_": new Point2D(-2, 8),
      "B": new Point2D(166, 344),
      "B_": new Point2D(0, -7)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "French Indo-China/Burma Sea Zone",
    "abbreviation": "SCH",
    "otherTitle": "South China Sea",
    "polygon": new Polygon2D(526, 342, 526, 296, 581, 286, 590, 285, 600, 297, 600, 310, 600, 345, 583, 375, 570, 370, 541, 342, 526, 342),
    "hiliteOffset": new Point2D(527, 288),
    "hiliteSize": new Point2D(73, 87),
    "adjacentIndices": [
      106,
      55,
      49,
      39,
      36,
      22
    ],
    "musters": {
      "T": new Point2D(588, 355),
      "T_": new Point2D(-6, -2),
      "i": new Point2D(581, 348),
      "i_": new Point2D(-6, -2),
      "a": new Point2D(586, 348),
      "a_": new Point2D(-6, -2),
      "A": new Point2D(595, 348),
      "A_": new Point2D(-6, -2),
      "C": new Point2D(589, 337),
      "C_": new Point2D(1, -5),
      "f": new Point2D(594, 330),
      "f_": new Point2D(1, -4),
      "b": new Point2D(594, 305),
      "S": new Point2D(536, 324),
      "S_": new Point2D(0, -5),
      "B": new Point2D(580, 366),
      "B_": new Point2D(-3, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Far South Atlantic Sea Zone",
    "abbreviation": "SAO",
    "otherTitle": "South Atlantic Ocean",
    "polygon": new Polygon2D(154, 550, 154, 514, 248, 514, 248, 550, 154, 550),
    "hiliteOffset": new Point2D(155, 515),
    "hiliteSize": new Point2D(93, 35),
    "adjacentIndices": [
      19,
      18,
      5
    ],
    "musters": {
      "T": new Point2D(168, 545),
      "T_": new Point2D(0, -5),
      "i": new Point2D(161, 537),
      "i_": new Point2D(0, -5),
      "a": new Point2D(170, 537),
      "a_": new Point2D(0, -5),
      "A": new Point2D(178, 537),
      "A_": new Point2D(0, -5),
      "C": new Point2D(195, 545),
      "C_": new Point2D(8, -3),
      "f": new Point2D(205, 536),
      "f_": new Point2D(8, -3),
      "b": new Point2D(236, 523),
      "S": new Point2D(226, 543),
      "S_": new Point2D(6, -2),
      "B": new Point2D(189, 520),
      "B_": new Point2D(13, 0)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Eastern U.S.A. Sea Zone",
    "abbreviation": "ECO",
    "otherTitle": "East Coast of America",
    "polygon": new Polygon2D(3, 281, 3, 262, 89, 203, 106, 220, 106, 281, 3, 281),
    "hiliteOffset": new Point2D(4, 205),
    "hiliteSize": new Point2D(102, 76),
    "adjacentIndices": [
      111,
      47,
      41,
      30,
      23
    ],
    "musters": {
      "T": new Point2D(14, 277),
      "T_": new Point2D(9, 0),
      "i": new Point2D(7, 268),
      "i_": new Point2D(9, 0),
      "a": new Point2D(15, 268),
      "a_": new Point2D(9, 0),
      "A": new Point2D(24, 268),
      "A_": new Point2D(9, 0),
      "C": new Point2D(67, 276),
      "C_": new Point2D(-1, -6),
      "f": new Point2D(75, 266),
      "f_": new Point2D(-1, -6),
      "b": new Point2D(90, 223),
      "S": new Point2D(91, 272),
      "S_": new Point2D(3, -5),
      "B": new Point2D(84, 239),
      "B_": new Point2D(4, 6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Eastern Mediterranean Sea Zone",
    "abbreviation": "EMD",
    "otherTitle": "Eastern Mediterranean",
    "canal": {
      "toIndex": 21,
      "checkIndices": [
        124,
        69
      ]
    },
    "straits": {
      "toIndexes": [
        26
      ],
      "checkIndices": [
        68
      ]
    },
    "polygon": new Polygon2D(314, 267, 331, 241, 341, 236, 354, 233, 371, 233, 356, 256, 346, 265, 347, 269, 342, 266, 314, 267),
    "hiliteOffset": new Point2D(314, 235),
    "hiliteSize": new Point2D(55, 34),
    "adjacentIndices": [
      124,
      69,
      68,
      52,
      26,
      21
    ],
    "musters": {
      "T": new Point2D(351, 246),
      "T_": new Point2D(2, -2),
      "i": new Point2D(346, 242),
      "i_": new Point2D(2, -2),
      "a": new Point2D(351, 242),
      "a_": new Point2D(2, -2),
      "A": new Point2D(359, 242),
      "A_": new Point2D(2, -2),
      "C": new Point2D(334, 261),
      "C_": new Point2D(-3, -1),
      "f": new Point2D(341, 258),
      "f_": new Point2D(-3, -1),
      "b": new Point2D(346, 252),
      "S": new Point2D(334, 252),
      "S_": new Point2D(4, 0),
      "B": new Point2D(336, 245),
      "B_": new Point2D(1, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Eastern Canada Sea Zone",
    "abbreviation": "LAB",
    "otherTitle": "Labrador Sea",
    "polygon": new Polygon2D(3, 86, 3, 64, 154, 64, 154, 220, 106, 220, 89, 203, 86, 191, 23, 144, 18, 132, 3, 86),
    "hiliteOffset": new Point2D(4, 65),
    "hiliteSize": new Point2D(150, 155),
    "adjacentIndices": [
      113,
      61,
      45,
      30,
      10,
      9
    ],
    "musters": {
      "T": new Point2D(42, 141),
      "T_": new Point2D(10, -14),
      "i": new Point2D(35, 132),
      "i_": new Point2D(10, -14),
      "a": new Point2D(43, 133),
      "a_": new Point2D(10, -14),
      "A": new Point2D(53, 132),
      "A_": new Point2D(10, -14),
      "C": new Point2D(118, 109),
      "C_": new Point2D(6, 9),
      "f": new Point2D(125, 99),
      "f_": new Point2D(6, 9),
      "b": new Point2D(108, 75),
      "S": new Point2D(135, 142),
      "S_": new Point2D(2, 8),
      "B": new Point2D(85, 87),
      "B_": new Point2D(3, 10)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "East South Africa Sea Zone",
    "abbreviation": "PEI",
    "otherTitle": "Prince Edward Islands",
    "polygon": new Polygon2D(316, 550, 317, 546, 359, 507, 370, 528, 384, 528, 389, 538, 389, 550, 316, 550),
    "hiliteOffset": new Point2D(317, 508),
    "hiliteSize": new Point2D(72, 42),
    "adjacentIndices": [
      105,
      66,
      35,
      12,
      5
    ],
    "musters": {
      "T": new Point2D(348, 547),
      "T_": new Point2D(3, -3),
      "i": new Point2D(340, 540),
      "i_": new Point2D(3, -3),
      "a": new Point2D(350, 540),
      "a_": new Point2D(3, -3),
      "A": new Point2D(360, 540),
      "A_": new Point2D(3, -3),
      "C": new Point2D(375, 546),
      "C_": new Point2D(0, -3),
      "f": new Point2D(380, 540),
      "f_": new Point2D(0, -3),
      "b": new Point2D(365, 531),
      "S": new Point2D(356, 520),
      "S_": new Point2D(3, -3),
      "B": new Point2D(329, 546),
      "B_": new Point2D(3, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "East Indies Sea Zone",
    "abbreviation": "JAV",
    "otherTitle": "Java Sea",
    "polygon": new Polygon2D(530, 425, 530, 342, 541, 342, 570, 370, 583, 375, 583, 386, 619, 413, 602, 425, 530, 425),
    "hiliteOffset": new Point2D(531, 343),
    "hiliteSize": new Point2D(88, 82),
    "adjacentIndices": [
      114,
      55,
      53,
      43,
      39,
      29,
      0
    ],
    "musters": {
      "T": new Point2D(538, 405),
      "T_": new Point2D(0, -3),
      "i": new Point2D(532, 398),
      "i_": new Point2D(0, -3),
      "a": new Point2D(538, 398),
      "a_": new Point2D(0, -3),
      "A": new Point2D(537, 391),
      "A_": new Point2D(0, -3),
      "C": new Point2D(543, 421),
      "C_": new Point2D(0, -2),
      "f": new Point2D(548, 417),
      "f_": new Point2D(0, -2),
      "b": new Point2D(589, 422),
      "S": new Point2D(567, 420),
      "S_": new Point2D(0, -2),
      "B": new Point2D(582, 394),
      "B_": new Point2D(-3, -6)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "East Argentina/Chile Sea Zone",
    "abbreviation": "GSJ",
    "otherTitle": "Gulf of San Jorge",
    "polygon": new Polygon2D(68, 505, 73, 484, 111, 439, 130, 457, 154, 457, 154, 505, 68, 505),
    "hiliteOffset": new Point2D(69, 440),
    "hiliteSize": new Point2D(85, 65),
    "adjacentIndices": [
      122,
      19,
      18,
      17
    ],
    "musters": {
      "T": new Point2D(83, 500),
      "T_": new Point2D(13, 0),
      "i": new Point2D(78, 493),
      "i_": new Point2D(13, 0),
      "a": new Point2D(86, 493),
      "a_": new Point2D(13, 0),
      "A": new Point2D(94, 493),
      "A_": new Point2D(13, 0),
      "C": new Point2D(96, 481),
      "C_": new Point2D(9, 0),
      "f": new Point2D(104, 472),
      "f_": new Point2D(9, 0),
      "b": new Point2D(141, 465),
      "S": new Point2D(143, 478),
      "S_": new Point2D(0, 7),
      "B": new Point2D(118, 459),
      "B_": new Point2D(-2, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "East Alaska Sea Zone",
    "abbreviation": "GOA",
    "otherTitle": "Gulf of Alaska",
    "polygon": new Polygon2D(799, 157, 799, 128, 821, 123, 835, 151, 834, 157, 799, 157),
    "hiliteOffset": new Point2D(800, 129),
    "hiliteSize": new Point2D(34, 28),
    "adjacentIndices": [
      126,
      61,
      33,
      7,
      3
    ],
    "musters": {
      "T": new Point2D(825, 155),
      "T_": new Point2D(0, -3),
      "i": new Point2D(819, 148),
      "i_": new Point2D(0, -3),
      "a": new Point2D(825, 148),
      "a_": new Point2D(0, -3),
      "A": new Point2D(834, 148),
      "A_": new Point2D(0, -3),
      "C": new Point2D(805, 154),
      "C_": new Point2D(0, -3),
      "f": new Point2D(808, 150),
      "f_": new Point2D(0, -3),
      "b": new Point2D(814, 145),
      "S": new Point2D(804, 139),
      "B": new Point2D(808, 131),
      "B_": new Point2D(-2, -2)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Central Mediterranean Sea Zone",
    "abbreviation": "CMD",
    "straits": {
      "toIndexes": [
        26
      ],
      "checkIndices": [
        68
      ]
    },
    "otherTitle": "Central Mediterranean",
    "polygon": new Polygon2D(249, 211, 251, 206, 256, 207, 251, 206, 278, 186, 328, 213, 331, 241, 314, 267, 298, 270, 279, 262, 276, 237, 249, 211),
    "hiliteOffset": new Point2D(251, 195),
    "hiliteSize": new Point2D(80, 75),
    "adjacentIndices": [
      93,
      74,
      46,
      26,
      4
    ],
    "musters": {
      "T": new Point2D(311, 259),
      "T_": new Point2D(0, -3),
      "i": new Point2D(305, 251),
      "i_": new Point2D(0, -3),
      "a": new Point2D(313, 252),
      "a_": new Point2D(0, -3),
      "A": new Point2D(319, 250),
      "A_": new Point2D(0, -3),
      "C": new Point2D(292, 260),
      "C_": new Point2D(-2, -5),
      "f": new Point2D(285, 252),
      "f_": new Point2D(-2, -5),
      "b": new Point2D(279, 228),
      "S": new Point2D(270, 217),
      "S_": new Point2D(-1, -5),
      "B": new Point2D(308, 235),
      "B_": new Point2D(-1, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Central Indian Sea Zone",
    "abbreviation": "EIO",
    "otherTitle": "Eastern Indian Ocean",
    "polygon": new Polygon2D(475, 528, 475, 371, 530, 371, 530, 425, 548, 425, 548, 528, 475, 528),
    "hiliteOffset": new Point2D(476, 372),
    "hiliteSize": new Point2D(72, 156),
    "adjacentIndices": [
      49,
      39,
      25,
      15,
      13,
      0
    ],
    "musters": {
      "T": new Point2D(492, 521),
      "T_": new Point2D(18, 0),
      "i": new Point2D(485, 512),
      "i_": new Point2D(18, 0),
      "a": new Point2D(493, 513),
      "a_": new Point2D(18, 0),
      "A": new Point2D(501, 512),
      "A_": new Point2D(18, 0),
      "C": new Point2D(497, 410),
      "C_": new Point2D(7, -3),
      "f": new Point2D(506, 402),
      "f_": new Point2D(7, -3),
      "b": new Point2D(531, 436),
      "S": new Point2D(532, 470),
      "S_": new Point2D(0, 7),
      "B": new Point2D(506, 385),
      "B_": new Point2D(-8, -4)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Caroline Islands Sea Zone",
    "abbreviation": "MIC",
    "otherTitle": "Micronesia",
    "polygon": new Polygon2D(642, 367, 642, 345, 657, 345, 657, 304, 731, 304, 731, 367, 642, 367),
    "hiliteOffset": new Point2D(643, 305),
    "hiliteSize": new Point2D(88, 62),
    "adjacentIndices": [
      117,
      55,
      32,
      24,
      22,
      20,
      8
    ],
    "musters": {
      "B": new Point2D(670, 321),
      "B_": new Point2D(0, -5),
      "C": new Point2D(662, 362),
      "C_": new Point2D(0, -5),
      "T": new Point2D(695, 361),
      "T_": new Point2D(11, 0),
      "S": new Point2D(720, 326),
      "S_": new Point2D(0, -5),
      "i": new Point2D(686, 353),
      "i_": new Point2D(11, 0),
      "a": new Point2D(696, 353),
      "a_": new Point2D(11, 0),
      "A": new Point2D(704, 353),
      "A_": new Point2D(11, 0),
      "f": new Point2D(669, 353),
      "f_": new Point2D(0, -5),
      "b": new Point2D(695, 313)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Borneo/Celebes Sea Zone",
    "abbreviation": "CEL",
    "otherTitle": "Celebes Sea",
    "polygon": new Polygon2D(583, 386, 583, 375, 600, 345, 642, 345, 642, 413, 619, 413, 583, 386),
    "hiliteOffset": new Point2D(584, 346),
    "hiliteSize": new Point2D(58, 67),
    "adjacentIndices": [
      119,
      54,
      49,
      43,
      32,
      29,
      22
    ],
    "musters": {
      "B": new Point2D(632, 357),
      "B_": new Point2D(-2, -3),
      "C": new Point2D(609, 400),
      "C_": new Point2D(-2, -3),
      "T": new Point2D(633, 409),
      "T_": new Point2D(0, -5),
      "S": new Point2D(595, 381),
      "S_": new Point2D(-1, -3),
      "i": new Point2D(625, 402),
      "i_": new Point2D(0, -5),
      "a": new Point2D(631, 401),
      "a_": new Point2D(0, -5),
      "A": new Point2D(638, 401),
      "A_": new Point2D(0, -5),
      "f": new Point2D(612, 393),
      "f_": new Point2D(-2, -3),
      "b": new Point2D(639, 377)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Belgian Congo Sea Zone",
    "abbreviation": "ASC",
    "otherTitle": "Ascension Island",
    "polygon": new Polygon2D(176, 457, 176, 399, 219, 399, 219, 383, 254, 374, 262, 378, 267, 384, 271, 416, 280, 436, 248, 436, 248, 457, 176, 457),
    "hiliteOffset": new Point2D(177, 375),
    "hiliteSize": new Point2D(103, 82),
    "adjacentIndices": [
      120,
      107,
      42,
      18,
      17,
      5
    ],
    "musters": {
      "B": new Point2D(232, 451),
      "B_": new Point2D(-3, -6),
      "C": new Point2D(227, 429),
      "C_": new Point2D(11, -5),
      "T": new Point2D(240, 403),
      "T_": new Point2D(5, -5),
      "S": new Point2D(188, 409),
      "S_": new Point2D(12, -3),
      "i": new Point2D(232, 394),
      "i_": new Point2D(5, -5),
      "a": new Point2D(242, 395),
      "a_": new Point2D(5, -5),
      "A": new Point2D(252, 394),
      "A_": new Point2D(5, -5),
      "f": new Point2D(235, 420),
      "f_": new Point2D(11, -5),
      "b": new Point2D(261, 428)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Baltic Sea Zone",
    "abbreviation": "BAL",
    "straits": {
      "toIndexes": [
        9
      ],
      "checkIndices": [
        71,
        60
      ]
    },
    "otherTitle": "Baltic Sea",
    "polygon": new Polygon2D(268, 101, 301, 60, 307, 64, 321, 88, 323, 93, 300, 126, 284, 133, 273, 132, 269, 115, 268, 101),
    "hiliteOffset": new Point2D(268, 61),
    "hiliteSize": new Point2D(53, 71),
    "adjacentIndices": [
      112,
      108,
      103,
      97,
      71,
      60,
      9
    ],
    "musters": {
      "T": new Point2D(301, 100),
      "T_": new Point2D(2, -2),
      "i": new Point2D(300, 89),
      "i_": new Point2D(2, -2),
      "a": new Point2D(301, 89),
      "a_": new Point2D(2, -2),
      "A": new Point2D(301, 89),
      "A_": new Point2D(2, -2),
      "C": new Point2D(287, 123),
      "C_": new Point2D(3, -3),
      "f": new Point2D(295, 115),
      "f_": new Point2D(3, -3),
      "b": new Point2D(302, 71),
      "S": new Point2D(278, 115),
      "S_": new Point2D(-2, -2),
      "B": new Point2D(273, 105),
      "B_": new Point2D(2, -3)
    },
    "originalPowerId": TeamId.SeaZone
  },
  {
    "title": "Yakut S.S.R.",
    "abbreviation": "Yak",
    "titles": [
      {
        "text": "Yakut",
        "point": {
          "x": 600.5,
          "y": 81
        }
      },
      {
        "text": "S.S.R.",
        "point": {
          "x": 600.5,
          "y": 91
        }
      }
    ],
        "polygon": new Polygon2D(572, 148, 572, 118, 572, 63, 632, 63, 632, 129, 628, 141, 615, 163, 610, 165, 607, 160, 600, 160, 600, 150, 580, 154, 572, 148),
    "hiliteOffset": new Point2D(573, 64),
    "hiliteSize": new Point2D(59, 99),
    "overlaySize": new Point2D(59, 99),
    "adjacentIndices": [
      109,
      92,
      88,
      85,
      73
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(600.5, 105),
    "musters": {
      "F": new Point2D(589, 106),
      "A": new Point2D(611, 106),
      "i": new Point2D(580, 91),
      "i_": new Point2D(4, -7),
      "a": new Point2D(623, 93),
      "a_": new Point2D(-1, -7),
      "f": new Point2D(585, 123),
      "f_": new Point2D(3, 8),
      "b": new Point2D(612, 122),
      "b_": new Point2D(-1, 10)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "Western U.S.A.",
    "abbreviation": "WUs",
    "titles": [
      {
        "text": "Western",
        "point": {
          "x": 905.5,
          "y": 196
        }
      },
      {
        "text": "U.S.A.",
        "point": {
          "x": 905.5,
          "y": 206
        }
      }
    ],
        "originalIndustrialComplex": true,
    "polygon": new Polygon2D(844, 197, 847, 178, 852, 176, 942, 176, 942, 253, 924, 262, 923, 269, 910, 257, 902, 257, 893, 247, 885, 249, 873, 244, 863, 245, 854, 234, 846, 217, 844, 197),
    "hiliteOffset": new Point2D(844, 177),
    "hiliteSize": new Point2D(98, 92),
    "overlaySize": new Point2D(98, 92),
    "adjacentIndices": [
      111,
      90,
      61,
      41,
      3
    ],
    "ipcValue": 10,
    "ipcPoint": new Point2D(904.5, 220),
    "musters": {
      "F": new Point2D(894, 220),
      "A": new Point2D(916, 219),
      "i": new Point2D(861, 187),
      "i_": new Point2D(10, 0),
      "a": new Point2D(861, 217),
      "a_": new Point2D(11, -5),
      "f": new Point2D(886, 234),
      "f_": new Point2D(-9, -1),
      "b": new Point2D(916, 243),
      "b_": new Point2D(6, -7)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Western Europe",
    "abbreviation": "WEu",
    "titles": [
      {
        "text": "Western",
        "point": {
          "x": 242,
          "y": 157
        }
      },
      {
        "text": "Europe",
        "point": {
          "x": 242,
          "y": 167
        }
      }
    ],
        "polygon": new Polygon2D(218, 155, 226, 156, 266, 128, 265, 119, 269, 115, 273, 114, 273, 132, 258, 147, 257, 158, 261, 160, 262, 173, 255, 177, 255, 185, 261, 191, 251, 206, 246, 205, 243, 211, 222, 184, 226, 172, 225, 164, 218, 161, 218, 155),
    "hiliteOffset": new Point2D(218, 114),
    "hiliteSize": new Point2D(56, 97),
    "overlaySize": new Point2D(121, 205),
    "overlayOffset": new Point2D(153, 6),
    "adjacentIndices": [
      103,
      74,
      72,
      70,
      57,
      10,
      9,
      4
    ],
    "ipcValue": 6,
    "ipcPoint": new Point2D(243.5, 181),
    "musters": {
      "F": new Point2D(234, 181),
      "A": new Point2D(252, 180),
      "i": new Point2D(226, 162),
      "i_": new Point2D(7, 4),
      "a": new Point2D(241, 154),
      "a_": new Point2D(6, 8),
      "f": new Point2D(251, 146),
      "f_": new Point2D(6, -6),
      "b": new Point2D(244, 199),
      "b_": new Point2D(-1, -6)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "Western Canada",
    "abbreviation": "WCa",
    "titles": [
      {
        "text": "Western",
        "point": {
          "x": 879,
          "y": 98
        }
      },
      {
        "text": "Canada",
        "point": {
          "x": 879,
          "y": 108
        }
      }
    ],
        "polygon": new Polygon2D(813, 122, 813, 63, 942, 63, 942, 176, 852, 176, 846, 175, 837, 168, 834, 157, 835, 151, 831, 148, 830, 137, 821, 123, 813, 122),
    "hiliteOffset": new Point2D(814, 64),
    "hiliteSize": new Point2D(128, 112),
    "overlaySize": new Point2D(128, 112),
    "adjacentIndices": [
      126,
      113,
      59,
      51,
      47,
      3
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(878.5, 122),
    "musters": {
      "F": new Point2D(869, 123),
      "A": new Point2D(889, 122),
      "i": new Point2D(841, 90),
      "i_": new Point2D(-5, -7),
      "a": new Point2D(847, 121),
      "a_": new Point2D(-6, -9),
      "f": new Point2D(858, 153),
      "f_": new Point2D(12, -4),
      "b": new Point2D(915, 146),
      "b_": new Point2D(0, -14)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "West Indies",
    "abbreviation": "Cub",
    "titles": [
      {
        "text": "West Indies",
        "point": {
          "x": 82,
          "y": 306
        }
      },
      {
        "text": "West Indies",
        "point": {
          "x": 29,
          "y": 7
        }
      }
    ],
        "polygon": new Polygon2D(47, 287, 58, 283, 90, 298, 89, 302, 58, 301, 47, 287),
    "hiliteOffset": new Point2D(10, 21),
    "hiliteSize": new Point2D(81, 282),
    "overlaySize": new Point2D(81, 282),
    "detailRectangle": new Rectangle2D(5, 5, 73, 58),
    "adjacentIndices": [
      23
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(78.5, 301),
    "musters": {
      "F": new Point2D(21, 43),
      "A": new Point2D(31, 42),
      "i": new Point2D(14, 24),
      "i_": new Point2D(7, -3),
      "a": new Point2D(29, 33),
      "a_": new Point2D(8, -6),
      "f": new Point2D(65, 44),
      "f_": new Point2D(-11, 1),
      "b": new Point2D(49, 34),
      "b_": new Point2D(7, -5)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Wake Island",
    "abbreviation": "Wak",
    "titles": [
      {
        "text": "Wake",
        "point": {
          "x": 746.5,
          "y": 287
        }
      },
      {
        "text": "Island",
        "point": {
          "x": 746.5,
          "y": 297
        }
      },
      {
        "text": "Wake",
        "point": {
          "x": 741.5,
          "y": 43
        }
      },
      {
        "text": "Island",
        "point": {
          "x": 744,
          "y": 53
        }
      }
    ],
        "polygon": new Polygon2D(727, 285, 731, 278, 738, 281, 731, 288, 727, 285),
    "hiliteOffset": new Point2D(728, 17),
    "hiliteSize": new Point2D(51, 271),
    "overlaySize": new Point2D(51, 271),
    "detailRectangle": new Rectangle2D(730, 5, 71, 57),
    "adjacentIndices": [
      8
    ],
    "musters": {
      "A": new Point2D(770, 14),
      "i": new Point2D(754, 31),
      "i_": new Point2D(3, -5),
      "a": new Point2D(781, 22),
      "a_": new Point2D(-8, 4),
      "f": new Point2D(785, 39),
      "f_": new Point2D(-6, -3),
      "b": new Point2D(767, 41),
      "b_": new Point2D(-9, 0)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Venezuela/Colombia",
    "abbreviation": "Col",
    "titles": [
      {
        "text": "Venezuela",
        "point": {
          "x": 35.5,
          "y": 349
        }
      },
      {
        "text": "Colombia",
        "point": {
          "x": 35.5,
          "y": 359
        }
      }
    ],
        "polygon": new Polygon2D(21, 375, 36, 339, 39, 336, 48, 335, 71, 338, 91, 350, 106, 355, 84, 362, 78, 351, 67, 356, 66, 362, 54, 362, 51, 379, 45, 381, 33, 377, 26, 377, 21, 380, 21, 375),
    "hiliteOffset": new Point2D(21, 335),
    "hiliteSize": new Point2D(85, 46),
    "overlaySize": new Point2D(85, 46),
    "adjacentIndices": [
      118,
      83,
      81,
      23,
      2
    ],
    "musters": {
      "A": new Point2D(42, 344),
      "i": new Point2D(72, 345),
      "i_": new Point2D(4, 0),
      "a": new Point2D(89, 352),
      "a_": new Point2D(5, 0),
      "f": new Point2D(59, 353),
      "f_": new Point2D(0, -5),
      "b": new Point2D(39, 369),
      "b_": new Point2D(-1, -4)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "United Kingdom",
    "abbreviation": "GBr",
    "titles": [
      {
        "text": "United",
        "point": {
          "x": 188,
          "y": 133
        }
      },
      {
        "text": "Kingdom",
        "point": {
          "x": 188,
          "y": 143
        }
      }
    ],
        "isCapital": true,
    "originalIndustrialComplex": true,
    "polygon": new Polygon2D(200, 142, 214, 119, 220, 120, 223, 113, 216, 94, 223, 82, 244, 77, 239, 87, 242, 91, 236, 106, 243, 107, 250, 112, 254, 122, 250, 132, 242, 136, 235, 149, 200, 142),
    "hiliteOffset": new Point2D(201, 77),
    "hiliteSize": new Point2D(43, 74),
    "overlaySize": new Point2D(43, 74),
    "adjacentIndices": [
      9
    ],
    "ipcValue": 8,
    "ipcPoint": new Point2D(208.5, 151),
    "musters": {
      "F": new Point2D(206, 140),
      "A": new Point2D(216, 141),
      "i": new Point2D(228, 141),
      "i_": new Point2D(6, -5),
      "a": new Point2D(216, 131),
      "a_": new Point2D(6, -6),
      "f": new Point2D(226, 104),
      "f_": new Point2D(9, 5),
      "b": new Point2D(226, 91),
      "b_": new Point2D(7, -4)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Union of South Africa",
    "abbreviation": "SAf",
    "titles": [
      {
        "text": "Union of",
        "point": {
          "x": 320,
          "y": 479
        }
      },
      {
        "text": "South Africa",
        "point": {
          "x": 319.5,
          "y": 489
        }
      }
    ],
        "polygon": new Polygon2D(287, 486, 307, 469, 322, 465, 331, 456, 349, 453, 350, 465, 348, 487, 358, 499, 359, 507, 323, 544, 317, 546, 303, 514, 294, 506, 287, 486),
    "hiliteOffset": new Point2D(287, 454),
    "hiliteSize": new Point2D(72, 92),
    "overlaySize": new Point2D(72, 92),
    "adjacentIndices": [
      123,
      95,
      91,
      48,
      35,
      5
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(320.5, 503),
    "musters": {
      "F": new Point2D(311, 503),
      "A": new Point2D(330, 503),
      "i": new Point2D(335, 467),
      "i_": new Point2D(-8, 4),
      "a": new Point2D(345, 507),
      "a_": new Point2D(-2, -8),
      "f": new Point2D(314, 516),
      "f_": new Point2D(1, 9),
      "b": new Point2D(332, 520),
      "b_": new Point2D(-2, 6)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Ukraine S.S.R.",
    "abbreviation": "Ukr",
    "titles": [
      {
        "text": "Ukraine",
        "point": {
          "x": 360,
          "y": 156
        }
      },
      {
        "text": "S.S.R.",
        "point": {
          "x": 359.5,
          "y": 166
        }
      }
    ],
        "polygon": new Polygon2D(343, 176, 343, 101, 355, 107, 367, 100, 378, 108, 377, 146, 374, 148, 376, 156, 383, 166, 380, 172, 366, 179, 374, 182, 363, 191, 358, 179, 353, 180, 350, 176, 343, 176),
    "hiliteOffset": new Point2D(343, 102),
    "hiliteSize": new Point2D(40, 89),
    "overlaySize": new Point2D(40, 89),
    "adjacentIndices": [
      116,
      112,
      97,
      26
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(361.5, 149),
    "musters": {
      "F": new Point2D(374, 167),
      "A": new Point2D(351, 168),
      "i": new Point2D(350, 136),
      "i_": new Point2D(0, 10),
      "a": new Point2D(369, 137),
      "a_": new Point2D(0, 8),
      "f": new Point2D(370, 126),
      "f_": new Point2D(0, -6),
      "b": new Point2D(354, 115),
      "b_": new Point2D(0, 6)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "Turkey",
    "abbreviation": "Tur",
    "titles": [
      {
        "text": "Turkey",
        "point": {
          "x": 366.5,
          "y": 218
        }
      }
    ],
        "polygon": new Polygon2D(335, 228, 339, 217, 367, 203, 380, 208, 385, 211, 389, 208, 389, 205, 399, 210, 395, 221, 394, 228, 389, 233, 371, 233, 362, 236, 362, 233, 354, 233, 348, 237, 341, 236, 341, 232, 335, 228),
    "hiliteOffset": new Point2D(335, 203),
    "hiliteSize": new Point2D(64, 35),
    "overlaySize": new Point2D(64, 35),
    "adjacentIndices": [
      116,
      82,
      69,
      46,
      26
    ],
    "musters": {
      "A": new Point2D(364, 222),
      "i": new Point2D(389, 212),
      "i_": new Point2D(-7, 0),
      "a": new Point2D(355, 214),
      "a_": new Point2D(7, -1),
      "f": new Point2D(343, 225),
      "f_": new Point2D(7, 0),
      "b": new Point2D(383, 224),
      "b_": new Point2D(-7, 1)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Syria/Iraq",
    "abbreviation": "Syr",
    "titles": [
      {
        "text": "Syria",
        "point": {
          "x": 376,
          "y": 243
        }
      },
      {
        "text": "Iraq",
        "point": {
          "x": 376,
          "y": 253
        }
      }
    ],
        "polygon": new Polygon2D(346, 265, 356, 256, 371, 233, 389, 233, 387, 248, 393, 270, 388, 274, 392, 280, 389, 284, 386, 282, 377, 292, 359, 276, 361, 271, 357, 269, 354, 276, 347, 269, 346, 265),
    "hiliteOffset": new Point2D(347, 232),
    "hiliteSize": new Point2D(46, 61),
    "overlaySize": new Point2D(46, 61),
    "adjacentIndices": [
      124,
      82,
      77,
      68,
      46,
      21
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(372.5, 267),
    "musters": {
      "F": new Point2D(364, 267),
      "A": new Point2D(381, 265),
      "i": new Point2D(363, 255),
      "i_": new Point2D(-4, 5),
      "a": new Point2D(378, 238),
      "a_": new Point2D(0, 7),
      "f": new Point2D(385, 278),
      "f_": new Point2D(1, -6),
      "b": new Point2D(369, 280),
      "b_": new Point2D(6, 4)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Switzerland",
    "abbreviation": "Swz",
    "titles": [
      {
        "text": "Switz",
        "point": {
          "x": 266.5,
          "y": 178
        }
      },
      {
        "text": "Switzerland",
        "point": {
          "x": 199.5,
          "y": 54
        }
      }
    ],
        "polygon": new Polygon2D(255, 185, 255, 177, 262, 173, 277, 176, 278, 186, 267, 191, 261, 191, 255, 185),
    "hiliteOffset": new Point2D(157, 12),
    "hiliteSize": new Point2D(121, 179),
    "overlaySize": new Point2D(121, 179),
    "adjacentIndices": [
      103,
      74,
      60
    ],
    "detailRectangle": new Rectangle2D(152, 5, 73, 58),
    "musters": {
      "A": new Point2D(189, 33),
      "i": new Point2D(173, 20),
      "i_": new Point2D(9, 1),
      "a": new Point2D(205, 22),
      "a_": new Point2D(2, 7),
      "f": new Point2D(171, 45),
      "f_": new Point2D(-3, -8),
      "b": new Point2D(204, 46),
      "b_": new Point2D(-7, 0)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Sweden",
    "abbreviation": "Swe",
    "titles": [
      {
        "text": "Sweden",
        "point": {
          "x": 291,
          "y": 95
        }
      },
      {
        "text": "Sweden",
        "point": {
          "x": 459,
          "y": 53
        }
      }
    ],
        "polygon": new Polygon2D(275, 97, 285, 83, 287, 75, 296, 58, 301, 60, 299, 68, 292, 86, 296, 90, 293, 96, 292, 105, 288, 112, 282, 115, 279, 106, 275, 103, 275, 97),
    "hiliteOffset": new Point2D(275, 6),
    "hiliteSize": new Point2D(230, 109),
    "overlaySize": new Point2D(230, 109),
    "adjacentIndices": [
      108,
      57
    ],
    "detailRectangle": new Rectangle2D(443, 5, 71, 57),
    "musters": {
      "A": new Point2D(473, 26),
      "i": new Point2D(496, 27),
      "i_": new Point2D(-6, -1),
      "a": new Point2D(495, 14),
      "a_": new Point2D(-10, 0),
      "f": new Point2D(461, 45),
      "f_": new Point2D(0, -10),
      "b": new Point2D(483, 53),
      "b_": new Point2D(0, -7)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Spain",
    "abbreviation": "Spa",
    "titles": [
      {
        "text": "Spain",
        "point": {
          "x": 209.5,
          "y": 204
        }
      }
    ],
        "polygon": new Polygon2D(188, 212, 193, 187, 200, 177, 222, 184, 243, 211, 227, 232, 222, 234, 213, 226, 205, 237, 199, 235, 190, 229, 188, 212),
    "hiliteOffset": new Point2D(188, 178),
    "hiliteSize": new Point2D(55, 60),
    "overlaySize": new Point2D(163, 232),
    "overlayOffset": new Point2D(80, 6),
    "adjacentIndices": [
      102,
      60,
      10,
      4
    ],
    "musters": {
      "A": new Point2D(223, 223),
      "i": new Point2D(223, 196),
      "i_": new Point2D(5, 5),
      "a": new Point2D(210, 189),
      "a_": new Point2D(4, 8),
      "f": new Point2D(198, 197),
      "f_": new Point2D(-2, 7),
      "b": new Point2D(202, 224),
      "b_": new Point2D(4, -4)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Soviet Far East",
    "abbreviation": "Far",
    "titles": [
      {
        "text": "Soviet",
        "point": {
          "x": 682.5,
          "y": 67
        }
      },
      {
        "text": "Far East",
        "point": {
          "x": 682.5,
          "y": 77
        }
      }
    ],
        "polygon": new Polygon2D(632, 129, 632, 63, 746, 63, 749, 66, 749, 87, 727, 103, 724, 114, 728, 126, 726, 140, 719, 150, 707, 124, 706, 116, 709, 111, 702, 102, 701, 112, 695, 114, 681, 106, 664, 122, 675, 128, 682, 144, 680, 164, 676, 168, 670, 164, 667, 156, 656, 144, 646, 147, 632, 129),
    "hiliteOffset": new Point2D(633, 64),
    "hiliteSize": new Point2D(117, 104),
    "overlaySize": new Point2D(117, 104),
    "adjacentIndices": [
      92,
      58,
      11
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(683.5, 91),
    "musters": {
      "F": new Point2D(673, 91),
      "A": new Point2D(694, 91),
      "i": new Point2D(643, 73),
      "i_": new Point2D(8, 0),
      "a": new Point2D(642, 99),
      "a_": new Point2D(7, -6),
      "f": new Point2D(645, 123),
      "f_": new Point2D(8, 7),
      "b": new Point2D(714, 100),
      "b_": new Point2D(7, -9)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "Southern Europe",
    "abbreviation": "SEu",
    "titles": [
      {
        "text": "Southern",
        "point": {
          "x": 294.5,
          "y": 201
        }
      },
      {
        "text": "Europe",
        "point": {
          "x": 294.5,
          "y": 211
        }
      }
    ],
        "originalIndustrialComplex": true,
    "polygon": new Polygon2D(251, 206, 261, 191, 267, 191, 278, 186, 312, 174, 315, 179, 310, 189, 318, 198, 322, 209, 328, 213, 322, 218, 327, 228, 324, 236, 318, 235, 318, 228, 308, 219, 304, 219, 293, 243, 283, 235, 293, 233, 295, 225, 274, 209, 269, 202, 256, 207, 251, 206),
    "hiliteOffset": new Point2D(251, 175),
    "hiliteSize": new Point2D(78, 68),
    "overlaySize": new Point2D(164, 198),
    "overlayOffset": new Point2D(165, 45),
    "adjacentIndices": [
      112,
      103,
      70,
      60,
      52
    ],
    "ipcValue": 6,
    "ipcPoint": new Point2D(295.5, 195),
    "musters": {
      "F": new Point2D(287, 195),
      "A": new Point2D(304, 195),
      "i": new Point2D(308, 183),
      "i_": new Point2D(2, 6),
      "a": new Point2D(320, 224),
      "a_": new Point2D(-4, -4),
      "f": new Point2D(318, 207),
      "f_": new Point2D(-9, -1),
      "b": new Point2D(268, 199),
      "b_": new Point2D(8, 6)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "Solomon Islands",
    "abbreviation": "Sol",
    "titles": [
      {
        "text": "Solomon",
        "point": {
          "x": 743.5,
          "y": 381
        }
      },
      {
        "text": "Islands",
        "point": {
          "x": 743,
          "y": 391
        }
      },
      {
        "text": "Solomon Islands",
        "point": {
          "x": 896,
          "y": 493
        }
      }
    ],
        "polygon": new Polygon2D(721, 399, 725, 395, 761, 414, 756, 421, 721, 399),
    "hiliteOffset": new Point2D(723, 396),
    "hiliteSize": new Point2D(214, 149),
    "overlaySize": new Point2D(214, 149),
    "detailRectangle": new Rectangle2D(864, 491, 77, 58),
    "adjacentIndices": [
      20
    ],
    "musters": {
      "A": new Point2D(897, 513),
      "i": new Point2D(875, 506),
      "i_": new Point2D(8, 0),
      "a": new Point2D(907, 528),
      "a_": new Point2D(-8, -3),
      "f": new Point2D(920, 540),
      "f_": new Point2D(-10, -1),
      "b": new Point2D(929, 528),
      "b_": new Point2D(-8, -6)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Sinkiang",
    "abbreviation": "Sin",
    "titles": [
      {
        "text": "Sinkiang",
        "point": {
          "x": 523.5,
          "y": 219
        }
      }
    ],
        "polygon": new Polygon2D(488, 226, 489, 220, 496, 202, 535, 160, 541, 177, 555, 180, 555, 182, 561, 184, 557, 202, 550, 218, 553, 244, 543, 256, 537, 270, 521, 265, 500, 250, 494, 240, 494, 227, 488, 226),
    "hiliteOffset": new Point2D(489, 162),
    "hiliteSize": new Point2D(72, 109),
    "overlaySize": new Point2D(72, 109),
    "adjacentIndices": [
      127,
      115,
      106,
      100,
      96,
      88,
      85
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(524.5, 233),
    "musters": {
      "F": new Point2D(515, 234),
      "A": new Point2D(534, 234),
      "i": new Point2D(506, 210),
      "i_": new Point2D(4, -7),
      "a": new Point2D(544, 210),
      "a_": new Point2D(3, -8),
      "f": new Point2D(530, 257),
      "f_": new Point2D(-9, -5),
      "b": new Point2D(531, 186),
      "b_": new Point2D(-3, 11)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Saudi Arabia",
    "abbreviation": "SAr",
    "titles": [
      {
        "text": "Saudi Arabia",
        "point": {
          "x": 406.5,
          "y": 295
        }
      }
    ],
        "polygon": new Polygon2D(377, 292, 386, 282, 389, 284, 392, 280, 388, 274, 393, 270, 416, 256, 422, 263, 424, 275, 428, 278, 434, 275, 434, 280, 440, 289, 440, 295, 430, 317, 423, 325, 419, 333, 397, 344, 393, 327, 381, 313, 377, 292),
    "hiliteOffset": new Point2D(378, 256),
    "hiliteSize": new Point2D(63, 89),
    "overlaySize": new Point2D(63, 89),
    "adjacentIndices": [
      82,
      69,
      21
    ],
    "musters": {
      "A": new Point2D(410, 309),
      "i": new Point2D(406, 272),
      "i_": new Point2D(-4, 7),
      "a": new Point2D(422, 284),
      "a_": new Point2D(-7, 6),
      "f": new Point2D(422, 310),
      "f_": new Point2D(5, -8),
      "b": new Point2D(406, 326),
      "b_": new Point2D(-5, -8)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Russia",
    "abbreviation": "Mos",
    "titles": [
      {
        "text": "Russia",
        "point": {
          "x": 450,
          "y": 117
        }
      }
    ],
        "isCapital": true,
    "originalIndustrialComplex": true,
    "polygon": new Polygon2D(399, 167, 401, 158, 414, 153, 414, 140, 411, 131, 415, 120, 411, 103, 402, 96, 411, 93, 408, 88, 419, 84, 418, 78, 432, 61, 441, 58, 441, 63, 504, 63, 503, 91, 508, 98, 502, 100, 505, 117, 484, 131, 481, 148, 464, 170, 450, 166, 436, 170, 430, 181, 422, 181, 420, 170, 406, 174, 403, 168, 399, 167),
    "hiliteOffset": new Point2D(400, 60),
    "hiliteSize": new Point2D(107, 121),
    "overlaySize": new Point2D(107, 121),
    "adjacentIndices": [
      116,
      109,
      97,
      96,
      85,
      1
    ],
    "ipcValue": 8,
    "ipcPoint": new Point2D(449.5, 130),
    "musters": {
      "F": new Point2D(439, 131),
      "A": new Point2D(460, 131),
      "i": new Point2D(423, 101),
      "i_": new Point2D(3, -10),
      "a": new Point2D(467, 74),
      "a_": new Point2D(2, 8),
      "f": new Point2D(482, 107),
      "f_": new Point2D(-6, 14),
      "b": new Point2D(429, 153),
      "b_": new Point2D(-2, -13)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "Rio De Oro",
    "abbreviation": "Rio",
    "titles": [
      {
        "text": "Rio",
        "point": {
          "x": 170.5,
          "y": 305
        }
      },
      {
        "text": "De",
        "point": {
          "x": 169,
          "y": 315
        }
      },
      {
        "text": "Oro",
        "point": {
          "x": 171,
          "y": 325
        }
      }
    ],
        "polygon": new Polygon2D(178, 308, 184, 299, 190, 302, 189, 317, 196, 321, 199, 331, 195, 340, 191, 338, 186, 344, 182, 337, 186, 331, 178, 308),
    "hiliteOffset": new Point2D(179, 299),
    "hiliteSize": new Point2D(20, 45),
    "overlaySize": new Point2D(20, 45),
    "adjacentIndices": [
      104,
      42
    ],
    "musters": {
      "A": new Point2D(182, 307),
      "i": new Point2D(187, 302),
      "i_": new Point2D(0, -3),
      "a": new Point2D(188, 327),
      "a_": new Point2D(1, -3),
      "f": new Point2D(186, 317),
      "f_": new Point2D(0, -3),
      "b": new Point2D(191, 338),
      "b_": new Point2D(1, -3)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Philippine Islands",
    "abbreviation": "Phi",
    "titles": [
      {
        "text": "Philippine",
        "point": {
          "x": 619.5,
          "y": 326
        }
      },
      {
        "text": "Islands",
        "point": {
          "x": 619,
          "y": 336
        }
      },
      {
        "text": "Philippine",
        "point": {
          "x": 606.5,
          "y": 43
        }
      },
      {
        "text": "Islands",
        "point": {
          "x": 603,
          "y": 53
        }
      }
    ],
        "polygon": new Polygon2D(622, 315, 629, 290, 636, 289, 647, 315, 648, 323, 640, 324, 622, 315),
    "hiliteOffset": new Point2D(622, 9),
    "hiliteSize": new Point2D(28, 316),
    "overlaySize": new Point2D(28, 316),
    "detailRectangle": new Rectangle2D(587, 5, 71, 57),
    "adjacentIndices": [
      22
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(630.5, 321),
    "musters": {
      "F": new Point2D(626, 36),
      "A": new Point2D(637, 35),
      "i": new Point2D(635, 52),
      "i_": new Point2D(-2, -5),
      "a": new Point2D(647, 49),
      "a_": new Point2D(2, -7),
      "f": new Point2D(642, 21),
      "f_": new Point2D(-3, -5),
      "b": new Point2D(624, 21),
      "b_": new Point2D(-3, -4)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Peru",
    "abbreviation": "Bol",
    "titles": [
      {
        "text": "Peru",
        "point": {
          "x": 54.5,
          "y": 401
        }
      }
    ],
        "polygon": new Polygon2D(21, 385, 21, 380, 26, 377, 33, 377, 45, 381, 42, 388, 51, 398, 62, 395, 84, 412, 85, 422, 55, 430, 53, 419, 38, 410, 21, 385),
    "hiliteOffset": new Point2D(21, 377),
    "hiliteSize": new Point2D(65, 54),
    "overlaySize": new Point2D(65, 54),
    "adjacentIndices": [
      122,
      118,
      64,
      6
    ],
    "musters": {
      "A": new Point2D(61, 400),
      "i": new Point2D(59, 420),
      "i_": new Point2D(-2, -5),
      "a": new Point2D(76, 414),
      "a_": new Point2D(-3, 4),
      "f": new Point2D(38, 394),
      "f_": new Point2D(3, 6),
      "b": new Point2D(29, 385),
      "b_": new Point2D(4, -1)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Persia",
    "abbreviation": "Per",
    "titles": [
      {
        "text": "Persia",
        "point": {
          "x": 415,
          "y": 231
        }
      }
    ],
        "polygon": new Polygon2D(387, 248, 389, 233, 394, 228, 395, 221, 399, 210, 408, 210, 415, 224, 419, 224, 425, 217, 447, 222, 444, 234, 440, 235, 439, 241, 462, 245, 459, 254, 461, 269, 451, 270, 443, 276, 436, 265, 431, 268, 419, 248, 416, 250, 416, 256, 393, 270, 387, 248),
    "hiliteOffset": new Point2D(388, 210),
    "hiliteSize": new Point2D(74, 65),
    "overlaySize": new Point2D(161, 257),
    "overlayOffset": new Point2D(388, 18),
    "adjacentIndices": [
      127,
      116,
      100,
      96,
      77,
      69,
      68,
      21,
      1
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(415.5, 245),
    "musters": {
      "F": new Point2D(406, 244),
      "A": new Point2D(425, 244),
      "i": new Point2D(436, 227),
      "i_": new Point2D(-7, 0),
      "a": new Point2D(444, 264),
      "a_": new Point2D(-7, -5),
      "f": new Point2D(404, 224),
      "f_": new Point2D(-4, 9),
      "b": new Point2D(446, 250),
      "b_": new Point2D(-8, -4)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Panama",
    "abbreviation": "Pan",
    "titles": [
      {
        "text": "Panama",
        "point": {
          "x": 19,
          "y": 304
        }
      }
    ],
        "polygon": new Polygon2D(3, 314, 3, 299, 12, 298, 22, 293, 28, 305, 34, 305, 34, 327, 37, 331, 45, 328, 49, 331, 48, 335, 39, 336, 27, 334, 26, 329, 17, 320, 3, 314),
    "hiliteOffset": new Point2D(4, 293),
    "hiliteSize": new Point2D(45, 45),
    "overlaySize": new Point2D(45, 45),
    "adjacentIndices": [
      90,
      64,
      23,
      2
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(25.5, 317),
    "musters": {
      "F": new Point2D(16, 316),
      "A": new Point2D(33, 316),
      "i": new Point2D(24, 309),
      "i_": new Point2D(3, -1),
      "a": new Point2D(29, 328),
      "a_": new Point2D(5, 2),
      "f": new Point2D(10, 306),
      "f_": new Point2D(-2, -2),
      "b": new Point2D(19, 298),
      "b_": new Point2D(-4, -2)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Okinawa",
    "abbreviation": "Oki",
    "titles": [
      {
        "text": "Okinawa",
        "point": {
          "x": 680.5,
          "y": 266
        }
      },
      {
        "text": "Okinawa",
        "point": {
          "x": 710.5,
          "y": 53
        }
      }
    ],
        "polygon": new Polygon2D(673, 285, 679, 275, 685, 277, 679, 288, 673, 285),
    "hiliteOffset": new Point2D(674, 13),
    "hiliteSize": new Point2D(36, 275),
    "overlaySize": new Point2D(36, 275),
    "detailRectangle": new Rectangle2D(659, 5, 70, 57),
    "adjacentIndices": [
      24
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(677.5, 297),
    "musters": {
      "F": new Point2D(678, 47),
      "A": new Point2D(688, 46),
      "i": new Point2D(677, 36),
      "i_": new Point2D(4, -4),
      "a": new Point2D(690, 38),
      "a_": new Point2D(5, -4),
      "f": new Point2D(688, 23),
      "f_": new Point2D(4, -5),
      "b": new Point2D(706, 23),
      "b_": new Point2D(4, -5)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Novosibirsk",
    "abbreviation": "Nov",
    "titles": [
      {
        "text": "Novosibirsk",
        "point": {
          "x": 521,
          "y": 134
        }
      }
    ],
        "polygon": new Polygon2D(464, 170, 481, 148, 484, 131, 505, 117, 541, 114, 554, 118, 572, 118, 572, 148, 567, 151, 563, 147, 556, 147, 555, 153, 548, 152, 535, 160, 496, 202, 476, 182, 471, 184, 464, 170),
    "hiliteOffset": new Point2D(465, 115),
    "hiliteSize": new Point2D(107, 87),
    "overlaySize": new Point2D(107, 87),
    "adjacentIndices": [
      109,
      96,
      88,
      78,
      76,
      58
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(521.5, 148),
    "musters": {
      "F": new Point2D(512, 149),
      "A": new Point2D(531, 148),
      "i": new Point2D(554, 132),
      "i_": new Point2D(-9, -2),
      "a": new Point2D(489, 155),
      "a_": new Point2D(6, -9),
      "f": new Point2D(481, 174),
      "f_": new Point2D(8, 7),
      "b": new Point2D(505, 170),
      "b_": new Point2D(8, -5)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "New Zealand",
    "abbreviation": "NZe",
    "titles": [
      {
        "text": "New Zealand",
        "point": {
          "x": 747.5,
          "y": 460
        }
      }
    ],
        "polygon": new Polygon2D(722, 542, 740, 522, 748, 494, 741, 473, 758, 489, 773, 492, 774, 499, 758, 514, 744, 547, 722, 542),
    "hiliteOffset": new Point2D(723, 473),
    "hiliteSize": new Point2D(51, 74),
    "overlaySize": new Point2D(51, 74),
    "adjacentIndices": [
      31
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(750.5, 474),
    "musters": {
      "F": new Point2D(750, 484),
      "A": new Point2D(745, 474),
      "i": new Point2D(762, 492),
      "i_": new Point2D(7, 0),
      "a": new Point2D(753, 503),
      "a_": new Point2D(-2, -5),
      "f": new Point2D(749, 518),
      "f_": new Point2D(7, -6),
      "b": new Point2D(731, 539),
      "b_": new Point2D(7, -5)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "New Guinea",
    "abbreviation": "NGu",
    "titles": [
      {
        "text": "New Guinea",
        "point": {
          "x": 682,
          "y": 375
        }
      },
      {
        "text": "New Guinea",
        "point": {
          "x": 808,
          "y": 493
        }
      }
    ],
        "polygon": new Polygon2D(649, 378, 704, 400, 711, 413, 650, 398, 649, 378),
    "hiliteOffset": new Point2D(649, 380),
    "hiliteSize": new Point2D(208, 154),
    "overlaySize": new Point2D(208, 154),
    "detailRectangle": new Rectangle2D(785, 491, 78, 58),
    "adjacentIndices": [
      32
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(680.5, 387),
    "musters": {
      "F": new Point2D(803, 512),
      "A": new Point2D(813, 510),
      "i": new Point2D(823, 509),
      "i_": new Point2D(7, 0),
      "a": new Point2D(815, 519),
      "a_": new Point2D(1, 7),
      "f": new Point2D(848, 530),
      "f_": new Point2D(0, -8),
      "b": new Point2D(833, 522),
      "b_": new Point2D(0, 8)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Mongolia",
    "abbreviation": "Mng",
    "titles": [
      {
        "text": "Mongolia",
        "point": {
          "x": 570,
          "y": 170
        }
      }
    ],
        "polygon": new Polygon2D(535, 160, 548, 152, 555, 153, 556, 147, 563, 147, 567, 151, 572, 148, 580, 154, 600, 150, 600, 160, 607, 160, 610, 165, 604, 171, 595, 173, 595, 178, 575, 186, 570, 183, 561, 184, 555, 182, 555, 180, 541, 177, 535, 160),
    "hiliteOffset": new Point2D(536, 148),
    "hiliteSize": new Point2D(73, 37),
    "overlaySize": new Point2D(73, 37),
    "adjacentIndices": [
      115,
      92,
      85,
      76,
      58
    ],
    "musters": {
      "A": new Point2D(564, 176),
      "i": new Point2D(544, 161),
      "i_": new Point2D(0, 6),
      "a": new Point2D(556, 159),
      "a_": new Point2D(0, 7),
      "f": new Point2D(571, 158),
      "f_": new Point2D(0, 8),
      "b": new Point2D(589, 161),
      "b_": new Point2D(0, 6)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Midway Island",
    "abbreviation": "Mid",
    "titles": [
      {
        "text": "Midway",
        "point": {
          "x": 790,
          "y": 224
        }
      },
      {
        "text": "Island",
        "point": {
          "x": 790,
          "y": 234
        }
      },
      {
        "text": "Midway",
        "point": {
          "x": 856,
          "y": 43
        }
      },
      {
        "text": "Island",
        "point": {
          "x": 855.5,
          "y": 53
        }
      }
    ],
        "polygon": new Polygon2D(782, 220, 784, 213, 793, 215, 786, 222, 782, 220),
    "hiliteOffset": new Point2D(783, 19),
    "hiliteSize": new Point2D(71, 203),
    "overlaySize": new Point2D(71, 203),
    "detailRectangle": new Rectangle2D(802, 5, 71, 57),
    "adjacentIndices": [
      33
    ],
    "musters": {
      "F": new Point2D(813, 37),
      "A": new Point2D(820, 27),
      "i": new Point2D(823, 38),
      "i_": new Point2D(6, 4),
      "a": new Point2D(850, 33),
      "a_": new Point2D(-5, 5),
      "f": new Point2D(833, 30),
      "f_": new Point2D(-1, -5),
      "b": new Point2D(850, 22),
      "b_": new Point2D(-1, -4)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Mexico",
    "abbreviation": "Mex",
    "titles": [
      {
        "text": "Mexico",
        "point": {
          "x": 911,
          "y": 284
        }
      }
    ],
        "polygon": new Polygon2D(863, 245, 873, 244, 885, 249, 893, 247, 902, 257, 910, 257, 923, 269, 928, 294, 932, 297, 942, 296, 942, 311, 924, 312, 916, 310, 898, 297, 897, 286, 892, 281, 884, 284, 863, 245),
    "hiliteOffset": new Point2D(865, 244),
    "hiliteSize": new Point2D(77, 69),
    "overlaySize": new Point2D(77, 69),
    "adjacentIndices": [
      83,
      59,
      41,
      34
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(909.5, 298),
    "musters": {
      "F": new Point2D(901, 298),
      "A": new Point2D(920, 298),
      "i": new Point2D(933, 305),
      "i_": new Point2D(-5, -5),
      "a": new Point2D(906, 262),
      "a_": new Point2D(4, 5),
      "f": new Point2D(893, 272),
      "f_": new Point2D(6, 6),
      "b": new Point2D(882, 259),
      "b_": new Point2D(-6, -4)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Mozambique",
    "abbreviation": "Moz",
    "titles": [
      {
        "text": "Mozambique",
        "point": {
          "x": 384,
          "y": 448
        }
      }
    ],
        "polygon": new Polygon2D(348, 487, 350, 465, 361, 456, 360, 444, 376, 433, 381, 435, 380, 457, 371, 469, 370, 480, 363, 482, 358, 499, 348, 487),
    "hiliteOffset": new Point2D(349, 434),
    "hiliteSize": new Point2D(33, 65),
    "overlaySize": new Point2D(33, 65),
    "adjacentIndices": [
      95,
      66,
      35
    ],
    "musters": {
      "A": new Point2D(357, 467),
      "i": new Point2D(355, 492),
      "i_": new Point2D(1, -9),
      "a": new Point2D(374, 442),
      "a_": new Point2D(0, 6),
      "f": new Point2D(367, 465),
      "f_": new Point2D(-1, -7),
      "b": new Point2D(358, 480),
      "b_": new Point2D(2, -4)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Manchuria",
    "abbreviation": "Man",
    "titles": [
      {
        "text": "Manchuria",
        "point": {
          "x": 633,
          "y": 170
        }
      }
    ],
        "polygon": new Polygon2D(596, 196, 605, 177, 604, 171, 610, 165, 615, 163, 628, 141, 632, 129, 646, 147, 656, 144, 667, 156, 670, 164, 676, 168, 667, 182, 651, 190, 644, 205, 651, 218, 634, 232, 629, 204, 624, 206, 616, 203, 596, 196),
    "hiliteOffset": new Point2D(596, 129),
    "hiliteSize": new Point2D(81, 104),
    "overlaySize": new Point2D(81, 104),
    "adjacentIndices": [
      115,
      94,
      88,
      73,
      58,
      38
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(634.5, 183),
    "musters": {
      "F": new Point2D(625, 183),
      "A": new Point2D(644, 183),
      "i": new Point2D(635, 147),
      "i_": new Point2D(-4, 7),
      "a": new Point2D(661, 171),
      "a_": new Point2D(-6, -8),
      "f": new Point2D(610, 189),
      "f_": new Point2D(4, -10),
      "b": new Point2D(635, 199),
      "b_": new Point2D(2, 8)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Libya",
    "abbreviation": "Lib",
    "titles": [
      {
        "text": "Libya",
        "point": {
          "x": 288,
          "y": 280
        }
      }
    ],
        "polygon": new Polygon2D(258, 285, 267, 275, 264, 273, 267, 268, 270, 271, 279, 262, 298, 270, 314, 267, 317, 273, 313, 280, 312, 320, 307, 321, 282, 309, 278, 311, 270, 304, 258, 285),
    "hiliteOffset": new Point2D(260, 263),
    "hiliteSize": new Point2D(57, 58),
    "overlaySize": new Point2D(57, 58),
    "adjacentIndices": [
      125,
      124,
      107,
      52
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(288.5, 295),
    "musters": {
      "F": new Point2D(279, 298),
      "A": new Point2D(298, 294),
      "i": new Point2D(270, 285),
      "i_": new Point2D(7, -2),
      "a": new Point2D(282, 271),
      "a_": new Point2D(6, 2),
      "f": new Point2D(305, 285),
      "f_": new Point2D(1, -5),
      "b": new Point2D(300, 307),
      "b_": new Point2D(3, 4)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "Kwangtung",
    "abbreviation": "Kwa",
    "titles": [
      {
        "text": "Kwangtung",
        "point": {
          "x": 613.5,
          "y": 247
        }
      }
    ],
        "polygon": new Polygon2D(585, 261, 591, 244, 597, 242, 601, 234, 606, 232, 603, 223, 598, 222, 592, 216, 596, 196, 616, 203, 615, 210, 623, 214, 620, 223, 627, 247, 619, 273, 601, 285, 590, 285, 585, 261),
    "hiliteOffset": new Point2D(585, 196),
    "hiliteSize": new Point2D(43, 90),
    "overlaySize": new Point2D(43, 90),
    "adjacentIndices": [
      115,
      106,
      92,
      36
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(608.5, 261),
    "musters": {
      "F": new Point2D(599, 261),
      "A": new Point2D(617, 261),
      "i": new Point2D(590, 261),
      "i_": new Point2D(1, 9),
      "a": new Point2D(608, 275),
      "a_": new Point2D(-3, -3),
      "f": new Point2D(614, 229),
      "f_": new Point2D(-4, 8),
      "b": new Point2D(605, 206),
      "b_": new Point2D(3, 6)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Kenya/Rhodesia",
    "abbreviation": "Ken",
    "titles": [
      {
        "text": "Kenya",
        "point": {
          "x": 343,
          "y": 423
        }
      },
      {
        "text": "Rhodesia",
        "point": {
          "x": 343,
          "y": 433
        }
      }
    ],
        "polygon": new Polygon2D(319, 436, 324, 432, 319, 427, 319, 409, 324, 408, 345, 381, 345, 367, 366, 355, 371, 359, 369, 375, 386, 399, 372, 421, 376, 433, 360, 444, 361, 456, 350, 465, 349, 453, 331, 456, 319, 436),
    "hiliteOffset": new Point2D(319, 356),
    "hiliteSize": new Point2D(66, 110),
    "overlaySize": new Point2D(66, 110),
    "adjacentIndices": [
      124,
      123,
      120,
      99,
      91,
      66,
      35
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(341.5, 447),
    "musters": {
      "F": new Point2D(333, 416),
      "A": new Point2D(346, 416),
      "i": new Point2D(362, 369),
      "i_": new Point2D(-5, 3),
      "a": new Point2D(366, 429),
      "a_": new Point2D(-10, 2),
      "f": new Point2D(348, 388),
      "f_": new Point2D(8, 0),
      "b": new Point2D(366, 406),
      "b_": new Point2D(-10, -2)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Kazakh S.S.R.",
    "abbreviation": "Kaz",
    "titles": [
      {
        "text": "Kazakh",
        "point": {
          "x": 454.5,
          "y": 181
        }
      },
      {
        "text": "S.S.R.",
        "point": {
          "x": 454.5,
          "y": 191
        }
      }
    ],
        "polygon": new Polygon2D(414, 187, 414, 182, 422, 181, 430, 181, 436, 170, 450, 166, 464, 170, 471, 184, 476, 182, 496, 202, 489, 220, 471, 218, 455, 219, 447, 222, 425, 217, 421, 191, 414, 187),
    "hiliteOffset": new Point2D(414, 167),
    "hiliteSize": new Point2D(82, 54),
    "overlaySize": new Point2D(171, 215),
    "overlayOffset": new Point2D(414, 6),
    "adjacentIndices": [
      127,
      85,
      82,
      78,
      76,
      1
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(454.5, 205),
    "musters": {
      "F": new Point2D(445, 204),
      "A": new Point2D(464, 204),
      "i": new Point2D(479, 197),
      "i_": new Point2D(-7, -5),
      "a": new Point2D(482, 213),
      "a_": new Point2D(-8, 0),
      "f": new Point2D(431, 206),
      "f_": new Point2D(7, 3),
      "b": new Point2D(431, 190),
      "b_": new Point2D(7, -6)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "Karelia S.S.R.",
    "abbreviation": "Len",
    "titles": [
      {
        "text": "Karelia",
        "point": {
          "x": 376.5,
          "y": 66
        }
      },
      {
        "text": "S.S.R.",
        "point": {
          "x": 376.5,
          "y": 76
        }
      }
    ],
        "originalIndustrialComplex": true,
    "polygon": new Polygon2D(311, 36, 320, 29, 330, 34, 342, 47, 352, 50, 360, 59, 379, 46, 383, 52, 405, 40, 403, 34, 410, 28, 415, 33, 422, 30, 436, 3, 442, 3, 441, 58, 432, 61, 418, 78, 419, 84, 408, 88, 411, 93, 402, 96, 395, 100, 390, 97, 378, 108, 367, 100, 355, 107, 343, 101, 334, 94, 326, 98, 323, 93, 321, 88, 324, 71, 311, 36),
    "hiliteOffset": new Point2D(312, 4),
    "hiliteSize": new Point2D(129, 104),
    "overlaySize": new Point2D(129, 104),
    "adjacentIndices": [
      116,
      112,
      108,
      78,
      67,
      57,
      37
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(376.5, 90),
    "musters": {
      "F": new Point2D(366, 91),
      "A": new Point2D(386, 91),
      "i": new Point2D(354, 70),
      "i_": new Point2D(9, -4),
      "a": new Point2D(346, 88),
      "a_": new Point2D(-6, -8),
      "f": new Point2D(402, 78),
      "f_": new Point2D(-6, -9),
      "b": new Point2D(411, 58),
      "b_": new Point2D(8, -10)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "Japan",
    "abbreviation": "Jpn",
    "titles": [
      {
        "text": "Japan",
        "point": {
          "x": 688,
          "y": 209
        }
      }
    ],
        "isCapital": true,
    "originalIndustrialComplex": true,
    "polygon": new Polygon2D(643, 238, 648, 229, 661, 219, 670, 218, 680, 202, 683, 204, 687, 195, 685, 180, 687, 170, 692, 167, 694, 155, 698, 154, 703, 160, 720, 163, 720, 167, 707, 178, 703, 175, 697, 179, 705, 192, 702, 219, 707, 224, 710, 230, 710, 239, 705, 246, 696, 250, 688, 249, 682, 243, 679, 235, 658, 244, 657, 255, 651, 253, 650, 246, 643, 238),
    "hiliteOffset": new Point2D(644, 154),
    "hiliteSize": new Point2D(77, 102),
    "overlaySize": new Point2D(77, 102),
    "adjacentIndices": [
      38
    ],
    "ipcValue": 8,
    "ipcPoint": new Point2D(670.5, 229),
    "musters": {
      "F": new Point2D(667, 220),
      "A": new Point2D(679, 224),
      "i": new Point2D(651, 240),
      "i_": new Point2D(5, -5),
      "a": new Point2D(693, 205),
      "a_": new Point2D(1, 8),
      "f": new Point2D(694, 192),
      "f_": new Point2D(-1, -6),
      "b": new Point2D(700, 170),
      "b_": new Point2D(-1, -4)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Italian East Africa",
    "abbreviation": "EAf",
    "titles": [
      {
        "text": "Italian",
        "point": {
          "x": 393,
          "y": 356
        }
      },
      {
        "text": "East Africa",
        "point": {
          "x": 393,
          "y": 366
        }
      }
    ],
        "polygon": new Polygon2D(360, 348, 370, 329, 369, 320, 388, 344, 387, 350, 396, 352, 416, 346, 420, 349, 408, 376, 386, 399, 369, 375, 371, 359, 366, 355, 360, 348),
    "hiliteOffset": new Point2D(360, 321),
    "hiliteSize": new Point2D(60, 78),
    "overlaySize": new Point2D(60, 78),
    "adjacentIndices": [
      124,
      95,
      21
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(391.5, 379),
    "musters": {
      "F": new Point2D(383, 387),
      "A": new Point2D(392, 387),
      "i": new Point2D(373, 336),
      "i_": new Point2D(7, 8),
      "a": new Point2D(370, 348),
      "a_": new Point2D(5, 7),
      "f": new Point2D(379, 375),
      "f_": new Point2D(6, -5),
      "b": new Point2D(409, 356),
      "b_": new Point2D(-3, 8)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "India",
    "abbreviation": "Ind",
    "titles": [
      {
        "text": "India",
        "point": {
          "x": 490,
          "y": 284
        }
      }
    ],
        "polygon": new Polygon2D(443, 276, 451, 270, 461, 269, 459, 254, 462, 245, 466, 248, 477, 242, 481, 228, 488, 226, 494, 227, 494, 240, 500, 250, 521, 265, 537, 270, 536, 285, 526, 296, 519, 301, 503, 317, 501, 340, 492, 354, 473, 326, 473, 311, 467, 299, 468, 292, 460, 295, 455, 283, 443, 276),
    "hiliteOffset": new Point2D(444, 229),
    "hiliteSize": new Point2D(92, 126),
    "overlaySize": new Point2D(141, 327),
    "overlayOffset": new Point2D(444, 28),
    "adjacentIndices": [
      127,
      106,
      82,
      76,
      39
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(491.5, 268),
    "musters": {
      "F": new Point2D(482, 299),
      "A": new Point2D(501, 298),
      "i": new Point2D(466, 282),
      "i_": new Point2D(1, -10),
      "a": new Point2D(508, 273),
      "a_": new Point2D(3, 8),
      "f": new Point2D(486, 250),
      "f_": new Point2D(1, 12),
      "b": new Point2D(489, 318),
      "b_": new Point2D(1, 8)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Hawaiian Islands",
    "abbreviation": "Haw",
    "titles": [
      {
        "text": "Hawaiian",
        "point": {
          "x": 795,
          "y": 308
        }
      },
      {
        "text": "Islands",
        "point": {
          "x": 795,
          "y": 318
        }
      },
      {
        "text": "Hawaiian",
        "point": {
          "x": 893,
          "y": 43
        }
      },
      {
        "text": "Islands",
        "point": {
          "x": 890,
          "y": 53
        }
      }
    ],
        "polygon": new Polygon2D(788, 292, 798, 288, 818, 298, 825, 312, 816, 317, 788, 292),
    "hiliteOffset": new Point2D(791, 18),
    "hiliteSize": new Point2D(140, 300),
    "overlaySize": new Point2D(140, 300),
    "detailRectangle": new Rectangle2D(874, 5, 67, 57),
    "adjacentIndices": [
      40
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(796.5, 301),
    "musters": {
      "F": new Point2D(925, 42),
      "A": new Point2D(914, 30),
      "i": new Point2D(881, 19),
      "i_": new Point2D(4, 6),
      "a": new Point2D(899, 33),
      "a_": new Point2D(7, 4),
      "f": new Point2D(893, 20),
      "f_": new Point2D(6, 2),
      "b": new Point2D(911, 18),
      "b_": new Point2D(7, 5)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Gibraltar",
    "abbreviation": "Gib",
    "titles": [
      {
        "text": "Gibraltar",
        "point": {
          "x": 231,
          "y": 236
        }
      },
      {
        "text": "Gibraltar",
        "point": {
          "x": 99,
          "y": 54
        }
      }
    ],
        "polygon": new Polygon2D(205, 237, 213, 226, 222, 234, 214, 246, 205, 237),
    "hiliteOffset": new Point2D(85, 9),
    "hiliteSize": new Point2D(138, 237),
    "overlaySize": new Point2D(138, 237),
    "detailRectangle": new Rectangle2D(79, 5, 72, 58),
    "adjacentIndices": [
      72,
      4
    ],
    "musters": {
      "A": new Point2D(115, 32),
      "i": new Point2D(117, 20),
      "i_": new Point2D(5, -4),
      "a": new Point2D(96, 34),
      "a_": new Point2D(5, -10),
      "f": new Point2D(131, 31),
      "f_": new Point2D(4, -6),
      "b": new Point2D(103, 45),
      "b_": new Point2D(12, 1)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Germany",
    "abbreviation": "Ger",
    "titles": [
      {
        "text": "Germany",
        "point": {
          "x": 286,
          "y": 166
        }
      }
    ],
        "isCapital": true,
    "originalIndustrialComplex": true,
    "polygon": new Polygon2D(257, 158, 258, 147, 273, 132, 282, 129, 284, 133, 294, 128, 300, 126, 313, 130, 316, 147, 312, 159, 312, 174, 278, 186, 277, 176, 262, 173, 261, 160, 257, 158),
    "hiliteOffset": new Point2D(257, 126),
    "hiliteSize": new Point2D(60, 63),
    "overlaySize": new Point2D(145, 183),
    "overlayOffset": new Point2D(172, 6),
    "adjacentIndices": [
      112,
      74,
      70,
      60,
      57
    ],
    "ipcValue": 10,
    "ipcPoint": new Point2D(285.5, 180),
    "musters": {
      "F": new Point2D(264, 152),
      "A": new Point2D(267, 166),
      "i": new Point2D(307, 169),
      "i_": new Point2D(-7, 2),
      "a": new Point2D(305, 159),
      "a_": new Point2D(-11, 3),
      "f": new Point2D(308, 147),
      "f_": new Point2D(-10, 2),
      "b": new Point2D(301, 135),
      "b_": new Point2D(-11, 2)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "French West Africa",
    "abbreviation": "WAf",
    "titles": [
      {
        "text": "French",
        "point": {
          "x": 218,
          "y": 299
        }
      },
      {
        "text": "West Africa",
        "point": {
          "x": 218,
          "y": 309
        }
      }
    ],
        "polygon": new Polygon2D(186, 344, 191, 338, 195, 340, 199, 331, 196, 321, 189, 317, 190, 302, 184, 299, 196, 275, 208, 275, 229, 294, 238, 285, 246, 285, 246, 353, 234, 353, 234, 367, 219, 383, 195, 369, 186, 344),
    "hiliteOffset": new Point2D(183, 276),
    "hiliteSize": new Point2D(63, 107),
    "overlaySize": new Point2D(63, 107),
    "adjacentIndices": [
      125,
      107,
      79,
      42
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(216.5, 322),
    "musters": {
      "F": new Point2D(207, 323),
      "A": new Point2D(226, 322),
      "i": new Point2D(199, 282),
      "i_": new Point2D(9, 5),
      "a": new Point2D(238, 328),
      "a_": new Point2D(0, 9),
      "f": new Point2D(217, 371),
      "f_": new Point2D(5, -8),
      "b": new Point2D(199, 353),
      "b_": new Point2D(9, -8)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "French Madagascar",
    "abbreviation": "Mad",
    "titles": [
      {
        "text": "French",
        "point": {
          "x": 427,
          "y": 504
        }
      },
      {
        "text": "Madagascar",
        "point": {
          "x": 427,
          "y": 514
        }
      }
    ],
        "polygon": new Polygon2D(375, 512, 379, 489, 404, 466, 406, 468, 409, 469, 399, 517, 403, 528, 389, 538, 383, 532, 384, 528, 382, 518, 375, 512),
    "hiliteOffset": new Point2D(375, 467),
    "hiliteSize": new Point2D(35, 72),
    "overlaySize": new Point2D(35, 72),
    "adjacentIndices": [
      48,
      35,
      25,
      12
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(393.5, 515),
    "musters": {
      "F": new Point2D(383, 515),
      "A": new Point2D(392, 527),
      "i": new Point2D(404, 474),
      "i_": new Point2D(-4, -1),
      "a": new Point2D(400, 484),
      "a_": new Point2D(-4, -3),
      "f": new Point2D(385, 488),
      "f_": new Point2D(5, 3),
      "b": new Point2D(385, 503),
      "b_": new Point2D(5, 1)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "French Indo-China/Burma",
    "abbreviation": "Bur",
    "titles": [
      {
        "text": "French",
        "point": {
          "x": 558,
          "y": 274
        }
      },
      {
        "text": "Indo-China",
        "point": {
          "x": 558,
          "y": 284
        }
      },
      {
        "text": "Burma",
        "point": {
          "x": 558,
          "y": 294
        }
      }
    ],
        "polygon": new Polygon2D(526, 296, 536, 285, 537, 270, 543, 256, 553, 244, 560, 257, 566, 259, 566, 268, 585, 261, 590, 285, 581, 286, 580, 291, 593, 314, 578, 343, 559, 324, 558, 335, 571, 349, 575, 359, 571, 367, 544, 337, 546, 331, 541, 307, 534, 309, 526, 296),
    "hiliteOffset": new Point2D(527, 245),
    "hiliteSize": new Point2D(66, 122),
    "overlaySize": new Point2D(66, 122),
    "adjacentIndices": [
      115,
      100,
      94,
      76,
      43
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(557.5, 307),
    "musters": {
      "F": new Point2D(548, 308),
      "A": new Point2D(568, 307),
      "i": new Point2D(541, 276),
      "i_": new Point2D(-2, 11),
      "a": new Point2D(553, 260),
      "a_": new Point2D(1, 9),
      "f": new Point2D(578, 275),
      "f_": new Point2D(0, 12),
      "b": new Point2D(571, 322),
      "b_": new Point2D(-8, -1)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "French Equatorial Africa",
    "abbreviation": "FEq",
    "titles": [
      {
        "text": "French",
        "point": {
          "x": 277,
          "y": 316
        }
      },
      {
        "text": "Equatorial",
        "point": {
          "x": 277,
          "y": 326
        }
      },
      {
        "text": "Africa",
        "point": {
          "x": 277,
          "y": 336
        }
      }
    ],
        "polygon": new Polygon2D(219, 383, 234, 367, 234, 353, 246, 353, 246, 285, 258, 285, 270, 304, 278, 311, 282, 309, 307, 321, 307, 340, 315, 347, 317, 361, 305, 375, 267, 384, 262, 378, 254, 374, 219, 383),
    "hiliteOffset": new Point2D(220, 286),
    "hiliteSize": new Point2D(96, 98),
    "overlaySize": new Point2D(96, 98),
    "adjacentIndices": [
      125,
      124,
      120,
      104,
      93,
      56
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(278.5, 362),
    "musters": {
      "F": new Point2D(269, 362),
      "A": new Point2D(288, 362),
      "i": new Point2D(253, 311),
      "i_": new Point2D(1, -8),
      "a": new Point2D(257, 340),
      "a_": new Point2D(2, -9),
      "f": new Point2D(303, 353),
      "f_": new Point2D(-2, -10),
      "b": new Point2D(249, 364),
      "b_": new Point2D(8, -7)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Finland/Norway",
    "abbreviation": "Fin",
    "titles": [
      {
        "text": "Finland",
        "point": {
          "x": 297,
          "y": 38
        }
      },
      {
        "text": "Norway",
        "point": {
          "x": 297,
          "y": 48
        }
      }
    ],
        "polygon": new Polygon2D(257, 86, 260, 78, 276, 66, 282, 52, 305, 36, 311, 36, 324, 71, 321, 88, 309, 94, 302, 85, 303, 74, 307, 64, 301, 60, 296, 58, 287, 75, 285, 83, 275, 97, 268, 101, 263, 102, 258, 96, 257, 86),
    "hiliteOffset": new Point2D(258, 35),
    "hiliteSize": new Point2D(66, 67),
    "overlaySize": new Point2D(210, 96),
    "overlayOffset": new Point2D(258, 6),
    "adjacentIndices": [
      97,
      71,
      57,
      9
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(312.5, 63),
    "musters": {
      "F": new Point2D(317, 72),
      "A": new Point2D(315, 84),
      "i": new Point2D(286, 62),
      "i_": new Point2D(2, -5),
      "a": new Point2D(276, 79),
      "a_": new Point2D(1, -6),
      "f": new Point2D(267, 92),
      "f_": new Point2D(-2, -6),
      "b": new Point2D(305, 51),
      "b_": new Point2D(-1, -5)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "Evenki Nat'l Okrug",
    "abbreviation": "Eve",
    "titles": [
      {
        "text": "Evenki",
        "point": {
          "x": 536,
          "y": 67
        }
      },
      {
        "text": "Nat'l",
        "point": {
          "x": 536,
          "y": 77
        }
      },
      {
        "text": "Okrug",
        "point": {
          "x": 536,
          "y": 87
        }
      }
    ],
        "polygon": new Polygon2D(502, 100, 508, 98, 503, 91, 504, 63, 572, 63, 572, 118, 554, 118, 541, 114, 505, 117, 502, 100),
    "hiliteOffset": new Point2D(503, 64),
    "hiliteSize": new Point2D(69, 57),
    "overlaySize": new Point2D(69, 57),
    "adjacentIndices": [
      85,
      78,
      58
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(537.5, 101),
    "musters": {
      "F": new Point2D(529, 101),
      "A": new Point2D(548, 101),
      "i": new Point2D(562, 77),
      "i_": new Point2D(-8, 1),
      "a": new Point2D(515, 69),
      "a_": new Point2D(14, 0),
      "f": new Point2D(562, 108),
      "f_": new Point2D(0, -7),
      "b": new Point2D(515, 89),
      "b_": new Point2D(-1, 10)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "Eire",
    "abbreviation": "Ire",
    "titles": [
      {
        "text": "Eire",
        "point": {
          "x": 200,
          "y": 108
        }
      }
    ],
        "polygon": new Polygon2D(185, 121, 185, 111, 196, 99, 207, 96, 214, 98, 215, 108, 203, 122, 185, 121),
    "hiliteOffset": new Point2D(184, 96),
    "hiliteSize": new Point2D(31, 27),
    "overlaySize": new Point2D(31, 27),
    "adjacentIndices": [
      9
    ],
    "musters": {
      "A": new Point2D(201, 121),
      "i": new Point2D(209, 111),
      "i_": new Point2D(-7, -2),
      "a": new Point2D(198, 113),
      "a_": new Point2D(-3, 4),
      "f": new Point2D(188, 110),
      "f_": new Point2D(-1, 4),
      "b": new Point2D(204, 100),
      "b_": new Point2D(0, -3)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Eastern U.S.A.",
    "abbreviation": "EUS",
    "titles": [
      {
        "text": "Eastern U.S.A.",
        "point": {
          "x": 37.5,
          "y": 218
        }
      }
    ],
        "isCapital": true,
    "originalIndustrialComplex": true,
    "polygon": new Polygon2D(3, 262, 3, 188, 34, 187, 48, 209, 72, 200, 86, 191, 89, 203, 83, 210, 83, 217, 63, 234, 63, 239, 50, 255, 52, 277, 46, 278, 42, 262, 3, 262),
    "hiliteOffset": new Point2D(4, 189),
    "hiliteSize": new Point2D(86, 90),
    "overlaySize": new Point2D(86, 90),
    "adjacentIndices": [
      113,
      59,
      45
    ],
    "ipcValue": 12,
    "ipcPoint": new Point2D(37.5, 211),
    "musters": {
      "F": new Point2D(26, 211),
      "A": new Point2D(13, 210),
      "i": new Point2D(56, 233),
      "i_": new Point2D(1, -7),
      "a": new Point2D(72, 212),
      "a_": new Point2D(5, -6),
      "f": new Point2D(14, 252),
      "f_": new Point2D(9, 1),
      "b": new Point2D(15, 235),
      "b_": new Point2D(10, -5)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Eastern Europe",
    "abbreviation": "EEu",
    "titles": [
      {
        "text": "Eastern",
        "point": {
          "x": 326.5,
          "y": 122
        }
      },
      {
        "text": "Europe",
        "point": {
          "x": 328.5,
          "y": 132
        }
      }
    ],
        "polygon": new Polygon2D(300, 126, 304, 114, 310, 109, 306, 102, 319, 97, 323, 93, 326, 98, 334, 94, 343, 101, 343, 176, 350, 176, 353, 180, 342, 196, 345, 210, 339, 210, 336, 215, 334, 208, 328, 213, 322, 209, 318, 198, 310, 189, 315, 179, 312, 174, 312, 159, 316, 147, 313, 130, 300, 126),
    "hiliteOffset": new Point2D(301, 95),
    "hiliteSize": new Point2D(53, 120),
    "overlaySize": new Point2D(53, 120),
    "adjacentIndices": [
      103,
      97,
      74,
      67,
      57,
      26
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(327.5, 115),
    "musters": {
      "F": new Point2D(318, 116),
      "A": new Point2D(337, 116),
      "i": new Point2D(316, 106),
      "i_": new Point2D(8, 0),
      "a": new Point2D(329, 145),
      "a_": new Point2D(0, 7),
      "f": new Point2D(331, 199),
      "f_": new Point2D(-4, -5),
      "b": new Point2D(325, 177),
      "b_": new Point2D(6, 2)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "Eastern Canada",
    "abbreviation": "ECa",
    "titles": [
      {
        "text": "Eastern",
        "point": {
          "x": 20.5,
          "y": 149
        }
      },
      {
        "text": "Canada",
        "point": {
          "x": 20.5,
          "y": 159
        }
      }
    ],
        "polygon": new Polygon2D(3, 188, 3, 86, 9, 85, 17, 90, 17, 81, 26, 75, 36, 77, 50, 88, 55, 82, 64, 86, 55, 99, 41, 102, 41, 108, 28, 112, 18, 132, 23, 144, 29, 145, 47, 154, 57, 167, 59, 154, 64, 146, 62, 137, 69, 116, 92, 122, 91, 132, 95, 135, 101, 129, 107, 133, 107, 142, 125, 160, 137, 190, 125, 192, 114, 185, 114, 176, 101, 182, 102, 190, 110, 190, 116, 195, 94, 205, 89, 203, 86, 191, 72, 200, 48, 209, 34, 187, 3, 188),
    "hiliteOffset": new Point2D(4, 76),
    "hiliteSize": new Point2D(133, 132),
    "overlaySize": new Point2D(133, 132),
    "adjacentIndices": [
      111,
      61,
      47
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(21.5, 173),
    "musters": {
      "F": new Point2D(12, 174),
      "A": new Point2D(31, 173),
      "i": new Point2D(69, 166),
      "i_": new Point2D(-10, 1),
      "a": new Point2D(52, 180),
      "a_": new Point2D(4, 8),
      "f": new Point2D(79, 183),
      "f_": new Point2D(12, -5),
      "b": new Point2D(89, 151),
      "b_": new Point2D(-5, -10)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "East Indies",
    "abbreviation": "Sum",
    "titles": [
      {
        "text": "East Indies",
        "point": {
          "x": 554.5,
          "y": 416
        }
      }
    ],
        "polygon": new Polygon2D(536, 354, 543, 351, 555, 360, 566, 375, 567, 381, 573, 383, 568, 392, 610, 412, 598, 417, 566, 412, 554, 407, 544, 394, 536, 354),
    "hiliteOffset": new Point2D(536, 351),
    "hiliteSize": new Point2D(75, 66),
    "overlaySize": new Point2D(75, 66),
    "adjacentIndices": [
      49
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(546.5, 409),
    "musters": {
      "F": new Point2D(560, 408),
      "A": new Point2D(551, 396),
      "i": new Point2D(572, 405),
      "i_": new Point2D(-5, -5),
      "a": new Point2D(591, 410),
      "a_": new Point2D(-5, -4),
      "f": new Point2D(542, 357),
      "f_": new Point2D(5, 4),
      "b": new Point2D(560, 386),
      "b_": new Point2D(-5, -6)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "China",
    "abbreviation": "Chi",
    "titles": [
      {
        "text": "China",
        "point": {
          "x": 578,
          "y": 195
        }
      }
    ],
        "polygon": new Polygon2D(550, 218, 557, 202, 561, 184, 570, 183, 575, 186, 595, 178, 595, 173, 604, 171, 605, 177, 596, 196, 592, 216, 598, 222, 603, 223, 606, 232, 601, 234, 597, 242, 591, 244, 585, 261, 566, 268, 566, 259, 560, 257, 553, 244, 550, 218),
    "hiliteOffset": new Point2D(551, 172),
    "hiliteSize": new Point2D(55, 95),
    "overlaySize": new Point2D(55, 95),
    "adjacentIndices": [
      106,
      94,
      92,
      88,
      76
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(578.5, 209),
    "musters": {
      "F": new Point2D(569, 209),
      "A": new Point2D(588, 209),
      "i": new Point2D(560, 226),
      "i_": new Point2D(9, -1),
      "a": new Point2D(591, 234),
      "a_": new Point2D(-10, 2),
      "f": new Point2D(588, 190),
      "f_": new Point2D(-9, 1),
      "b": new Point2D(568, 249),
      "b_": new Point2D(3, 4)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Caucasus",
    "abbreviation": "Cau",
    "titles": [
      {
        "text": "Caucasus",
        "point": {
          "x": 396.5,
          "y": 143
        }
      }
    ],
        "polygon": new Polygon2D(374, 148, 377, 146, 378, 108, 390, 97, 395, 100, 402, 96, 411, 103, 415, 120, 411, 131, 414, 140, 414, 153, 401, 158, 399, 167, 403, 168, 406, 174, 401, 178, 399, 188, 410, 204, 408, 210, 399, 210, 389, 205, 378, 185, 380, 172, 383, 166, 376, 156, 374, 148),
    "hiliteOffset": new Point2D(375, 97),
    "hiliteSize": new Point2D(40, 113),
    "overlaySize": new Point2D(40, 113),
    "adjacentIndices": [
      97,
      82,
      78,
      68,
      67,
      26,
      1
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(394.5, 134),
    "musters": {
      "F": new Point2D(385, 135),
      "A": new Point2D(404, 134),
      "i": new Point2D(401, 107),
      "i_": new Point2D(2, 8),
      "a": new Point2D(387, 110),
      "a_": new Point2D(0, 8),
      "f": new Point2D(390, 164),
      "f_": new Point2D(2, -9),
      "b": new Point2D(389, 180),
      "b_": new Point2D(3, 7)
    },
    "originalPowerId": TeamId.USSR
  },
  {
    "title": "Caroline Islands",
    "abbreviation": "Car",
    "titles": [
      {
        "text": "Caroline",
        "point": {
          "x": 698,
          "y": 309
        }
      },
      {
        "text": "Islands",
        "point": {
          "x": 698,
          "y": 319
        }
      },
      {
        "text": "Caroline Islands",
        "point": {
          "x": 896.5,
          "y": 436
        }
      }
    ],
        "polygon": new Polygon2D(678, 344, 691, 328, 707, 330, 714, 340, 678, 344),
    "hiliteOffset": new Point2D(680, 328),
    "hiliteSize": new Point2D(256, 151),
    "overlaySize": new Point2D(256, 151),
    "detailRectangle": new Rectangle2D(864, 434, 77, 56),
    "adjacentIndices": [
      54
    ],
    "musters": {
      "A": new Point2D(900, 473),
      "i": new Point2D(926, 472),
      "i_": new Point2D(4, -7),
      "a": new Point2D(912, 472),
      "a_": new Point2D(5, -7),
      "f": new Point2D(893, 456),
      "f_": new Point2D(9, -3),
      "b": new Point2D(885, 471),
      "b_": new Point2D(-4, -6)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Brazil",
    "abbreviation": "Bra",
    "titles": [
      {
        "text": "Brazil",
        "point": {
          "x": 104,
          "y": 384
        }
      }
    ],
        "polygon": new Polygon2D(42, 388, 45, 381, 51, 379, 54, 362, 66, 362, 67, 356, 78, 351, 84, 362, 106, 355, 109, 360, 112, 365, 130, 374, 138, 376, 146, 382, 150, 388, 147, 398, 139, 406, 129, 430, 111, 439, 97, 439, 85, 422, 84, 412, 62, 395, 51, 398, 42, 388),
    "hiliteOffset": new Point2D(43, 352),
    "hiliteSize": new Point2D(107, 87),
    "overlaySize": new Point2D(107, 87),
    "adjacentIndices": [
      122,
      81,
      64,
      28,
      17
    ],
    "ipcValue": 3,
    "ipcPoint": new Point2D(104.5, 397),
    "musters": {
      "F": new Point2D(95, 398),
      "A": new Point2D(114, 397),
      "i": new Point2D(132, 389),
      "i_": new Point2D(-2, 8),
      "a": new Point2D(110, 422),
      "a_": new Point2D(-9, -6),
      "f": new Point2D(86, 373),
      "f_": new Point2D(9, -1),
      "b": new Point2D(68, 383),
      "b_": new Point2D(0, -7)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Borneo/Celebes",
    "abbreviation": "Bor",
    "titles": [
      {
        "text": "Borneo",
        "point": {
          "x": 626,
          "y": 389
        }
      },
      {
        "text": "Celebes",
        "point": {
          "x": 626,
          "y": 399
        }
      },
      {
        "text": "Borneo Celebes",
        "point": {
          "x": 815,
          "y": 436
        }
      }
    ],
        "polygon": new Polygon2D(594, 361, 613, 350, 636, 364, 631, 382, 620, 385, 596, 379, 594, 361),
    "hiliteOffset": new Point2D(593, 351),
    "hiliteSize": new Point2D(265, 138),
    "overlaySize": new Point2D(265, 138),
    "detailRectangle": new Rectangle2D(785, 434, 78, 56),
    "adjacentIndices": [
      55
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(612.5, 383),
    "musters": {
      "F": new Point2D(805, 471),
      "A": new Point2D(811, 479),
      "i": new Point2D(848, 467),
      "i_": new Point2D(-5, -4),
      "a": new Point2D(843, 481),
      "a_": new Point2D(-3, -5),
      "f": new Point2D(822, 478),
      "f_": new Point2D(3, -8),
      "b": new Point2D(816, 463),
      "b_": new Point2D(4, -7)
    },
    "originalPowerId": TeamId.Japan
  },
  {
    "title": "Belgian Congo",
    "abbreviation": "Cng",
    "titles": [
      {
        "text": "Belgian Congo",
        "point": {
          "x": 300.5,
          "y": 388
        }
      }
    ],
    "polygon": new Polygon2D(267, 384, 305, 375, 317, 361, 325, 364, 339, 358, 345, 367, 345, 381, 324, 408, 319, 409, 319, 427, 324, 432, 319, 436, 280, 436, 271, 416, 267, 384),
    "hiliteOffset": new Point2D(267, 358),
    "hiliteSize": new Point2D(77, 78),
    "overlaySize": new Point2D(77, 78),
    "adjacentIndices": [
      124,
      123,
      107,
      95,
      56
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(301.5, 404),
    "musters": {
      "F": new Point2D(292, 404),
      "A": new Point2D(311, 404),
      "i": new Point2D(336, 371),
      "i_": new Point2D(-8, 0),
      "a": new Point2D(330, 383),
      "a_": new Point2D(-11, 0),
      "f": new Point2D(310, 427),
      "f_": new Point2D(-3, -6),
      "b": new Point2D(288, 425),
      "b_": new Point2D(-4, -7)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Australia",
    "abbreviation": "Aus",
    "titles": [
      {
        "text": "Australia",
        "point": {
          "x": 637.5,
          "y": 461
        }
      }
    ],
        "polygon": new Polygon2D(566, 466, 570, 454, 587, 447, 610, 427, 614, 434, 631, 417, 640, 424, 649, 423, 645, 439, 662, 446, 664, 430, 669, 426, 703, 475, 709, 492, 695, 528, 686, 543, 678, 547, 662, 547, 639, 530, 633, 518, 601, 522, 581, 531, 569, 528, 572, 523, 571, 491, 567, 486, 570, 482, 570, 471, 566, 466),
    "hiliteOffset": new Point2D(566, 418),
    "hiliteSize": new Point2D(143, 129),
    "overlaySize": new Point2D(143, 129),
    "adjacentIndices": [
      29,
      13,
      0
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(637.5, 475),
    "musters": {
      "F": new Point2D(627, 477),
      "A": new Point2D(648, 477),
      "i": new Point2D(617, 504),
      "i_": new Point2D(9, 0),
      "a": new Point2D(668, 503),
      "a_": new Point2D(0, 9),
      "f": new Point2D(673, 479),
      "f_": new Point2D(-11, -13),
      "b": new Point2D(599, 471),
      "b_": new Point2D(-5, 13)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Argentina/Chile",
    "abbreviation": "Arg",
    "titles": [
      {
        "text": "Argentina",
        "point": {
          "x": 74.5,
          "y": 450
        }
      },
      {
        "text": "Chile",
        "point": {
          "x": 74,
          "y": 460
        }
      }
    ],
        "polygon": new Polygon2D(51, 471, 56, 462, 53, 452, 55, 430, 85, 422, 97, 439, 111, 439, 87, 472, 73, 484, 68, 505, 66, 512, 75, 516, 69, 522, 58, 514, 54, 505, 51, 471),
    "hiliteOffset": new Point2D(51, 423),
    "hiliteSize": new Point2D(60, 99),
    "overlaySize": new Point2D(60, 99),
    "adjacentIndices": [
      118,
      81,
      50,
      19,
      6
    ],
    "musters": {
      "A": new Point2D(84, 460),
      "i": new Point2D(80, 438),
      "i_": new Point2D(6, 2),
      "a": new Point2D(62, 444),
      "a_": new Point2D(3, -5),
      "f": new Point2D(62, 507),
      "f_": new Point2D(0, -6),
      "b": new Point2D(63, 482),
      "b_": new Point2D(-1, -8)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Angola",
    "abbreviation": "Ang",
    "titles": [
      {
        "text": "Angola",
        "point": {
          "x": 306.5,
          "y": 452
        }
      }
    ],
        "polygon": new Polygon2D(279, 468, 287, 447, 280, 436, 319, 436, 331, 456, 322, 465, 307, 469, 287, 486, 279, 468),
    "hiliteOffset": new Point2D(280, 436),
    "hiliteSize": new Point2D(50, 50),
    "overlaySize": new Point2D(50, 50),
    "adjacentIndices": [
      120,
      95,
      66,
      5
    ],
    "musters": {
      "A": new Point2D(305, 465),
      "i": new Point2D(289, 455),
      "i_": new Point2D(5, 0),
      "a": new Point2D(293, 442),
      "a_": new Point2D(6, 0),
      "f": new Point2D(289, 477),
      "f_": new Point2D(2, -4),
      "b": new Point2D(314, 450),
      "b_": new Point2D(2, 5)
    },
    "originalPowerId": TeamId.Neutral
  },
  {
    "title": "Anglo-Egypt/Sudan",
    "abbreviation": "Egy",
    "titles": [
      {
        "text": "Anglo-Egypt",
        "point": {
          "x": 338.5,
          "y": 309
        }
      },
      {
        "text": "Sudan",
        "point": {
          "x": 338.5,
          "y": 319
        }
      }
    ],
        "polygon": new Polygon2D(307, 340, 307, 321, 312, 320, 313, 280, 317, 273, 314, 267, 342, 266, 347, 269, 369, 320, 370, 329, 360, 348, 366, 355, 345, 367, 339, 358, 325, 364, 317, 361, 315, 347, 307, 340),
    "hiliteOffset": new Point2D(308, 266),
    "hiliteSize": new Point2D(61, 101),
    "overlaySize": new Point2D(61, 101),
    "adjacentIndices": [
      120,
      107,
      99,
      95,
      93,
      69,
      46,
      21
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(338.5, 334),
    "musters": {
      "F": new Point2D(329, 335),
      "A": new Point2D(348, 335),
      "i": new Point2D(326, 350),
      "i_": new Point2D(-5, -9),
      "a": new Point2D(347, 351),
      "a_": new Point2D(4, -7),
      "f": new Point2D(344, 285),
      "f_": new Point2D(1, 8),
      "b": new Point2D(324, 287),
      "b_": new Point2D(1, 8)
    },
    "originalPowerId": TeamId.UnitedKingdom
  },
  {
    "title": "Algeria",
    "abbreviation": "Alg",
    "titles": [
      {
        "text": "Algeria",
        "point": {
          "x": 236.5,
          "y": 269
        }
      }
    ],
        "polygon": new Polygon2D(196, 275, 199, 263, 213, 249, 223, 253, 248, 248, 266, 239, 272, 242, 274, 258, 279, 262, 270, 271, 267, 268, 264, 273, 267, 275, 258, 285, 246, 285, 238, 285, 229, 294, 208, 275, 196, 275),
    "hiliteOffset": new Point2D(197, 239),
    "hiliteSize": new Point2D(82, 56),
    "overlaySize": new Point2D(82, 56),
    "adjacentIndices": [
      107,
      104,
      93,
      10,
      4
    ],
    "ipcValue": 1,
    "ipcPoint": new Point2D(236.5, 263),
    "musters": {
      "F": new Point2D(227, 263),
      "A": new Point2D(246, 263),
      "i": new Point2D(255, 277),
      "i_": new Point2D(4, -6),
      "a": new Point2D(263, 250),
      "a_": new Point2D(-10, 2),
      "f": new Point2D(229, 284),
      "f_": new Point2D(4, -5),
      "b": new Point2D(210, 268),
      "b_": new Point2D(2, -5)
    },
    "originalPowerId": TeamId.Germany
  },
  {
    "title": "Alaska",
    "abbreviation": "Ala",
    "titles": [
      {
        "text": "Alaska",
        "point": {
          "x": 790.5,
          "y": 93
        }
      }
    ],
    "polygon": new Polygon2D(744, 143, 764, 125, 752, 112, 769, 84, 777, 81, 783, 63, 813, 63, 813, 122, 821, 123, 830, 137, 831, 148, 826, 149, 820, 144, 816, 133, 810, 127, 799, 128, 790, 125, 785, 136, 777, 132, 744, 143),
    "hiliteOffset": new Point2D(744, 64),
    "hiliteSize": new Point2D(88, 86),
    "overlaySize": new Point2D(88, 86),
    "adjacentIndices": [
      61,
      51,
      7
    ],
    "ipcValue": 2,
    "ipcPoint": new Point2D(790.5, 107),
    "musters": {
      "F": new Point2D(781, 107),
      "A": new Point2D(800, 106),
      "i": new Point2D(766, 118),
      "i_": new Point2D(6, 0),
      "a": new Point2D(804, 117),
      "a_": new Point2D(-9, 2),
      "f": new Point2D(783, 80),
      "f_": new Point2D(-5, 9),
      "b": new Point2D(801, 72),
      "b_": new Point2D(1, 9)
    },
    "originalPowerId": TeamId.UnitedStates
  },
  {
    "title": "Afghanistan",
    "abbreviation": "Afg",
    "titles": [
      {
        "text": "Afghan.",
        "point": {
          "x": 463,
          "y": 229
        }
      },
      {
        "text": "Afghanistan",
        "point": {
          "x": 539.5,
          "y": 7
        }
      }
    ],
    "polygon": new Polygon2D(439, 241, 440, 235, 444, 234, 447, 222, 455, 219, 471, 218, 489, 220, 488, 226, 481, 228, 477, 242, 466, 248, 462, 245, 439, 241),
    "hiliteOffset": new Point2D(440, 14),
    "hiliteSize": new Point2D(145, 233),
    "overlaySize": new Point2D(145, 233),
    "adjacentIndices": [
      100,
      96,
      82,
      76
    ],
    "detailRectangle": new Rectangle2D(515, 5, 71, 57),
    "musters": {
      "A": new Point2D(536, 42),
      "i": new Point2D(535, 25),
      "i_": new Point2D(-5, 7),
      "a": new Point2D(548, 33),
      "a_": new Point2D(1, -6),
      "f": new Point2D(561, 41),
      "f_": new Point2D(-9, 4),
      "b": new Point2D(570, 21),
      "b_": new Point2D(2, 8)
    },
    "originalPowerId": TeamId.Neutral
  }
];