FROM node:19-slim
LABEL authors="yash chowdhari"
WORKDIR usr/app/
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]




