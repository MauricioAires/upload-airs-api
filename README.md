<h1 align="center">
    <img src="./.github/assets/cover.jpg">
</h1>

### 🎉 Sobre o projeto

O projeto upload.airs é uma ferramenta que utiliza o ChatGPT para gerar sugestões de títulos e descrições de vídeo.

A temperatura é um parâmetro que controla o nível de criatividade da IA. Quanto maior a temperatura, mais criativas serão as sugestões, mas também menos precisas.

Por exemplo, se você tiver um vídeo sobre como consertar um carro, pode adicionar as palavras-chave "carro", "conserto" e "mecânica" para auxiliar a IA. Você pode escolher o prompt "título" para gerar sugestões de títulos ou "descrição" para gerar sugestões de descrições.

O deploy da aplicação e a criação do banco de dados postgresql foi realizado no [render.com](https://render.com/)

---

### 🛠️ Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/docs/latest/)
- [Prisma](https://www.prisma.io/docs)
- [ai](https://github.com/vercel/ai)
- [openai](https://platform.openai.com/docs/api-reference/introduction)
- [zod](https://zod.dev/)

### 🚀 Iniciando o projeto

> ✨ Para executar a aplicação completa em ambiente de desenvolvimento baixe também [upload-airs-web](https://github.com/MauricioAires/upload-airs-web)

```sh
# Clonar aplicação

$ git clone https://github.com/MauricioAires/upload-airs-api

# Acessar a aplicação
$ cd upload-airs-api

# Execute yarn para instalar as dependências
$ yarn i

# Para iniciar a aplicação
$ yarn dev

# Cadastrar exemplos de prompt
$ yarn prisma db seed

```

---

### 📝 Licença

Distribuído sob a licença MIT.
Veja [LICENSE](LICENSE) para mais informações.

---

### 👨‍💻 Autor

Feito por Mauricio Aires 👋🏽
