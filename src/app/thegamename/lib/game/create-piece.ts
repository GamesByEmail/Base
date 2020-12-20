import { AAGun } from './pieces/aagun';
import { Armor } from './pieces/armor';
import { Battleship } from './pieces/battleship';
import { Bomber } from './pieces/bomber';
import { Carrier } from './pieces/carrier';
import { Factory } from './pieces/factory';
import { Fighter } from './pieces/fighter';
import { Infantry } from './pieces/infantry';
import { Submarine } from './pieces/submarine';
import { Transport } from './pieces/transport';
import { Piece, PieceChar } from './piece';
import { Game } from './game';

const types = [AAGun, Armor, Battleship, Bomber, Carrier, Factory, Fighter, Infantry, Submarine, Transport];

export function createPiece(game: Game, pieceChar: PieceChar | string): Piece {
  for (let i = 0; i < types.length; i++)
    if (pieceChar === types[i].pieceChar || pieceChar === types[i].name)
      return new types[i](game);
  throw ("Bad piece type char: '" + pieceChar + "'");
}

export function pieceNameFromChar(pieceChar: PieceChar): string {
  for (let i = 0; i < types.length; i++)
    if (types[i].pieceChar === pieceChar)
      return types[i].name;
  throw ("Bad piece type char: '" + pieceChar + "'");
}
