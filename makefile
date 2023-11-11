.PHONY: build run

build:
	python3 search.py
	npm run build

run:
	python3 search.py
	npm run dev