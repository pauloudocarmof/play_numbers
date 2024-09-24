import { question } from "readline-sync";

export function print(mensagem){
    return console.log(mensagem)
}
export function get_number(mensagem){
    return Number(question(mensagem))
}
export function get_string(mensagem){
    return question(mensagem)
}
export function get_random_number(min, max){
    let numero_aleatorio  
    numero_aleatorio = (Math.floor(Math.random() * (max - min) +  min))
    return numero_aleatorio
}
    


