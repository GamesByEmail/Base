import { Territory } from '../territory';
import { Piece, IPieceSave, PieceChar } from '../piece';
import { isIMove } from '../move';
import { TeamId } from '../team-id';

export class Bomber extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Bomber;
  getChar(): PieceChar {
    return Bomber.pieceChar;
  }
}