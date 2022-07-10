start:
	docker compose -f docker-compose.base.yml up
dev:
	docker compose -f docker-compose.dev.yml up
build:
	docker compose -f docker-compose.dev.yml up --build -V