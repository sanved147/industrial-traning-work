function add_data(){
        var data =document.getElementById("new_data").value;
     
       

        const node = document.createElement("li");
const textnode = document.createTextNode(data);
node.appendChild(textnode);
document.getElementById("unordeded_list").appendChild(node);
}