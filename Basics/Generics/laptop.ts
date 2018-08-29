interface laptop {
    width: number;
}

function device<T extends laptop>(arg: T): T {
    console.log(arg.width);  
    return arg;
}
device({width:30});