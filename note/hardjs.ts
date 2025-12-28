import { json } from "zod";

function fn(a: number| null, b: number | undefined): void
{
    console.log(a, b);
}

//  jsの場合 undefinedを省略できる tsはできない 
fn(2, undefined);

