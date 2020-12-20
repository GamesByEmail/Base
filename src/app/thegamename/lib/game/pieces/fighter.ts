import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';

export class Fighter extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Fighter;
  getChar(): PieceChar {
    return Fighter.pieceChar;
  }
}