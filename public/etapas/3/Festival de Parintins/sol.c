
#include <stdio.h>

int soma_maiores(int a, int b, int c) {

    int menor = a;

    if (b < menor) {
        menor = b;
    }
    
    if (c < menor) {
        menor = c;
    }

    return a + b + c - menor;
}

int main() {

    int caprichoso = 0;
    int garantido = 0;

    int a, b, c;

    for (int noite = 1; noite <= 3; noite++) {

       
        scanf("%d %d %d", &a, &b, &c);
        caprichoso += soma_maiores(a, b, c);

        scanf("%d %d %d", &a, &b, &c);
        garantido += soma_maiores(a, b, c);
    }

    if (caprichoso > garantido) {

        printf("Caprichoso venceu com %d pontos!\n", caprichoso);

    } else if (garantido > caprichoso) {

        printf("Garantido venceu com %d pontos!\n", garantido);

    } else {

        printf("Empate! Ambos fizeram %d pontos.\n", caprichoso);
    }

    return 0;
}