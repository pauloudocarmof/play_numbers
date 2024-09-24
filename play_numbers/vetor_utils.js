

export function substituir_vetor(vetor, valor_padrao){
    for(let i in vetor){
        vetor[i] = valor_padrao
    }
    return vetor
}

