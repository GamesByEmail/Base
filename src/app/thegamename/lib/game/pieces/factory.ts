import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';
import { TeamId } from '../team-id';

export class Factory extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Factory;
  getChar(): PieceChar {
    return Factory.pieceChar;
  }
}