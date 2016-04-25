.PHONY: css server clean

css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

server:
	./node_modules/.bin/browser-sync start --server --files='index.html,bundle/app.css'

clean:
	rm -r bundle
