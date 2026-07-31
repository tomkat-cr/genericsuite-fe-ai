# .DEFAULT_GOAL := local
.PHONY: tests tailwind-build
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
	npm cache clean --force && rm -rf node_modules

fresh: clean install

# Development Commands
test-dev:
	npm run test-dev

test:
	npm test

test-run-build:
	. ./node_modules/genericsuite-fe-scripts/scripts/build_prod_test.sh
	. ./node_modules/genericsuite-fe-scripts/scripts/build_prod_test.sh restore
 
test-run-build-restore:
	. ./node_modules/genericsuite-fe-scripts/scripts/build_prod_test.sh restore

eject-dev:
	npm run eject-dev

config:
	bash ./node_modules/genericsuite-fe-scripts/scripts/change_env_be_endpoint.sh dev

config_qa:
	bash ./node_modules/genericsuite-fe-scripts/scripts/change_env_be_endpoint.sh qa

config_demo:
	bash ./node_modules/genericsuite-fe-scripts/scripts/change_env_be_endpoint.sh demo

deploy: config
	bash ./node_modules/genericsuite-fe-scripts/scripts/aws_deploy_to_s3.sh

deploy_qa: config_qa
	bash ./node_modules/genericsuite-fe-scripts/scripts/aws_deploy_to_s3.sh

deploy_demo: config_demo
	bash ./node_modules/genericsuite-fe-scripts/scripts/aws_deploy_to_s3.sh

run: config
	bash ./node_modules/genericsuite-fe-scripts/scripts/run_app_frontend.sh dev

run_qa: config_qa
	bash ./node_modules/genericsuite-fe-scripts/scripts/run_app_frontend.sh qa

server: run
start: run
local: run

run_prod: build-prod
	# bash ./node_modules/genericsuite-fe-scripts/scripts/run_app_frontend.sh prod
	npm start

tailwind:
	npx @tailwindcss/cli -i ./src/input.css -o ./public/output.css --watch

tailwind-build:
	npx @tailwindcss/cli -i ./src/input.css -o ./public/output.css

add_submodules:
	bash ./node_modules/genericsuite-fe-scripts/scripts/add_github_submodules.sh

create_ssl_certs:
	bash ./node_modules/genericsuite-fe-scripts/scripts/create_ssl_certs.sh

## NPM scripts library

config_lib:
	bash ./node_modules/genericsuite-fe-scripts/scripts/change_env_be_endpoint.sh dev

run_lib: config_lib
	bash ./node_modules/genericsuite-fe-scripts/scripts/run_app_frontend.sh dev

sast-test:
	bash ./node_modules/genericsuite-fe-scripts/scripts/sast_test.sh

pre-publish: sast-test
	bash ./node_modules/genericsuite-fe-scripts/scripts/npm_publish.sh pre-publish

publish: sast-test
	#
	# To publish the package to NPMJS checking the test snapshots:
	#    make publish
	#
	# To solve the test errors when there are changes in the UI
	# not reflected in the test snapshots:
	#    UPDATE_SNAPSHOTS=1 make publish
	#
	bash ./node_modules/genericsuite-fe-scripts/scripts/npm_publish.sh publish
