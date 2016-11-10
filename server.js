var creditCardTypeService = require('./app/service/creditCardTypeService');

creditCardTypeService.getAll().
  then((data) => {
    for (var cct of data) {
      console.log(cct['name']);
    }
  }).
  catch(function(error) {
    console.log(error);
  });
