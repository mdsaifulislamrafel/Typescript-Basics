{
    // 
    // static

    class Counter {
        static count: number = 0;
        count: number = 0;
        static increment() {
            return Counter.count += 1;
        }
        static decrement() {
            return Counter.count += 1;
        }
    }


    // const instance1 = new Counter();
    console.log(Counter.increment()); // different memory usage -----> 1


    // const instance2 = new Counter();
    console.log(Counter.increment()); // different memory usage -----> 2










    // 
}