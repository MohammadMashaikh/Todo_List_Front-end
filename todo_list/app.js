$(function () {
    const itemInput = $('#item-input');
    const add = $('#add');
    const itemsContainer = $('#items-container');
    let counter = 1;

       itemInput.focus();  

       add.click(function (){
        
        let task = itemInput.val();

        if(task == ""){
            alert("please fill the field")
            return;
        }
         itemsContainer.append(`
           <div data-id="${counter}" class="task w-25 m-auto d-flex justify-content-between align-items-between mb-4 border-bottom p-2}">
                        <input type="checkbox"}>
                        <p class="m-0 d-flex align-items-center">${task}</p>
                        <button class="btn btn-danger" type="button">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
         `);
            $(`div[data-id="${counter}"] input`).change(function (e) {
            $(this).parent().toggleClass('completed');
        });

         $(`div[data-id="${counter}"] button`).click(function () {
                  $(this).parent().hide('slow', function () {
                   $(this).remove();
         });
        });
        counter++;
       });
    
});