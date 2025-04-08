# Imagem base
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante do projeto
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
