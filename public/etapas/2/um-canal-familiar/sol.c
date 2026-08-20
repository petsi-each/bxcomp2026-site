#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int eh_primo(int C){
    if(C==1) return 0;
	for(int i=2; i<=C/2; i++){
		if(C%i==0)return 0;
	}
	return 1;
}

int main(){
	int N, C, primeiro = 0;
	char msg[255];
	scanf("%d", &N);
	for(int i=0; i<N; i++){
		scanf("%d", &C);
		scanf("%s", msg);
		if(eh_primo(C)){
            if(primeiro!=0) printf(" ");
            printf("%s", msg);
			primeiro = 1;
        }
	}
	printf("\n");
}

//No enunciado original a segunda entrada estava com um número errado, pois dizia que seriam 8 linhas de entrada mas na verdade eram 9, fiz a pequena alteração já. Agora a resolução funciona.