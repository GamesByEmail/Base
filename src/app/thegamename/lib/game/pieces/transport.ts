import { Territory } from '../territory';
import { Piece, PieceChar } from '../piece';

export class Transport extends Piece {
  public static readonly pieceChar: PieceChar = PieceChar.Transport;
  cargo:Piece[]=[];
  getChar(): PieceChar {
    return Transport.pieceChar;
  }
  setState(state:string):string{
    state=super.setState(state);
    if (state.startsWith("[")) {
      state=state.substr(1);
      while (!state.startsWith("]")) {
        const pieceChar = <PieceChar>state.charAt(0);
        state = state.substr(1);
        const piece = this.game.board.createPiece(pieceChar);
        state = piece.setState(state);
        this.cargo.push(piece);
      }
      state=state.substr(1);
    }
    return state;
  }
  getState():string{
    let state=super.getState();
    if (this.cargo.length>0)
      state+="["+this.cargo.map(piece=>piece.getState()).join("")+"]";
    return state;
  }

}