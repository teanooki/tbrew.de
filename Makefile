include .env
export $(set -a ; . .env ; set +a)

.PHONY: all dependencies build run stop logs clean

all: build run

dependencies:
	@echo "Checking Bootstrap..."
	@if [ ! -d vendor/bootstrap ]; then \
		echo "Cloning Bootstrap ${BOOTSTRAP_VERSION}..."; \
		mkdir -p vendor; \
		git clone --single-branch -b ${BOOTSTRAP_VERSION} --depth 1 https://github.com/twbs/bootstrap.git vendor/bootstrap; \
	else \
		echo "Bootstrap already present."; \
	fi
	@echo "Checking jquery..."
	@if [ ! -d vendor/jquery ]; then \
		echo "Cloning jquery ${JQUERY_VERSION}..."; \
		mkdir -p vendor; \
		git clone --single-branch -b ${JQUERY_VERSION} --depth 1 https://github.com/jquery/jquery.git vendor/jquery; \
	else \
		echo "Jquery already present."; \
	fi
build: dependencies
	@echo "Building image $(APP_NAME)"
	docker compose build

run:
	@echo "Starting container $(APP_NAME) on port $(PORT)"
	docker compose up

stop:
	docker compose down

logs:
	docker compose logs -f

clean:
	@echo "Delete docker image and volumes"
	docker compose down --rmi all --volumes --remove-orphans
	docker compose rm -f -v
