/*Lógica: vai ter N casos testes com uma string (máx 100 caracteres) 
a string só é correta se o próximo número for: atual, atual +1 ou atual -1 (9+1 = 0 e 0-1 = 9)*/

/*OBS: antes botei esse desafio valendo 4 pontos pois achei que eles não tinham acesso ao Google. 
Como descobri que podia usar a internet, então acho que esse desafio vale 2 ou 3 pontos. A única dificuldade
seria transformar char em nº e ver como fazer esse ciclo de 0 até 9*/


#include <stdio.h>
#include <string.h>
#define MAX 100

int eHarmonica(char sequencia[]){
    int tamanhoSequencia = strlen(sequencia);

    for(int i = 0; i < tamanhoSequencia - 1; i++){   //É -1 pq o tamanho é sempre 1 a mais que o maior índice   
        
        int atual = sequencia[i] - '0';         //Transforma char em número (não sei se sabem disso, eu na época não saberia)
        int proximo = sequencia[i+1] - '0';

        if(proximo != atual && proximo != (atual - 1 + 10) % 10 && proximo != (atual + 1) % 10){
            return 0;
            
            //Se atual = 9 o proximo será 18%10 = 8 ou 10%10 = 0
            //Consideravelmente difícil pensar isso na hora, mas é relativamente manjado
        }
    }
    return 1;
}

int main(){
    
    int N;
    char sequencia[MAX];

    //printf("Digite o número de casos teste: ");
    
    scanf("%d", &N);

    for(int i = 0; i < N; i++){
        scanf("%s", sequencia);

        if(eHarmonica(sequencia)){
            printf("Que bela construcao! O Farao ficara muito feliz!\n");
        }
        else{
            printf("Essa parede e uma maldicao! FUJAM PARA AS COLINAS!\n");
        }
    }

    return 0;
}

/*
4
12321
90109
11111
1345
*/

