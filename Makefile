.PHONY = dev server run

server:
	cd api && node db-init.js && node server.js

dev:
	npm run dev

run:
	cd api && node db-init.js && node server.js & npm run dev
