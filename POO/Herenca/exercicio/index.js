class Component{
    #id 
    constructor(component, area){
        this.#id = id
        this.component = component
        this.build()
        this.area = area
    }

    build = ()=>{
        component.id = this.#id
        return  document.createElement(component)
    }

    get_value_attribute(){
        return this.component.value
    }

    get_id(){
        return this.#id
    }

    render(){
        this.area.appendChild(this.component)
    }
}

class input extends Component{
    constructor(type,placeholder, component){
        super(component)
        this.type
        this.placeholder
    }

    build(){
        const input = document.createElement('input')
        input.type = this.type
        input.setAttribute('placeholder' , this.placeholder)
    }

}