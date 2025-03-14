prod:
	cd docker docker compose --profile prod up --build

dev:
	cd docker && docker compose up --build


rfront:
	cd frontend && npm run dev

.PHONY: prod dev rfront
