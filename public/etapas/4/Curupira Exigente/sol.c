#include <stdio.h>

int main() {
    int n;
    
    // le a quantidade de numeros que serao testados
    if (scanf("%d", &n) != 1) {
        return 0; // encerra se a leitura falhar
    }

    // inicializa a variavel que vai armazenar a quantidade de numeros validos
    int numeros_aceitos = 0; 
    
    // laco de repeticao para ler e avaliar cada um dos n numeros informados
    for (int i = 0; i < n; i++) {
        int numero_atual;
        
        // le o numero da sequencia
        scanf("%d", &numero_atual);
        
        // verifica se o numero atende as duas exigencias do curupira simultaneamente:
        // 1. ser par (resto da divisao por 2 igual a zero)
        // 2. ser estritamente maior que 10
        if (numero_atual % 2 == 0 && numero_atual > 10) {
            // se ambas as condicoes forem verdadeiras, incrementa o contador
            numeros_aceitos++; 
        }
    }

    // imprime a quantidade final de numeros que agradaram o curupira
    printf("%d\n", numeros_aceitos);

    // finaliza o programa com sucesso
    return 0;
}