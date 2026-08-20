#include "stdio.h"
#include "stdlib.h"

#define INFINITO 1000000000
typedef struct {
    int linha;
    int coluna;
} Coordenadas;

void clear(int** m, int l){
    if(m == NULL || l <= 0) return;
    for(int i = 0; i < l; i++){
        free(m[i]);
    }
    free(m);
    return;
}

int encontrarOwlbi(int** matriz, int linhas, int colunas, Coordenadas* coord){
    for(int i = 0; i < linhas; i++){
        for(int j = 0; j < colunas; j++){
            if(matriz[i][j] == 1){
                coord->linha = i;
                coord->coluna = j;
                return 1;
            }
        }
    }

    return 0;
}

// se retornar true é pq tá no radar de um inimigo ou acampamento
int verificarInimigosAndAcampamentos(int** matriz, int linhas, int colunas, Coordenadas* coord){  
    if(matriz[coord->linha][coord->coluna] == 2 || matriz[coord->linha][coord->coluna] == 3)
        return 1;

    int linhaNavegacao = 0;
    int colunaNavegacao = 0;

    int deslocamento[] = {-2, -1, 1, 2};
    
    // verifica ameaças na vertical (deslocando nas linhas)
    for(int i = 0; i < 4; i++){
        linhaNavegacao = coord->linha + deslocamento[i];
        if(linhaNavegacao >= 0 && linhaNavegacao < linhas){
            if(i == 0 || i == 3){    // se o deslocamento for de 2 posições, apenas inimigos atacam
                if(matriz[linhaNavegacao][coord->coluna] == 3)
                    return 1;
            }
            else{                    // se o deslocamento for de 1 posição, inimigos e acampamentos atacam
                if(matriz[linhaNavegacao][coord->coluna] == 3 || matriz[linhaNavegacao][coord->coluna] == 2)
                    return 1;
            }
        }
    }

    // verifica ameaças na horizontal (deslocando nas colunas)
    for(int i = 0; i < 4; i++){
        colunaNavegacao = coord->coluna + deslocamento[i];
        if(colunaNavegacao >= 0 && colunaNavegacao < colunas){
            if(i == 0 || i == 3){   // se o deslocamento for de 2 posições, apenas inimigos atacam
                if(matriz[coord->linha][colunaNavegacao] == 3)
                    return 1;
            }
            else{                   // se o deslocamento for de 1 posição, inimigos e acampamentos atacam
                if(matriz[coord->linha][colunaNavegacao] == 3 || matriz[coord->linha][colunaNavegacao] == 2)
                    return 1;
            }
        }
    }

    return 0;  // a owlbi está fora do radar de ameaças nas coordenadas atuais
}

void buscar(int** matriz, int linhas, int colunas, Coordenadas* coord, int** visitados, int qtPassos, int* minPassos){
    if(coord->linha >= linhas || coord->linha < 0 || coord->coluna >= colunas || coord->coluna < 0)   // ta fora dos limites
        return;

    if(visitados[coord->linha][coord->coluna])  // já passou por aqui
        return;

    if(verificarInimigosAndAcampamentos(matriz, linhas, colunas, coord))    // no radar de uma ameaça
        return;

    if(matriz[coord->linha][coord->coluna] == 4){   // achou a coruja do competec!
        if(qtPassos < (*minPassos)){
            (*minPassos) = qtPassos;
        }
        return;
    } 

    visitados[coord->linha][coord->coluna] = 1;
    
    int direcoes[4][2] = {
        {-1, 0}, // vai pra cima
        {1,  0}, // vai pra baixo
        {0, -1}, // vai pra esquerda
        {0,  1}  // vai pra direita
    };

    for(int i = 0; i < 4; i++){      // tenta as 4 possibilidades de caminhos
        Coordenadas novasCoords;
        novasCoords.linha = coord->linha + direcoes[i][0];
        novasCoords.coluna = coord->coluna + direcoes[i][1];

        buscar(matriz, linhas, colunas, &novasCoords, visitados, qtPassos+1, minPassos);
    }

    visitados[coord->linha][coord->coluna] = 0; // "desvisita" essa posição se não achou ainda
    return;
}

int encontrarMenorCaminho(int** matriz, int linhas, int colunas, Coordenadas* owlbi){
    int **visitados = malloc(sizeof(int*) * linhas);
    for (int i = 0; i < linhas; i++) {
        visitados[i] = calloc(colunas, sizeof(int));
    }

    int minPassos = INFINITO;
    buscar(matriz, linhas, colunas, owlbi, visitados, 0, &minPassos);

    return minPassos;
}

// 0 = espaço vazio
// 1 = owlbi
// 2 = acampamento
// 3 = inimigo
// 4 = competec
int main(){
    int linhas = 0;
    int colunas = 0;
    int** matriz = NULL;

    scanf("%d %d", &linhas, &colunas);
    if(linhas <= 0 || colunas <= 0){
        printf("valor invalido");
        return 0;
    }

    matriz = (int**)malloc(sizeof(int*)*linhas);

    for(int i = 0; i < linhas; i++){
        matriz[i] = (int*)malloc(sizeof(int)*colunas);

        for(int j = 0; j < colunas; j++){
            int valor = 0;
            scanf("%d", &valor);

            if(valor < 0 || valor > 5){
                printf("valor invalido");
                clear(matriz, linhas);
                return 0;
            }

            matriz[i][j] = valor;
        }
    }

    Coordenadas owlbi; // coordenadas da coruja da owlbi
    if(!encontrarOwlbi(matriz, linhas, colunas, &owlbi)){
        clear(matriz, linhas);
        return 0;
    }

    int menorCaminho = encontrarMenorCaminho(matriz, linhas, colunas, &owlbi);

    printf("%d", menorCaminho);

    clear(matriz, linhas);
    return 1;
}