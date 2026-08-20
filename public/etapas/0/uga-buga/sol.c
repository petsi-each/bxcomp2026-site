#include <stdio.h>
void cifraClub(char texto[]) {
    for (int i = 0; texto[i] != '\0'; i++) {
        char c = texto[i];

        if (c >= 'a' && c <= 'z') {
            c = (c - 'a' + 16) % 26 + 'a';
        }

        printf("%c", c);
    }
    printf("\n");
}

int main() {
    char texto[256];

    scanf(" %[^\n]", texto); // aqui pega toda a frase, incluindo espaços

    cifraClub(texto);

    return 0;
}
