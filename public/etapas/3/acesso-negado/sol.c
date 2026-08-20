#include <stdio.h>

#define MAX 999

int main() {
    
// DECLARAÇÃO DAS VARIÁVEIS
    char str[MAX]; // Variável para armazenar a string de entrada
    char blocos[MAX][5]; // Matriz para armazenar os blocos de 4 bits, colunas = 5 pois (4 bits + 1 para o terminador de string '\0')

    int numeroBlocos = 0; // Variável para armazenar o número de blocos formados
    int numeroDecimal = 0; // Variável para armazenar o número decimal resultante da conversão do binário

    int tamanho; // Variável auxiliar para armazenar tamanhos

    int indiceBloco = 0; // Índice para percorrer os blocos
    int indiceDigito = 0; // Índice para percorrer os dígitos dentro de cada bloco / número

    int potencia; // Variável para armazenar a potência de 2 ou 10 durante as conversões
    int copiaDoNumero; // Variável auxiliar para armazenar uma cópia do número decimal durante a conversão para alfabeto

    int N;
    scanf("%d", &N);

    for(int w = 0; w<N; w++){
        potencia = 0;
        copiaDoNumero = 0;
        indiceBloco = 0;
        indiceDigito = 0;
        tamanho = 0;
        numeroBlocos = 0;
        numeroDecimal = 0;
    
    scanf("%s", str); // Leitura da string de entrada


// FORMAÇÃO DOS BLOCOS
    // Definição do tamanho da string
    tamanho = 0;
    for(int i = 0; str[i]!='\0'; i++) tamanho++;

    // Laço que percorre a string formando os blocos
    for (int i = 0; i < tamanho; i++) {

        // Se o caractere for '0' ou '1', ele é adicionado ao bloco atual
        if (str[i] == '0' || str[i] == '1') {
            blocos[indiceBloco][indiceDigito] = str[i];

            // Se o bloco atingir 4 dígitos, ele é finalizado e um novo bloco é iniciado
            if(indiceDigito == 3){
                blocos[indiceBloco][indiceDigito+1] = '\0';
                indiceBloco++;
                indiceDigito = 0;
            }
            else indiceDigito++;
        }
    }

    // Finalização do último bloco, caso ele não tenha sido finalizado dentro do laço
    if(indiceDigito != 0){
        blocos[indiceBloco][indiceDigito] = '\0';
        indiceBloco++;
    }

    numeroBlocos = indiceBloco; // Armazenamento do número total de blocos formados


// INVERSÃO DOS BLOCOS ÍMPARES
    // Laço que percorre cada bloco
    for(int i = 0; i<numeroBlocos; i++){

        // Definição do tamanho do bloco atual
        tamanho = 0;
        for(int j = 0; blocos[i][j] != '\0'; j++) tamanho++;

        // Se o último dígito do bloco for '1', ou seja, ele for ímpar, o bloco é invertido
        if(blocos[i][tamanho-1] == '1'){
            for(int j = 0; j < tamanho/2; j++){
                char temp = blocos[i][j];
                blocos[i][j] = blocos[i][tamanho - 1 - j];
                blocos[i][tamanho - 1 - j] = temp;
            }
        }
    }


// JUNÇÃO DOS BLOCOS
    indiceDigito = 0;

    // Laço que percorre cada bloco
    for(int i = 0; i < numeroBlocos; i++){

        // Definição do tamanho do bloco atual
        tamanho = 0;
        for(int j = 0; blocos[i][j] != '\0'; j++) tamanho++;

        // Laço que percorre cada dígito do bloco atual, concatenando-o à string final
        for(int j = 0; j < tamanho; j++){
            str[indiceDigito] = blocos[i][j];
            indiceDigito++;
        }
    }

    // Finalização da string
    str[indiceDigito] = '\0';


// TRANSFORMAÇÃO DE BINÁRIO PARA DECIMAL
    // Definição do tamanho da string
    tamanho = 0;
    for(int i = 0; str[i]!='\0'; i++) tamanho++;

    // Laço que percorre a string de trás para frente, convertendo o número binário para decimal
    for(int i = tamanho-1; i >= 0; i--){
        if(str[i] == '1'){

            // Cálculo do dígito i de binário para decimal 2^(tamanho-1-i)
            potencia = 1;
            for(int j = 0; j < tamanho- 1 - i; j++) potencia *= 2;

            numeroDecimal += potencia; // Acumulação do valor decimal
        }
    }


// TRANSFORMAÇÃO DE DECIMAL PARA ALFABETO
    // Definição do tamanho do número decimal
    tamanho = 0;
    copiaDoNumero = numeroDecimal;
    for(int i = 0; copiaDoNumero > 0; i++) {
        copiaDoNumero /= 10;
        tamanho++;
    }

    // Laço que percorre cada dígito do número decimal, convertendo-o para o alfabeto
    indiceDigito = 0;
    for(int i = 0; i<tamanho; i++){
        potencia = 1;
        for(int j = 0; j < tamanho - 1 - i; j++) potencia *= 10;

        int digito = (numeroDecimal / potencia) % 10; // Extração do dígito i do número decimal: (numeroDecimal / 10^tamanho-1-i) % 10

        // Se o dígito for positivo, ele é convertido para o alfabeto (1 -> A, 2 -> B, ..., 9 -> I)
        if(digito > 0){
            str[indiceDigito] = (char)(digito + 64); // 64 é o valor ASCII de 'A' - 1
            indiceDigito++;
        }
    }
    str[indiceDigito] = '\0'; // Finalização da string


// Saída do programa
    printf("O cadeado para o codigo eh: %s\n", str);

    }
    return 0;
}
