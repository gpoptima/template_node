

module.exports = class H {

  static sendData(error,message,result,code)
  {
        return {error:error,message:message,result:result,code:code}
  } 

  static restfull(app,path,auth,controller) {

    if ("/" !== path[path.length - 1]) path += "/";
    if ("/" !== path[0]) path = "/" + path;

    app.route(`${path}`).get(auth, controller.index);
    app.route(`${path}:id`).get(auth, controller.get);
    app.route(`${path}`).post(auth, controller.create);
    app.route(`${path}:id`).patch(auth, controller.update);
    app.route(`${path}:id`).delete(auth, controller.delete);

   }

}





