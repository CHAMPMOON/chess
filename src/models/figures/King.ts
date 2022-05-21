import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/B_King.png'
import whiteLogo from '../../assets/W_King.png'

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const absX = Math.abs(this.cell.x - target.x);
        const absY = Math.abs(this.cell.y - target.y);

        if ((absX + absY <= 2) && (absX !== 2) && (absY !== 2)) {
            return true;
        }
        return false;
    }
}