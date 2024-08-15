setup: venv install

upgrade: install

venv:
	@echo "Creating venv..."
	poetry env use python

install: install_packages

install_packages:
	@echo "Installing dependencies..."
	poetry lock --no-update
	poetry install

export_requirements:
	@echo "Exporting requirements..."
	poetry export --without-hashes -f requirements.txt --output requirements.txt