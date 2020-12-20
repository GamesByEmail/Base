import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';

export class Carrier extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Carrier;
  getChar(): PieceChar {
    return Carrier.pieceChar;
  }
}