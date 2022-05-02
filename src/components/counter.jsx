import React, { Component } from "react";

//componente para agregar/eliminar elementos
class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="">
           {/* Muestra la cantidad de elementos de cada fila*/}
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="">
            {/* Boton encargado de incrementar la cantidad*/}
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            
            {/* Boton encargado de decrementar la cantidad*/}
            <button
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>

            {/* Boton encargado de eliminar la fila*/}
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  //Sumar los valores de la lista
  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  //Mostrar la cantidad de elementos
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  };
}

export default Counter;
