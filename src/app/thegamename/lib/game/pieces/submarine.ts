import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';

export class Submarine extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Submarine;
  getChar(): PieceChar {
    return Submarine.pieceChar;
  }
}