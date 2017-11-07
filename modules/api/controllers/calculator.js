var constants = require("../../../config/constants");
var requestHelper = require("../../../helpers/request");
var responseHelper = require("../../../helpers/response");

var calculator = {
  title: "Hello World",
  statusCode: constants.HTTP.CODES.SUCCESS
}

calculator.add = function (req, res,next){
    postBody = requestHelper.parseBody(req.body);
    if(validationAdd(postBody)){
           var answer = postBody.operand1 + postBody.operand2; 
           res.statusCode = constants.HTTP.CODES.SUCCESS;
            res.send(responseHelper.formatResponse(
                            constants.MESSAGES.CALC.SUCCESS,
                            {"result":answer}
            ))


    }else{

        res.statusCode = constants.HTTP.CODES.BAD_REQUEST;
        res.send(responseHelper.formatResponse(
                            constants.MESSAGES.GENERAL.FIELDS_REQUIRED
        ))
    }


}

function validationAdd(body){
    if(body.operand1!=null && body.operand2!=null){
        return true;
    }
       return false;



}



module.exports = calculator;


