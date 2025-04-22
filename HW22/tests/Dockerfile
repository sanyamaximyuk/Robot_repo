FROM mcr.microsoft.com/playwright:v1.43.0-jammy
WORKDIR /usr/src/app
COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh
COPY package*.json ./

RUN npm install
COPY playwright.config.ts .
COPY pom/ ./pom/
COPY tests/ ./tests/

CMD ["/usr/local/bin/wait-for-it.sh", "app:3001", "-t", "30", "--", "npx", "playwright", "test"]