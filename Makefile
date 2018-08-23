test:
	jest --watch

lint:
	flow
	prettier-eslint --config .prettierrc.js --eslint-config-path .eslintrc.js --write  \"src/**.js\"
	flow stop

build:
	NODE_ENV=production	npx babel src -d lib 

commit:
	npx git-cz

ci:
	make lint
	jest
	make build

view-docs:
	rm -rf docs
	npx jsdoc src -d ./docs -R README.md -P package.json  -c jsdoc.config.json
	npx serve
