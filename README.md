# Lodash vs. native numbers by Björn Ruberg

This little project builds several bundles of code doing some mapping operations. The bundles are gzipped to compare the code weight and output their runtime to compare their performance.

For direct comparission this versions are build:

-   Array.map()
-   Array.map() but including \_.map()
-   \_.map() running with a function iterator
-   \_.map() running with a string iterator

Additionally there are two files just for size comparission to measure how much \_.map() increases code weight when bundled added to bundle already containing some lodash functions
