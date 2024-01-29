import { randomInt } from "crypto";

export function getUser(){
    return ((randomInt(10000) % 2) === 0)
}