.PHONY: css server clean
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

clean:
	rm -r bundle