.PHONY: build run index test

build:
	npm run build

run:
	npm run dev

index:
	python3 search_index.py

kill-firefox:
	pkill firefox

test:
	npm run test