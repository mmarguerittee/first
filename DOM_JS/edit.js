function find_edit(){
    const name_node  = document.getElementById('name')
    name_node.innerHTML=" Margarita";

    const surname_node  = document.getElementById('second_name')
    surname_node.innerHTML=" Yanenko";

}

const node_for_click = document.getElementById("change")
node_for_click.addEventListener("click",find_edit)
