const search = instantsearch({
    indexName: 'TheAirlines',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#airlines',
        placeholder: 'Search for airlines',
        autofocus: true
    }),

    hits({
        container: '#hits',
    })
]);

search.start();