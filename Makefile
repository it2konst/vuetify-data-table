DEF_DEV_API=https://admin.r1.robstor.com/api/
DEF_PROD_API=https://admin.r1.robstor.com/api/
DEF_DEV_WS=wss://admin.r1.robstor.com/ws/
DEF_PROD_WS=wss://admin.r1.robstor.com/ws/

DEV_API ?= $(DEF_DEV_API)
PROD_API ?= $(DEF_PROD_API)
DEV_WS ?= $(DEF_DEV_WS)
PROD_WS ?= $(DEF_PROD_WS)

build: configure
	pnpm run build

setup: configure
	pnpm install

dev: configure
	pnpm run dev

format-check: configure
	pnpm run format-check

format-fix: configure
	pnpm run format-fix

type-check: configure
	pnpm run type-check

lint: configure
	pnpm run lint

configure:
	@echo "VITE_API_DEV_URL=$(DEV_API)" > .env
	@echo "VITE_API_PROD_URL=$(PROD_API)" >> .env
	@echo "VITE_WS_DEV_URL=$(DEV_WS)" >> .env
	@echo "VITE_WS_PROD_URL=$(PROD_WS)" >> .env
