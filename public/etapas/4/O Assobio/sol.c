#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    int n;
    
    if (scanf("%d", &n) != 1) {
        return 0;
    }

    char s[105];

    for (int k = 0; k < n; k++) {
        scanf("%s", s);
        int len = strlen(s);

        for (int i = 0; i < len; i++) {
            if (i > 0) {
                printf("-");
            }
            
            printf("%c", toupper(s[i]));
            
            for (int j = 0; j < i; j++) {
                printf("%c", tolower(s[i]));
            }
        }
        printf("\n");
    }

    return 0;
}