import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    instructionUrl: string;
    title: string;
}

export class Challenge extends Entity<ChallengeProps> {
    private constructor(props: ChallengeProps, id?: string){
        super(props, id);
    } 

    // static could be called without instancing
    // ex: Challenge.create, instead of c = new Challenge(); c.create
    static create(props: ChallengeProps, id?: string){
        const challenge = new Challenge(props)

        return challenge
    }
}