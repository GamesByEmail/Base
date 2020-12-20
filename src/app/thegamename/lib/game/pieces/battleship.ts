import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';

export class Battleship extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Battleship;
  getChar(): PieceChar {
    return Battleship.pieceChar;
  }
}