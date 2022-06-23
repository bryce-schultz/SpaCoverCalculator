function find(id)
{
    return document.getElementById(id);
}

function save(key, object)
{
    sessionStorage.setItem(key, JSON.stringify(object));
}

function retrieve(key)
{
    return JSON.parse(sessionStorage.getItem(key));
}

let unimplemented_buttons = document.getElementsByClassName('unimplemented');
for (let i = 0; i < unimplemented_buttons.length; i++)
{
    unimplemented_buttons[i].setAttribute('title', 'Unimplemented');
}

$(".checkbox").on("click", function(){
    if ($(this).is(".checked")){
      $(this).removeClass("checked");
      $(this).width();  // required to restart the animations after changing class
      $(this).addClass("unchecked");
    }else{
      $(this).removeClass("unchecked");
      $(this).width();  // required to restart the animations after changing class
      $(this).addClass("checked");    
    }
});