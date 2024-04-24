.PHONY: clean build

clean:
	rm -rf _site
build:
	bundle exec github-pages build --destination _site/FFS-IncomeReportingToolkit
serve: build
	@echo "Starting server: http://localhost:4000/FFS-IncomeReportingToolkit/?secret=hithere"
	ruby -run -e httpd _site -p 4000
