import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';

export class AAGun extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.AAGun;
  getChar(): PieceChar {
    return AAGun.pieceChar;
  }
}
