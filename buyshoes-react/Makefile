.PHONY: all css js compile_js server clean
all:
	(make css & make js & make server & wait)

css:
	mkdir -p bundle/perfect-scrollbar
	cp ./node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.css bundle/perfect-scrollbar/
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

js:
	mkdir -p build
	./node_modules/.bin/webpack  js/app.jsx build/app.js --module-bind jsx=babel --module-bind js=babel --watch --progress

server:
	browser-sync start --server --files='index.html,bundle/app.css,build/app.js'

clean:
	rm -r bundle