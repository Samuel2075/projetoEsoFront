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
### Segunda etapa
Para essa segunda etapa o que precisei fazer a mais é adicionar algumas configurações nas minhas requisições.
`
const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        };
`
precisei adicionar esse json como configuração nas minhas requisições. Ele é responsavel por dizer como é o conteúdo da minha requisição e adicionar o token que será gerado.

Esse token é adquirido quando o usuário faz o login. Nesse momento o sistema valida o usuário e caso de tudo certo ele retornará um token, que será salvo no localstorage do navegador. Esse token será enviados em todas as requisições futuras.

Fora essa parte dos token foi criado mais 2 telas, uma de login e uma de registro. Tentei pegar uma pokedex como base para criar elas.

Também foi preciso criar um arquivo de Rotas, para validar se o usuário está logado para acessar as telas que precisam de autenticação. Eu uso o próprio token para saber se o usuário está logado, pois se tiver um token gerado para ele, significa que ele já passou pelo login. Usei o `react-router-dom` para me ajudar com essas rotas, ele foi responsavel por fazer o link entre as telas com a função `Navigate`.

