class UI {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.result = document.getElementById("outputResult");
    }

    changeFirst(newFirstSelect) {
        this.firstSelect = newFirstSelect;

        this.outputFirst.textContent = this.firstSelect;
    }

    changeSecond(newSecondSelect) {
        this.secondSelect = newSecondSelect;

        this.outputSecond.textContent = this.secondSelect;
    }

    changeFromResult(total){
        this.result.value = total;
    }

    alertMessages(type,messages){
        // <div class="alert alert-success" role="alert">
        //                     This is a success alert—check it out!
        //                 </div>

        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.role = alert;
        div.textContent = messages;

        document.getElementById("card-content").appendChild(div);

        setTimeout(function(){
            div.remove();
        },3000)
    }

    //id = row
}