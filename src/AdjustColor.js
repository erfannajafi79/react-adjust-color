import {Component} from 'react'

class AdjustColor extends Component {

    state = {
        red : 0,
        green : 0,
        blue : 0
    };


    render() {
        return (
            <div style={{display : 'flex' , flexDirection : 'column' , alignItems : 'center'}}>
                <h1 style={{width : '350px' , marginBottom : '4px'}}>Red : {this.state.red}</h1>
                <button style={{width : '350px'  , height : '40px' , borderRadius : '10px' , border : 'none' ,
                    color : 'rgb(243 242 242)' , backgroundColor : '#6b6bef' , marginTop : '10px' ,
                    cursor : 'pointer' , fontSize : '18px'}}
                        onClick={(item , index) => {
                            this.setState({red : this.state.red < 255 ? this.state.red + 1 : this.state.red})

                }}>
                    Increase Red

                </button>
                <button style={{width : '350px'  , height : '40px' , borderRadius : '10px' , border : 'none' ,
                    color : 'rgb(243 242 242)' , backgroundColor : '#6b6bef' , marginTop : '10px' ,
                    cursor : 'pointer' , fontSize : '18px'}}
                        onClick={(item , index) => {
                            this.setState({red : this.state.red > 0 ? this.state.red- 1 :  this.state.red })

                        }}>
                    Decrease Red
                </button>


                <h1 style={{width : '350px' , marginBottom : '4px'}}>Green : {this.state.green}</h1>
                <button style={{width : '350px'  , height : '40px' , borderRadius : '10px' , border : 'none' ,
                    color : 'rgb(243 242 242)' , backgroundColor : '#6b6bef' , marginTop : '10px' ,
                    cursor : 'pointer' , fontSize : '18px'}}
                        onClick={(item , index) => {
                            this.setState({green : this.state.green < 255 ? this.state.green + 1 : this.state.green})

                        }}>
                    Increase Green

                </button>
                <button style={{width : '350px'  , height : '40px' , borderRadius : '10px' , border : 'none' ,
                    color : 'rgb(243 242 242)' , backgroundColor : '#6b6bef' , marginTop : '10px' ,
                    cursor : 'pointer' , fontSize : '18px'}}
                        onClick={(item , index) => {
                            this.setState({green : this.state.green > 0 ? this.state.green- 1 :  this.state.green })

                        }}>
                    Decrease Green

                </button>


                <h1 style={{width : '350px' , marginBottom : '4px'}}>Blue : {this.state.blue}</h1>
                <button style={{width : '350px'  , height : '40px' , borderRadius : '10px' , border : 'none' ,
                    color : 'rgb(243 242 242)' , backgroundColor : '#6b6bef' , marginTop : '10px' ,
                    cursor : 'pointer' , fontSize : '18px'}}
                        onClick={(item , index) => {
                            this.setState({blue : this.state.blue < 255 ? this.state.blue+ 1 : this.state.blue })

                        }}>
                    Increase Blue

                </button>
                <button style={{width : '350px'  , height : '40px' , borderRadius : '10px' , border : 'none' ,
                    color : 'rgb(243 242 242)' , backgroundColor : '#6b6bef' , marginTop : '10px' ,
                    cursor : 'pointer' , fontSize : '18px'}}
                        onClick={(item , index) => {
                            this.setState({blue : this.state.blue > 0 ? this.state.blue- 1 :  this.state.blue })

                        }}>
                    Decrease Blue

                </button>


                <div style={{width : '100px' , height : '100px' , borderRadius : '5px' ,
                    backgroundColor : `rgb(${this.state.red},${this.state.green},${this.state.blue}` , marginTop : '50px'}}>
                </div>

            </div>

        )
    }


}



export {AdjustColor}