## JavaScript Foundation

### interpreter & compilers

    js file --> interpreter & compilers --> 01010001...

### js engine

    js --> Parser --> AST --> Interpreter(call stack/ memory heap) --> bytecode

### inline caching

    多次返回同一个函数时，会直接生成保存在caching中的结果，不用再去寻找变量

### hidden classes
    When instantiating new objects, the compiler will try to create a common ‘hidden class’. By defining properties in different orders.

### JavaScript Engine vs. Runtime
    Chrome and Node.js share the same engine (Google's V8), but they have different runtime (execution) environments.
### Call Stack + Memory Heap

    - Call Stack:
      The call stack stores function calls
      Ensures the program runs in order
      The first stack frame (on top) is program’s current ‘location’
      First In, Last Out
      Global Execution Context is called and is at bottom of Call Stack
      First function is called and is added to top of Call Stack
      First function ‘returns’ and it is popped off of the Call Stack
      Repeat until program completes and Global Execution Context pops off the Call Stack
      Stack Overflow is when there are too many stack frames
    - Memory Heap:
      Stores values and references

### Garbage collection
    Garbage collection refers to a process that automatically frees up memory as it is able
    Garbage collection helps us avoid 
    
### Memory leaks
    内存泄漏是程序无法释放废弃的内存，从而导致性能下降或故障。
    Global variables
    Event listeners

### Node.js
    Node.js is a JS runtime
    It is written in C++

### Single Threaded Model
    JS is single-threaded
    The call stack 一次只执行一个函数
    通过Web API避免了“单线程”的局限性







