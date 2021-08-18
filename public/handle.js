
function getName(name) {
    alert(name);
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tongHocVien: this.props.tongHocVien };

    }
    addStudent() {
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1
        this.setState(this.state)
    }

    render() {
        return (
            <div>
                <h1>Hello: {this.props.giangvien}</h1>
                <div>So hoc vien: {this.state.tongHocVien} </div>
                <p>{this.props.children}</p>
                <button onClick={() => { var srt = this.props.name + ' ' + this.props.giangvien; getName(srt) }}>Thong tin chi tiet</button>
                <button onClick={this.addStudent.bind(this)}>Them hoc vien</button>
                <Thuoctinh name={this.props.name} />
            </div>
        );
    }

};

class Thuoctinh extends React.Component {
    render() {
        return (<h3>Lap trinh  {this.props.name}</h3>);
    }
}

class InputText extends React.Component {
    constructor(props){
        super(props)
        this.state= {num: this.props.num};
    }
    show(){
        var text = this.refs.txt.value;
        var text2 = this.refs.sl.value;
        alert(text2 +text);
    }
    add(){
        this.state.num = parseInt(this.state.num)+1
        this.setState(this.state)
    }
    sub(){
        this.state.num = parseInt(this.state.num)-1
        this.setState(this.state)
    }
    render() {
        return(
        <div>
            <select ref="sl">
                <option value="a">AAA</option>
                <option value="b">BBB</option>
                <option value="c">CCC</option>
            </select>
            <input type="text" ref="txt" />          
            <button onClick={this.show.bind(this)}>Hien thi</button>

            <p>Num:{this.state.num}</p>
            <button onClick={this.add.bind(this)}>+</button>
            <button onClick={this.sub.bind(this)}>-</button>
        </div>
            );
        }
    }
        
class Album extends React.Component{
    constructor(pros){
        super(pros);
        this.state= {hinh: 1};
        
    }
    Prev(){
       
        this.setState({hinh: this.state.hinh ==1?1:this.state.hinh - 1})
    }
    Next(){
        this.setState({hinh: this.state.hinh ==5?5:this.state.hinh + 1})
    }
    render(){
        return(
            <div className="div-album">
                 
                <img src={"react_images/" + this.state.hinh + ".png"} />
                <hr/>
                <button onClick={this.Prev.bind(this)}>Previous</button>
                <button onClick={this.Next.bind(this)}>Next</button>
            </div>
        );
    }
}

class Album2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {hinh:1};
    }
    changeImage(){
        this.setState({hinh:(this.state.hinh % 5 )+1})
    }
    render(){
        return(
            <img src={"react_images/" + this.state.hinh + ".png"} />
        );
    }
    componentDidMount(){
        setInterval(this.changeImage.bind(this), 3000);
    }
}

class Note extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.src}/>

                <p>{this.props.children}</p>
            </div>
        );
    }
}

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {mang:[
            {srcHinh:"react_images/1.png",noiDung:"Nguyen"},
            {srcHinh:"react_images/2.png",noiDung:"Anh"},
            {srcHinh:"react_images/3.png",noiDung:"Duy"}
            ]};
        
    }
    add(){
        this.state.mang.unshift(
            {srcHinh:"react_images/4.png",noiDung:"dep"},
            {srcHinh:"react_images/5.png",noiDung:"trai"}
        );
        this.setState(this.state);
    }
    render(){
        return(
            <div>
                <button onClick={this.add.bind(this)}>Add</button>
                
                {this.state.mang.map(function(note, index){
                    return <Note key={index} src={note.srcHinh}>{note.noiDung}</Note>
                })}
            </div>
        );
    }
}

    ReactDOM.render(
   <div>
        <Welcome name="NodeJs" giangvien="Mr.Duy" tongHocVien="10">Mon hoc Nodejs</Welcome>

        <Welcome name="ReactJs" giangvien="Mrs.MiMi" tongHocVien="20">Mon hoc React</Welcome>

        <InputText num="20"/>

        <Album/>

        <Album2/>
        <hr/>
        <List/>
    </div>

, document.getElementById("root"));
