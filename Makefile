dist = dist
manifest = manifests/chrome.json

extension:
	rm -rf $(dist)
	mkdir -p $(dist)
	cp $(manifest) $(dist)/manifest.json
	npm run build --prefix popup
	cp -R popup/public $(dist)/popup
	npm run build --prefix service-worker