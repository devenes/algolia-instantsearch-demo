/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('N5OLC87R9A', '4ec613d58d623dba86b7fa0ca70cb116');

const search = instantsearch({
    indexName: 'TheAirlines',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#searchbox',
        placeholder: 'Search for products',
        autofocus: true
    })
]);

// search.addWidgets([
//     searchBox({
//         container: '#searchbox',
//     }),

//     hits({
//         container: '#hits',
//     })
// ]);

search.start();