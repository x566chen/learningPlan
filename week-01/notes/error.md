## 错误处理
  ```javascript
  function testFinally(){
    return 2;
  }catch(error){
    return 1;
  }finally{
    return 0;
  }
  ```
  - finally 语句无论有没有错误都会执行，而catch后的语句只有错误发生时才会执行。
  