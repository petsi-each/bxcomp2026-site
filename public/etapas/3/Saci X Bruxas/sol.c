
#include <stdio.h>

int main() {
    int tamanhoCaminho;
    int i;
    
    scanf("%d", &tamanhoCaminho);
    
    char caminho[tamanhoCaminho];
    int mov[tamanhoCaminho];
    
    for(i=0;i<tamanhoCaminho;i++){
        mov[i] = -1; 
    }
        mov[0] = 0; 
    
    for(i=0; i < tamanhoCaminho; i++){
        scanf(" %c",&caminho[i]);
    }
    
    
    int s;
    for(i=0; i<tamanhoCaminho;i++){
        for(s=1; s<=3; s++){
            int prox= i + s;
            
            if(prox < tamanhoCaminho && caminho[prox]!='o' && mov[i]!= -1){
                if(mov[prox] == -1 || mov[i] + 1 < mov[prox]){
                    mov[prox] = mov[i] + 1;
                }
            }
        }
    }
    
    if (mov[tamanhoCaminho - 1] == -1) {
        printf("Volte para casa Saci\n");
    } else {
        printf("%d movimentos\n", mov[tamanhoCaminho - 1]);
    }
}