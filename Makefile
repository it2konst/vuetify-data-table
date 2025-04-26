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

