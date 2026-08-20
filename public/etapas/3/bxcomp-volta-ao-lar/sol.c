/* Tarefa: 
  - Receber um inteiro N, que representa a qtd de naves a serem balanceadas.

  - Receber N naves, cada uma com 6 linhas de 6 números cada, que representam
  o peso de cada viajante (0 a 3)

  - Para cada nave, calcular o peso de cada lado (esquerdo e direito) e
  verificar:
    a) Se o lado mais leve tem, no minimo, 80% do peso
    do lado mais pesado.
    b) Se todos os viajantes de peso 3 estão no corredor
    (posições 2 e 3 de cada linha).

  - Se as duas condições forem satisfeitas, a nave está balanceada.

  - Imprimir ”ESTAMOS PRONTOS CAPITAO, DECOLAR IMEDIATAMENTE!” se a nave
  estiver balanceada

  - Imprimir a ”RAPIDO, RAPIDO!! TROQUEM DE LUGAR OU FICAREMOS PRESOS
  PARA SEMPRE NESSA DIMENSAO!" se a nave não estiver balanceada.
*/

#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main(){
  int n;
  setlocale(LC_ALL, "Portuguese");

  // scanneia o numero de casos
  scanf("%d", &n);

  // repete o processo para cada caso, já que cada nave exige uma resposta diferente
  for(int i = 0; i < n; i++){
    float peso_esquerdo = 0, peso_direito = 0;
    int bal = 1;    // diz que a nave tá balanceada
    int linha[6];   // gera o vetor para salvar as cadeiras de cada linha

    for(int j = 0; j < 6; j++){   // para cada linha
      for(int k = 0; k < 6; k++){ // para cada cadeira
        // pega o peso do viajante
        scanf("%d", &(linha[k]));
        // se tiver alguem de peso 3 fora do corredor, a nave não ta balanceada
        if(linha[k] == 3 && !(k == 2 || k == 3)) bal = 0;
        // soma o peso do lado esquerdo e direito
        if(k <= 2) peso_esquerdo += linha[k];
        else peso_direito += linha[k];
      }
    }

    // depois de verificar se tem alguem de peso 3 fora do corredor e somar os pesos
    // verifica se o peso de um lado é pelo menos 80% do outro
    if(peso_direito > peso_esquerdo){
      // se o lado direito for mais pesado
      // e se o esquerdo pesar menos que 80% dele, a nave não ta balanceada
      if(peso_esquerdo < 0.8 * peso_direito) bal = 0;
    } else {
      // se o lado esquerdo for mais pesado
      // e se o direito pesar menos que 80% dele, a nave não ta balance
      if(peso_direito < 0.8 * peso_esquerdo) bal = 0;
    }

    // depois de todas as verificações, imprime a resposta
    if(bal) printf("ESTAMOS PRONTOS CAPITAO, DECOLAR IMEDIATAMENTE!\n");
    else printf("RAPIDO, RAPIDO!! TROQUEM DE LUGAR OU FICAREMOS PRESOS PARA SEMPRE NESSA DIMENSAO!\n");
  }

  return 0;
}