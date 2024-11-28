init: copy-env

copy-env:
	@ cp ./view/.env.example ./view/.env

build-dev:
	@docker compose build

clean-build-dev:
	@docker compose build --no-cache

up-dev:
	@docker compose up -d

clean-up-dev: clean-build-dev up-dev

down-dev:
	@docker compose down

build-prod:
	@docker compose -f docker-compose.prod.yml build

clean-build-prod:
	@docker compose -f docker-compose.prod.yml build --no-cache

up-prod:
	@docker compose -f docker-compose.prod.yml up -d

clean-up-prod: clean-build-prod up-prod

clean-restart-prod: down-prod up-prod

down-prod:
	@docker compose -f docker-compose.prod.yml down

install-psql-client:
	@echo "Updating package lists..."
	@sudo apt update
	@echo "Adding PostgreSQL repository..."
	@sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $$(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
	@echo "Importing PostgreSQL signing key..."
	@curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/postgresql.gpg
	@echo "Updating package lists again..."
	@sudo apt update
	@echo "Installing PostgreSQL client..."
	@sudo apt install -y postgresql-client
	@echo "Checking installed PostgreSQL client version..."
	@psql --version
