.PHONY: all css js server clean

all:
	(make css & make js & make server & wait)

css:
	mkdir -p build
	./node_modules/.bin/postcss --watch --use autoprefixer --use postcss-import css/index.css --output build/bundle.css

js:
	mkdir -p build
	./node_modules/.bin/webpack  --watch --progress -d

server:
	./node_modules/.bin/browser-sync start --server --files='index.html,build/bundle.css,build/bundle.js'

clean:
	rm -r build