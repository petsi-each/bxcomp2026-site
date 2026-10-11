#include <stdio.h>
#include <stdlib.h>

int checa_matriz(char** matriz, int B_lin, int C_col, int S_lin, int S_col, int lin, int col){
    int G = 0;

    for(int i = 0; i<lin; i++){
        for(int j = 0; j<col; j++){
            if(matriz[i][j] == 'G'){
                if(i == B_lin) continue;
                if(j == C_col) continue;
                if((i+1==S_lin||i-1==S_lin||i==S_lin)&&(j+1==S_col||j-1 == S_col||j == S_col)) continue;

                G++;
            }
        }
    }
    return G;
}

int main (){
    int N, col, lin, G;
    int C_col = 101, S_lin = 101, S_col = 150, B_lin = 101;
    char** matriz;

    scanf("%d", &N);
    for(int n = 0; n<N; n++){
        C_col = 101, S_lin = 101, S_col = 150, B_lin = 101;

        scanf("%d", &lin);
        scanf("%d", &col);
        matriz = (char**)malloc(lin*sizeof(char*));

        for(int i = 0; i<lin; i++){
            matriz[i] = (char*)malloc(col*sizeof(char));

            for(int j = 0; j<col; j++){

                scanf(" %c", &matriz[i][j]);

                if(matriz[i][j] == 'C'){
                    C_col = j;
                }else if(matriz[i][j] == 'B'){
                    B_lin = i;
                }else if(matriz[i][j] == 'S'){
                    S_lin = i;
                    S_col = j;
                }

            }

        }

        G = checa_matriz(matriz, B_lin, C_col, S_lin, S_col, lin, col);

        if(G >= ((col*lin)/2)+(col*lin)%2) printf("Seu ninho ta a caminho, conseguimos %d galhos\n", G);
        else printf("Acho que devemos procurar galhos em outro lugar, aqui soh tem %d galhos\n", G);

    }   
}
