let obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: function() {
        console.log('表示したい値１');
    },
    prop4: {
        prop5: '表示したい値２',
    },
    prop7: function() {
        console.log('表示したい値３');
    }
}

obj.prop3();
console.log(obj.prop4.prop5);
obj.prop6 = 'value6';
console.log(obj)

console.log(obj.prop7);