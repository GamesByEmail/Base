import { Piece, PieceChar } from '../piece';

export class Armor extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Armor;
  getChar(): PieceChar {
    return Armor.pieceChar;
  }
}
