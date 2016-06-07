module.exports = function(app){
    return{
        create : function(exp){
            var _routes = app.config.routes;

            console.log(_routes);

            for(var i=0; i<_routes.length; i++){

                // on scope pour pouvoir utiliser _route[i] par _r
                (function(_r){
                    exp.get(_r.path, function(req,res){
                        res.sendFile(app.root+ '/views/'+_r.view + '.html');
                    });
                })(_routes[i])
            }
        }
    }
};