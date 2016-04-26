.PHONY: css js server clean

css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

js:
	mkdir -p js
	cp ./node_modules/gsap/src/uncompressed/TweenMax.js js/

server:
	./node_modules/.bin/browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

clean:
	rm -r bundle
