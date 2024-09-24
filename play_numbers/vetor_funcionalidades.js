
import {get_number, get_random_number, print} from './utills.js'
import { readFileSync, writeFileSync} from "fs"
export function ler_arquivo(arquivo){
    const dados = readFileSync(`${arquivo}`, "utf-8")
    const linhas = dados.split("/n")
    return linhas
}


export function get_random_list(max, quantidade){
    let lista = []
    let numero_aleatorio = []
    
    for(let contador = 0; contador < quantidade; contador++){
        numero_aleatorio.push(Math.floor(Math.random() * (max + 1)))
        lista = numero_aleatorio
    }
    return lista
}   
   
export function eh_maior(vetor){
    let maior = 0
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior
}

export function get_index(vetor, item){
    let identificador
    for(let i = 0; identificador != item; i++){
        identificador = vetor[i]
        if(identificador === item){
            return identificador = i
        }
    }
}

export function eh_menor(vetor, maior){
    let menor = maior
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < menor)
            menor = vetor[i]
    }
    return menor
}


export function somatorio(vetor){
    let soma = 0
    for (let item of vetor){
        soma += item
    }
    return soma
}

export function get_media(lista, qtd_itens){

}
export function romover_por_posicao(vetor,posicao){
    for(let i in vetor){
        if(i === posicao){
            vetor
        }
    }
}
export function positivos(vetor){
    let n_positivos = []
    for(let numero of vetor){
        if(numero > 0){
            n_positivos.push(numero)
        }
    }
    return n_positivos

}

export function negativos(vetor){
    let n_negativos = []
    for(let numero of vetor){
        if(numero < 0){
            n_negativos.push(numero)
        }
    }
    return n_negativos
}



//OPÇÃO 10:
    //multiplicar por um valor

export function atualizar_multiplicar(vetor, multiplicador){
    for(let i in vetor){
        vetor[i] = vetor[i] * multiplicador
    }
    return vetor
}
    //elevar por expoente
export function atualizar_potencia(vetor, expoente){
    for(let i in vetor ){
        vetor[i] = vetor[i] ** expoente
    }
    return vetor
}
    //substituir por fração

    // substituir valores negativos por aleatorio

export function atualizar_negtivos(vetor, max, min){
    for(let i in vetor){
        if(vetor[i] < 0){
            vetor[i] = (Math.floor(Math.random() * (max - min) +  min))
        }
    }
    return vetor
}
    //inverte ordem valores

export function ordenar_vetor(vetor){
    let vetor_ordenado = []
    for(let i = vetor.length - 1; i >= 0; i--){
        vetor_ordenado.push(vetor[i])
    }
    return vetor_ordenado
}

    //embaralhar intens


export function embaralhar_valores(vetor){
    for(let i = vetor.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
    let temp = vetor[i]
    vetor[i] =  vetor[j]
    vetor[j] = temp
    
    }
    return vetor
}
      

export function adicionar_valores(vetor, valor){
    vetor.push(valor)
    return vetor
}   


export function remover_valor(vetor, valor){
    const novo_vetor = []
    
    //percorrer o vetor item a item e filtrar o que eu quero
    for (let i of vetor){
        
        if(i != valor){
            novo_vetor.push(i)
        }
    }

    return novo_vetor
}
export function remover_posicao(vetor, posicao){
    const novo_vetor = []
    for (let i in vetor){
        if(i != posicao){
            novo_vetor.push(vetor[i])
        }
    }
    return novo_vetor
}

//Editar valor específico por Posição

export function editar_valor(vetor, posicao, novo_valor){
    vetor[posicao] = novo_valor
    return vetor
}

// salvar arquivo



export function salvar_arquivo(nome_arquivo, conteudo){
    // const dados = numeros.join('\n');
    
    const dados = conteudo.toString()
 
    writeFileSync(nome_arquivo, dados, (err) => {
        if (err) {
            console.log('Erro ao salvar o arquivo:', err);
        } else {
            console.log('Arquivo salvo com sucesso!');
        }
    });
}

