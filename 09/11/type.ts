//定义一个修饰器

function log(target, name, descriptor) {

  //这里是缓存旧的方法，也就是上面那个add()原始方法

  var oldValue = descriptor.value;

 

  //这里修改了方法，使其作用变成一个打印函数

  //最后依旧返回旧的方法，真是巧妙

  descriptor.value = function() {

    console.log(`Calling "${name}" with`, arguments);

    return oldValue.apply(null, arguments);

  };

  return descriptor;

}
//定义一个Class并在其add上使用了修饰器
class Math {

  @log
  add(a, b) {

    return a + b;

  }

}

const math = new Math();

math.add(2, 4);