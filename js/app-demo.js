const searchClient = algoliasearch(
	'latency',
	'6be0576ff61c053d5f9a3225e2a90f76'
);

const search = instantsearch({
	indexName: 'instant_search',
	searchClient,
});

search.addWidgets([
	instantsearch.widgets.searchBox({
		container: '#searchbox'
	})
]);

search.addWidgets([
	instantsearch.widgets.currentRefinements({
		container: '#current-refinements',
	}),

	instantsearch.widgets.refinementList({
		container: '#brand-list',
		attribute: 'brand',
	})
]);

search.addWidgets([
	instantsearch.widgets.hits({
		container: '#hits',
		hitsPerPage: 10,
		templates: {
			item: document.getElementById('hit-template').innerHTML,
			empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
		}
	})
]);

search.addWidgets([
	instantsearch.widgets.pagination({
		container: '#pagination'
	})
]);


search.addWidgets([
	instantsearch.widgets.rangeSlider({
		container: '#price-refinement',
		attributeName: 'price',
		templates: {
			header: 'Price'
		},
		tooltips: {
			format: function(rawValue) {
				return '$' + Math.round(rawValue).toLocaleString();
			}
		}
	})
]);

search.start();