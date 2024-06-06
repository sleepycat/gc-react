# note: never use the :latest tag in a production site
FROM caddy:2.8-alpine

WORKDIR /home/nobody
COPY --chmod=755 ./dist ./dist
USER nobody
CMD ["caddy", "file-server", "--browse", "--listen=:3000", "--root=dist"]
