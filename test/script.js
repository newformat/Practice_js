
// проверка невыбранных вариатов
function vEmpty(array){

  for(var i=0; i<array.length; i++){
    let radios = document.getElementsByName(array[i]);
    if( radios[0].checked === false && radios[1].checked === false ){
      return 0;
    }
  }
  return 1;
}

// формирование результата теста
function testResult(array){
  var valArray = {true:0, false:0};

  for(var i=0; i<array.length; i++){
    let radios = document.getElementsByName(array[i]);
    if( radios[0].checked === true ){
      valArray.true++;
    } else {
      valArray.false++;
    }
  }

  if(valArray.true > valArray.false){
    alert("У вас хороший настрой! Так держать!");
  } else {
    alert("Хреновый настрой, займитесь его улучшением!");
  }

  delete valArray.true;
  delete valArray.false;

  return 1;
}


// функция по работе с результатом теста
function startCheck(){
  var arrayRadio = ['point_1', 'point_2', 'point_3', 'point_4', 'point_5', 'point_6', 'point_7'];

  if(!vEmpty(arrayRadio)){
    alert('Не все пункты выбраны!');
    return 0;
  } else {
    testResult(arrayRadio);
    if(confirm("Переиграть тест?")){
      location.href = 'index.html';
    }
  }

  return 1;
}
