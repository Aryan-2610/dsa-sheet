// AlgoLadder — an independent, hand-curated DSA practice roadmap.
// Item format: [title, difficulty, leetcodeSlug]
// The slug doubles as the permanent ID for saved progress. Never change an existing slug;
// to add problems just append rows. Every problem links out to the site that hosts it.

const E = "Easy", M = "Medium", H = "Hard";

const TRACKS = [
  { title: "Warm-Up: Numbers, Logic & Hashing", topics: [
    { name: "Number play", items: [
      ["Palindrome Number", E, "palindrome-number"], ["Fizz Buzz", E, "fizz-buzz"], ["Power of Three", E, "power-of-three"],
      ["Happy Number", E, "happy-number"], ["Plus One", E, "plus-one"], ["Excel Sheet Column Number", E, "excel-sheet-column-number"],
    ]},
    { name: "Simulation & grids", items: [
      ["Spiral Matrix II", M, "spiral-matrix-ii"], ["Diagonal Traverse", M, "diagonal-traverse"],
      ["Game of Life", M, "game-of-life"], ["Pascal's Triangle II", E, "pascals-triangle-ii"],
    ]},
    { name: "Hash maps & sets", items: [
      ["Contains Duplicate", E, "contains-duplicate"], ["Group Anagrams", M, "group-anagrams"], ["Ransom Note", E, "ransom-note"],
      ["Intersection of Two Arrays", E, "intersection-of-two-arrays"], ["First Unique Character in a String", E, "first-unique-character-in-a-string"],
    ]},
  ]},

  { title: "Sorting & Searching", topics: [
    { name: "Sorting essentials", items: [
      ["Sort an Array", M, "sort-an-array"], ["Merge Sorted Array", E, "merge-sorted-array"], ["Sort Array By Parity", E, "sort-array-by-parity"],
      ["Relative Sort Array", E, "relative-sort-array"], ["Largest Number", M, "largest-number"], ["Wiggle Sort II", M, "wiggle-sort-ii"],
    ]},
    { name: "Binary search on sorted data", items: [
      ["Binary Search", E, "binary-search"], ["Search Insert Position", E, "search-insert-position"], ["Sqrt(x)", E, "sqrtx"],
      ["First Bad Version", E, "first-bad-version"], ["Peak Index in a Mountain Array", M, "peak-index-in-a-mountain-array"],
      ["Find Minimum in Rotated Sorted Array II", H, "find-minimum-in-rotated-sorted-array-ii"],
      ["Time Based Key-Value Store", M, "time-based-key-value-store"], ["Successful Pairs of Spells and Potions", M, "successful-pairs-of-spells-and-potions"],
    ]},
    { name: "Binary search on the answer", items: [
      ["Minimum Speed to Arrive on Time", M, "minimum-speed-to-arrive-on-time"], ["Magnetic Force Between Two Balls", M, "magnetic-force-between-two-balls"],
      ["Maximum Candies Allocated to K Children", M, "maximum-candies-allocated-to-k-children"],
      ["Minimum Time to Complete Trips", M, "minimum-time-to-complete-trips"],
      ["Minimized Maximum of Products Distributed to Any Store", M, "minimized-maximum-of-products-distributed-to-any-store"],
      ["Find K-th Smallest Pair Distance", H, "find-k-th-smallest-pair-distance"],
    ]},
    { name: "Searching in matrices", items: [
      ["Kth Smallest Element in a Sorted Matrix", M, "kth-smallest-element-in-a-sorted-matrix"],
      ["Count Negative Numbers in a Sorted Matrix", E, "count-negative-numbers-in-a-sorted-matrix"], ["Find K Closest Elements", M, "find-k-closest-elements"],
    ]},
  ]},

  { title: "Arrays, Prefix Sums & Intervals", topics: [
    { name: "Array fundamentals", items: [
      ["Running Sum of 1d Array", E, "running-sum-of-1d-array"], ["Shuffle the Array", E, "shuffle-the-array"],
      ["Find All Numbers Disappeared in an Array", E, "find-all-numbers-disappeared-in-an-array"], ["Squares of a Sorted Array", E, "squares-of-a-sorted-array"],
      ["Product of Array Except Self", M, "product-of-array-except-self"], ["Valid Sudoku", M, "valid-sudoku"], ["Transpose Matrix", E, "transpose-matrix"],
    ]},
    { name: "Prefix sums & subarray counting", items: [
      ["Range Sum Query - Immutable", E, "range-sum-query-immutable"], ["Continuous Subarray Sum", M, "continuous-subarray-sum"],
      ["Subarray Sums Divisible by K", M, "subarray-sums-divisible-by-k"], ["Contiguous Array", M, "contiguous-array"],
    ]},
    { name: "Intervals", items: [
      ["Summary Ranges", E, "summary-ranges"], ["Interval List Intersections", M, "interval-list-intersections"],
      ["Minimum Number of Arrows to Burst Balloons", M, "minimum-number-of-arrows-to-burst-balloons"], ["My Calendar I", M, "my-calendar-i"],
      ["Remove Covered Intervals", M, "remove-covered-intervals"], ["Car Pooling", M, "car-pooling"],
    ]},
    { name: "Tricky array puzzles", items: [
      ["Find the Duplicate Number", M, "find-the-duplicate-number"], ["First Missing Positive", H, "first-missing-positive"],
      ["Count of Range Sum", H, "count-of-range-sum"],
    ]},
  ]},

  { title: "Two Pointers & Windows", topics: [
    { name: "Two pointers", items: [
      ["Valid Palindrome II", E, "valid-palindrome-ii"], ["Two Sum II - Input Array Is Sorted", M, "two-sum-ii-input-array-is-sorted"],
      ["Container With Most Water", M, "container-with-most-water"], ["Remove Element", E, "remove-element"],
      ["Boats to Save People", M, "boats-to-save-people"], ["3Sum Closest", M, "3sum-closest"],
    ]},
    { name: "Fixed & variable windows", items: [
      ["Maximum Average Subarray I", E, "maximum-average-subarray-i"], ["Permutation in String", M, "permutation-in-string"],
      ["Find All Anagrams in a String", M, "find-all-anagrams-in-a-string"], ["Minimum Size Subarray Sum", M, "minimum-size-subarray-sum"],
      ["Longest Turbulent Subarray", M, "longest-turbulent-subarray"], ["Grumpy Bookstore Owner", M, "grumpy-bookstore-owner"],
      ["Get Equal Substrings Within Budget", M, "get-equal-substrings-within-budget"],
    ]},
    { name: "Window challenges", items: [
      ["Frequency of the Most Frequent Element", M, "frequency-of-the-most-frequent-element"],
      ["Minimum Operations to Reduce X to Zero", M, "minimum-operations-to-reduce-x-to-zero"],
      ["Substring with Concatenation of All Words", H, "substring-with-concatenation-of-all-words"],
    ]},
  ]},

  { title: "Working with Strings", topics: [
    { name: "Everyday string handling", items: [
      ["Reverse String II", E, "reverse-string-ii"], ["Length of Last Word", E, "length-of-last-word"], ["Detect Capital", E, "detect-capital"],
      ["Add Binary", E, "add-binary"], ["Multiply Strings", M, "multiply-strings"], ["Count and Say", M, "count-and-say"],
      ["Zigzag Conversion", M, "zigzag-conversion"],
    ]},
    { name: "Patterns & palindromes", items: [
      ["Repeated Substring Pattern", E, "repeated-substring-pattern"], ["Repeated String Match", M, "repeated-string-match"],
      ["Palindromic Substrings", M, "palindromic-substrings"], ["Decode String", M, "decode-string"], ["Text Justification", H, "text-justification"],
    ]},
  ]},

  { title: "Linked Structures", topics: [
    { name: "Singly linked lists", items: [
      ["Merge Two Sorted Lists", E, "merge-two-sorted-lists"], ["Remove Duplicates from Sorted List", E, "remove-duplicates-from-sorted-list"],
      ["Remove Linked List Elements", E, "remove-linked-list-elements"], ["Swap Nodes in Pairs", M, "swap-nodes-in-pairs"],
      ["Reorder List", M, "reorder-list"], ["Partition List", M, "partition-list"], ["Reverse Linked List II", M, "reverse-linked-list-ii"],
      ["Swapping Nodes in a Linked List", M, "swapping-nodes-in-a-linked-list"], ["Maximum Twin Sum of a Linked List", M, "maximum-twin-sum-of-a-linked-list"],
      ["Split Linked List in Parts", M, "split-linked-list-in-parts"], ["Insertion Sort List", M, "insertion-sort-list"],
    ]},
    { name: "Doubly linked & design", items: [
      ["Design Linked List", M, "design-linked-list"], ["Design Browser History", M, "design-browser-history"],
      ["Flatten a Multilevel Doubly Linked List", M, "flatten-a-multilevel-doubly-linked-list"],
    ]},
  ]},

  { title: "Recursion & Backtracking", topics: [
    { name: "Thinking recursively", items: [
      ["Reverse String", E, "reverse-string"], ["K-th Symbol in Grammar", M, "k-th-symbol-in-grammar"],
      ["Different Ways to Add Parentheses", M, "different-ways-to-add-parentheses"], ["Unique Binary Search Trees II", M, "unique-binary-search-trees-ii"],
      ["Super Pow", M, "super-pow"],
    ]},
    { name: "Choose / explore / undo", items: [
      ["Combinations", M, "combinations"], ["Permutations II", M, "permutations-ii"], ["Letter Case Permutation", M, "letter-case-permutation"],
      ["Restore IP Addresses", M, "restore-ip-addresses"], ["Beautiful Arrangement", M, "beautiful-arrangement"],
      ["Path with Maximum Gold", M, "path-with-maximum-gold"], ["Matchsticks to Square", M, "matchsticks-to-square"],
    ]},
    { name: "Backtracking challenges", items: [
      ["Partition to K Equal Sum Subsets", M, "partition-to-k-equal-sum-subsets"], ["N-Queens II", H, "n-queens-ii"],
      ["Word Search II", H, "word-search-ii"], ["Additive Number", M, "additive-number"],
    ]},
  ]},

  { title: "Bits & Number Theory", topics: [
    { name: "Bit tricks", items: [
      ["Reverse Bits", E, "reverse-bits"], ["Counting Bits", E, "counting-bits"], ["Hamming Distance", E, "hamming-distance"],
      ["Find the Difference", E, "find-the-difference"], ["Sum of Two Integers", M, "sum-of-two-integers"],
      ["Bitwise AND of Numbers Range", M, "bitwise-and-of-numbers-range"], ["Gray Code", M, "gray-code"],
      ["Total Hamming Distance", M, "total-hamming-distance"], ["Maximum Product of Word Lengths", M, "maximum-product-of-word-lengths"],
      ["XOR Queries of a Subarray", M, "xor-queries-of-a-subarray"],
    ]},
    { name: "Number theory & math", items: [
      ["Greatest Common Divisor of Strings", E, "greatest-common-divisor-of-strings"], ["Factorial Trailing Zeroes", M, "factorial-trailing-zeroes"],
      ["Integer to Roman", M, "integer-to-roman"], ["Rectangle Area", M, "rectangle-area"], ["Ugly Number II", M, "ugly-number-ii"],
    ]},
  ]},

  { title: "Stacks, Queues & Monotonic Patterns", topics: [
    { name: "Stack workouts", items: [
      ["Baseball Game", E, "baseball-game"], ["Backspace String Compare", E, "backspace-string-compare"],
      ["Remove All Adjacent Duplicates in String", E, "remove-all-adjacent-duplicates-in-string"], ["Simplify Path", M, "simplify-path"],
      ["Basic Calculator II", M, "basic-calculator-ii"], ["Car Fleet", M, "car-fleet"],
    ]},
    { name: "Monotonic stacks & deques", items: [
      ["Daily Temperatures", M, "daily-temperatures"], ["Next Greater Node In Linked List", M, "next-greater-node-in-linked-list"],
      ["132 Pattern", M, "132-pattern"], ["Maximum Width Ramp", M, "maximum-width-ramp"],
      ["Constrained Subsequence Sum", H, "constrained-subsequence-sum"], ["Shortest Subarray with Sum at Least K", H, "shortest-subarray-with-sum-at-least-k"],
    ]},
    { name: "Queues & design", items: [
      ["Number of Recent Calls", E, "number-of-recent-calls"], ["Time Needed to Buy Tickets", E, "time-needed-to-buy-tickets"],
      ["Design Circular Queue", M, "design-circular-queue"], ["Design Circular Deque", M, "design-circular-deque"],
    ]},
  ]},

  { title: "Heaps & Ordering by Priority", topics: [
    { name: "Top-K and streaming", items: [
      ["Last Stone Weight", E, "last-stone-weight"], ["K Closest Points to Origin", M, "k-closest-points-to-origin"],
      ["Top K Frequent Words", M, "top-k-frequent-words"], ["Reorganize String", M, "reorganize-string"],
      ["Find K Pairs with Smallest Sums", M, "find-k-pairs-with-smallest-sums"], ["Seat Reservation Manager", M, "seat-reservation-manager"],
    ]},
    { name: "Scheduling with heaps", items: [
      ["Furthest Building You Can Reach", M, "furthest-building-you-can-reach"], ["IPO", H, "ipo"],
      ["Meeting Rooms III", H, "meeting-rooms-iii"], ["Minimum Cost to Hire K Workers", H, "minimum-cost-to-hire-k-workers"],
      ["Smallest Range Covering Elements from K Lists", H, "smallest-range-covering-elements-from-k-lists"],
      ["Sliding Window Median", H, "sliding-window-median"],
    ]},
  ]},

  { title: "Greedy Choices", topics: [
    { name: "Locally optimal moves", items: [
      ["Partition Labels", M, "partition-labels"], ["Gas Station", M, "gas-station"], ["Two City Scheduling", M, "two-city-scheduling"],
      ["Maximum Units on a Truck", E, "maximum-units-on-a-truck"], ["Wiggle Subsequence", M, "wiggle-subsequence"],
      ["Queue Reconstruction by Height", M, "queue-reconstruction-by-height"], ["Video Stitching", M, "video-stitching"],
      ["Minimum Number of Refueling Stops", H, "minimum-number-of-refueling-stops"],
    ]},
  ]},

  { title: "Trees & Search Trees", topics: [
    { name: "Tree basics", items: [
      ["Invert Binary Tree", E, "invert-binary-tree"], ["Path Sum", E, "path-sum"], ["Subtree of Another Tree", E, "subtree-of-another-tree"],
      ["Binary Tree Paths", E, "binary-tree-paths"], ["Minimum Depth of Binary Tree", E, "minimum-depth-of-binary-tree"],
      ["Average of Levels in Binary Tree", E, "average-of-levels-in-binary-tree"],
      ["Binary Tree Level Order Traversal II", M, "binary-tree-level-order-traversal-ii"], ["N-ary Tree Level Order Traversal", M, "n-ary-tree-level-order-traversal"],
    ]},
    { name: "Tree reasoning", items: [
      ["Sum Root to Leaf Numbers", M, "sum-root-to-leaf-numbers"], ["Count Good Nodes in Binary Tree", M, "count-good-nodes-in-binary-tree"],
      ["Path Sum III", M, "path-sum-iii"], ["Populating Next Right Pointers in Each Node", M, "populating-next-right-pointers-in-each-node"],
      ["Find Largest Value in Each Tree Row", M, "find-largest-value-in-each-tree-row"], ["Longest Univalue Path", M, "longest-univalue-path"],
      ["Delete Nodes And Return Forest", M, "delete-nodes-and-return-forest"], ["House Robber III", M, "house-robber-iii"],
      ["Distribute Coins in Binary Tree", M, "distribute-coins-in-binary-tree"], ["Binary Tree Cameras", H, "binary-tree-cameras"],
    ]},
    { name: "Binary search trees", items: [
      ["Convert Sorted Array to Binary Search Tree", E, "convert-sorted-array-to-binary-search-tree"],
      ["Minimum Absolute Difference in BST", E, "minimum-absolute-difference-in-bst"], ["Range Sum of BST", E, "range-sum-of-bst"],
      ["Trim a Binary Search Tree", M, "trim-a-binary-search-tree"], ["Convert BST to Greater Tree", M, "convert-bst-to-greater-tree"],
      ["Unique Binary Search Trees", M, "unique-binary-search-trees"], ["Balance a Binary Search Tree", M, "balance-a-binary-search-tree"],
    ]},
  ]},

  { title: "Graph Exploration", topics: [
    { name: "Traversal", items: [
      ["Find if Path Exists in Graph", E, "find-if-path-exists-in-graph"], ["Clone Graph", M, "clone-graph"], ["Keys and Rooms", M, "keys-and-rooms"],
      ["Max Area of Island", M, "max-area-of-island"], ["Pacific Atlantic Water Flow", M, "pacific-atlantic-water-flow"],
      ["Shortest Bridge", M, "shortest-bridge"], ["Open the Lock", M, "open-the-lock"],
      ["Minimum Genetic Mutation", M, "minimum-genetic-mutation"], ["Snakes and Ladders", M, "snakes-and-ladders"],
    ]},
    { name: "Ordering & dependencies", items: [
      ["Minimum Height Trees", M, "minimum-height-trees"], ["Course Schedule IV", M, "course-schedule-iv"],
      ["All Ancestors of a Node in a Directed Acyclic Graph", M, "all-ancestors-of-a-node-in-a-directed-acyclic-graph"],
      ["Sort Items by Groups Respecting Dependencies", H, "sort-items-by-groups-respecting-dependencies"],
    ]},
    { name: "Weighted paths", items: [
      ["Path With Maximum Probability", M, "path-with-maximum-probability"], ["Swim in Rising Water", H, "swim-in-rising-water"],
      ["Minimum Cost to Make at Least One Valid Path in a Grid", H, "minimum-cost-to-make-at-least-one-valid-path-in-a-grid"],
      ["Shortest Path Visiting All Nodes", H, "shortest-path-visiting-all-nodes"],
      ["Design Graph With Shortest Path Calculator", H, "design-graph-with-shortest-path-calculator"],
    ]},
    { name: "Union-find & spanning trees", items: [
      ["Redundant Connection", M, "redundant-connection"], ["Satisfiability of Equality Equations", M, "satisfiability-of-equality-equations"],
      ["Evaluate Division", M, "evaluate-division"],
      ["Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree", H, "find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree"],
    ]},
  ]},

  { title: "Dynamic Programming", topics: [
    { name: "One-dimensional states", items: [
      ["Min Cost Climbing Stairs", E, "min-cost-climbing-stairs"], ["N-th Tribonacci Number", E, "n-th-tribonacci-number"],
      ["Delete and Earn", M, "delete-and-earn"], ["Decode Ways", M, "decode-ways"], ["Perfect Squares", M, "perfect-squares"],
    ]},
    { name: "Grids", items: [
      ["Out of Boundary Paths", M, "out-of-boundary-paths"], ["Minimum Falling Path Sum II", H, "minimum-falling-path-sum-ii"],
      ["Maximum Number of Points with Cost", M, "maximum-number-of-points-with-cost"], ["Dungeon Game", H, "dungeon-game"],
      ["Count Submatrices With All Ones", M, "count-submatrices-with-all-ones"],
    ]},
    { name: "Knapsack family", items: [
      ["Last Stone Weight II", M, "last-stone-weight-ii"], ["Ones and Zeroes", M, "ones-and-zeroes"], ["Combination Sum IV", M, "combination-sum-iv"],
      ["Number of Dice Rolls With Target Sum", M, "number-of-dice-rolls-with-target-sum"], ["Profitable Schemes", H, "profitable-schemes"],
    ]},
    { name: "Two-string problems", items: [
      ["Uncrossed Lines", M, "uncrossed-lines"], ["Maximum Length of Repeated Subarray", M, "maximum-length-of-repeated-subarray"],
      ["Minimum ASCII Delete Sum for Two Strings", M, "minimum-ascii-delete-sum-for-two-strings"], ["Interleaving String", M, "interleaving-string"],
      ["Regular Expression Matching", H, "regular-expression-matching"],
    ]},
    { name: "Sequences & intervals", items: [
      ["Maximum Length of Pair Chain", M, "maximum-length-of-pair-chain"], ["Longest Arithmetic Subsequence", M, "longest-arithmetic-subsequence"],
      ["Best Team With No Conflicts", M, "best-team-with-no-conflicts"], ["Russian Doll Envelopes", H, "russian-doll-envelopes"],
      ["Minimum Score Triangulation of Polygon", M, "minimum-score-triangulation-of-polygon"],
      ["Guess Number Higher or Lower II", M, "guess-number-higher-or-lower-ii"], ["Strange Printer", H, "strange-printer"],
      ["Remove Boxes", H, "remove-boxes"],
    ]},
  ]},

  { title: "Prefix Trees & Range Queries", topics: [
    { name: "Tries", items: [
      ["Design Add and Search Words Data Structure", M, "design-add-and-search-words-data-structure"], ["Replace Words", M, "replace-words"],
      ["Map Sum Pairs", M, "map-sum-pairs"], ["Search Suggestions System", M, "search-suggestions-system"], ["Stream of Characters", H, "stream-of-characters"],
    ]},
    { name: "Hashing, Z-function & ranges", items: [
      ["Longest Duplicate Substring", H, "longest-duplicate-substring"], ["Sum of Scores of Built Strings", H, "sum-of-scores-of-built-strings"],
      ["Range Sum Query - Mutable", M, "range-sum-query-mutable"], ["Count of Smaller Numbers After Self", H, "count-of-smaller-numbers-after-self"],
    ]},
  ]},
];
