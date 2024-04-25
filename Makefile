.PHONY: clean build

clean:
	rm -rf _site
build:
	bundle exec github-pages build --destination _site/income-reporting-playbook
serve: build
	@echo "Starting server: http://localhost:4000/income-reporting-playbook/?secret=underconstruction"
	ruby -run -e httpd _site -p 4000
