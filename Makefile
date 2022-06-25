start:
	docker compose up
dev:
	docker compose -f docker-compose.dev.yml up
build:
	docker compose build