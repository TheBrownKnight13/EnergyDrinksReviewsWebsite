document$.subscribe(function() {
    var tables = document.querySelectorAll("article table:not([class])");
    tables.forEach(function(table) {
        new Tablesort(table);

        // Add custom date parser
        Tablesort.extend('date', function(item) {
            // Match date formats like YYYY-MM-DD, MM/DD/YYYY, etc.
            return !isNaN(Date.parse(item));
        }, function(a, b) {
            return new Date(a) - new Date(b);
        });
    });
});
