class TrieNode {
  children: Record<string, TrieNode> = {};
  isEndOfWord: boolean;
}

class Trie {
  root: TrieNode = {
    children: {},
    isEndOfWord: false,
  };
  insert(string: string) {
    let prev = this.root;
    const splitted = string.split("");
    splitted.forEach((str, i) => {
      if (!prev.children[str]) {
        const node = new TrieNode();
        i === splitted.length - 1
          ? (node.isEndOfWord = true)
          : (node.isEndOfWord = false);
        node.children;
        prev.children[str] = node;
      }
      // 이미 존재하는 str이지만 새로운 단어로 추가된경우
      // ex) apple 이 존재하지만 app이라는 단어를 새로 추가한 경우
      else if (prev.children[str] && i === splitted.length - 1) {
        prev.children[str].isEndOfWord = true;
      }
      prev = prev.children[str];
    });
  }

  search(string: string) {
    let prev = this.root;
    const splitted = string.split("");
    for (let i = 0; i < splitted.length; i++) {
      const str = splitted[i];
      if (!prev.children[str]) {
        return false;
      }
      prev = prev.children[str];
    }
    return prev.isEndOfWord;
  }

  startsWith(string: string) {
    let prev = this.root;
    const splitted = string.split("");
    for (let i = 0; i < splitted.length; i++) {
      const str = splitted[i];
      if (!prev.children[str]) {
        return false;
      }
      prev = prev.children[str];
    }
    return true;
  }
}
