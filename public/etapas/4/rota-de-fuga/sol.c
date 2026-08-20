#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
    ENTRADA:
    A entrada s˜ao 3 arrays de 7 pontos que representam os poss´ıveis caminhos. Lembrando que: Z
    representa um Zumbi e @ representa escombros (e vocˆe n˜ao consegue passar por nenhum deles).

    SAÍDA:
    Vocˆe deve retornar qual caminho ´e a rota segura. Caso nenhum dos caminhos seja seguro, vocˆe
    deve retornar que n˜ao existe uma rota de fuga (e rezar).
*/

int main() {

    int seguranca = 0;

    // Lendo cada caminho
    for(int j = 1; j<=3; j++){

        int pontos = 0;

        // Lendo cada passo
        for(int i = 0; i<7; i++){
    
            char passo;
            scanf(" %c", &passo);
            // Determinando segurança
            if(passo == '.')
                pontos++;
            else if(passo == 'Z' || passo == '@')
                pontos--;
            else
                continue;
        }

        // Conferindo se o caminho é seguro
        if(pontos == 7){
            printf("Rota segura: caminho %d! Simbora fml!!", j);
            seguranca = 1;
            break;
        }
        pontos = 0;
    }

    if(!seguranca)
        printf("NAO EXISTE ROTA DE FUGA!!! HELP-ME FML! VAMO VIRA SOPA DE ZUMBI!!!");
     
    return 0;
}
