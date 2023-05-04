run:
	docker-compose run frontend bash

clean:
	npm prune
	rm --recursive --force app/mapa/dist
	rm --recursive --force app/mapa/node_modules
