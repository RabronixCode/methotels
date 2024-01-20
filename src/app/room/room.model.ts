export class Room{

    id: number;
    name: string;
    number: string;
    description: string;

    constructor(id: number, name: string, number: string, description: string){
        this.id = id;
        this.name = name;
        this.number = number;
        this.description = description;
    }

}