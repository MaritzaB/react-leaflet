up:
	docker-compose up -d
	docker-compose exec frontend sh -c "cd mapa && make deploy && bash"

clean:
	npm prune
	sudo rm --recursive --force app/mapa/dist
	sudo rm --recursive --force app/mapa/node_modules

down:
	docker-compose down
	clean
