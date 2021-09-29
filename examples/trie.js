var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = {};
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = {
            children: {},
            isEndOfWord: false
        };
    }
    Trie.prototype.insert = function (string) {
        var prev = this.root;
        var splitted = string.split("");
        splitted.forEach(function (str, i) {
            if (!prev.children[str]) {
                var node = new TrieNode();
                i === splitted.length - 1
                    ? (node.isEndOfWord = true)
                    : (node.isEndOfWord = false);
                node.children;
                prev.children[str] = node;
            }
            prev = prev.children[str];
        });
    };
    Trie.prototype.search = function (string) {
        var prev = this.root;
        var splitted = string.split("");
        for (var i = 0; i < splitted.length; i++) {
            var str = splitted[i];
            if (!prev.children[str]) {
                return false;
            }
            prev = prev.children[str];
        }
        return prev.isEndOfWord;
    };
    Trie.prototype.startsWith = function (string) {
        var prev = this.root;
        var splitted = string.split("");
        for (var i = 0; i < splitted.length; i++) {
            var str = splitted[i];
            if (!prev.children[str]) {
                return false;
            }
            prev = prev.children[str];
        }
        return true;
    };
    return Trie;
}());
var trie = new Trie();
trie.insert("apple");
// console.log(trie.search("apple"));
console.log(trie.startsWith("apq"));
