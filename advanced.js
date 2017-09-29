function callVar() {
    var options = {
        x: 'hey',
        y: 1,
        z: 2,
        w: 3
    }


        var dja = function() {
            return 1;
        };

        var djo = function(){
            return 1;
        };
        var dji = function() {
            return 1;
        };



    var alpha = options.x;
    var beta = options.y;
    var gamma = options.z;
    var lapda = options.w;

    return {
        delete: function() {
                return {
            dja: function() {
                var x = 7;
                x = options.y + x
                return x;
            },


             djo: function () {
                var x = 3;
                x = options.y + x
                return x;
            }
            ,

              dji: function () {
                var x = 3;
                x = options.y + x
                return x;
            }

            }


        },
        save: function() {

            var y = 3;
            console.log(options.y)
            console.log('save ' + dja());
            console.log('deletedja ' + callVar().delete().dja());
        },
        update: function() {
            alert(gamma);
        },
        insert: function() {
            alert(lapda);
        },
        gotIt: function() {
            var x = 2;
            var y = new callVar();
            var z = y.delete();
            var w = z.dja();
            return callVar().delete().dja() + x;
        }

    }


};

function callVarValue() {
    return callVar().gotIt();
}
