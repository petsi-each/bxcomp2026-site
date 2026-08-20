#include "stdio.h"
#include "stdlib.h"

#define INFINITO 1000000000
#define TAMANHO_MAX_MAPA 100
#define TAMANHO_FILA (TAMANHO_MAX_MAPA * TAMANHO_MAX_MAPA)

typedef struct {
    int linha;
    int coluna;
} Coordenadas;

typedef struct {
    Coordenadas coord;
    int passos;
} Estado;

typedef struct {
    Estado itens[TAMANHO_FILA];
    int frente;
    int tras;
} Fila;

void inicializarFila(Fila* f) {
    f->frente = -1;
    f->tras = -1;
}

int estaVazia(Fila* f) {
    return f->frente == -1;
}

void enfileirar(Fila* f, Estado estado) {
    if (f->tras == TAMANHO_FILA - 1) return;
    if (f->frente == -1) f->frente = 0;
    f->tras++;
    f->itens[f->tras] = estado;
}

Estado desenfileirar(Fila* f) {
    Estado item = f->itens[f->frente];
    f->frente++;
    if (f->frente > f->tras) {
        f->frente = f->tras = -1;
    }
    return item;
}

void clear(int** m, int l) {
    if (m == NULL || l <= 0) return;
    for (int i = 0; i < l; i++) {
        free(m[i]);
    }
    free(m);
}

int encontrarOwlbi(int** matriz, int linhas, int colunas, Coordenadas* coord) {
    for (int i = 0; i < linhas; i++) {
        for (int j = 0; j < colunas; j++) {
            if (matriz[i][j] == 1) {
                coord->linha = i;
                coord->coluna = j;
                return 1;
            }
        }
    }
    return 0;
}

// [LÓGICA DE AMEAÇA REVERTIDA CONFORME SOLICITADO]
// Acampamentos (2) ameaçam a 1 de distância.
// Inimigos (3) ameaçam a 1 e 2 de distância.
int verificarInimigosAndAcampamentos(int** matriz, int linhas, int colunas, int l, int c) {
    // Verifica a própria célula
    if (matriz[l][c] == 2 || matriz[l][c] == 3)
        return 1;

    int deslocamento[] = {-2, -1, 1, 2};

    // Verifica ameaças na vertical (deslocando nas linhas)
    for (int i = 0; i < 4; i++) {
        int linhaNavegacao = l + deslocamento[i];
        if (linhaNavegacao >= 0 && linhaNavegacao < linhas) {
            if (i == 0 || i == 3) { // se o deslocamento for de 2 posições, apenas inimigos (3) atacam
                if (matriz[linhaNavegacao][c] == 3)
                    return 1;
            } else { // se o deslocamento for de 1 posição, inimigos (3) e acampamentos (2) atacam
                if (matriz[linhaNavegacao][c] == 3 || matriz[linhaNavegacao][c] == 2)
                    return 1;
            }
        }
    }

    // Verifica ameaças na horizontal (deslocando nas colunas)
    for (int i = 0; i < 4; i++) {
        int colunaNavegacao = c + deslocamento[i];
        if (colunaNavegacao >= 0 && colunaNavegacao < colunas) {
            if (i == 0 || i == 3) { // se o deslocamento for de 2 posições, apenas inimigos (3) atacam
                if (matriz[l][colunaNavegacao] == 3)
                    return 1;
            } else { // se o deslocamento for de 1 posição, inimigos (3) e acampamentos (2) atacam
                if (matriz[l][colunaNavegacao] == 3 || matriz[l][colunaNavegacao] == 2)
                    return 1;
            }
        }
    }

    return 0; // a posição é segura
}


// Algoritmo de busca BFS (rápido e eficiente)
int encontrarMenorCaminho(int** matriz, int linhas, int colunas, Coordenadas* owlbi) {
    int** visitados = malloc(sizeof(int*) * linhas);
    for (int i = 0; i < linhas; i++) {
        visitados[i] = calloc(colunas, sizeof(int));
    }

    if (verificarInimigosAndAcampamentos(matriz, linhas, colunas, owlbi->linha, owlbi->coluna)) {
        clear(visitados, linhas);
        return INFINITO;
    }

    Fila fila;
    inicializarFila(&fila);

    Estado inicial = {*owlbi, 0};
    enfileirar(&fila, inicial);
    visitados[owlbi->linha][owlbi->coluna] = 1;

    int dl[] = {-1, 1, 0, 0};
    int dc[] = {0, 0, -1, 1};

    while (!estaVazia(&fila)) {
        Estado atual = desenfileirar(&fila);

        if (matriz[atual.coord.linha][atual.coord.coluna] == 4) {
            clear(visitados, linhas);
            return atual.passos;
        }

        for (int i = 0; i < 4; i++) {
            int nova_linha = atual.coord.linha + dl[i];
            int nova_coluna = atual.coord.coluna + dc[i];

            if (nova_linha >= 0 && nova_linha < linhas &&
                nova_coluna >= 0 && nova_coluna < colunas &&
                !visitados[nova_linha][nova_coluna] &&
                !verificarInimigosAndAcampamentos(matriz, linhas, colunas, nova_linha, nova_coluna))
            {
                visitados[nova_linha][nova_coluna] = 1;
                Coordenadas novasCoords = {nova_linha, nova_coluna};
                Estado proximoEstado = {novasCoords, atual.passos + 1};
                enfileirar(&fila, proximoEstado);
            }
        }
    }

    clear(visitados, linhas);
    return INFINITO;
}

int main() {
    int linhas = 0;
    int colunas = 0;
    int** matriz = NULL;

    scanf("%d %d", &linhas, &colunas);
    if (linhas <= 0 || colunas <= 0) {
        return 0;
    }

    matriz = (int**)malloc(sizeof(int*) * linhas);
    for (int i = 0; i < linhas; i++) {
        matriz[i] = (int*)malloc(sizeof(int) * colunas);
        for (int j = 0; j < colunas; j++) {
            scanf("%d", &matriz[i][j]);
        }
    }

    Coordenadas owlbi;
    if (!encontrarOwlbi(matriz, linhas, colunas, &owlbi)) {
        clear(matriz, linhas);
        return 0;
    }

    int menorCaminho = encontrarMenorCaminho(matriz, linhas, colunas, &owlbi);

    if (menorCaminho == INFINITO) {
        printf("1000000000\n"); // Mantendo a saída original para o caso sem caminho
    } else {
        printf("%d\n", menorCaminho);
    }

    clear(matriz, linhas);
    return 0;
}