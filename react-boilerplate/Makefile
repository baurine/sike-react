.PHONY: all css js minify_js server clean

all:
	(make css & make js & make server & wait)

css:
	mkdir -p bundle
	./node_modules/.bin/postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

js:
	mkdir -p bundle
	./node_modules/.bin/webpack  js/index.js bundle/app.js --module-bind jsx=babel --module-bind js=babel --watch --progress -d

# minify js, user -p parameter
minify_js:
	mkdir -p bundle
	./node_modules/.bin/webpack  js/index.js bundle/app.js --module-bind jsx=babel --module-bind js=babel -p

server:
	./node_modules/.bin/browser-sync start --server --files='index.html,bundle/app.css,bundle/app.js'

clean:
	rm -r bundle