import { Component, Inject } from '@angular/core';
import { SvgDialogRef, SVG_DIALOG_DATA } from '@packageforge/svg-dialog';
import { IPopulateData } from './populate-dialog.service';
import { Territory } from '../../../../game/territory';
import { TeamId } from '../../../../game/team-id';
import { Team } from '../../../../game/team';
import { Piece, PieceChar } from '../../../../game/piece';

@Component({
  selector: "svg[gbe-games-chess-populate-dialog][xmlns=http://www.w3.org/2000/svg]",
  templateUrl: './populate-dialog.component.svg',
  styleUrls: ['./populate-dialog.component.css']
})
export class PopulateDialogComponent {
  pieceLibrary: any;
  territory: Territory;
  powerChoices:TeamId[]=[];
  addUnits=Object.getOwnPropertyNames(PieceChar);
  addPowers:Team[]=[];
  constructor(public dialogRef: SvgDialogRef<void>, @Inject(SVG_DIALOG_DATA) data: IPopulateData) {
    this.pieceLibrary=data.pieceLibrary;
    this.territory=data.territory;
    if (!this.territory.isSeaZone) {
      this.powerChoices.push(this.territory.controllingId);
      Object.values(TeamId).forEach(id=>{
        if (id!==TeamId.SeaZone && id!==this.territory.controllingId)
        this.powerChoices.push(id);
      });
    }
    if (this.powerChoices.length>0)
      this.addPowers=this.powerChoices.filter(teamId=>teamId!==TeamId.Neutral && teamId!==TeamId.SeaZone).map(teamId=>this.territory.board.game.findTeam(teamId));
    else
      this.addPowers=this.territory.board.game.teams;
  }
  setOwner(powerId:TeamId){
    this.territory.setControllingPower(powerId);
  }
  addUnit(unit:string,teamId:TeamId){
    const piece = this.territory.board.createPiece(unit);
    this.territory.addPiece(piece);
    piece.setOwner(teamId);
  }
  removeUnit(piece:Piece){
    this.territory.removePiece(piece);
  }

  close() {
    this.dialogRef.close();
  }
  dialogSize={
    width:600,
    height:450
  };
}
