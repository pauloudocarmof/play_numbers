import { get_number, get_string, print } from "./utills.js"
import { eh_maior, get_random_list, ler_arquivo, eh_menor, get_index, somatorio, positivos, negativos, atualizar_multiplicar, atualizar_potencia, atualizar_negtivos, ordenar_vetor, embaralhar_valores, adicionar_valores, remover_valor, remover_posicao, editar_valor, salvar_arquivo} from "./vetor_funcionalidades.js"
import { substituir_vetor} from "./vetor_utils.js"
import {writeFile} from 'fs'
function main(){

//LAYOUT 
    
    const menu = `
    ===MENU DE INTERACAO===
    1 - INICIAR Vetor Numerico 
    2 - Mostrar TODOS os valores 
    3 - RESETAR Vetor
    4 - QUANTIDADE de itens
    5 - MENOR e MAIOR valores e suas POSICOES
    6 - SOMATORIO dos Valores
    7 - MEDIA dos Valores
    8 - Valores POSITIVOS e QUANTIDADE
    9 - Valores NEGATIVOS e QUANTIDADES
    10 - ATUALIZAR valores
    11 - ADICIONAR Valores
    12 - REMOVER Itens por VALOR 
    13 - REMOVER por POSICAO
    14 - EDITAR valor especifico por Posicao
    15 - SALVAR em arquivo
    0 - SAIR (salvar)
    --------------------------------`

//PROCESSAMENTO/ SAIDA
    
    //variaveis globais
    let opcao = 1
    let escolha = 0
    let lista = []

    
    while(opcao != 0){
        //ponto de retorno
        print(menu)
        opcao = get_number('Escolha a opcao: ')

        //carregar um vetor
        if (opcao === 1){
            escolha = get_string('Deseja um vetor automatico? (s/n): ')
            if(escolha === 's'){
                lista = get_random_list(get_number('Valor maximo: '),get_number('Tamanho lista: '))
                print(`Lista carregada.`)
            }else if(escolha === 'n'){
                escolha = get_string('Deseja CARREGAR arquivo: ')
                    if(escolha === 's'){
                        lista = ler_arquivo(get_string('Informe NOME arquivo: '))
                        print(`Arquivo carregado.`)
                    }else{
                        print('Informe MANUALMENTE')
                        let tamanho_lista = get_number(`Tamanho desejado: `)
                        for(let i = 0; i < tamanho_lista; i++){
                            lista.push(get_number())
                        }
                    }
            }
        }else if (opcao === 2){
            print (`Mostando Valores ... \n${lista}`)
            
        }else if (opcao === 3){
            let valor_padrao = get_number(`Digite Valor Padrao: `)
            lista = substituir_vetor(lista, valor_padrao)
        }else if (opcao === 4){
            print (`\nTotal --> ${lista.length} ITENS`)
        }else if (opcao === 5){
            let resultado = `Maior: ${eh_maior(lista)} Posicao: ${get_index(lista,eh_maior(lista))} \nMenor: ${eh_menor(lista,eh_maior(lista))} Posicao: ${get_index(lista,eh_menor(lista,eh_maior(lista)))}`
            print(resultado)
        }else if( opcao === 6){
            print(somatorio(lista))
        }else if (opcao === 7){
            print(`\nMedia dos valores --> ${somatorio(lista) / lista.length}`)
        }else if (opcao === 8){
            const n_positivos = positivos(lista)
            print(`\nValores Positivos: \n${n_positivos} \nQuantidade = ${n_positivos.length}`)
        }else if (opcao === 9){
            const n_negativos = negativos(lista)
            print(`\nValores Negativos: \n${n_negativos} \nQuantidade = ${n_negativos.length}`)
        }else if (opcao === 10){
            //menu da opção 10
            const menu2 = `
            I - Multiplicar por um valor
            II - Elevar a um valor
            III - Reduzir a uma fração
            IV - Substituir valores negativos por um número aleatorios da uma faixa
            V - Ordenar valores (reverse?)
            VI - Embaralhar valores `
            
            print(menu2)
            opcao = get_number(`Escolha opcao: `)
            
            if(opcao === 1){
                //entrada
                const multiplicador = get_number(`Multiplicar por: `)
                //computar
                lista = atualizar_multiplicar(lista, multiplicador)
                print(`Valor Atualizado`)
            }else if (opcao === 2){
                //entrada
                const expoente = get_number('Digite expoente: ')
                //processamento
                lista = atualizar_potencia(lista, expoente)
                print(`Vetor Atualizado`)

            }else if(opcao === 3){

            }else if(opcao === 4){
                //entrada
                const max = get_number(`Digite max: `)
                const min = get_number(`Digite min: `)
                //processamento
                lista = atualizar_negtivos(lista, max, min )
                //saisda
                print(`Valores Negativos Atualizados...`)
            }else if(opcao === 5){
                lista = ordenar_vetor(lista)
                print('Vetor ordenado inversamente...')
            }else if(opcao === 6){
                embaralhar_valores(lista)
            }
        }else if(opcao === 11){
            const valor = get_number('Informe valor: ')
            adicionar_valores(lista, valor )
        }else if(opcao === 12){
            const valor = get_number('Qual numero remover? ')
            lista = remover_valor(lista, valor)
        }else if(opcao === 13){
            const posicao = get_number("Qual posicao remover? ")
            lista = remover_posicao(lista, posicao)
        }else if(opcao === 14){
            const posicao = get_number('Qual posicao editar? ')
            const novo_valor = get_number('Qual novo valor? ')
            lista = editar_valor(lista, posicao, novo_valor)
        }else if (opcao === 15){
            const conteudo = lista.toString()
            salvar_arquivo('number.txt', lista)
        }
    }



}

main()