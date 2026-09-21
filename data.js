// AlgoLadder — an independent, hand-curated DSA practice roadmap.
// Item format: [title, difficulty, id, optionalUrl]
// Without a URL the id is a LeetCode slug (https://leetcode.com/problems/<id>/). Items with a URL
// (GeeksforGeeks problems, ids start with "gfg-") link there instead.
// The id doubles as the permanent key for saved progress. Never change an existing id;
// to add problems just append rows. Every problem links out to the site that hosts it.

const E = "Easy", M = "Medium", H = "Hard";

const TRACKS = [
  { title: "Warm-Up: Numbers, Logic & Hashing", topics: [
    { name: "Number play", items: [
      ["Palindrome Number", E, "palindrome-number"], ["Fizz Buzz", E, "fizz-buzz"], ["Power of Three", E, "power-of-three"],
      ["Happy Number", E, "happy-number"], ["Plus One", E, "plus-one"], ["Excel Sheet Column Number", E, "excel-sheet-column-number"],
    ]},
    { name: "Simulation & grids", items: [
      ["Spiral Matrix II", M, "spiral-matrix-ii"], ["Diagonal Traverse", M, "diagonal-traverse"], ["Game of Life", M, "game-of-life"],
      ["Pascal's Triangle II", E, "pascals-triangle-ii"],
    ]},
    { name: "Hash maps & sets", items: [
      ["Contains Duplicate", E, "contains-duplicate"], ["Group Anagrams", M, "group-anagrams"], ["Ransom Note", E, "ransom-note"],
      ["Intersection of Two Arrays", E, "intersection-of-two-arrays"], ["First Unique Character in a String", E, "first-unique-character-in-a-string"],
    ]},
    { name: "Essential warm-ups", items: [
      ["Two Sum", E, "two-sum"], ["Valid Anagram", E, "valid-anagram"], ["Reverse Integer", M, "reverse-integer"],
      ["Roman to Integer", E, "roman-to-integer"], ["Add Digits", E, "add-digits"], ["Ugly Number", E, "ugly-number"],
      ["Missing Number", E, "missing-number"], ["Single Number", E, "single-number"], ["Majority Element", E, "majority-element"],
      ["Move Zeroes", E, "move-zeroes"], ["Valid Palindrome", E, "valid-palindrome"], ["Is Subsequence", E, "is-subsequence"],
      ["Isomorphic Strings", E, "isomorphic-strings"], ["Longest Common Prefix", E, "longest-common-prefix"], ["Climbing Stairs", E, "climbing-stairs"],
      ["Fibonacci Number", E, "fibonacci-number"],
    ]},
  ]},

  { title: "Sorting & Searching", topics: [
    { name: "Classic sorting algorithms", items: [
      ["Bubble Sort", E, "gfg-bubble-sort", "https://www.geeksforgeeks.org/problems/bubble-sort/1"], ["Selection Sort", E, "gfg-selection-sort", "https://www.geeksforgeeks.org/problems/selection-sort/1"], ["Insertion Sort", E, "gfg-insertion-sort", "https://www.geeksforgeeks.org/problems/insertion-sort/1"],
      ["Merge Sort", M, "gfg-merge-sort", "https://www.geeksforgeeks.org/problems/merge-sort/1"], ["Quick Sort", M, "gfg-quick-sort", "https://www.geeksforgeeks.org/problems/quick-sort/1"], ["Heap Sort", M, "gfg-heap-sort", "https://www.geeksforgeeks.org/problems/heap-sort/1"],
      ["Counting Sort", E, "gfg-counting-sort", "https://www.geeksforgeeks.org/problems/counting-sort/1"], ["Radix Sort", M, "gfg-radix-sort", "https://www.geeksforgeeks.org/problems/radix-sort/1"], ["Quick Sort on Linked List", M, "gfg-quick-sort-on-linked-list", "https://www.geeksforgeeks.org/problems/quick-sort-on-linked-list/1"],
      ["Sort 0s, 1s and 2s", E, "gfg-sort-an-array-of-0s-1s-and-2s", "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0"], ["Count Inversions", M, "gfg-inversion-of-array-1587115620", "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1"], ["Sort Colors", M, "sort-colors"],
      ["Kth Largest Element in an Array", M, "kth-largest-element-in-an-array"], ["Sort List", M, "sort-list"], ["Top K Frequent Elements", M, "top-k-frequent-elements"],
      ["Sort Characters By Frequency", M, "sort-characters-by-frequency"], ["Maximum Gap", M, "maximum-gap"], ["Height Checker", E, "height-checker"],
      ["Reverse Pairs", H, "reverse-pairs"], ["Merge Intervals", M, "merge-intervals"], ["Custom Sort String", M, "custom-sort-string"],
      ["Minimum Absolute Difference", E, "minimum-absolute-difference"], ["Array Partition", E, "array-partition"],
    ]},
    { name: "Sorting essentials", items: [
      ["Sort an Array", M, "sort-an-array"], ["Merge Sorted Array", E, "merge-sorted-array"], ["Sort Array By Parity", E, "sort-array-by-parity"],
      ["Relative Sort Array", E, "relative-sort-array"], ["Largest Number", M, "largest-number"], ["Wiggle Sort II", M, "wiggle-sort-ii"],
    ]},
    { name: "Binary search on sorted data", items: [
      ["Binary Search", E, "binary-search"], ["Search Insert Position", E, "search-insert-position"], ["Sqrt(x)", E, "sqrtx"],
      ["First Bad Version", E, "first-bad-version"], ["Peak Index in a Mountain Array", M, "peak-index-in-a-mountain-array"], ["Find Minimum in Rotated Sorted Array II", H, "find-minimum-in-rotated-sorted-array-ii"],
      ["Time Based Key-Value Store", M, "time-based-key-value-store"], ["Successful Pairs of Spells and Potions", M, "successful-pairs-of-spells-and-potions"],
    ]},
    { name: "Binary search on the answer", items: [
      ["Minimum Speed to Arrive on Time", M, "minimum-speed-to-arrive-on-time"], ["Magnetic Force Between Two Balls", M, "magnetic-force-between-two-balls"], ["Maximum Candies Allocated to K Children", M, "maximum-candies-allocated-to-k-children"],
      ["Minimum Time to Complete Trips", M, "minimum-time-to-complete-trips"], ["Minimized Maximum of Products Distributed to Any Store", M, "minimized-maximum-of-products-distributed-to-any-store"], ["Find K-th Smallest Pair Distance", H, "find-k-th-smallest-pair-distance"],
    ]},
    { name: "Searching in matrices", items: [
      ["Kth Smallest Element in a Sorted Matrix", M, "kth-smallest-element-in-a-sorted-matrix"], ["Count Negative Numbers in a Sorted Matrix", E, "count-negative-numbers-in-a-sorted-matrix"], ["Find K Closest Elements", M, "find-k-closest-elements"],
    ]},
    { name: "Binary search classics", items: [
      ["Search in Rotated Sorted Array", M, "search-in-rotated-sorted-array"], ["Search in Rotated Sorted Array II", M, "search-in-rotated-sorted-array-ii"], ["Find First and Last Position of Element in Sorted Array", M, "find-first-and-last-position-of-element-in-sorted-array"],
      ["Find Peak Element", M, "find-peak-element"], ["Find Minimum in Rotated Sorted Array", M, "find-minimum-in-rotated-sorted-array"], ["Single Element in a Sorted Array", M, "single-element-in-a-sorted-array"],
      ["Search a 2D Matrix", M, "search-a-2d-matrix"], ["Search a 2D Matrix II", M, "search-a-2d-matrix-ii"], ["Kth Missing Positive Number", E, "kth-missing-positive-number"],
      ["Koko Eating Bananas", M, "koko-eating-bananas"], ["Capacity To Ship Packages Within D Days", M, "capacity-to-ship-packages-within-d-days"], ["Split Array Largest Sum", H, "split-array-largest-sum"],
      ["Median of Two Sorted Arrays", H, "median-of-two-sorted-arrays"], ["Guess Number Higher or Lower", E, "guess-number-higher-or-lower"], ["Valid Perfect Square", E, "valid-perfect-square"],
      ["Arranging Coins", E, "arranging-coins"], ["Minimum Number of Days to Make m Bouquets", M, "minimum-number-of-days-to-make-m-bouquets"], ["Find Smallest Letter Greater Than Target", E, "find-smallest-letter-greater-than-target"],
      ["Aggressive Cows", H, "gfg-aggressive-cows", "https://www.geeksforgeeks.org/problems/aggressive-cows/1"], ["Allocate Minimum Pages", M, "gfg-allocate-minimum-number-of-pages0937", "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1"], ["First Occurrence in Sorted", E, "gfg-binary-search-1587115620", "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1"],
      ["K-th of Two Sorted Arrays", M, "gfg-k-th-element-of-two-sorted-array1317", "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1"], ["Square Root", E, "gfg-square-root", "https://www.geeksforgeeks.org/problems/square-root/1"], ["Row with Max 1s in Rowwise Sorted", M, "gfg-row-with-max-1s0023", "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1"],
      ["Kth Smallest Number in Multiplication Table", H, "gfg-kth-smallest-number-in-multiplication-table", "https://www.geeksforgeeks.org/problems/kth-smallest-number-in-multiplication-table/1"], ["Floor in Sorted Array", E, "gfg-floor-in-a-sorted-array-1587115620", "https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1"], ["Floor and Ceil in Unsorted", M, "gfg-ceil-the-floor2802", "https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1"],
      ["Find Kth Rotation", M, "gfg-rotation4723", "https://www.geeksforgeeks.org/problems/rotation4723/1"], ["Number of Occurrence", E, "gfg-number-of-occurrence2259", "https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1"],
    ]},
  ]},

  { title: "Arrays, Prefix Sums & Intervals", topics: [
    { name: "Array fundamentals", items: [
      ["Running Sum of 1d Array", E, "running-sum-of-1d-array"], ["Shuffle the Array", E, "shuffle-the-array"], ["Find All Numbers Disappeared in an Array", E, "find-all-numbers-disappeared-in-an-array"],
      ["Squares of a Sorted Array", E, "squares-of-a-sorted-array"], ["Product of Array Except Self", M, "product-of-array-except-self"], ["Valid Sudoku", M, "valid-sudoku"],
      ["Transpose Matrix", E, "transpose-matrix"],
    ]},
    { name: "Prefix sums & subarray counting", items: [
      ["Range Sum Query - Immutable", E, "range-sum-query-immutable"], ["Continuous Subarray Sum", M, "continuous-subarray-sum"], ["Subarray Sums Divisible by K", M, "subarray-sums-divisible-by-k"],
      ["Contiguous Array", M, "contiguous-array"],
    ]},
    { name: "Intervals", items: [
      ["Summary Ranges", E, "summary-ranges"], ["Interval List Intersections", M, "interval-list-intersections"], ["Minimum Number of Arrows to Burst Balloons", M, "minimum-number-of-arrows-to-burst-balloons"],
      ["My Calendar I", M, "my-calendar-i"], ["Remove Covered Intervals", M, "remove-covered-intervals"], ["Car Pooling", M, "car-pooling"],
    ]},
    { name: "Tricky array puzzles", items: [
      ["Find the Duplicate Number", M, "find-the-duplicate-number"], ["First Missing Positive", H, "first-missing-positive"], ["Count of Range Sum", H, "count-of-range-sum"],
    ]},
    { name: "Array classics", items: [
      ["Best Time to Buy and Sell Stock", E, "best-time-to-buy-and-sell-stock"], ["Best Time to Buy and Sell Stock II", M, "best-time-to-buy-and-sell-stock-ii"], ["Maximum Subarray", M, "maximum-subarray"],
      ["Maximum Product Subarray", M, "maximum-product-subarray"], ["Remove Duplicates from Sorted Array", E, "remove-duplicates-from-sorted-array"], ["Remove Duplicates from Sorted Array II", M, "remove-duplicates-from-sorted-array-ii"],
      ["Rotate Array", M, "rotate-array"], ["Next Permutation", M, "next-permutation"], ["Set Matrix Zeroes", M, "set-matrix-zeroes"],
      ["Rotate Image", M, "rotate-image"], ["Spiral Matrix", M, "spiral-matrix"], ["Pascal's Triangle", E, "pascals-triangle"],
      ["Longest Consecutive Sequence", M, "longest-consecutive-sequence"], ["Subarray Sum Equals K", M, "subarray-sum-equals-k"], ["Jump Game", M, "jump-game"],
      ["Jump Game II", M, "jump-game-ii"], ["Find All Duplicates in an Array", M, "find-all-duplicates-in-an-array"], ["Majority Element II", M, "majority-element-ii"],
      ["Insert Interval", M, "insert-interval"], ["3Sum", M, "3sum"], ["4Sum", M, "4sum"],
      ["Maximum Sum Circular Subarray", M, "maximum-sum-circular-subarray"], ["Kadane's Algorithm", M, "gfg-kadanes-algorithm-1587115620", "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1"], ["Second Largest", E, "gfg-second-largest3735", "https://www.geeksforgeeks.org/problems/second-largest3735/1"],
      ["Largest in Array", E, "gfg-largest-element-in-array4009", "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"], ["Missing in Array", E, "gfg-missing-number-in-array1416", "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1"], ["Array Leaders", M, "gfg-leaders-in-an-array-1587115620", "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1"],
      ["Equilibrium Point", E, "gfg-equilibrium-point-1587115620", "https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1"], ["Reverse Array", E, "gfg-reverse-an-array", "https://www.geeksforgeeks.org/problems/reverse-an-array/1"], ["Rotate Array", E, "gfg-rotate-array-by-n-elements-1587115621", "https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1"],
      ["Indexes of Subarray Sum", M, "gfg-subarray-with-given-sum-1587115621", "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"], ["Maximum Index", M, "gfg-maximum-index-1587115620", "https://www.geeksforgeeks.org/problems/maximum-index-1587115620/1"], ["Array Subset", E, "gfg-array-subset-of-another-array2317", "https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1"],
      ["Longest Subarray with Sum K", M, "gfg-longest-sub-array-with-sum-k0809", "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1"], ["Minimize the Heights", M, "gfg-minimize-the-heights3351", "https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1"], ["Kth Smallest", M, "gfg-kth-smallest-element5635", "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1"],
      ["Chocolate Distribution Problem", E, "gfg-chocolate-distribution-problem3825", "https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1"],
    ]},
  ]},

  { title: "Two Pointers & Windows", topics: [
    { name: "Two pointers", items: [
      ["Valid Palindrome II", E, "valid-palindrome-ii"], ["Two Sum II - Input Array Is Sorted", M, "two-sum-ii-input-array-is-sorted"], ["Container With Most Water", M, "container-with-most-water"],
      ["Remove Element", E, "remove-element"], ["Boats to Save People", M, "boats-to-save-people"], ["3Sum Closest", M, "3sum-closest"],
    ]},
    { name: "Fixed & variable windows", items: [
      ["Maximum Average Subarray I", E, "maximum-average-subarray-i"], ["Permutation in String", M, "permutation-in-string"], ["Find All Anagrams in a String", M, "find-all-anagrams-in-a-string"],
      ["Minimum Size Subarray Sum", M, "minimum-size-subarray-sum"], ["Longest Turbulent Subarray", M, "longest-turbulent-subarray"], ["Grumpy Bookstore Owner", M, "grumpy-bookstore-owner"],
      ["Get Equal Substrings Within Budget", M, "get-equal-substrings-within-budget"],
    ]},
    { name: "Window challenges", items: [
      ["Frequency of the Most Frequent Element", M, "frequency-of-the-most-frequent-element"], ["Minimum Operations to Reduce X to Zero", M, "minimum-operations-to-reduce-x-to-zero"], ["Substring with Concatenation of All Words", H, "substring-with-concatenation-of-all-words"],
    ]},
    { name: "Pointer & window classics", items: [
      ["Trapping Rain Water", H, "trapping-rain-water"], ["Longest Substring Without Repeating Characters", M, "longest-substring-without-repeating-characters"], ["Longest Repeating Character Replacement", M, "longest-repeating-character-replacement"],
      ["Minimum Window Substring", H, "minimum-window-substring"], ["Sliding Window Maximum", H, "sliding-window-maximum"], ["Max Consecutive Ones III", M, "max-consecutive-ones-iii"],
      ["Fruit Into Baskets", M, "fruit-into-baskets"], ["Subarray Product Less Than K", M, "subarray-product-less-than-k"], ["Longest Subarray of 1's After Deleting One Element", M, "longest-subarray-of-1s-after-deleting-one-element"],
      ["Binary Subarrays With Sum", M, "binary-subarrays-with-sum"], ["Count Number of Nice Subarrays", M, "count-number-of-nice-subarrays"], ["Subarrays with K Different Integers", H, "subarrays-with-k-different-integers"],
    ]},
  ]},

  { title: "Working with Strings", topics: [
    { name: "Everyday string handling", items: [
      ["Reverse String II", E, "reverse-string-ii"], ["Length of Last Word", E, "length-of-last-word"], ["Detect Capital", E, "detect-capital"],
      ["Add Binary", E, "add-binary"], ["Multiply Strings", M, "multiply-strings"], ["Count and Say", M, "count-and-say"],
      ["Zigzag Conversion", M, "zigzag-conversion"],
    ]},
    { name: "Patterns & palindromes", items: [
      ["Repeated Substring Pattern", E, "repeated-substring-pattern"], ["Repeated String Match", M, "repeated-string-match"], ["Palindromic Substrings", M, "palindromic-substrings"],
      ["Decode String", M, "decode-string"], ["Text Justification", H, "text-justification"],
    ]},
    { name: "String classics", items: [
      ["Longest Palindromic Substring", M, "longest-palindromic-substring"], ["Reverse Words in a String", M, "reverse-words-in-a-string"], ["String to Integer (atoi)", M, "string-to-integer-atoi"],
      ["Find the Index of the First Occurrence in a String", E, "find-the-index-of-the-first-occurrence-in-a-string"], ["Valid Parentheses", E, "valid-parentheses"], ["Add Strings", E, "add-strings"],
      ["Compare Version Numbers", M, "compare-version-numbers"], ["String Compression", M, "string-compression"], ["Longest Common Subsequence", M, "longest-common-subsequence"],
      ["Edit Distance", M, "edit-distance"], ["Rotate String", E, "rotate-string"], ["Reverse Vowels of a String", E, "reverse-vowels-of-a-string"],
      ["Word Pattern", E, "word-pattern"], ["Excel Sheet Column Title", E, "excel-sheet-column-title"], ["Longest Palindrome in String", M, "gfg-longest-palindrome-in-a-string3411", "https://www.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1"],
      ["Implement Atoi", M, "gfg-implement-atoi", "https://www.geeksforgeeks.org/problems/implement-atoi/1"], ["Anagram", E, "gfg-anagram-1587115620", "https://www.geeksforgeeks.org/problems/anagram-1587115620/1"], ["Reverse Words", E, "gfg-reverse-words-in-a-given-string5459", "https://www.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1"],
      ["Longest Prefix Suffix", H, "gfg-longest-prefix-suffix2527", "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1"], ["Search Pattern", E, "gfg-search-pattern0205", "https://www.geeksforgeeks.org/problems/search-pattern0205/1"], ["String Duplicates Removal", E, "gfg-remove-duplicates3034", "https://www.geeksforgeeks.org/problems/remove-duplicates3034/1"],
      ["Distinct Permutations of a String", M, "gfg-permutations-of-a-given-string2041", "https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1"],
    ]},
  ]},

  { title: "Linked Structures", topics: [
    { name: "Singly linked lists", items: [
      ["Merge Two Sorted Lists", E, "merge-two-sorted-lists"], ["Remove Duplicates from Sorted List", E, "remove-duplicates-from-sorted-list"], ["Remove Linked List Elements", E, "remove-linked-list-elements"],
      ["Swap Nodes in Pairs", M, "swap-nodes-in-pairs"], ["Reorder List", M, "reorder-list"], ["Partition List", M, "partition-list"],
      ["Reverse Linked List II", M, "reverse-linked-list-ii"], ["Swapping Nodes in a Linked List", M, "swapping-nodes-in-a-linked-list"], ["Maximum Twin Sum of a Linked List", M, "maximum-twin-sum-of-a-linked-list"],
      ["Split Linked List in Parts", M, "split-linked-list-in-parts"], ["Insertion Sort List", M, "insertion-sort-list"],
    ]},
    { name: "Doubly linked & design", items: [
      ["Design Linked List", M, "design-linked-list"], ["Design Browser History", M, "design-browser-history"], ["Flatten a Multilevel Doubly Linked List", M, "flatten-a-multilevel-doubly-linked-list"],
    ]},
    { name: "Linked list classics", items: [
      ["Reverse Linked List", E, "reverse-linked-list"], ["Middle of the Linked List", E, "middle-of-the-linked-list"], ["Linked List Cycle", E, "linked-list-cycle"],
      ["Linked List Cycle II", M, "linked-list-cycle-ii"], ["Merge k Sorted Lists", H, "merge-k-sorted-lists"], ["Remove Nth Node From End of List", M, "remove-nth-node-from-end-of-list"],
      ["Palindrome Linked List", E, "palindrome-linked-list"], ["Intersection of Two Linked Lists", E, "intersection-of-two-linked-lists"], ["Add Two Numbers", M, "add-two-numbers"],
      ["Add Two Numbers II", M, "add-two-numbers-ii"], ["Copy List with Random Pointer", M, "copy-list-with-random-pointer"], ["LRU Cache", M, "lru-cache"],
      ["LFU Cache", H, "lfu-cache"], ["Reverse Nodes in k-Group", H, "reverse-nodes-in-k-group"], ["Rotate List", M, "rotate-list"],
      ["Odd Even Linked List", M, "odd-even-linked-list"], ["Remove Duplicates from Sorted List II", M, "remove-duplicates-from-sorted-list-ii"], ["Delete Node in a Linked List", M, "delete-node-in-a-linked-list"],
      ["Reverse a Linked List", E, "gfg-reverse-a-linked-list", "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1"], ["Detect Loop in Linked List", M, "gfg-detect-loop-in-linked-list", "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1"], ["Cycle Length in Linked List", M, "gfg-find-length-of-loop", "https://www.geeksforgeeks.org/problems/find-length-of-loop/1"],
      ["Remove Cycle in Linked List", M, "gfg-remove-loop-in-linked-list", "https://www.geeksforgeeks.org/problems/remove-loop-in-linked-list/1"], ["Middle of Linked List", E, "gfg-finding-middle-element-in-a-linked-list", "https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1"], ["Delete Middle of Linked List", E, "gfg-delete-middle-of-linked-list", "https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/1"],
      ["Intersection in Y Shaped Lists", M, "gfg-intersection-point-in-y-shapped-linked-lists", "https://www.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1"], ["Add Number Linked Lists", M, "gfg-add-two-numbers-represented-by-linked-lists", "https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1"], ["Kth from End of Linked List", E, "gfg-nth-node-from-end-of-linked-list", "https://www.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1"],
      ["Reverse a Doubly Linked List", E, "gfg-reverse-a-doubly-linked-list", "https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1"], ["Delete in a Doubly Linked List", E, "gfg-delete-node-in-doubly-linked-list", "https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1"], ["Insert in a Sorted List", E, "gfg-insert-in-a-sorted-list", "https://www.geeksforgeeks.org/problems/insert-in-a-sorted-list/1"],
      ["Clone List with Next and Random", M, "gfg-clone-a-linked-list-with-next-and-random-pointer", "https://www.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1"], ["Flattening a Linked List", M, "gfg-flattening-a-linked-list", "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1"], ["Segregate Evens and Odds in a Linked List", E, "gfg-segregate-even-and-odd-nodes-in-a-linked-list5035", "https://www.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list5035/1"],
      ["Linked List Insertion At Beginning", E, "gfg-linked-list-insertion-at-beginning", "https://www.geeksforgeeks.org/problems/linked-list-insertion-at-beginning/1"], ["Linked List Delete at Position", E, "gfg-delete-a-node-in-single-linked-list", "https://www.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1"], ["Merge two sorted linked lists", E, "gfg-merge-two-sorted-linked-lists", "https://www.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1"],
      ["Palindrome Linked List", E, "gfg-check-if-linked-list-is-pallindrome", "https://www.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1"],
    ]},
  ]},

  { title: "Recursion & Backtracking", topics: [
    { name: "Thinking recursively", items: [
      ["Reverse String", E, "reverse-string"], ["K-th Symbol in Grammar", M, "k-th-symbol-in-grammar"], ["Different Ways to Add Parentheses", M, "different-ways-to-add-parentheses"],
      ["Unique Binary Search Trees II", M, "unique-binary-search-trees-ii"], ["Super Pow", M, "super-pow"],
    ]},
    { name: "Choose / explore / undo", items: [
      ["Combinations", M, "combinations"], ["Permutations II", M, "permutations-ii"], ["Letter Case Permutation", M, "letter-case-permutation"],
      ["Restore IP Addresses", M, "restore-ip-addresses"], ["Beautiful Arrangement", M, "beautiful-arrangement"], ["Path with Maximum Gold", M, "path-with-maximum-gold"],
      ["Matchsticks to Square", M, "matchsticks-to-square"],
    ]},
    { name: "Backtracking challenges", items: [
      ["Partition to K Equal Sum Subsets", M, "partition-to-k-equal-sum-subsets"], ["N-Queens II", H, "n-queens-ii"], ["Word Search II", H, "word-search-ii"],
      ["Additive Number", M, "additive-number"],
    ]},
    { name: "Recursion & backtracking classics", items: [
      ["Subsets", M, "subsets"], ["Subsets II", M, "subsets-ii"], ["Permutations", M, "permutations"],
      ["Combination Sum", M, "combination-sum"], ["Combination Sum II", M, "combination-sum-ii"], ["Combination Sum III", M, "combination-sum-iii"],
      ["Generate Parentheses", M, "generate-parentheses"], ["N-Queens", H, "n-queens"], ["Sudoku Solver", H, "sudoku-solver"],
      ["Word Search", M, "word-search"], ["Palindrome Partitioning", M, "palindrome-partitioning"], ["Letter Combinations of a Phone Number", M, "letter-combinations-of-a-phone-number"],
      ["Unique Paths III", H, "unique-paths-iii"], ["Pow(x, n)", M, "powx-n"], ["Binary Watch", E, "binary-watch"],
      ["Split a String Into the Max Number of Unique Substrings", M, "split-a-string-into-the-max-number-of-unique-substrings"], ["The k-th Lexicographical String of All Happy Strings of Length n", M, "the-k-th-lexicographical-string-of-all-happy-strings-of-length-n"], ["Tower Of Hanoi", M, "gfg-tower-of-hanoi-1587115621", "https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1"],
      ["Rat in a Maze", M, "gfg-rat-in-a-maze-problem", "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"], ["M-Coloring Problem", M, "gfg-m-coloring-problem-1587115620", "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1"], ["Subsets", M, "gfg-subsets-1613027340", "https://www.geeksforgeeks.org/problems/subsets-1613027340/1"],
      ["Generate all binary strings", E, "gfg-generate-all-binary-strings", "https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1"], ["Hamiltonian Path", M, "gfg-hamiltonian-path2522", "https://www.geeksforgeeks.org/problems/hamiltonian-path2522/1"], ["Josephus problem", M, "gfg-josephus-problem", "https://www.geeksforgeeks.org/problems/josephus-problem/1"],
      ["All Subsequences of String", M, "gfg-power-set4302", "https://www.geeksforgeeks.org/problems/power-set4302/1"], ["Subset Sums", M, "gfg-subset-sums2234", "https://www.geeksforgeeks.org/problems/subset-sums2234/1"],
    ]},
  ]},

  { title: "Bits & Number Theory", topics: [
    { name: "Bit tricks", items: [
      ["Reverse Bits", E, "reverse-bits"], ["Counting Bits", E, "counting-bits"], ["Hamming Distance", E, "hamming-distance"],
      ["Find the Difference", E, "find-the-difference"], ["Sum of Two Integers", M, "sum-of-two-integers"], ["Bitwise AND of Numbers Range", M, "bitwise-and-of-numbers-range"],
      ["Gray Code", M, "gray-code"], ["Total Hamming Distance", M, "total-hamming-distance"], ["Maximum Product of Word Lengths", M, "maximum-product-of-word-lengths"],
      ["XOR Queries of a Subarray", M, "xor-queries-of-a-subarray"],
    ]},
    { name: "Number theory & math", items: [
      ["Greatest Common Divisor of Strings", E, "greatest-common-divisor-of-strings"], ["Factorial Trailing Zeroes", M, "factorial-trailing-zeroes"], ["Integer to Roman", M, "integer-to-roman"],
      ["Rectangle Area", M, "rectangle-area"], ["Ugly Number II", M, "ugly-number-ii"],
    ]},
    { name: "Bit & math classics", items: [
      ["Single Number II", M, "single-number-ii"], ["Single Number III", M, "single-number-iii"], ["Number of 1 Bits", E, "number-of-1-bits"],
      ["Power of Two", E, "power-of-two"], ["Power of Four", E, "power-of-four"], ["Maximum XOR of Two Numbers in an Array", M, "maximum-xor-of-two-numbers-in-an-array"],
      ["Divide Two Integers", M, "divide-two-integers"], ["Count Primes", M, "count-primes"], ["Super Ugly Number", M, "super-ugly-number"],
      ["Convert a Number to Hexadecimal", E, "convert-a-number-to-hexadecimal"], ["Complement of Base 10 Integer", E, "complement-of-base-10-integer"], ["Number Complement", E, "number-complement"],
      ["Binary Number with Alternating Bits", E, "binary-number-with-alternating-bits"], ["Minimum Flips to Make a OR b Equal to c", M, "minimum-flips-to-make-a-or-b-equal-to-c"], ["Divisor Game", E, "divisor-game"],
      ["Check K-th Bit", E, "gfg-check-whether-k-th-bit-is-set-or-not-1587115620", "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1"], ["Set kth Bit", E, "gfg-set-kth-bit3724", "https://www.geeksforgeeks.org/problems/set-kth-bit3724/1"], ["Swap Two Numbers", E, "gfg-swap-two-numbers3844", "https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1"],
      ["Power of 2", E, "gfg-power-of-2-1587115620", "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1"], ["Count Set Bits in 1 to n", M, "gfg-count-total-set-bits-1587115620", "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1"], ["First Set Bit", E, "gfg-find-first-set-bit-1587115620", "https://www.geeksforgeeks.org/problems/find-first-set-bit-1587115620/1"],
      ["GCD of Two", E, "gfg-gcd-of-two-numbers3459", "https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1"], ["LCM And GCD", E, "gfg-lcm-and-gcd4516", "https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1"], ["Sieve of Eratosthenes", M, "gfg-sieve-of-eratosthenes5242", "https://www.geeksforgeeks.org/problems/sieve-of-eratosthenes5242/1"],
      ["Unique Prime Factors in Sorted Order", E, "gfg-prime-factors5052", "https://www.geeksforgeeks.org/problems/prime-factors5052/1"], ["Nth Fibonacci Number", E, "gfg-nth-fibonacci-number1335", "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1"], ["Armstrong Numbers", E, "gfg-armstrong-numbers2727", "https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1"],
      ["Modular Exponentiation", M, "gfg-modular-exponentiation-for-large-numbers5537", "https://www.geeksforgeeks.org/problems/modular-exponentiation-for-large-numbers5537/1"], ["Digits in N that Divide it", E, "gfg-count-digits5716", "https://www.geeksforgeeks.org/problems/count-digits5716/1"],
    ]},
  ]},

  { title: "Stacks, Queues & Monotonic Patterns", topics: [
    { name: "Stack workouts", items: [
      ["Baseball Game", E, "baseball-game"], ["Backspace String Compare", E, "backspace-string-compare"], ["Remove All Adjacent Duplicates in String", E, "remove-all-adjacent-duplicates-in-string"],
      ["Simplify Path", M, "simplify-path"], ["Basic Calculator II", M, "basic-calculator-ii"], ["Car Fleet", M, "car-fleet"],
    ]},
    { name: "Monotonic stacks & deques", items: [
      ["Daily Temperatures", M, "daily-temperatures"], ["Next Greater Node In Linked List", M, "next-greater-node-in-linked-list"], ["132 Pattern", M, "132-pattern"],
      ["Maximum Width Ramp", M, "maximum-width-ramp"], ["Constrained Subsequence Sum", H, "constrained-subsequence-sum"], ["Shortest Subarray with Sum at Least K", H, "shortest-subarray-with-sum-at-least-k"],
    ]},
    { name: "Queues & design", items: [
      ["Number of Recent Calls", E, "number-of-recent-calls"], ["Time Needed to Buy Tickets", E, "time-needed-to-buy-tickets"], ["Design Circular Queue", M, "design-circular-queue"],
      ["Design Circular Deque", M, "design-circular-deque"],
    ]},
    { name: "Stack & queue classics", items: [
      ["Min Stack", M, "min-stack"], ["Next Greater Element I", E, "next-greater-element-i"], ["Next Greater Element II", M, "next-greater-element-ii"],
      ["Largest Rectangle in Histogram", H, "largest-rectangle-in-histogram"], ["Evaluate Reverse Polish Notation", M, "evaluate-reverse-polish-notation"], ["Implement Queue using Stacks", E, "implement-queue-using-stacks"],
      ["Implement Stack using Queues", E, "implement-stack-using-queues"], ["Online Stock Span", M, "online-stock-span"], ["Asteroid Collision", M, "asteroid-collision"],
      ["Basic Calculator", H, "basic-calculator"], ["Remove K Digits", M, "remove-k-digits"], ["Maximal Rectangle", H, "maximal-rectangle"],
      ["Remove Duplicate Letters", M, "remove-duplicate-letters"], ["Sum of Subarray Minimums", M, "sum-of-subarray-minimums"], ["Score of Parentheses", M, "score-of-parentheses"],
      ["Longest Valid Parentheses", H, "longest-valid-parentheses"], ["Validate Stack Sequences", M, "validate-stack-sequences"], ["Implement Stack using Array", E, "gfg-implement-stack-using-array", "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1"],
      ["Queue Using Array", E, "gfg-implement-queue-using-array", "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1"], ["Stack using Linked List", E, "gfg-implement-stack-using-linked-list", "https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1"], ["Queue using Linked List", E, "gfg-implement-queue-using-linked-list", "https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1"],
      ["Parenthesis Checker", E, "gfg-parenthesis-checker2744", "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1"], ["Next Greater Element", M, "gfg-next-larger-element-1587115620", "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1"], ["Stock Span Problem", M, "gfg-stock-span-problem-1587115621", "https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1"],
      ["Reverse Using Stack", E, "gfg-reverse-a-string-using-stack", "https://www.geeksforgeeks.org/problems/reverse-a-string-using-stack/1"], ["Queue Reversal", E, "gfg-queue-reversal", "https://www.geeksforgeeks.org/problems/queue-reversal/1"], ["Stack using Queue", E, "gfg-stack-using-two-queues", "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1"],
      ["Queue using Stack", E, "gfg-queue-using-two-stacks", "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1"], ["Get Min with Stack Pop", E, "gfg-get-min-at-pop", "https://www.geeksforgeeks.org/problems/get-min-at-pop/1"], ["Get Min from Stack", E, "gfg-special-stack", "https://www.geeksforgeeks.org/problems/special-stack/1"],
      ["Reverse a Stack", E, "gfg-reverse-a-stack", "https://www.geeksforgeeks.org/problems/reverse-a-stack/1"], ["Sort a stack", M, "gfg-sort-a-stack", "https://www.geeksforgeeks.org/problems/sort-a-stack/1"], ["Check Redundant Brackets", M, "gfg-expression-contains-redundant-bracket-or-not", "https://www.geeksforgeeks.org/problems/expression-contains-redundant-bracket-or-not/1"],
      ["K Sized Subarray Maximum", M, "gfg-maximum-of-all-subarrays-of-size-k3101", "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1"], ["Stream First Non-repeating", M, "gfg-first-non-repeating-character-in-a-stream1216", "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1"], ["Gas Station", M, "gfg-circular-tour-1587115620", "https://www.geeksforgeeks.org/problems/circular-tour-1587115620/1"],
      ["LRU Cache", H, "gfg-lru-cache", "https://www.geeksforgeeks.org/problems/lru-cache/1"],
    ]},
  ]},

  { title: "Heaps & Ordering by Priority", topics: [
    { name: "Top-K and streaming", items: [
      ["Last Stone Weight", E, "last-stone-weight"], ["K Closest Points to Origin", M, "k-closest-points-to-origin"], ["Top K Frequent Words", M, "top-k-frequent-words"],
      ["Reorganize String", M, "reorganize-string"], ["Find K Pairs with Smallest Sums", M, "find-k-pairs-with-smallest-sums"], ["Seat Reservation Manager", M, "seat-reservation-manager"],
    ]},
    { name: "Scheduling with heaps", items: [
      ["Furthest Building You Can Reach", M, "furthest-building-you-can-reach"], ["IPO", H, "ipo"], ["Meeting Rooms III", H, "meeting-rooms-iii"],
      ["Minimum Cost to Hire K Workers", H, "minimum-cost-to-hire-k-workers"], ["Smallest Range Covering Elements from K Lists", H, "smallest-range-covering-elements-from-k-lists"], ["Sliding Window Median", H, "sliding-window-median"],
    ]},
    { name: "Heap classics", items: [
      ["Kth Largest Element in a Stream", E, "kth-largest-element-in-a-stream"], ["Find Median from Data Stream", H, "find-median-from-data-stream"], ["Task Scheduler", M, "task-scheduler"],
      ["Single-Threaded CPU", M, "single-threaded-cpu"], ["The K Weakest Rows in a Matrix", E, "the-k-weakest-rows-in-a-matrix"], ["Maximum Product of Two Elements in an Array", E, "maximum-product-of-two-elements-in-an-array"],
      ["Design Twitter", M, "design-twitter"], ["Distant Barcodes", M, "distant-barcodes"], ["Hand of Straights", M, "hand-of-straights"],
      ["k Largest Elements", E, "gfg-k-largest-elements3736", "https://www.geeksforgeeks.org/problems/k-largest-elements3736/1"], ["Merge k Sorted Arrays", H, "gfg-merge-k-sorted-arrays", "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1"], ["Nearly sorted", M, "gfg-nearly-sorted-1587115620", "https://www.geeksforgeeks.org/problems/nearly-sorted-1587115620/1"],
      ["Min Cost to Connect Ropes", M, "gfg-minimum-cost-of-ropes-1587115620", "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1"], ["Rearrange To Make Adjacent Different", M, "gfg-rearrange-characters4649", "https://www.geeksforgeeks.org/problems/rearrange-characters4649/1"], ["Find Median in a Stream", H, "gfg-find-median-in-a-stream-1587115620", "https://www.geeksforgeeks.org/problems/find-median-in-a-stream-1587115620/1"],
      ["Is Binary Tree Heap", M, "gfg-is-binary-tree-heap", "https://www.geeksforgeeks.org/problems/is-binary-tree-heap/1"], ["Kth Largest in a Stream", M, "gfg-kth-largest-element-in-a-stream", "https://www.geeksforgeeks.org/problems/kth-largest-element-in-a-stream/1"],
    ]},
  ]},

  { title: "Greedy Choices", topics: [
    { name: "Locally optimal moves", items: [
      ["Partition Labels", M, "partition-labels"], ["Gas Station", M, "gas-station"], ["Two City Scheduling", M, "two-city-scheduling"],
      ["Maximum Units on a Truck", E, "maximum-units-on-a-truck"], ["Wiggle Subsequence", M, "wiggle-subsequence"], ["Queue Reconstruction by Height", M, "queue-reconstruction-by-height"],
      ["Video Stitching", M, "video-stitching"], ["Minimum Number of Refueling Stops", H, "minimum-number-of-refueling-stops"],
    ]},
    { name: "Greedy classics", items: [
      ["Candy", H, "candy"], ["Assign Cookies", E, "assign-cookies"], ["Non-overlapping Intervals", M, "non-overlapping-intervals"],
      ["Lemonade Change", E, "lemonade-change"], ["Merge Triplets to Form Target Triplet", M, "merge-triplets-to-form-target-triplet"], ["Valid Parenthesis String", M, "valid-parenthesis-string"],
      ["Longest Palindrome", E, "longest-palindrome"], ["Dota2 Senate", M, "dota2-senate"], ["Split Array into Consecutive Subsequences", M, "split-array-into-consecutive-subsequences"],
      ["Increasing Triplet Subsequence", M, "increasing-triplet-subsequence"], ["Activity Selection", E, "gfg-n-meetings-in-one-room-1587115620", "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"], ["Fractional Knapsack", M, "gfg-fractional-knapsack-1587115620", "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"],
      ["Job Sequencing Problem", M, "gfg-job-sequencing-problem-1587115620", "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1"], ["Minimum Platforms", M, "gfg-minimum-platforms-1587115620", "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"], ["Page Faults in LRU", M, "gfg-page-faults-in-lru5603", "https://www.geeksforgeeks.org/problems/page-faults-in-lru5603/1"],
      ["Huffman Encoding", M, "gfg-huffman-encoding3345", "https://www.geeksforgeeks.org/problems/huffman-encoding3345/1"], ["Form the Largest Number", M, "gfg-largest-number-formed-from-an-array1117", "https://www.geeksforgeeks.org/problems/largest-number-formed-from-an-array1117/1"], ["Maximum Count with Sum Limited to K", E, "gfg-maximize-toys0331", "https://www.geeksforgeeks.org/problems/maximize-toys0331/1"],
      ["Water Connection Problem", M, "gfg-water-connection-problem", "https://www.geeksforgeeks.org/problems/water-connection-problem/1"], ["Shop in Candy Store", E, "gfg-shop-in-candy-store1145", "https://www.geeksforgeeks.org/problems/shop-in-candy-store1145/1"], ["Maximum trains for which stoppage can be provided", M, "gfg-maximum-trains-for-which-stoppage-can-be-provided", "https://www.geeksforgeeks.org/problems/maximum-trains-for-which-stoppage-can-be-provided/1"],
      ["Min Sum Pair using Digits", E, "gfg-minimum-sum4058", "https://www.geeksforgeeks.org/problems/minimum-sum4058/1"], ["Maximum Meetings in One Room", M, "gfg-maximum-meetings-in-one-room", "https://www.geeksforgeeks.org/problems/maximum-meetings-in-one-room/1"],
    ]},
  ]},

  { title: "Trees & Search Trees", topics: [
    { name: "Tree basics", items: [
      ["Invert Binary Tree", E, "invert-binary-tree"], ["Path Sum", E, "path-sum"], ["Subtree of Another Tree", E, "subtree-of-another-tree"],
      ["Binary Tree Paths", E, "binary-tree-paths"], ["Minimum Depth of Binary Tree", E, "minimum-depth-of-binary-tree"], ["Average of Levels in Binary Tree", E, "average-of-levels-in-binary-tree"],
      ["Binary Tree Level Order Traversal II", M, "binary-tree-level-order-traversal-ii"], ["N-ary Tree Level Order Traversal", M, "n-ary-tree-level-order-traversal"],
    ]},
    { name: "Tree reasoning", items: [
      ["Sum Root to Leaf Numbers", M, "sum-root-to-leaf-numbers"], ["Count Good Nodes in Binary Tree", M, "count-good-nodes-in-binary-tree"], ["Path Sum III", M, "path-sum-iii"],
      ["Populating Next Right Pointers in Each Node", M, "populating-next-right-pointers-in-each-node"], ["Find Largest Value in Each Tree Row", M, "find-largest-value-in-each-tree-row"], ["Longest Univalue Path", M, "longest-univalue-path"],
      ["Delete Nodes And Return Forest", M, "delete-nodes-and-return-forest"], ["House Robber III", M, "house-robber-iii"], ["Distribute Coins in Binary Tree", M, "distribute-coins-in-binary-tree"],
      ["Binary Tree Cameras", H, "binary-tree-cameras"],
    ]},
    { name: "Binary search trees", items: [
      ["Convert Sorted Array to Binary Search Tree", E, "convert-sorted-array-to-binary-search-tree"], ["Minimum Absolute Difference in BST", E, "minimum-absolute-difference-in-bst"], ["Range Sum of BST", E, "range-sum-of-bst"],
      ["Trim a Binary Search Tree", M, "trim-a-binary-search-tree"], ["Convert BST to Greater Tree", M, "convert-bst-to-greater-tree"], ["Unique Binary Search Trees", M, "unique-binary-search-trees"],
      ["Balance a Binary Search Tree", M, "balance-a-binary-search-tree"],
    ]},
    { name: "Tree classics", items: [
      ["Maximum Depth of Binary Tree", E, "maximum-depth-of-binary-tree"], ["Same Tree", E, "same-tree"], ["Symmetric Tree", E, "symmetric-tree"],
      ["Binary Tree Level Order Traversal", M, "binary-tree-level-order-traversal"], ["Binary Tree Inorder Traversal", E, "binary-tree-inorder-traversal"], ["Binary Tree Preorder Traversal", E, "binary-tree-preorder-traversal"],
      ["Binary Tree Postorder Traversal", E, "binary-tree-postorder-traversal"], ["Diameter of Binary Tree", E, "diameter-of-binary-tree"], ["Balanced Binary Tree", E, "balanced-binary-tree"],
      ["Path Sum II", M, "path-sum-ii"], ["Lowest Common Ancestor of a Binary Tree", M, "lowest-common-ancestor-of-a-binary-tree"], ["Lowest Common Ancestor of a Binary Search Tree", M, "lowest-common-ancestor-of-a-binary-search-tree"],
      ["Validate Binary Search Tree", M, "validate-binary-search-tree"], ["Kth Smallest Element in a BST", M, "kth-smallest-element-in-a-bst"], ["Binary Tree Right Side View", M, "binary-tree-right-side-view"],
      ["Binary Tree Zigzag Level Order Traversal", M, "binary-tree-zigzag-level-order-traversal"], ["Construct Binary Tree from Preorder and Inorder Traversal", M, "construct-binary-tree-from-preorder-and-inorder-traversal"], ["Construct Binary Tree from Inorder and Postorder Traversal", M, "construct-binary-tree-from-inorder-and-postorder-traversal"],
      ["Binary Tree Maximum Path Sum", H, "binary-tree-maximum-path-sum"], ["Serialize and Deserialize Binary Tree", H, "serialize-and-deserialize-binary-tree"], ["Flatten Binary Tree to Linked List", M, "flatten-binary-tree-to-linked-list"],
      ["Delete Node in a BST", M, "delete-node-in-a-bst"], ["Insert into a Binary Search Tree", M, "insert-into-a-binary-search-tree"], ["Vertical Order Traversal of a Binary Tree", H, "vertical-order-traversal-of-a-binary-tree"],
      ["All Nodes Distance K in Binary Tree", M, "all-nodes-distance-k-in-binary-tree"], ["Recover Binary Search Tree", M, "recover-binary-search-tree"], ["Binary Search Tree Iterator", M, "binary-search-tree-iterator"],
      ["Maximum Width of Binary Tree", M, "maximum-width-of-binary-tree"], ["Search in a Binary Search Tree", E, "search-in-a-binary-search-tree"], ["Two Sum IV - Input is a BST", E, "two-sum-iv-input-is-a-bst"],
      ["Merge Two Binary Trees", E, "merge-two-binary-trees"], ["Cousins in Binary Tree", E, "cousins-in-binary-tree"], ["Sum of Left Leaves", E, "sum-of-left-leaves"],
      ["Inorder Traversal", E, "gfg-inorder-traversal", "https://www.geeksforgeeks.org/problems/inorder-traversal/1"], ["Preorder Traversal", E, "gfg-preorder-traversal", "https://www.geeksforgeeks.org/problems/preorder-traversal/1"], ["Postorder Traversal", E, "gfg-postorder-traversal", "https://www.geeksforgeeks.org/problems/postorder-traversal/1"],
      ["Level Order Traversal", E, "gfg-level-order-traversal", "https://www.geeksforgeeks.org/problems/level-order-traversal/1"], ["Height of Binary Tree", E, "gfg-height-of-binary-tree", "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1"], ["Diameter of Binary Tree", M, "gfg-diameter-of-binary-tree", "https://www.geeksforgeeks.org/problems/diameter-of-binary-tree/1"],
      ["Balanced Tree Check", E, "gfg-check-for-balanced-tree", "https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1"], ["Left View of Binary Tree", E, "gfg-left-view-of-binary-tree", "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1"], ["Right View of Binary Tree", E, "gfg-right-view-of-binary-tree", "https://www.geeksforgeeks.org/problems/right-view-of-binary-tree/1"],
      ["Top View of Binary Tree", M, "gfg-top-view-of-binary-tree", "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1"], ["Bottom View of Binary Tree", M, "gfg-bottom-view-of-binary-tree", "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1"], ["Tree Boundary Traversal", M, "gfg-boundary-traversal-of-binary-tree", "https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1"],
      ["Zig-Zag Tree Traversal", M, "gfg-zigzag-tree-traversal", "https://www.geeksforgeeks.org/problems/zigzag-tree-traversal/1"], ["LCA in  Binary Tree", M, "gfg-lowest-common-ancestor-in-a-binary-tree", "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1"], ["Lowest Common Ancestor in a BST", E, "gfg-lowest-common-ancestor-in-a-bst", "https://www.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1"],
      ["Check for BST", M, "gfg-check-for-bst", "https://www.geeksforgeeks.org/problems/check-for-bst/1"], ["Convert to Mirror Tree", E, "gfg-mirror-tree", "https://www.geeksforgeeks.org/problems/mirror-tree/1"], ["Symmetric Tree", E, "gfg-symmetric-tree", "https://www.geeksforgeeks.org/problems/symmetric-tree/1"],
      ["Children Sum in a Binary Tree", M, "gfg-children-sum-parent", "https://www.geeksforgeeks.org/problems/children-sum-parent/1"], ["Sum of Leaf Nodes", E, "gfg-sum-of-leaf-nodes", "https://www.geeksforgeeks.org/problems/sum-of-leaf-nodes/1"], ["Binary Tree  to DLL", H, "gfg-binary-tree-to-dll", "https://www.geeksforgeeks.org/problems/binary-tree-to-dll/1"],
      ["Burning Tree", H, "gfg-burning-tree", "https://www.geeksforgeeks.org/problems/burning-tree/1"], ["K Sum Paths", M, "gfg-k-sum-paths", "https://www.geeksforgeeks.org/problems/k-sum-paths/1"], ["Maximum Path Sum", M, "gfg-maximum-path-sum-from-any-node", "https://www.geeksforgeeks.org/problems/maximum-path-sum-from-any-node/1"],
      ["Serialize and Deserialize a Binary Tree", H, "gfg-serialize-and-deserialize-a-binary-tree", "https://www.geeksforgeeks.org/problems/serialize-and-deserialize-a-binary-tree/1"], ["Floor in BST", E, "gfg-floor-in-bst", "https://www.geeksforgeeks.org/problems/floor-in-bst/1"], ["Kth Largest in BST", E, "gfg-kth-largest-element-in-bst", "https://www.geeksforgeeks.org/problems/kth-largest-element-in-bst/1"],
      ["Predecessor and Successor in BST", M, "gfg-predecessor-and-successor", "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1"], ["Construct Tree from Inorder & Preorder", M, "gfg-construct-tree-1", "https://www.geeksforgeeks.org/problems/construct-tree-1/1"], ["Binary Tree from Inorder and Postorder", M, "gfg-tree-from-postorder-and-inorder", "https://www.geeksforgeeks.org/problems/tree-from-postorder-and-inorder/1"],
      ["Normal BST to Balanced BST", M, "gfg-normal-bst-to-balanced-bst", "https://www.geeksforgeeks.org/problems/normal-bst-to-balanced-bst/1"], ["Merge Two BSTs", H, "gfg-merge-two-bst-s", "https://www.geeksforgeeks.org/problems/merge-two-bst-s/1"],
    ]},
  ]},

  { title: "Graph Exploration", topics: [
    { name: "Traversal", items: [
      ["Find if Path Exists in Graph", E, "find-if-path-exists-in-graph"], ["Clone Graph", M, "clone-graph"], ["Keys and Rooms", M, "keys-and-rooms"],
      ["Max Area of Island", M, "max-area-of-island"], ["Pacific Atlantic Water Flow", M, "pacific-atlantic-water-flow"], ["Shortest Bridge", M, "shortest-bridge"],
      ["Open the Lock", M, "open-the-lock"], ["Minimum Genetic Mutation", M, "minimum-genetic-mutation"], ["Snakes and Ladders", M, "snakes-and-ladders"],
    ]},
    { name: "Ordering & dependencies", items: [
      ["Minimum Height Trees", M, "minimum-height-trees"], ["Course Schedule IV", M, "course-schedule-iv"], ["All Ancestors of a Node in a Directed Acyclic Graph", M, "all-ancestors-of-a-node-in-a-directed-acyclic-graph"],
      ["Sort Items by Groups Respecting Dependencies", H, "sort-items-by-groups-respecting-dependencies"],
    ]},
    { name: "Weighted paths", items: [
      ["Path With Maximum Probability", M, "path-with-maximum-probability"], ["Swim in Rising Water", H, "swim-in-rising-water"], ["Minimum Cost to Make at Least One Valid Path in a Grid", H, "minimum-cost-to-make-at-least-one-valid-path-in-a-grid"],
      ["Shortest Path Visiting All Nodes", H, "shortest-path-visiting-all-nodes"], ["Design Graph With Shortest Path Calculator", H, "design-graph-with-shortest-path-calculator"],
    ]},
    { name: "Union-find & spanning trees", items: [
      ["Redundant Connection", M, "redundant-connection"], ["Satisfiability of Equality Equations", M, "satisfiability-of-equality-equations"], ["Evaluate Division", M, "evaluate-division"],
      ["Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree", H, "find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree"],
    ]},
    { name: "Graph classics", items: [
      ["Number of Islands", M, "number-of-islands"], ["Course Schedule", M, "course-schedule"], ["Course Schedule II", M, "course-schedule-ii"],
      ["Rotting Oranges", M, "rotting-oranges"], ["Flood Fill", E, "flood-fill"], ["Surrounded Regions", M, "surrounded-regions"],
      ["Word Ladder", H, "word-ladder"], ["Number of Provinces", M, "number-of-provinces"], ["Is Graph Bipartite?", M, "is-graph-bipartite"],
      ["Possible Bipartition", M, "possible-bipartition"], ["Network Delay Time", M, "network-delay-time"], ["Cheapest Flights Within K Stops", M, "cheapest-flights-within-k-stops"],
      ["Min Cost to Connect All Points", M, "min-cost-to-connect-all-points"], ["Accounts Merge", M, "accounts-merge"], ["Path With Minimum Effort", M, "path-with-minimum-effort"],
      ["Find Eventual Safe States", M, "find-eventual-safe-states"], ["01 Matrix", M, "01-matrix"], ["Shortest Path in Binary Matrix", M, "shortest-path-in-binary-matrix"],
      ["Reconstruct Itinerary", H, "reconstruct-itinerary"], ["Critical Connections in a Network", H, "critical-connections-in-a-network"], ["Find the City With the Smallest Number of Neighbors at a Threshold Distance", M, "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance"],
      ["All Paths From Source to Target", M, "all-paths-from-source-to-target"], ["Number of Enclaves", M, "number-of-enclaves"], ["Word Ladder II", H, "word-ladder-ii"],
      ["Find Center of Star Graph", E, "find-center-of-star-graph"], ["Find the Town Judge", E, "find-the-town-judge"], ["Number of Closed Islands", M, "number-of-closed-islands"],
      ["BFS of Graph", E, "gfg-bfs-traversal-of-graph", "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1"], ["DFS of Graph", E, "gfg-depth-first-traversal-for-a-graph", "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1"], ["Undirected Graph Cycle", M, "gfg-detect-cycle-in-an-undirected-graph", "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1"],
      ["Directed Graph Cycle", M, "gfg-detect-cycle-in-a-directed-graph", "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1"], ["Topological Sort", M, "gfg-topological-sort", "https://www.geeksforgeeks.org/problems/topological-sort/1"], ["Shortest Path in Unweighted Graph", M, "gfg-shortest-path-in-undirected-graph-having-unit-distance", "https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1"],
      ["Shortest Path in an Undirected Graph", H, "gfg-shortest-path-in-weighted-undirected-graph", "https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1"], ["Dijkstra Algorithm", M, "gfg-implementing-dijkstra-set-1-adjacency-matrix", "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1"], ["Bellman Ford", M, "gfg-distance-from-the-source-bellman-ford-algorithm", "https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1"],
      ["Floyd Warshall", M, "gfg-implementing-floyd-warshall2042", "https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1"], ["Minimum Spanning Tree", M, "gfg-minimum-spanning-tree", "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1"], ["Count Strongly Connected Components", H, "gfg-strongly-connected-components-kosarajus-algo", "https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1"],
      ["Articulation Point", H, "gfg-articulation-point-1", "https://www.geeksforgeeks.org/problems/articulation-point-1/1"], ["Bridge Edge in a Graph", M, "gfg-bridge-edge-in-graph", "https://www.geeksforgeeks.org/problems/bridge-edge-in-graph/1"], ["Alien Dictionary", H, "gfg-alien-dictionary", "https://www.geeksforgeeks.org/problems/alien-dictionary/1"],
      ["Count Islands", M, "gfg-find-the-number-of-islands", "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1"], ["Min Steps by Knight", M, "gfg-steps-by-knight5927", "https://www.geeksforgeeks.org/problems/steps-by-knight5927/1"], ["Safe States", M, "gfg-eventual-safe-states", "https://www.geeksforgeeks.org/problems/eventual-safe-states/1"],
      ["Bipartite Graph", M, "gfg-bipartite-graph", "https://www.geeksforgeeks.org/problems/bipartite-graph/1"], ["Number of Connected Components", M, "gfg-number-of-provinces", "https://www.geeksforgeeks.org/problems/number-of-provinces/1"], ["Rotten Oranges", M, "gfg-rotten-oranges2536", "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1"],
      ["Distance of nearest cell having 1", M, "gfg-distance-of-nearest-cell-having-1", "https://www.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/1"], ["Disjoint set (Union-Find)", M, "gfg-disjoint-set-union-find", "https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1"], ["Check for Path in a 2D Grid with Obstacles", M, "gfg-find-whether-path-exist5238", "https://www.geeksforgeeks.org/problems/find-whether-path-exist5238/1"],
      ["Shortest Distance in a Binary Maze", M, "gfg-shortest-source-to-destination-path3544", "https://www.geeksforgeeks.org/problems/shortest-source-to-destination-path3544/1"], ["Minimum Multiplications to reach End", M, "gfg-minimum-multiplications-to-reach-end", "https://www.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1"], ["Number of Ways to Arrive at Destination", M, "gfg-number-of-ways-to-arrive-at-destination", "https://www.geeksforgeeks.org/problems/number-of-ways-to-arrive-at-destination/1"],
      ["Graph Adjacency List Traversal", E, "gfg-print-adjacency-list-1587115620", "https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1"],
    ]},
  ]},

  { title: "Dynamic Programming", topics: [
    { name: "One-dimensional states", items: [
      ["Min Cost Climbing Stairs", E, "min-cost-climbing-stairs"], ["N-th Tribonacci Number", E, "n-th-tribonacci-number"], ["Delete and Earn", M, "delete-and-earn"],
      ["Decode Ways", M, "decode-ways"], ["Perfect Squares", M, "perfect-squares"],
    ]},
    { name: "Grids", items: [
      ["Out of Boundary Paths", M, "out-of-boundary-paths"], ["Minimum Falling Path Sum II", H, "minimum-falling-path-sum-ii"], ["Maximum Number of Points with Cost", M, "maximum-number-of-points-with-cost"],
      ["Dungeon Game", H, "dungeon-game"], ["Count Submatrices With All Ones", M, "count-submatrices-with-all-ones"],
    ]},
    { name: "Knapsack family", items: [
      ["Last Stone Weight II", M, "last-stone-weight-ii"], ["Ones and Zeroes", M, "ones-and-zeroes"], ["Combination Sum IV", M, "combination-sum-iv"],
      ["Number of Dice Rolls With Target Sum", M, "number-of-dice-rolls-with-target-sum"], ["Profitable Schemes", H, "profitable-schemes"],
    ]},
    { name: "Two-string problems", items: [
      ["Uncrossed Lines", M, "uncrossed-lines"], ["Maximum Length of Repeated Subarray", M, "maximum-length-of-repeated-subarray"], ["Minimum ASCII Delete Sum for Two Strings", M, "minimum-ascii-delete-sum-for-two-strings"],
      ["Interleaving String", M, "interleaving-string"], ["Regular Expression Matching", H, "regular-expression-matching"],
    ]},
    { name: "Sequences & intervals", items: [
      ["Maximum Length of Pair Chain", M, "maximum-length-of-pair-chain"], ["Longest Arithmetic Subsequence", M, "longest-arithmetic-subsequence"], ["Best Team With No Conflicts", M, "best-team-with-no-conflicts"],
      ["Russian Doll Envelopes", H, "russian-doll-envelopes"], ["Minimum Score Triangulation of Polygon", M, "minimum-score-triangulation-of-polygon"], ["Guess Number Higher or Lower II", M, "guess-number-higher-or-lower-ii"],
      ["Strange Printer", H, "strange-printer"], ["Remove Boxes", H, "remove-boxes"],
    ]},
    { name: "DP classics", items: [
      ["House Robber", M, "house-robber"], ["House Robber II", M, "house-robber-ii"], ["Coin Change", M, "coin-change"],
      ["Coin Change II", M, "coin-change-ii"], ["Longest Increasing Subsequence", M, "longest-increasing-subsequence"], ["Unique Paths", M, "unique-paths"],
      ["Unique Paths II", M, "unique-paths-ii"], ["Minimum Path Sum", M, "minimum-path-sum"], ["Partition Equal Subset Sum", M, "partition-equal-subset-sum"],
      ["Target Sum", M, "target-sum"], ["Word Break", M, "word-break"], ["Triangle", M, "triangle"],
      ["Best Time to Buy and Sell Stock with Cooldown", M, "best-time-to-buy-and-sell-stock-with-cooldown"], ["Best Time to Buy and Sell Stock III", H, "best-time-to-buy-and-sell-stock-iii"], ["Best Time to Buy and Sell Stock IV", H, "best-time-to-buy-and-sell-stock-iv"],
      ["Best Time to Buy and Sell Stock with Transaction Fee", M, "best-time-to-buy-and-sell-stock-with-transaction-fee"], ["Burst Balloons", H, "burst-balloons"], ["Longest Palindromic Subsequence", M, "longest-palindromic-subsequence"],
      ["Distinct Subsequences", H, "distinct-subsequences"], ["Wildcard Matching", H, "wildcard-matching"], ["Maximal Square", M, "maximal-square"],
      ["Minimum Falling Path Sum", M, "minimum-falling-path-sum"], ["Delete Operation for Two Strings", M, "delete-operation-for-two-strings"], ["Shortest Common Supersequence ", H, "shortest-common-supersequence"],
      ["Longest String Chain", M, "longest-string-chain"], ["Number of Longest Increasing Subsequence", M, "number-of-longest-increasing-subsequence"], ["Largest Divisible Subset", M, "largest-divisible-subset"],
      ["Stone Game", M, "stone-game"], ["Minimum Cost For Tickets", M, "minimum-cost-for-tickets"], ["Cherry Pickup", H, "cherry-pickup"],
      ["Minimum Insertion Steps to Make a String Palindrome", H, "minimum-insertion-steps-to-make-a-string-palindrome"], ["Count Square Submatrices with All Ones", M, "count-square-submatrices-with-all-ones"], ["Integer Break", M, "integer-break"],
      ["Tallest Billboard", H, "tallest-billboard"], ["Arithmetic Slices", M, "arithmetic-slices"], ["Predict the Winner", M, "predict-the-winner"],
      ["Knight Probability in Chessboard", M, "knight-probability-in-chessboard"], ["Longest Increasing Path in a Matrix", H, "longest-increasing-path-in-a-matrix"], ["0 - 1 Knapsack Problem", M, "gfg-0-1-knapsack-problem0945", "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1"],
      ["Rod Cutting", M, "gfg-rod-cutting0840", "https://www.geeksforgeeks.org/problems/rod-cutting0840/1"], ["Matrix Chain Multiplication", H, "gfg-matrix-chain-multiplication0303", "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1"], ["Egg Dropping Puzzle", H, "gfg-egg-dropping-puzzle-1587115620", "https://www.geeksforgeeks.org/problems/egg-dropping-puzzle-1587115620/1"],
      ["Longest Common Subsequence", M, "gfg-longest-common-subsequence-1587115620", "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1"], ["Longest Increasing Subsequence", M, "gfg-longest-increasing-subsequence-1587115620", "https://www.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1"], ["Coin Change (Count Ways)", M, "gfg-coin-change2448", "https://www.geeksforgeeks.org/problems/coin-change2448/1"],
      ["Partition Equal Subset Sum", M, "gfg-subset-sum-problem2014", "https://www.geeksforgeeks.org/problems/subset-sum-problem2014/1"], ["Nth Catalan Number", M, "gfg-nth-catalan-number0817", "https://www.geeksforgeeks.org/problems/nth-catalan-number0817/1"], ["Min Cost Climbing Stairs", E, "gfg-min-cost-climbing-stairs", "https://www.geeksforgeeks.org/problems/min-cost-climbing-stairs/1"],
      ["Max Sum Increasing Subsequence", M, "gfg-maximum-sum-increasing-subsequence4749", "https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1"], ["Edit Distance", H, "gfg-edit-distance3702", "https://www.geeksforgeeks.org/problems/edit-distance3702/1"], ["Longest Palindromic Subsequence", M, "gfg-longest-palindromic-subsequence-1612327878", "https://www.geeksforgeeks.org/problems/longest-palindromic-subsequence-1612327878/1"],
      ["Stickler Thief", M, "gfg-stickler-theif-1587115621", "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1"], ["Boolean Parenthesization", H, "gfg-boolean-parenthesization5610", "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1"], ["Gold Mine Problem", M, "gfg-gold-mine-problem2608", "https://www.geeksforgeeks.org/problems/gold-mine-problem2608/1"],
      ["Painting the Fence", M, "gfg-painting-the-fence3727", "https://www.geeksforgeeks.org/problems/painting-the-fence3727/1"], ["Total Decoding Messages", M, "gfg-total-decoding-messages1235", "https://www.geeksforgeeks.org/problems/total-decoding-messages1235/1"], ["Maximize The Cut Segments", M, "gfg-cutted-segments1642", "https://www.geeksforgeeks.org/problems/cutted-segments1642/1"],
      ["Optimal Strategy For A Game", M, "gfg-optimal-strategy-for-a-game-1587115620", "https://www.geeksforgeeks.org/problems/optimal-strategy-for-a-game-1587115620/1"], ["Friends Pairing Problem", M, "gfg-friends-pairing-problem5425", "https://www.geeksforgeeks.org/problems/friends-pairing-problem5425/1"], ["Longest Common Substring", M, "gfg-longest-common-substring1452", "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1"],
      ["Coin Change (Minimum Coins)", M, "gfg-number-of-coins1824", "https://www.geeksforgeeks.org/problems/number-of-coins1824/1"], ["Count Subsets with Sum", M, "gfg-perfect-sum-problem5633", "https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1"], ["Minimum Cost Path with 4 Moves", M, "gfg-minimum-cost-path3833", "https://www.geeksforgeeks.org/problems/minimum-cost-path3833/1"],
      ["Shortest Common Supersequence", M, "gfg-shortest-common-supersequence0322", "https://www.geeksforgeeks.org/problems/shortest-common-supersequence0322/1"],
    ]},
  ]},

  { title: "Prefix Trees & Range Queries", topics: [
    { name: "Tries", items: [
      ["Design Add and Search Words Data Structure", M, "design-add-and-search-words-data-structure"], ["Replace Words", M, "replace-words"], ["Map Sum Pairs", M, "map-sum-pairs"],
      ["Search Suggestions System", M, "search-suggestions-system"], ["Stream of Characters", H, "stream-of-characters"],
    ]},
    { name: "Hashing, Z-function & ranges", items: [
      ["Longest Duplicate Substring", H, "longest-duplicate-substring"], ["Sum of Scores of Built Strings", H, "sum-of-scores-of-built-strings"], ["Range Sum Query - Mutable", M, "range-sum-query-mutable"],
      ["Count of Smaller Numbers After Self", H, "count-of-smaller-numbers-after-self"],
    ]},
    { name: "Trie & range-query classics", items: [
      ["Implement Trie (Prefix Tree)", M, "implement-trie-prefix-tree"], ["Longest Word in Dictionary", M, "longest-word-in-dictionary"], ["Range Sum Query 2D - Immutable", M, "range-sum-query-2d-immutable"],
      ["My Calendar II", M, "my-calendar-ii"], ["Prefix and Suffix Search", H, "prefix-and-suffix-search"], ["Implement Magic Dictionary", M, "implement-magic-dictionary"],
      ["Sum of Prefix Scores of Strings", H, "sum-of-prefix-scores-of-strings"], ["The Skyline Problem", H, "the-skyline-problem"], ["Count Number of Teams", M, "count-number-of-teams"],
      ["Repeated DNA Sequences", M, "repeated-dna-sequences"], ["Shortest Palindrome", H, "shortest-palindrome"], ["Implement Trie", M, "gfg-trie-insert-and-search0651", "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1"],
      ["Trie Delete", M, "gfg-trie-delete", "https://www.geeksforgeeks.org/problems/trie-delete/1"], ["Word Break - 2", H, "gfg-word-break-part-23249", "https://www.geeksforgeeks.org/problems/word-break-part-23249/1"], ["Phone Directory", M, "gfg-phone-directory4628", "https://www.geeksforgeeks.org/problems/phone-directory4628/1"],
      ["Longest Common Prefix of Strings", M, "gfg-longest-common-prefix-in-an-array", "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array/1"], ["Unique Rows in Boolean Matrix", M, "gfg-unique-rows-in-boolean-matrix", "https://www.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1"], ["Arrange Anagrams Together", M, "gfg-k-anagrams-1", "https://www.geeksforgeeks.org/problems/k-anagrams-1/0"],
      ["Minimum XOR Value Pair", M, "gfg-minimum-xor-value-pair", "https://www.geeksforgeeks.org/problems/minimum-xor-value-pair/1"],
    ]},
  ]},
];
