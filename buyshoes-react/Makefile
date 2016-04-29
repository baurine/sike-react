.PHONY: css js server clean
css:
	mkdir -p bundle/perfect-scrollbar
	cp ./node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.css bundle/perfect-scrollbar/
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

js:
	mkdir -p js/perfect-scrollbar
	cp ./node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.js ./js/perfect-scrollbar/

server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

clean:
	rm -r bundle