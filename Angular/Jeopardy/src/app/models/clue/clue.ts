import { Category } from "../category/category";

export class Clue {
    constructor(
    public id: number,
    public answer: String,
    public question:String,
    public value: number,
    public category_id:number,
    )
    {}
}
//[{"id":1212,
/*"answer":"Henry Ford",
"question":"He'd build you a Model T \"in any color, so long as it was black\"",
"value":100,"airdate":"1984-09-12T12:00:00.000Z"
,"created_at":"2022-07-27T00:24:21.096Z",
"updated_at":"2022-07-27T00:24:21.096Z",
"category_id":5,
"game_id":177,
"invalid_count":null,
"category":{"id":5,"title":"automobiles",
"created_at":"2022-07-27T00:24:01.502Z",
"updated_at":"2022-07-27T00:24:01.502Z",
"clues_count":52}}*/

