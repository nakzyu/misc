// 충돌 부분 구현 필요

class HashTable<T> {
  private bins: T[];
  constructor(size: number) {
    this.bins = Array(size).fill(null);
  }

  private hash(str: string): number {
    let val = 0;
    for (let i = 0; i < str.length; i++) {
      val += str.charCodeAt(i);
    }
    return val % this.bins.length;
  }

  public set(key: string, value: T): void {
    this.bins[this.hash(key)] = value;
    // 충돌하면???
  }

  public get(key: string): T {
    console.log(this);
    return this.bins[this.hash(key)];
  }
}

const table = new HashTable<number>(20);

table.set("w", 200);
table.set("e", 500);
console.log(table.get("w"));
