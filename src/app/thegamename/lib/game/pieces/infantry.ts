import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';

export class Infantry extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Infantry;
  getChar(): PieceChar {
    return Infantry.pieceChar;
  }
}