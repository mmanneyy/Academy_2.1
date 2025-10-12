<h1 align="center">Priority Queue</h1>

<p><b>This folder contains 2 files:</b>
    <ul><a href="maxHeap.js"><i>Max-Heap</i></a></ul>
    <ul><a href="minHeap.js"><i>Min-Heap</i></a></ul>
</p>

<h3>Let's answer the questions first. What is a:</h3>

<ul><p><i><u>Priority queue</u></i> is a data structure where each element has a priority, and elements with higher priority are processed first, regardless of the order they were added.</p></ul>

<ul><p><i><u>Max-Heap</u></i> is a binary tree where each parent node is greater than or equal to its children, so the largest element is always at the root.</p></ul>

<ul><p><i><u>Min-Heap</u></i> is a binary tree where each parent node is smaller than or equal to its children, so the smallest element is always at the root.</p></ul>

<h2>#Client Code</h2>

<p>Use this client codes to check the how my codes works</p>

<h3>Max-Heap</h3>
<pre><code>
const pq = new PriorityQueue();
pq.push(30);
pq.push(20);
pq.push(18);
pq.push(22);
pq.push(19);
pq.push(38);
pq.push(16);
pq.print();
let r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
</code></pre>


<h3>Min-Heap</h3>
<pre><code>
const pq = new PriorityQueue();

pq.push(30);
pq.push(20);
pq.push(15);
pq.push(12);
pq.push(10);
pq.push(8);
pq.push(16);
pq.print();
let r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
r = pq.pop();
console.log('root is: ', r);
pq.print();
</code></pre>