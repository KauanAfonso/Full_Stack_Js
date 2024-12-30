class Component{
     #component
    constructor(component, area, id) {
        this.id = id;
        this.#component = component;
        this.area = document.getElementById(area);
        this.variavel = this.build();  // Define variavel imediatamente
    }

    build() {
        const el = document.createElement(this.#component);
        el.id = this.id;  // Define o id diretamente
        return el;
    }

    get_value_attribute(){
        return this.#component.value
    }

    get_id(){
        return this.id
    }

    render(){
        this.area.appendChild(this.variavel);
    }
}

class Input extends Component{
    constructor(type, placeholder, id, area){
        super("input",area, id)
        this.type = type
        this.placeholder = placeholder
        this.set_atibutte()
    }

    set_atibutte(){
        this.variavel.type = this.type;
        this.variavel.setAttribute('placeholder', this.placeholder);
    }

}


class Label extends Component{
    constructor(label_for, content, id, area){
        super("Label", area,id)
        this.label_for = label_for
        this.content = content
        this.set_atibutte_label()
        this.set_content()
    }

    set_atibutte_label(){
        this.variavel.setAttribute('for', this.label_for)
      
    }

    set_content(){
        this.variavel.textContent = this.content
      
    }

    
}

// class form extends Component{
//     constructor()
// }


let new_label = new Label("input-01", "Isso é um teste: ", "label01", 'area')
new_label.render()

let input_teste = new Input("text", "Digite algo", "input-01", 'area')
input_teste.render()

