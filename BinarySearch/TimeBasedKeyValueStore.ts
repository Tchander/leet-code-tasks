// https://leetcode.com/problems/time-based-key-value-store

class TimeMap {
  private data: Record<string, [number, string][]> = {};

  set(key: string, value: string, timestamp: number): void {
    if (!(key in this.data)) {
      this.data[key] = [];
    }
    this.data[key].push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    if (!(key in this.data)) {
      return '';
    }

    const values = this.data[key];
    const index = this.binarySearch(values, timestamp);

    if (index >= 0) {
      return values[index][1];
    } else {
      return '';
    }
  }

  private binarySearch(values: [number, string][], timestamp: number): number {
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (values[mid][0] <= timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return right;
  }
}

const timeMape = new TimeMap();
timeMape.set('foo', 'bar', 1);
console.log(timeMape.get('foo', 1)); // bar
console.log(timeMape.get('foo', 3)); // bar
timeMape.set('foo', 'bar2', 4);
console.log(timeMape.get('foo', 4)); // bar2
console.log(timeMape.get('foo', 5)); // bar2
