#include <stdio.h>

int bateriaAprovada(const char *s) {
    int contA = 0;
    int ultimoFoiL = 0;

    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];

        if (c == 'A') {
            contA++;
            if (contA == 2) {
                return 0; // duas ou mais A's -> reprovada
            }
            ultimoFoiL = 0;
        } else if (c == 'L') {
            if (ultimoFoiL) {
                return 0; // dois L's seguidos -> reprovada
            }
            ultimoFoiL = 1;
        } else { // 'I'
            ultimoFoiL = 0;
        }
    }

    return 1;
}

int main(void) {
    char s[1005];
    scanf("%s", s);

    printf(bateriaAprovada(s) ? "true\n" : "false\n");

    return 0;
}
