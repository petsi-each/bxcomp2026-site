#include <stdio.h>

int modulo (int a){
  if (a < 0) return -a;
  else return a;
}

int main(){
  int n;
  scanf("%d", &n);
  int matriz[6][6];
  for(int i = 0; i < n; i++){
    // Monta matriz e armazena posição da coruja
    int coruja_x;
    int coruja_y;
    for(int j = 0; j < 6; j++){
      for(int k = 0; k < 6; k++){
        scanf("%d", &matriz[j][k]);
        if (matriz[j][k] == 1){
          coruja_x = j;
          coruja_y = k;
        }
      }
    }
    // Percorre a matriz e acha o perigo mais próximo
    int dist_min = 1000;
    int perigo = 0;
    for(int j = 0; j < 6; j++){
      for(int k = 0; k < 6; k++){
        if (matriz[j][k] >= 2 && matriz[j][k] <= 4){
          int dist = modulo(coruja_x - j) + modulo(coruja_y - k);
          if (dist < dist_min || (dist == dist_min && matriz[j][k] > perigo)) {
            dist_min = dist;
            perigo = matriz[j][k];
          }
        }
      }
    }
    if (perigo == 2) printf("CORRE, CORUJINHA, TEM UM MONSTRO NA SUA COLA\n");
    else if (perigo == 3) printf("Se nao quiser virar nuggets da realeza, da uma agilizada\n");
    else printf("Tem um quero-quero pertinho e ele parece estar bravo...\n");
  }
}
