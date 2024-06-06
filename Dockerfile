FROM node:alpine as buildenv
COPY . .
RUN npm ci && npm run build

FROM caddy:2.8-alpine

WORKDIR /home/nobody
COPY --from=buildenv --chmod=755 ./dist ./dist
USER nobody
CMD ["caddy", "file-server", "--browse", "--listen=:3000", "--root=dist"]
