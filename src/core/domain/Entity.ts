import crypto from "crypto";

export abstract class Entity<T> {

    // protect only visible in this class and class that extend it
    // private only this class
    // public is public
    
    protected _id: string;
    public props:T;


    get id() { return this._id; }
    
    constructor(props:T, id?: string){
        this._id = id ?? crypto.randomUUID();
        this.props = props;
        

    }
}