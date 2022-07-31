interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() { return 1000 }
    public eat() { }
}

class Humminbird implements Bird, FlyingBird {
    public fly() { return 200 }
    public eat() { }
}

class Ostrich implements Bird, RunningBird {
    public run() { }
    public eat() { }
}

class Penguin implements Bird, RunningBird, SwimerBird {
    public run() { }
    public eat() { }
    public swim() { }
}