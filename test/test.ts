/*
 * @Author: blueyuyu ublueyuyuyu@gmail.com
 * @Date: 2024-09-24 21:28:33
 * @LastEditors: blueyuyu ublueyuyuyu@gmail.com
 * @LastEditTime: 2024-09-24 21:28:45
 * @FilePath: \fishNote\docs\test\test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Car {
    engin: string;
    constructor(engin: string) {
        this.engin = engin
    }
    disp():void{
        console.log('this.engin',this.engin);
    }
}

class Square {
    static width = '100px'
}


// 定义一个抽象类

abstract class Animal {
    abstract makeSound():void;
    move():void{
        console.log('12',12);
    }
}

// 抽象类只能继承
class Cat extends Animal{
    makeSound(): void {
        console.log('222',222);
    }
}

const mycat = new Cat()

mycat.makeSound()