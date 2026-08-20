#include <stdio.h>
#include <stdlib.h>
#include<math.h> 

int main() {
	int T;
	scanf("%d", &T);
	for(int caso = 0; caso < T; caso++) {
		int N;
		scanf("%d", &N);
		int lastSum = 0;
		int balanceado = 1;
		for(int k = 1; k <= N; k++) {
			int sum = 0;
			for(int i = 0; i < k; i++) {
				int x;
				scanf("%d", &x);
				sum += x;
			}
			if(k == 1) {
				lastSum = sum;
				continue;
			}
			int diff = abs(sum - lastSum);
			if(diff < ceil(((float) N)/2) || diff > ceil(((float)N *  9)/3))
				balanceado = 0;

			lastSum = sum;
		}
		if(!balanceado)
			printf("AAAAAAH NAO A PIRAMIDE VAI DESABAR!!!!\n");
		else
			printf("Perfeitamente equilibrado, como tudo deve ser.\n");
	}
}