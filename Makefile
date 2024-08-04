PYTHON 		= python3			# Tested with 3.11
ENV 		= ./env

.PHONY: build
build:
	npm run build

.PHONY: run
run:
	npm run dev

.PHONY: index
index:
	python3 search_index.py

.PHONY: kill-firefox
kill-firefox:
	pkill firefox

.PHONY: test
test:
	npm run test

.PHONY: venv
venv:
	@if [ -d $(ENV) ] ; then \
		echo "venv already exists"; \
	else \
		echo "Creating venv..."; \
		$(PYTHON) -m venv $(ENV); \
		$(ENV)/bin/python3 -m pip install --upgrade pip; \
		$(ENV)/bin/python3 -m pip install -r requirements.txt; \
		echo "venv has been created at $(ENV)"; \
	fi