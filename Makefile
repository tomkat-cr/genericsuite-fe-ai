# .DEFAULT_GOAL := local
# .PHONY: tests
SHELL := /bin/bash

# General Commands
help:
	cat Makefile

install:
	npm install

update:
	npm update
	npm audit fix

lock:
	npm install --package-lock-only

build-dev:
	npm run build

build-prod:
	npm run build-prod

build: build-dev

dev:
	npm install --dev

clean:
	npm --rm

fresh: clean install

# Development Commands
test-dev:
	npm run test-dev

test:
	npm test

test-run-build:
	. node_modules/genericsuite/scripts/build_prod_test.sh
	. node_modules/genericsuite/scripts/build_prod_test.sh restore
 
test-run-build-restore:
	. node_modules/genericsuite/scripts/build_prod_test.sh restore

eject-dev:
	npm run eject-dev

config:
	sh node_modules/genericsuite/scripts/change_env_be_endpoint.sh dev

config_qa:
	sh node_modules/genericsuite/scripts/change_env_be_endpoint.sh qa

config_demo:
	sh node_modules/genericsuite/scripts/change_env_be_endpoint.sh demo

deploy: config
	sh node_modules/genericsuite/scripts/aws_deploy_to_s3.sh

deploy_qa: config_qa
	sh node_modules/genericsuite/scripts/aws_deploy_to_s3.sh

deploy_demo: config_demo
	sh node_modules/genericsuite/scripts/aws_deploy_to_s3.sh

run: config
	sh node_modules/genericsuite/scripts/run_app_frontend.sh dev

run_qa: config_qa
	sh node_modules/genericsuite/scripts/run_app_frontend.sh qa

server: run
start: run
local: run

run_prod: build-prod
	# sh node_modules/genericsuite/scripts/run_app_frontend.sh prod
	npm start

tailwind:
	npx @tailwindcss/cli -i ./src/input.css -o ./public/output.css --watch

add_submodules:
	sh node_modules/genericsuite/scripts/add_github_submodules.sh

create_ssl_certs:
	sh node_modules/genericsuite/scripts/create_ssl_certs.sh

## NPM scripts library

config_lib:
	sh node_modules/genericsuite/scripts/change_env_be_endpoint.sh dev

run_lib: config_lib
	sh node_modules/genericsuite/scripts/run_app_frontend.sh dev

pre-publish:
	# sh node_modules/genericsuite/scripts/npm_publish.sh pre-publish
	npm run test
	npm install --package-lock-only
	npm run build

publish: pre-publish
	# sh node_modules/genericsuite/scripts/npm_publish.sh publish
	echo "Press Enter to publish, Ctrl-C to stop"
	read answer
	npm publish --access=public
