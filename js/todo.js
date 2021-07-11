const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify 배열이나 object를 문자열로 바꿔줌.
    //toDos가 그냥있으면 목록이 그냥 저장되는데, 저걸 해주면 ["a", "b", "c"]처럼 바뀜
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id));
    //li.id는 string 타입으로 인식. 근데 생성된 id는 number임
    li.remove(); 
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "✖"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now() 
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos); //String
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // array에 새로 추가되는 to-do가 덮어 씌어지는데, 그러지 말고 추가되길 원한다
    // to-do가 빈값인 const로 시작해서 그럼. let으로 바꿔주고시작
    parsedToDos.forEach(paintToDo);  //forEach에서 item은 각각의 성분 밸류를 말하는거임. this같은거다
}

