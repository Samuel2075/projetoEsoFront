### Tecnologias usadas
Implementei o front usando o bootstrap 4.5.2 importado via CDN, usei um pouco de flex-box para alinhar os componentes e deixar responsivo. Usei axios para fazer as requisições ao meu back-end, implementado em java.
### Estrutura
Existe 2 pacotes o de componentes e o de css. O de css contem os estilos da página. Em componentes está o filtro, card, lista e modal, todos esses componentes são juntados no App.js.
Usei algumas funções para salvar os meus estados, preciso disso pois preciso trafegar informações entre os componentes eo useState me auxilia nisso.
`import React, { useEffect, useState } from 'react';`

Esse é o json que eu monto para enviar por requisição post a minha API.

`const jsonPost = {
            name: name || null,
            color: color || null,
            type: type || null,
            habitat: habitat || null,
            minWeight: minWeight || 0,
            maxWeight: maxWeight || 0,
            minBaseExperience: minBaseExperience || 0,
            maxBaseExperience: maxBaseExperience || 0,
            page: 0,
            size: size
        };
`


