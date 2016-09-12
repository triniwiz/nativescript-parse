declare var PFObject;
export class ParseObject {
    private _object:any;
    constructor(name:string){
        this._object = PFObject.initWithClassName(name);
    }
}