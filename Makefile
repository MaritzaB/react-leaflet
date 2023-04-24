
deploy:
	docker run --rm -it -p 5173:5173 --name react_vite --volume ${PWD}/app:/app ejemplo-node bash