.PHONY: css js server clean

css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

js:
	mkdir -p js/gsap
	cp ./node_modules/gsap/src/uncompressed/TweenMax.js js/gsap/
	mkdir -p js/gsap/plugins
	cp ./node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js js/gsap/plugins
	mkdir -p js/scrollmagic
	cp ./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js js/scrollmagic/
	mkdir -p js/scrollmagic/plugins
	cp ./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js js/scrollmagic/plugins/
	cp ./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js js/scrollmagic/plugins/

server:
	./node_modules/.bin/browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

clean:
	rm -r bundle