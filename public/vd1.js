
var list;
class Note extends React.Component{
    constructor(props){
        super(props);
        this.state={onEdit:false}
    }
    delete(){
        $.post("/delete",{idXoa:this.props.id},function(data){
            list.setState({mang:data});
        })
    }
    edit(){
        this.setState({onEdit:true})
    }
    cancel(){
        this.setState({onEdit:false})
    }
    save(){
        $.post("/save",{idSave:this.props.id,Noidung:this.refs.txt.value},function(data){
            list.setState({mang:data});
            
        })
        this.setState({onEdit:false})
    }
    render(){
        if (this.state.onEdit) {
            return(
                <div className="div-note">                
                    <p>{this.props.children}</p>
                    <input defaultValue={this.props.children} ref="txt"/>
                    <button onClick={this.save.bind(this)}>Luu</button>
                    <button onClick={this.cancel.bind(this)}>Huy</button>
                </div>
            );
        } else {
            return(
                <div className="div-note">                
                    <p>{this.props.children}</p>
                    <button onClick={this.delete.bind(this)}>Xoa</button>
                    <button onClick={this.edit.bind(this)}>Sua</button>
                </div>
            );
        }
        
    }
}
function addDiv(){
   ReactDOM.render(<Inputdiv/>, document.getElementById("div-add"));
}
class List extends React.Component{
    constructor(props){
        super(props);
        list=this;
        this.state={mang:[]}
    }
   render(){
       return(
           <div>
            <div id="div-add"></div>
            <button onClick={addDiv}>Them</button>
           {
            this.state.mang.map(function(note,index){
                return <Note key={index} id={index}>{note}</Note>
            })
           }

           </div>
       );
   }
   componentDidMount(){
       var that = this
        $.post("/getNotes",function(data){
            that.setState({mang:data})
        })
   }
}
class  Inputdiv extends React.Component {
    add(){
        $.post("/add",{note:this.refs.txt.value},function(data){
            list.setState({mang:data})
        })
    
        ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
    }
    render(){
        return(
            <div>
                <input type="text" ref="txt" placeholder="Enter anything"/>
                <button onClick={this.add.bind(this)}>Gui</button>
            </div>
        );
    }
    
}
ReactDOM.render(
    <div>
         <List/> 
     </div>
 
 , document.getElementById("root"));
 